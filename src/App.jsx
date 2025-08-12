import { ToastContainer } from 'react-toastify';
import Allroutes from './Allroutes';
import './App.css'
import Footer from './components/Footer';
import  Navbar  from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
         <Allroutes />
         <ToastContainer />
      <Footer />
    </>
  )
}


export default App;
