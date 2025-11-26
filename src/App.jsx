import About from "./Components/About/About"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Banner from "./Components/banner/Banner"
import RecentWork from "./Components/RecentWork/RecentWork"
import Contact from "./Components/Contact/Contact"
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>
     {/* Navbar componet call in here*/}
    <Navbar />
    <Toaster position="top-right" reverseOrder={false} />
    <Banner/>
    <About/>
    <RecentWork/>
    <Contact/>

    {/* footer componet call in here*/}
    <Footer/>
    </>
  )
}

export default App
