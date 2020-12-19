import React, { Component } from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import manicure from '../photos/manicure.png';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Record from '../pages/Record';


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={manicure}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsible-navbar-nav" />
                        <Navbar.Collapse id="responsible-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Головна</Nav.Link>
                                <Nav.Link href="/services">Послуги</Nav.Link>
                                <Nav.Link href="/record">Запис</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Знайти..."
                                    className="mr-sm-2"
                                >
                                </FormControl>
                                <Button variant="outline-info">Знайти</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/services" component={Services}/>
                        <Route exact path="/record" component={Record}/>
                    </Switch>
                </Router>
            </>
        )
    }
}
