import { Link } from "react-router-dom";

const Profile = () => {

    return(
        <>
            <h3>Hello there</h3>
            <Link className="nav-link" to="/directory">
                    Directory
            </Link>
        </>
    )
}

export default Profile;