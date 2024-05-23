import { Link } from "react-router-dom";
const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" >BananaCorp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/directory" style={{marginRight:"2vw",textDecoration:'none', color:"black"}}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" style={{marginRight:"2vw",textDecoration:'none', color:"black"}}>Profile</Link>
                        </li>
                        <li>
                            <Link style={{marginRight:"2vw",textDecoration:'none',color:"black"}}>Salary Calculator</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;