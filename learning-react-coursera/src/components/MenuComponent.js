import React, { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sleectedDish: null
        }
      }

      onDishSelect(dish) {
        this.setState({ sleectedDish: dish })
      }

      renderDish(dish) {
        if (dish != null)
        {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>
                            {dish.anme}
                        </CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div>
                    
                </div>
            );
        }
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
        return (
            <div className="container">
                <div className="row">
    
                        {menu}   
                </div>
                <div className="row">
                    {this.renderDish(this.state.sleectedDish)}

                </div>
            </div>

        );
    }

}

export default Menu;