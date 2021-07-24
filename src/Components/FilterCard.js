import { Col, Container, Form,Row,Button } from "react-bootstrap";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


function FilterCard({setTextT,setRateR, textT,rateR}){

    
    return(

        <div>
            <Container>
                <Form>
                <Row >
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter the Title" onChange={(e)=>setTextT(e.target.value)} />
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Rating</Form.Label>
                            <Box mb={3} borderColor="transparent">
                                <Rating
                                
                                onChange={(event, newValue) => {
                                setRateR(newValue);
                                     }}/>
                              </Box>
                        </Form.Group>
                    </Col>

                    <Col>
                    <Button variant="secondary" style={{marginTop: "25px", marginRight : "800px" }} onClick={()=>{setTextT('');setRateR(0);}}>Clear</Button>
                    </Col>
                    
                    
                </Row>
                </Form>
            </Container>
    
        </div>
    )
}

export default FilterCard;