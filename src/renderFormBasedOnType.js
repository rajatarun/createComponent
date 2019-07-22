import React from "react";
import {Row, Col, Card, Button } from 'react-bootstrap';
class RenderFormBasedOnType extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render(){
        return(<div class="content">
            <Row>
              <Col xs md="6">
                  <Card>
                      <Card.Header as="h5">Properties</Card.Header>
                      <Card.Body>
                          <Card.Title>{this.props.formType}</Card.Title>
                          <Card.Text>
                              Please enter spec-properties for  {this.props.formType}
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
              <Col xs md="6">
                  <Card>
                      <Card.Header as="h5">Template</Card.Header>
                      <Card.Body>
                          <Card.Title>{this.props.formType}</Card.Title>
                          <Card.Text>
                              Template for {this.props.formType}
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
            </Row>
        </div>);
    }
}
export default  RenderFormBasedOnType;