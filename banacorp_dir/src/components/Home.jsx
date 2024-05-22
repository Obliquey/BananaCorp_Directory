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

const Home = () => {
    const [employeesData, setEmployeesData] = useState([]);
    const [myData, setMyData] = useState({});

    async function fetchData(){
        try {
            const res = await fetch(`http://localhost:3000/employees`)
            const data = await res.json();
            setEmployeesData(data);
        } catch (error) {
            console.error("Error retrieving data from server:", error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <>
        <Navbar />
        {/* <div><PredictSalary /></div> */}
        

        {/* <Search setData={setData}/> */}
            <div>
                <input type="text" />
            </div>
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"1.3rem", justifyContent:"center"}}>
                {
                    employeesData.map(employee => {

                        return(
                            <div class="card" style={{width: "13rem", height:"auto"}}>
                                <div class="card-body">
                                    <h5 class="card-title">{employee.employeeInfo.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{employee.employeeInfo.jobRole}</h6>
                                    <h6 class="card-subtitle mb-2 text-muted">{employee.employeeInfo.location}</h6>
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
