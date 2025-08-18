import "./headernav.css";

function Headernav({ setPage }) {
  return (
    <div className="headernav">
      <img className="logo1" src="logo.png" alt="movieduc" />
      <nav>
        <button onClick={() => setPage("Home")}>Home</button>
        <button onClick={() => setPage("About")}>About</button>
        <button onClick={() => setPage("Contact")}>Contact</button>
        <button onClick={() => setPage("Offer")}>Discount</button>
      </nav>
    </div>
  )
}

export default Headernav;