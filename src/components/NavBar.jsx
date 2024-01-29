import {Link} from "react-router-dom";
import { useRef } from "react";
import '../App.css';

function NavBar() {

    const ref = useRef();

    return (
        <nav className="navbar navbar-expand-lg fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/#" className="nav-link" onClick={() => ref.current.scrollTo(1)}>sobreMi</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#" className="nav-link">desarrolloWeb</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#" className="nav-link">audiovisual</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#" className="nav-link">contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;