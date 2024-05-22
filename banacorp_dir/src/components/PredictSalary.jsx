import { useState } from "react";

const PredictSalary = () => {
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Job Title
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Software Engineer</a>
                    <a class="dropdown-item" href="#">Data Scientist</a>
                    <a class="dropdown-item" href="#">Product Manager</a>
                    <a class="dropdown-item" href="#">Designer</a>
                    <a class="dropdown-item" href="#">QA Engineer</a>
                    <a class="dropdown-item" href="#">DevOps Engineer</a>
                    <a class="dropdown-item" href="#">System Administrator</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Work Location
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item">New York</a>
                    <a class="dropdown-item">San Francisco</a>
                    <a class="dropdown-item">Los Angeles</a>
                    <a class="dropdown-item">Chicago</a>
                    <a class="dropdown-item">Houston</a>
                    <a class="dropdown-item">Phoenix</a>
                    <a class="dropdown-item">Philadelphia</a>
                    <a class="dropdown-item">San Antonio</a>
                    <a class="dropdown-item">San Diego</a>
                    <a class="dropdown-item">Dallas</a>
                </div>
            </div>
        </>
    )
}

export default PredictSalary