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


    // These are quick utility functions to fetch employee data, verify current user is allowed to view salaries, and handle the search function
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
        const term = event.target.value;
            if(term == undefined){
                setShownEmployees(() => employeesData);
            }else{
                const re = new RegExp(term +'.+$', 'i');
    
                const output = employeesData.filter((e, i, a) => {
                    return e.employeeInfo.name.search(re) != -1;
                });
                setShownEmployees(() => output);
            }
            setSearchTerm(() => term);
        };

    useEffect(() => {
        fetchData();
    }, []);

    
    return(
        <>
        {/* <div style={{marginTop:"5vh"}}><PredictSalary /></div> */}
            <form className="input-group input-group-lg"  style={{marginTop:"6vh", width:"60%", marginLeft:"auto",  marginRight:"auto"}}>
                <input type="text" className="form-control" placeholder="Search" aria-label="Large" aria-describedby="inputGroup-sizing-sm" value={searchTerm}
                onChange={handleChange}/>
            </form>

            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"1.3rem", justifyContent:"center", marginTop:'2vh'}}>
                {
                    shownEmployees.map(employee => {

                        return(
                            <div className="card" key={employee.employeeInfo.id} style={{width: "13rem", height:"auto", padding:"0px"}}>
                                <div className="card-body" style={{paddingBottom:"0px", boxShadow:"3px 5px 7px lightblue"}}>
                                    <h5 className="card-title" style={{marginBottom:"40px"}}>{employee.employeeInfo.name}</h5>
                                    <div style={{}}>
                                        <h6 className="card-subtitle mb-3 text-muted">{employee.employeeInfo.jobRole}</h6>
                                        <h6 className="card-subtitle mb-3 text-muted">{employee.employeeInfo.location}</h6>
                                        <h6 className="card-subtitle mb-3 text-muted">{employee.employeeInfo.phoneNumber}</h6>
                                        {
                                            verifyAuth(employee) ?
                                            <h6 className="card-subtitle mb-3 text-muted">${employee.employeeInfo.salary}</h6>
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
