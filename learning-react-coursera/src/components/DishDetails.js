import { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";


class Dish extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    if (this.props.dish == null) {
      return <div></div>;
    } else {
      return (
        
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText >{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h2> Comments </h2>
            
                {this.props.dish.comments.map( (mydish) => {
                    return(
                      <div className="container">
                        <p key={mydish.id} className="dishDetail">
                        {mydish.comment} <br></br>
                        -- {mydish.author} , { new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(mydish.date)))  }
                        </p>
                        </div>
                    );
                    
                
                })}
           
            </div>
        </div>
      );
    }
  }
}

export default Dish;
