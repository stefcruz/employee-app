import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Home.css';

import Employees from './Employees';
import CreateEmployee from './CreateEmployee';
import EditEmployee from './EditEmployee';
import DeleteEmployee from "./DeleteEmployee";

const Home = () => {
    return (
        <div>
            <Router>
                <Container className="pb-3" fluid>
                    <Row className="mb-4 header">
                        <Col md={6}>
                            <Link to="/" className="header-text">
                                <h3 className="text-white">Customer Management App</h3>
                            </Link>
                        </Col>
                        <Col md={6}>
                            <Link to="/create-employee">
                                <Button variant="light">+ Create Employee</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Route exact path="/" component={Employees}/>
                <Route path="/create-employee" component={CreateEmployee}/>
                <Route path="/edit-employee/:id" component={EditEmployee}/>
                <Route path="/delete-employee/:id" component={DeleteEmployee}/>
            </Router>
        </div>

    );
};
export default Home;