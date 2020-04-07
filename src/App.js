import React, { Component } from "react";

import "./App.css";
import Input from "./component/ui/input/input";

class App extends Component {
  state = {
    registerForm: {
      fname: {
        label: "First Name :",
        elementType: "input",
        value: "",
        elementConfig: {
          placeholder: "Name",
        },
      },
      lname: {
        label: "Last Name :",
        elementType: "input",
        value: "",
        elementConfig: {
          placeholder: "Last Name",
        },
      },
      email: {
        label: "E-mail :",
        elementType: "input",
        value: "",
        elementConfig: {
          placeholder: "E-mail",
        },
      },
      description: {
        label: "Description :",
        elementType: "textarea",
        value: "",
        elementConfig: {
          placeholder: "Description",
        },
      },
    },
  };

  inputChangedEventHandler = (event, inputId) => {
    const copyOfRegisterForm = {...this.state.registerForm};
    const copyOfInputElement = {...copyOfRegisterForm[inputId]}
    copyOfInputElement.value = event.target.value;
    copyOfRegisterForm[inputId] = copyOfInputElement;
    this.setState({registerForm : copyOfRegisterForm});
  };

  formSubmitEventHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for(let key in this.state.registerForm){
      formData[key] = this.state.registerForm[key].value;
    }
    console.log(formData);
  }

  render() {
    let formElementsArray = [];
    for (let key in this.state.registerForm) {
      formElementsArray.push({
        id: key,
        config: this.state.registerForm[key],
      });
    }

    let form = (
      <form>
        {formElementsArray.map((item) => {
          return (
            <Input
              label={item.config.label}
              key={item.id}
              elementType={item.config.elementType}
              elementConfig={item.config.elementConfig}
              value={item.config.value}
              changed={(event) => {this.inputChangedEventHandler(event, item.id)}}
            />
          );
        })}
        {/* <Input
          label="First Name:"
          elementType={this.state.registerForm.fname.elementType}
          value={this.state.registerForm.fname.value}
          elementConfig={this.state.registerForm.fname.elementConfig}
       />*/}
        <button onClick={(event) => {this.formSubmitEventHandler(event)}}>Register</button>
      </form>
    );

    return (
      <div className="App">
        {/*<Input label="Last Name:" 
        elementType="input" 
        value='lastname'/>

        <Input label="Description:" 
        elementType="textarea" 
    value='description'/>*/}
        {form}
      </div>
    );
  }
}

export default App;
