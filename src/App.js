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
        validation : {
          required : true
        },
        valid : true
      },
      lname: {
        label: "Last Name :",
        elementType: "input",
        value: "",
        elementConfig: {
          placeholder: "Last Name",
        },
        validation : {
          required : true
        },
        valid : true
      },
      email: {
        label: "E-mail :",
        elementType: "input",
        value: "",
        elementConfig: {
          placeholder: "E-mail",
        },
        validation : {
          required : true
        },
        valid : true
      },
      description: {
        label: "Description :",
        elementType: "textarea",
        value: "",
        elementConfig: {
          placeholder: "Description",
        },
        validation : {
          required : true
        },
        valid : true
      }
    }
  };

  validate = (value, rules) => {
    let isValid = false;
    if(rules.required){
      isValid = value.trim() !== '';
    }
    return isValid;
  }

  inputChangedEventHandler = (event, inputId) => {
    const copyOfRegisterForm = {...this.state.registerForm};
    const copyOfInputElement = {...copyOfRegisterForm[inputId]}
    copyOfInputElement.value = event.target.value;
    copyOfInputElement.valid = this.validate(event.target.value, copyOfInputElement.validation)
    copyOfRegisterForm[inputId] = copyOfInputElement;
    this.setState({registerForm : copyOfRegisterForm});
  };

  formSubmitEventHandler = (event) => {
    event.preventDefault();
    const formData = {};
    let isFormValid = false;
    for(let key in this.state.registerForm){
      formData[key] = this.state.registerForm[key].value;
      isFormValid = isFormValid && this.state.registerForm[key].valid;
    }
    // console.log(formData);
    if(isFormValid){

    }else{
      //error
    }
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
        <button onClick={(event) => {this.formSubmitEventHandler(event)}}>Register</button>
      </form>
    );

    return (
      <div className="App">
        {form}
      </div>
    );
  }
}

export default App;
