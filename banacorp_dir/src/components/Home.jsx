import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useNavigate
  } from "react-router-dom";
import Profile from "./Profile";
import Navbar from "./Navbar";
import PredictSalary from "./PredictSalary";

const Home = (props) => {
    const [employeesData, setEmployeesData] = useState([]);
    const [shownEmployees, setShownEmployees] = useState([])
    const [myData, setMyData] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const user = props.user;

    async function fetchData(){
        try {
            const res = await fetch(`http://localhost:3000/employees`)
            const data = await res.json();
            setEmployeesData(data);
            setShownEmployees(data);
        } catch (error) {
            console.error("Error retrieving data from server:", error)
        }
    };
    const verifyAuth = (employee) => {
            if(user.employeeInfo.isHR || employee.employeeInfo.managerID == user.employeeInfo.id || employee.employeeInfo.id == user.employeeInfo.id){
                return true;
            } else {
                return false;
            }
        };
    const handleChange = (event) => {
            setSearchTerm(event.target.value);
            console.log("Searching:", searchTerm);
            if(searchTerm == undefined){
                setShownEmployees(employeesData);
            }else{
                const re = new RegExp(searchTerm +'.+$', 'i');
    
                const output = employeesData.filter((e, i, a) => {
                    return e.employeeInfo.name.search(re) != -1;
                });
                setShownEmployees(output);
            }
        };

    useEffect(() => {
        fetchData();
    }, []);

    
    return(
        <>
        {/* <div><PredictSalary /></div> */}
        
            <form class="input-group input-group-lg"  style={{marginTop:"6vh", width:"60%", marginLeft:"auto",  marginRight:"auto"}}>
                <input type="text" class="form-control" placeholder="Search" aria-label="Large" aria-describedby="inputGroup-sizing-sm" value={searchTerm}
                onChange={handleChange}/>
            </form>

            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"1.3rem", justifyContent:"center", marginTop:'2vh'}}>
                {
                    shownEmployees.map(employee => {

                        return(
                            <div class="card" style={{width: "13rem", height:"auto", padding:"0px"}}>
                                <div class="card-body" style={{paddingBottom:"0px", boxShadow:"3px 5px 7px lightblue"}}>
                                    <h5 class="card-title" style={{marginBottom:"40px"}}>{employee.employeeInfo.name}</h5>
                                    <div style={{}}>
                                        <h6 class="card-subtitle mb-3 text-muted">{employee.employeeInfo.jobRole}</h6>
                                        <h6 class="card-subtitle mb-3 text-muted">{employee.employeeInfo.location}</h6>
                                        {
                                            verifyAuth(employee) ?
                                            <h6 class="card-subtitle mb-3 text-muted">${employee.employeeInfo.salary}</h6>
                                            :
                                            <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};


// The two things to do:
    // 1. Create the search component so that it filters which employees are being shown
    // 2. only show a dozen employees, maybe add pagination?
export default Home;
