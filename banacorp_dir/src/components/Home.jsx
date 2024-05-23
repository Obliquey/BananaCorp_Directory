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
    const [myData, setMyData] = useState({});
    const user = props.user;

    async function fetchData(){
        try {
            const res = await fetch(`http://localhost:3000/employees`)
            const data = await res.json();
            setEmployeesData(data);
        } catch (error) {
            console.error("Error retrieving data from server:", error)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const verifyAuth = (employee) => {
        if(user.employeeInfo.isHR || employee.employeeInfo.managerID == user.employeeInfo.id || employee.employeeInfo.id == user.employeeInfo.id){
            return true;
        } else {
            return false;
        }
    };

    return(
        <>
        {/* <div><PredictSalary /></div> */}
        

        {/* <Search setData={setData}/> */}
            <div class="input-group input-group-lg" style={{marginTop:"6vh"}}>
                {/* <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
                </div> */}
                <input type="text" class="form-control" placeholder="Search" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"1.3rem", justifyContent:"center", marginTop:'2vh'}}>
                {
                    employeesData.map(employee => {

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

export default Home;
