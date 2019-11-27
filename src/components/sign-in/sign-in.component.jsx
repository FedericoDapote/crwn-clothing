import React from "react";
import FormInput from "../form-input/form-input.component.jsx";
import { SignInStyle, ButtonsStyle } from "./sign-in.styles.js";
import "../custom-button/custom-button.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <SignInStyle>
        <h2>I already have an account</h2>
        <span>Sign in with your email or password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <ButtonsStyle>
            <CustomButton type="submit" value="Submit Form">
              Sign in
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign in with Google{" "}
            </CustomButton>
          </ButtonsStyle>
        </form>
      </SignInStyle>
    );
  }
}

export default SignIn;
