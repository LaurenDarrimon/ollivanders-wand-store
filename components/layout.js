import Head from 'next/head';
import Link from 'next/link';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, Row, Container, Col } from 'react-bootstrap'
<Image src="O.png" alt="Ollivander Logo with celestial shapes"/> 


export default function Layout({ children, home } ) {
    return (
        <div>
            <Head>
                <title>
                    Ollivander&apos;s Wand Store App
                </title>
            </Head>
         
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Ollivander&apos;s Wand Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Products</Nav.Link>
                    <Nav.Link href="/lessons">Lessons</Nav.Link>
                    <Nav.Link href="/wizards">Famous Wizards</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <main>{children}</main>

            <Row className="justify-content-md-center">
                <Col xs={12} sm={6} md={6}>
                <Image className="justify-content-md-center" fluid="true" src="/O.png" alt="Ollivander Logo with celestial shapes"/> 
                </Col>
            </Row>
            {!home && (
                <Link href="/" className="btn btn-primary mt-3">Go to Home Page</Link>
                )
            }
            
        </div>
    );
}