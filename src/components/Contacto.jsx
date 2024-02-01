import '../App.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { useNavigate } from 'react-router-dom';

function Contacto() {
    let navigate = useNavigate();
    return (
        <div className='icons-container'>
            <OverlayTrigger className="icon" placement= "bottom" overlay= { <h2 className='tooltip'>jean-paul-yatim</h2> }>
                <img className="icon-contact" onClick={()=>{window.open('https://www.linkedin.com/in/jean-paul-yatim/', "_blank");}} src="https://img.icons8.com/3d-fluency/400/linkedin.png" alt="linkedin"/>
            </OverlayTrigger>
            <OverlayTrigger className="icon" placement= "bottom" overlay= { <h2 className='tooltip'>paulyatim</h2> }>
                <img className="icon-contact" onClick={()=>{window.open('https://github.com/paulyatim', "_blank");}} src="https://img.icons8.com/3d-fluency/400/github.png" alt="github"/>
            </OverlayTrigger>
            <OverlayTrigger className="icon" placement= "bottom" overlay= { <h2 className='tooltip'>jeanpaulyatimg@gmail.com</h2> }>
                <img className="icon-contact" onClick={()=>{window.open('mailto:jeanpaulyatimg@gmail.com', "_blank");}} src="https://img.icons8.com/3d-fluency/400/mail.png" alt="mail"/>
            </OverlayTrigger>
            <OverlayTrigger className="icon" placement= "bottom" overlay= { <h2 className='tooltip'>@paul.folio</h2> }>
                <img className="icon-contact" onClick={()=>{window.open('https://www.instagram.com/paul.folio/', "_blank");}} src="https://img.icons8.com/3d-fluency/400/instagram-new.png" alt="instagram"/>
            </OverlayTrigger>

        </div>
    );
}

export default Contacto;