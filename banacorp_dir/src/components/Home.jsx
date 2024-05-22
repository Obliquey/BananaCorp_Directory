import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useNavigate
  } from "react-router-dom";
import Profile from "./Profile";

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
        {/* navbar */}
        {/* search */}
            {
                employeesData.map(employee => employee.employeeInfo.name)
            }
        </>
    )
};

export default Home;
