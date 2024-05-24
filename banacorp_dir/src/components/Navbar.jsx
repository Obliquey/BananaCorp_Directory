import { Link, useNavigate } from "react-router-dom";
const Navbar = (props) => {
    const setUser = props.setUser;
    const navigate = useNavigate();

    const logout = () => {
        setUser('');  
        navigate("/")
    };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
            <div className="container-fluid">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bananas.svg/560px-Bananas.svg.png" alt="banana logo" style={{width:"40px", height:"auto"}}/>
                <a className="navbar-brand" >BananaCorp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/directory"  style={{marginRight:"2vw",textDecoration:'none', color:"black"}}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile"  style={{marginRight:"2vw",textDecoration:'none', color:"black"}}>Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/calculator"  style={{marginRight:"2vw",textDecoration:'none',color:"black"}}>Salary Calculator</Link>
                        </li>
                    </ul>
                    
                </div>
                <Link className="nav-item" id="logout" style={{textDecoration:"none", color:"black"}} onClick={logout}>Logout</Link>
            </div>
        </nav>
    )
}

export default Navbar;