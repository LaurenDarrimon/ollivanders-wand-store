import Head from 'next/head';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Layout({ children, home } ) {
    return (
        <div>
            <Head>
                <title>
                    Ollivander&apos;s Wand Store App
                </title>
            </Head>
         
            <Navbar bg="light" expand="lg">
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
            {!home && (
                <Link href="/" className="btn btn-primary mt-3">Go to Home Page</Link>
                )
            }
        </div>
    );
}