import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import config from '../config'

function StickyHeader() {
  return (
    <>
      <Navbar bg="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Aromatic Bar</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default StickyHeader;