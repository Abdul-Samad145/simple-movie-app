
import "./footer.css";

function Footer(){

    const dat= new Date().getFullYear();
    return(
        <div className="footer">
            <p className="footer-text">&copy;{dat}. All right Reserved. </p>
        </div>
    )
}

export default Footer;
