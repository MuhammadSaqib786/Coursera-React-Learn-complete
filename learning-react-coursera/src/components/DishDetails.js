
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function RenderDish({dish})
{
  return (
    <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText >{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
  );
}

function RenderComments({dish})
{
  return (
    <div className="col-12 col-md-5 m-1">
            <h2> Comments </h2>
            
                {dish.comments.map( (mydish) => {
                    return(
                      <div key={ mydish.id } className="container">
                        <p  className="dishDetail">
                        {mydish.comment} <br></br>
                        -- {mydish.author} , { new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(mydish.date)))  }
                        </p>
                        </div>
                    );
                    
                
                })}
           
            </div>

  );
}
const Dish= (props) => {
  if (props.dish == null) {
    return <div></div>;
  } else {
    return (
      <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments dish={props.dish} />
        </div>
      );

}
}
    
        
        

export default Dish;
