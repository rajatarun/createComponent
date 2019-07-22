import React from 'react';
import RenderFormBasedOnType from './renderFormBasedOnType';
import logo from './logo.svg';
import './App.css';
import {Button, InputGroup, FormControl, DropdownButton, Dropdown, Row, Container, Col} from 'react-bootstrap';

class App extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.inputSelect = this.inputSelect.bind(this);
        this.inputFieldGroup = this.inputFieldGroup.bind(this);


        this.state = { value: '', selectedValue: '', isFieldGroup: false, selectedFieldGroupType: '', showForm: false };
    }
    isFieldGroup = false;
    inputSelect(value, object) {
        if(value === 'Field group'){
            this.setState({isFieldGroup: (value === 'Field group')});
        } else {
            this.setState({'showForm': !!value});
            this.setState({'isFieldGroup': false});
        }
        this.setState({'selectedValue': value});
        console.log(value);
        console.log(object);
    }
    inputFieldGroup(value){
        if(this.state.selectedValue === 'Field group'){
            this.setState({'selectedFieldGroupType': value});
            this.setState({'showForm': !!value});
        } else {
            this.setState({'showForm': false});

        }
        console.log(value);
    }
    getFieldGroup(){
        if(this.isFieldGroup){
            return (
                <DropdownButton
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-2"
                >
                    <Dropdown.Item href="#" eventKey="Input" onSelect={this.inputFieldGroup}>Input</Dropdown.Item>
                    <Dropdown.Item href="#" eventKey="Select" onSelect={this.inputFieldGroup}>Select</Dropdown.Item>
                </DropdownButton>
            )
        }
    }
    render()  {
        return (
        <div className="App">
          <header className="App-header">
              <Row>
                  <Col>
                      <Container>
                          <Row>
                              <Col xs md="6" >
                                  <DropdownButton
                                      variant="outline-secondary"
                                      title={this.state.selectedValue ? this.state.selectedValue : "Dropdown"}
                                      id="input-group-dropdown-2"
                                  >
                                      <Dropdown.Item href="#" eventKey="Field group" onSelect={this.inputSelect}>Field group</Dropdown.Item>
                                      <Dropdown.Item href="#" eventKey="Checkbox" onSelect={this.inputSelect}>Checkbox</Dropdown.Item>
                                      <Dropdown.Item href="#" eventKey="Radio Button" onSelect={this.inputSelect}>Radio Button</Dropdown.Item>
                                      <Dropdown.Divider />
                                      <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                  </DropdownButton>
                              </Col>
                              {this.state.isFieldGroup ?
                              <Col xs md="6">
                                  <DropdownButton
                                      variant="outline-secondary"
                                      title={this.state.selectedFieldGroupType ? this.state.selectedFieldGroupType : "Dropdown"}
                                      id="input-group-dropdown-2"
                                  >
                                      <Dropdown.Item href="#" eventKey="Input" onSelect={this.inputFieldGroup}>Input</Dropdown.Item>
                                      <Dropdown.Item href="#" eventKey="Select" onSelect={this.inputFieldGroup}>Select</Dropdown.Item>
                                  </DropdownButton>
                              </Col>: null}
                          </Row>
                      </Container>
                  </Col>
              </Row>
              <Row>
                  {this.state.showForm ? <RenderFormBasedOnType formType={this.state.selectedValue} fieldGroupType={this.state.selectedFieldGroupType}></RenderFormBasedOnType> : null}
              </Row>
          </header>
        </div>
      );
    }
}

export default App;
