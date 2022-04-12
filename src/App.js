import {BrowserRouter} from "react-router-dom"
import './App.css';
import NavBarWrapper from "./COMPONENTS/NavBar";
import ROUTER_WRAPPER from "./COMPONENTS/ROUTER";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarWrapper></NavBarWrapper>
      <ROUTER_WRAPPER></ROUTER_WRAPPER>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
