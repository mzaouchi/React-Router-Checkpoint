import { Container,Nav,Navbar } from 'react-bootstrap';
import AddCard from './AddCard';
function NavbarMovie({film,setFilm}){
    return(

        <div>
            <Container >
                <Navbar bg="dark" variant="dark" style={{paddingLeft : '100px'}}>
                    
                        <Navbar.Brand><img src='./mahmoudnet.png' alt='' style={{height : '30px'}} /></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/Movies'>Movies</Nav.Link>
                            
                        </Nav>
                        
                        <AddCard film = {film} setFilm = {setFilm}></AddCard>
                </Navbar>            
            </Container>
        </div>            
    )
}

export default NavbarMovie;