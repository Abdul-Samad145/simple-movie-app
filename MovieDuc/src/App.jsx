import './styles.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import MoviesGrid from './Component/MovieGrid'
import { useState } from 'react'
import Headernav from './Component/Headernav'
import About from './Component/About'
import Contact from './Component/Contact'
import Offer from './Component/Offer'

function App() {


  const [page, setPage] = useState("Home");

  return (
    <>


      <Headernav setPage={setPage} />



      <div className="app">
        <div className="container">
          {page === "Home" && (
            <>
              <Header />
              <MoviesGrid />
            </>
          )}


          {page === "About" && <About />}
          {page === "Contact" && <Contact />}
          {page === "Offer" && <Offer />}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
