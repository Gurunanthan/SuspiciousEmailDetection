// SignIn.jsx
import React, { Component } from "react";
import TextField from "../../Components/TextField/TextField.Component";
import Header from "../../Components/Header/Header.Components";
import { validateSignIn } from "../../Assets/Validate/Validate";
import { signInWithEmail, signInWithGoogle } from "../../Assets/Firebase/Firebase";
import "./SignIn.Styles.css"

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.validateForm()) {
      try {
        await signInWithEmail(this.state.email, this.state.password);
        console.log("Sign-in with email successful!");
        // Redirect or perform other actions upon successful sign-in
        window.location.assign("/");
      } catch (error) {
        console.error("Error during email sign-in:", error);
      }
    }
  };

  handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      console.log("Sign-in with Google successful!");
      // Redirect or perform other actions upon successful sign-in
      window.location.assign("/");
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  validateForm = () => {
    const errors = validateSignIn(this.state);
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  render() {
    const { email, password, errors } = this.state;

    return (
      <>
        <Header />
        <div className="container-fluid signin-container">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-4 signin-box p-4">
              <h2 className="text-center mb-4">Sign In</h2>
              <form onSubmit={this.handleSubmit}>
                <TextField
                  type="email"
                  name="email"
                  label="Email Address"
                  placeholder="Enter your email"
                  value={email}
                  onChange={this.handleChange}
                  error={errors.email}
                />
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={this.handleChange}
                  error={errors.password}
                />
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
                <button type="button" className="btn btn-danger mt-2" onClick={this.handleGoogleSignIn}>
                  Sign In with Google
                </button>
              </form>
              <p className="text-center mt-3">
                Don't have an account? <a href="/signup">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignIn;
