
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { Component } from 'react';
import { DISHES } from './shared/dishes';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render()
  {
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
        <Menu dishes={this.state.dishes}  />
        </div>
      </div>
    );
  }
  
}

export default App;
