import React, { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import Dish from "./DishDetails";


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sleectedDish: null
        }
        console.log("Menu Component Constructor invoked");
      }

      componentDidMount() {
        console.log("Menu ComponentDidMount is invoked");

      }


      onDishSelect(dish) {
        this.setState({ sleectedDish: dish })
      }

      
    render() {
        
        const menu= this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                        </CardImgOverlay>

                    </Card>
                </div>

            );
        });
        console.log("Menu Component render is invoked");
        return (
            <div className="container">
                <div className="row">
    
                        {menu}   
                </div>
                <div className="row">
                    <Dish dish={this.state.sleectedDish}/>

                </div>
            </div>

        );
    }

}

export default Menu;