
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { Component } from 'react';
import { DISHES } from '../shared/dishes';
import Dish from "./DishDetails";


class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId })
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
        <Menu dishes={this.state.dishes}  
        onClick={ (dishId) => this.onDishSelect(dishId)} />
        <Dish 
        dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />
        </div>
      </div>
    );
  }
  
}

export default Main;
