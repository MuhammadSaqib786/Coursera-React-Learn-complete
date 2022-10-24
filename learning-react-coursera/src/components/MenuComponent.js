import React, { Component } from "react";
import { Media } from "reactstrap";


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
      }

    render() {
        
        const menu= this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 mt-5'>
                    <div className="d-flex">
            <div className="flex-shrink-0">
              <Media object src={dish.image} alt={dish.name} >

              </Media>
            </div>
            <div className="flex-grow-1 ms-3">
              <h2 className="mt-0">
                {dish.name}
                </h2>
              <p>
                {dish.description}
                </p>
            </div>
                </div>
                </div>

            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                    
                </div>
            </div>

        );
    }

}

export default Menu;