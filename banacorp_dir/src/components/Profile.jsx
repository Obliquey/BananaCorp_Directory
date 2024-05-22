import { Link } from "react-router-dom";

const Profile = (props) => {
    const user = props.user.employeeInfo;
    console.log("Our user:", user);
    return(
        <>
            <div style={{display:"flex", flexDirection:"column", gap:"2vh", border:"1px solid black", borderRadius:"10px"}}>
                <h2>{user.name}</h2>
                <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"10px", }}>
                    <div style={{padding:"5px"}}>
                        <p><small style={{fontWeight:"bold", fontSize:"1.1em"}}>Title:</small> {user.jobRole}</p>
                        <p><small style={{fontWeight:"bold", fontSize:"1.1em"}}>Employee ID:</small> {user.id}</p>
                    </div>

                    <div style={{padding:"5px"}}>
                        <p><small style={{fontWeight:"bold", fontSize:"1.1em"}}>Location:</small> {user.location}</p>
                        <p><small style={{fontWeight:"bold", fontSize:"1.1em"}}>Phone #</small>: {user.phoneNumber}</p>
                        {/* Need to make a function that verifies user can actaully see this salary */}
                        <p><small style={{fontWeight:"bold", fontSize:"1.1em"}}>Salary:</small> ${user.salary}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;