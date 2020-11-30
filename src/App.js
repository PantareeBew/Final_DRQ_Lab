import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Create } from './components/create';
import { Read } from './components/read';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Edit } from './components/edit';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Creat</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create} />
            <Route path='/read' component={Read} exact />
            <Route path='/edit/:id' component={Edit} />
          </switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
