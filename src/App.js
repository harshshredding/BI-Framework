import React from 'react';
import './App.css';
import 'react-table-v6/react-table.css';
import Sidebar from "react-sidebar";
import MenuBarContent from "./MenuBarContent";
import Table from "./Table";
import { Container, Row, Col, Button } from 'react-bootstrap';


const styles = {
  buttonOverflow: { overflow:'hidden', textOverflow: 'ellipsis'},
  buttonMargin: { margin: '3px'}
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
  }

  state = {
    selectedMenuItem: "Dashboards"
  }

  handler(item) {
    console.log(item)
    this.setState(
      {
        selectedMenuItem: item
      }
    )
  }

  render(){
    return ( 
      <Sidebar
        sidebar={<MenuBarContent handler={this.handler} selectedMenuItem={this.state.selectedMenuItem}/>}
        docked={true}
        styles={{ sidebar: {background: "white"} }}
        >
        <Container fluid={true}>
          <Row>
            <Col sm={2}>
              <Row><Button variant="outline-secondary" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Year</Button></Row>
              <Row><Button variant="outline-secondary" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Month</Button></Row>
              <Row><Button variant="outline-secondary" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Date</Button></Row>
              <Row><Button variant="outline-secondary" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Day Of Month</Button></Row>
              <Row><Button variant="outline-secondary" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Day Of Year</Button></Row>
              <Row><Button variant="outline-secondary" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Day Of Week</Button></Row>
              <Row><Button variant="outline-secondary" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Server</Button></Row>
              <Row><Button variant="outline-secondary" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Cashier</Button></Row>
              <Row><Button variant="outline-secondary" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Table</Button></Row>
              <Row><Button variant="outline-secondary" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Meal Period</Button></Row>
              <Row><Button variant="outline-success" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Covers</Button></Row>
              <Row><Button variant="outline-success" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Gross Revenue</Button></Row>
              <Row><Button variant="outline-success" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Discount</Button></Row>
              <Row><Button variant="outline-success" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Tips</Button></Row>
              <Row><Button variant="outline-success" block style={{...styles.buttonOverflow, ...styles.buttonMargin}}>Check Count</Button></Row>
            </Col>
            <Col sm={10}>
              <Table />
            </Col>
          </Row>
        </Container>
        </Sidebar>
    );
  }
}

export default App;
