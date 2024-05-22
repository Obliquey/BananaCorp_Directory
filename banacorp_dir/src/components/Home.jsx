import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
    const [employeesData, setEmployeesData] = useState([]);
    const [myData, setMyData] = useState({});

    useEffect(() => {
        fetchData();
    }, [])
    return(
        <>
            <h1>This will be the main directory page</h1>
        </>
    )
};

export default Home;

async function fetchData(){
    try {
        const res = await fetch(`http://localhost:3000/employee_data/${userID}`)
        const data = await res.json();
        set
    } catch (error) {
        console.error("Error retrieving data from server:", error)
    }
}