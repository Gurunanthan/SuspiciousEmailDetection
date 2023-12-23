// SignUp.jsx
import React, { Component } from "react";
import TextField from "../../Components/TextField/TextField.Component";
import Header from "../../Components/Header/Header.Components";
import { validateSignUp } from "../../Assets/Validate/Validate";
import { signUpWithEmail, signUpWithGoogle } from "../../Assets/Firebase/Firebase";
import "./SignUp.Styles.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      errors: {},
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleTogglePassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.validateForm()) {
      try {
        await signUpWithEmail(this.state.email, this.state.password, this.state.name);
        console.log("Sign-up with email successful!");
        // Redirect or perform other actions upon successful sign-up
      } catch (error) {
        console.error("Error during email sign-up:", error);
      }
    }
  };

  handleGoogleSignUp = async () => {
    try {
      await signUpWithGoogle();
      console.log("Sign-up with Google successful!");
      // Redirect or perform other actions upon successful sign-up
    } catch (error) {
      console.error("Error during Google sign-up:", error);
    }
  };

  validateForm = () => {
    const errors = validateSignUp(this.state);
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  render() {
    const {
      name,
      email,
      phoneNumber,
      password,
      confirmPassword,
      showPassword,
      errors,
    } = this.state;

    return (
      <>
        <Header />
        <div className="container-fluid signup-container">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-4 signup-box p-4">
              <h2 className="text-center mb-4">Sign Up</h2>
              <form onSubmit={this.handleSubmit}>
                <TextField
                  type="text"
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={this.handleChange}
                  error={errors.name}
                />
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
                  type="tel"
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={this.handleChange}
                  error={errors.phoneNumber}
                />
                <TextField
                  type={showPassword ? "text" : "password"}
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={this.handleChange}
                  error={errors.password}
                />
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="showPassword"
                    checked={showPassword}
                    onChange={this.handleTogglePassword}
                  />
                  <label className="form-check-label" htmlFor="showPassword">
                    Show Password
                  </label>
                </div>
                <TextField
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={this.handleChange}
                  error={errors.confirmPassword}
                />
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
                <button type="button" className="btn btn-danger mt-2" onClick={this.handleGoogleSignUp}>
                  Sign Up with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
