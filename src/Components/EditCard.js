import { Button,Modal,Form, Container } from 'react-bootstrap';
import { useState } from "react";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function EditCard({el,film,setFilm,i}){

    const [titlef,setTitlef] = useState(el.title);
    const [descf,setDescf] = useState(el.description);
    const [photof,setPhotof] = useState(el.posterURL);
    const [trailerf,setTrailerf] = useState(el.trailer);
    const [ratingf,setRatingf] = useState(el.rating);

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);}
    const handleShow = () => setShow(true);

    const handleEdit =(a)=>{
        setFilm(
            
            film.map((el,i)=>a===i ? {...el,title : titlef,description : descf,posterURL : photof,trailer : trailerf,rating : ratingf}: el)
        );
        setShow(false);

    }
    return(
        <div>
            <Button variant="primary" onClick={handleShow}>
                    Edit Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                     <Modal.Title>Edit Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Form>
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={titlef} placeholder="Enter title"  onChange={(e)=>setTitlef(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={descf} placeholder="Enter description" onChange={(e)=>setDescf(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo</Form.Label>
                            <Form.Control type="text" value={photof} placeholder="Enter the path" onChange={(e)=>setPhotof(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Trailer</Form.Label>
                            <Form.Control type="text" value={trailerf} placeholder="Enter the path" onChange={(e)=>setTrailerf(e.target.value)} />
                        </Form.Group>
                       
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Rating</Form.Label>
                            <Box  mb={3} borderColor="transparent">
                                    <Rating                                   
                                    value={ratingf}
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
                    <Button variant="primary" onClick={()=>handleEdit(i)}>
                         Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditCard;