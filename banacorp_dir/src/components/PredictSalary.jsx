import { useState } from "react";

const PredictSalary = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [estimatedSalary, setEstimatedSalary] = useState('');

    // function to ask model to predict salary
    const fetchSalary = async () => {
        console.log("Are we in fetch Salary?")
        const url = "http://localhost:5000/api/predict" //this will be the URL for the prediction model endpoint
        try {
            const employee = {
                // 'employeeInfo.jobRole': `${jobTitle}`,
                // 'employeeInfo.location': `${location}`
                employeeInfo:{jobRole: jobTitle, location:location}
            }
            const response = await fetch(`${url}`, {
                method: "POST",
                headers:{'Content-Type': "application/json"},
                body: JSON.stringify(employee),
            });
            const data = await response.json();
            console.log("Our data:", Math.round(data[0]));
            setEstimatedSalary(Math.round(data[0]));
        } catch (error) {
            
        }
    };
    return (
        <div style={{display:"flex", flexDirection:"column",justifyContent:"center",gap:"12vh", position:"fixed", top:"10vh", left:"50%", transform: "translate(-50%, 0)"}}>
            <h2>Please input your job title and work location</h2>
            {
               estimatedSalary ?  <h4>${estimatedSalary}</h4> : <></>
            }
            <div style={{display:"flex", flexDirection:"row", gap:"4vw", marginLeft:"auto", marginRight:"auto"}}>
                <div className="dropdown">
                    <select className="btn btn-outline-primary dropdown-toggle" value={jobTitle} onChange={e=> setJobTitle(e.target.value)}>
                        <option className="dropdown-item" value="">Select One...</option>
                        <option className="dropdown-item" value="Software Engineer">Software Engineer</option>
                        <option className="dropdown-item" value="Data Scientist">Data Scientist</option>
                        <option className="dropdown-item" value="Product Manager">Product Manager</option>
                        <option className="dropdown-item" value="Designer">Designer</option>
                        <option className="dropdown-item" value="QA Engineer">QA Engineer</option>
                        <option className="dropdown-item" value="DevOps Engineer">DevOps Engineer</option>
                        <option className="dropdown-item" value="System Administrator">System Administrator</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select className="btn btn-outline-primary dropdown-toggle" value={location} onChange={e=> setLocation(e.target.value)}>
                        <option className="dropdown-item" value="">Select One...</option>
                        <option className="dropdown-item" value="New York">New York</option>
                        <option className="dropdown-item" value="San Francisco">San Francisco</option>
                        <option className="dropdown-item" value="Los Angeles">Los Angeles</option>
                        <option className="dropdown-item" value="Chicago">Chicago</option>
                        <option className="dropdown-item" value="Houston">Houston</option>
                        <option className="dropdown-item" value="Phoenix">Phoenix</option>
                        <option className="dropdown-item" value="Philadelphia">Philadelphia</option>
                        <option className="dropdown-item" value="San Antonio">San Antonio</option>
                        <option className="dropdown-item" value="San Diego">San Diego</option>
                        <option className="dropdown-item" value="Dallas">Dallas</option>
                    </select>
                </div>
            </div>
            <div className="btn btn-primary" style={{width:"40%", marginLeft:"auto", marginRight:"auto"}} onClick={fetchSalary}>Submit</div>
        </div>
    );
};

export default PredictSalary;