import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Contact from './Components/Contact';
import { BrowserRouter as Switch, Route } from 'react-router-dom';



function App() {
  return (
    <>

  
     <Navbar />
  
      
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          
          <Route exact path="/Product" component={Product} />
          
          <Route exact path="/Contact" component={Contact} />

        </Switch>
      

    </>


  );
}



export default App;
