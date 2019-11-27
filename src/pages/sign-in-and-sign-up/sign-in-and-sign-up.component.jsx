import React from "react";

import { SignInAndSignUpStyle } from "./sign-in-and-sign-up.styles.js";

import SignIn from "../../components/sign-in/sign-in.component";

import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpStyle>
    <SignIn />
    <SignUp />
  </SignInAndSignUpStyle>
);

export default SignInAndSignUpPage;
