import Login from "./Login";
import RegisterForm from "./Register";

const Welcome = (props) => {

    return(
        <>
            <h1>BananaCorp Employee Directory</h1>
            <div>
                <Login login={props.login} />
                <p>Or</p>
                <RegisterForm />
            </div>
        </>
    );
};

export default Welcome;