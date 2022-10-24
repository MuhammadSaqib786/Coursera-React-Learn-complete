import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div >
      
      <Navbar dark color='primary'>
        <div className='container'>
        <NavbarBrand  href='#' >
            Muhammad Saqib
          </NavbarBrand>

        </div>
          
        
      </Navbar>
      <div className='container'>
      <Menu />
      </div>
    </div>
  );
}

export default App;
