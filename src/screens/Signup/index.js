import React from "react";
import { style } from "./styles";
import { createAccount } from "../../config/firebase";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pass: "",
      cpass: "",
      loader: false
    };
  }

  signup = async () => {
    const { history } = this.props;
    const { email, pass, cpass } = this.state;

    if (!email) {
      this.errorToast("Enter Email");
      return;
    }

    if (!pass) {
      this.errorToast("Enter Password");
      return;
    }

    if (!cpass) {
      this.errorToast("Enter Confirm Password");
      return;
    }

    if (pass !== cpass) {
      this.errorToast("Password not matched");
      return;
    }

    try {
      await createAccount(email, pass);
      this.flushState();
      history.push("/");
    } catch (error) {
      this.errorToast(error.message);
      this.flushState();
    }
  };

  nevigate = () => {
    const { history } = this.props;
    history.push("/");
  };

  errorToast = message => toast.error(message, { containerId: "Error" });

  flushState = () => {
    this.setState({
      email: "",
      pass: "",
      cpass: ""
    });
  };

  render() {
    const { email, pass, cpass } = this.state;
    return (
      <div>
        <ToastContainer
          containerId={"Error"}
          closeOnClick={false}
          closeButton={false}
          draggable={false}
        />
        <div style={style.mainContainer}>
          <div style={style.authWrapper}>
            <div style={style.authHeader}>
              <div style={style.borderWrapper}>
                <p style={style.headerTitle}>
                  Welcome to <span style={style.makeBold}>Web</span>
                  <span style={style.changeColor}>APP</span>
                </p>
                <p style={style.headerSubHeading}>Create your account easily</p>
              </div>
            </div>
            <div style={style.fieldsWrapper}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={pass}
                    onChange={e => this.setState({ pass: e.target.value })}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={cpass}
                    onChange={e => this.setState({ cpass: e.target.value })}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="button"
                  style={style.makeWidth}
                  onClick={this.signup}
                >
                  Signup
                </Button>

                <Button
                  variant="outline-primary"
                  type="button"
                  style={style.btnCreateAccount}
                  onClick={this.nevigate}
                >
                  Already have Account
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
