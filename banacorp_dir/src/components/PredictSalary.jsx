import { useState } from "react";

const PredictSalary = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [estimatedSalary, setEstimatedSalary] = useState('');

    // function to ask model to predict salary
    // const fetchSalary = async () => {
    //     const url = //this will be the URL for the prediction model endpoint
    //     try {
    //         const response = await fetch(`${url}`).then(red => {
    //             console.log("What did we get?", res);
    //         })
    //     } catch (error) {
            
    //     }
    // };

    return (
        <div style={{display:"flex", flexDirection:"column",justifyContent:"center",gap:"12vh", position:"fixed", top:"10vh", left:"50%", transform: "translate(-50%, 0)"}}>
            <h2>Please input your job title and work location</h2>
            {
                <h4>{estimatedSalary}</h4>
            }
            <div style={{display:"flex", flexDirection:"row", gap:"4vw", marginLeft:"auto", marginRight:"auto"}}>
                <div className="dropdown">
                    <select className="btn dropdown-toggle" style={{backgroundColor:"lightblue"}} value={jobTitle} onChange={e=> setJobTitle(e.target.value)}>
                        <option class="dropdown-item" value="">Select One...</option>
                        <option class="dropdown-item" value="Software Engineer">Software Engineer</option>
                        <option class="dropdown-item" value="Data Scientist">Data Scientist</option>
                        <option class="dropdown-item" value="Product Manager">Product Manager</option>
                        <option class="dropdown-item" value="Designer">Designer</option>
                        <option class="dropdown-item" value="QA Engineer">QA Engineer</option>
                        <option class="dropdown-item" value="DevOps Engineer">DevOps Engineer</option>
                        <option class="dropdown-item" value="System Administrator">System Administrator</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select className="btn dropdown-toggle" style={{backgroundColor:"lightblue"}} value={location} onChange={e=> setLocation(e.target.value)}>
                        <option class="dropdown-item" value="">Select One...</option>
                        <option class="dropdown-item" value="New York">New York</option>
                        <option class="dropdown-item" value="San Francisco">San Francisco</option>
                        <option class="dropdown-item" value="Los Angeles">Los Angeles</option>
                        <option class="dropdown-item" value="Chicago">Chicago</option>
                        <option class="dropdown-item" value="Houston">Houston</option>
                        <option class="dropdown-item" value="Phoenix">Phoenix</option>
                        <option class="dropdown-item" value="Philadelphia">Philadelphia</option>
                        <option class="dropdown-item" value="San Antonio">San Antonio</option>
                        <option class="dropdown-item" value="San Diego">San Diego</option>
                        <option class="dropdown-item" value="Dallas">Dallas</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default PredictSalary;