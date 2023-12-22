// Header.Components.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import SideComponent from "../SideComponent/SideComponent.Components";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    const auth = getAuth();
    this.unsubscribe = onAuthStateChanged(auth, (user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleSignOut = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  render() {
    const { user } = this.state;

    return (
      <nav
        className="navbar text-white text-l p-3 sticky-top"
        style={{
          borderBottom: "1px solid whitesmoke",
          backgroundColor: "rgba(33, 37, 41, 0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" style={{ color: "#fff" }}>
            Valkyrie
          </Link>
          <div className="d-flex">
            {user ? (
              <>
                <span className="text-white mx-2">Welcome, {user.displayName || "Guest"}</span>
                <button className="btn btn-danger mx-2" onClick={this.handleSignOut}>
                  Sign Out
                </button>
              </>
            ) : (
              <SideComponent />
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
