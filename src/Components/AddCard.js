import { Button,Modal,Form, Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Link } from '@material-ui/core';


function AddCard({film,setFilm}){
   
    const [titlef,setTitlef] = useState('');
    const [descf,setDescf] = useState('');
    const [photof,setPhotof] = useState('');
    const [trailerf,setTrailerf] = useState('');
    const [ratingf,setRatingf] = useState(0);

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);}
    const handleShow = () => setShow(true);

    const handleAdd =()=>{
        setFilm(
             [...film,{title : titlef,description : descf,posterURL : photof,trailer : trailerf,rating : ratingf, id :film.length+1 }]
        );
        setShow(false);

    }

    return(
        <div>

            <Container>
                
                      
                        <Button variant="success" onClick={handleShow} style={{marginLeft:"-46%"}}>
                            Add movie
                        </Button>
                  
                
               
            </Container>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                     <Modal.Title>Add movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Form>
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setTitlef(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setDescf(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo</Form.Label>
                            <Form.Control type="text" placeholder="Enter the path" onChange={(e)=>setPhotof(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Trailer</Form.Label>
                            <Form.Control type="text" placeholder="Enter the path" onChange={(e)=>setTrailerf(e.target.value)} />
                        </Form.Group>
                       
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Rating</Form.Label>
                            <Box  mb={3} borderColor="transparent">
                                    <Rating                                   
                                    onChange={(event, newValue) => {
                                    setRatingf(newValue);
                                    }}
                                    />
                             </Box>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>handleAdd()}>
                         Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
       
    )
}

export default AddCard;