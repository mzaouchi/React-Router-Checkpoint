import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { colors } from "@material-ui/core";
function Child({film}){
    let { slug } = useParams();
    let c = film.find(el => el.id == slug);
    
    return(
        <div>
          <br/>
          <Container>
          <h1 style={{marginLeft : '5%', color : 'gray'}}>{c.title}</h1>
          <br/>
          <Row>
            <Col>
            <img src={c.posterURL} alt='' style={{width : '60%', marginLeft : '20%'}}/>
            </Col>
            <Col>
              <h3 style={{color : 'darkgray'}}>Description</h3>
              <h4>{c.description}</h4>
              <br/>
              <iframe width="560" height="315" src={c.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <br/>
              <h3 style={{color : 'darkgray'}}>Rating</h3>
              <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating name="read-only" value={c.rating} readOnly />
              </Box>
            </Col>
          </Row>
         
          
          </Container>
                  
        </div>)
}

export default Child