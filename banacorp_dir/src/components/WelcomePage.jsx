import Login from "./Login";
import RegisterForm from "./Register";

const Welcome = (props) => {

    return(
        <div style={{display:"flex", flexDirection:"column",justifyContent:"center",gap:"12vh", position:"fixed", top:"10vh", left:"50%", transform: "translate(-50%, 0)"}}>
            <h1>BananaCorp Employee Directory</h1>
            <div style={{display:'flex', flexDirection:"row", gap:"4vw", justifyContent:"center"}}>
                <Login setUser={props.setUser}/>
                <p style={{alignSelf:"center"}}>Or</p>
                <RegisterForm />
            </div>
        </div>
    );
};

export default Welcome;