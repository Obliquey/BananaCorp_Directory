import Login from "./Login";
import RegisterForm from "./Register";

const Welcome = (props) => {

    return(
        <>
            <h1>BananaCorp Employee Directory</h1>
            <div style={{display:'flex', flexDirection:"row", gap:"20px", justifyContent:"center"}}>
                <Login setUser={props.setUser}/>
                <p>Or</p>
                <RegisterForm />
            </div>
        </>
    );
};

export default Welcome;