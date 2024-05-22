import Login from "./Login";

const Welcome = (props) => {

    return(
        <>
            <h1>BananaCorp Employee Directory</h1>
            <Login login={props.login} />
        </>
    );
};

export default Welcome;