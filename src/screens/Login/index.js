import React from "react";
import { style } from "./styles";
import { signIn } from "../../config/firebase";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pass: "",
      loader: false
    };
  }

  login = async () => {
    const { history } = this.props;
    const { email, pass } = this.state;

    if (!email) {
      this.errorToast("Enter Email");
      return;
    }

    if (!pass) {
      this.errorToast("Enter Password");
      return;
    }

    try {
      await signIn(email, pass);
      this.flushState();
      history.replace("/home");
    } catch (error) {
      this.errorToast(error.message);
      this.flushState();
    }
  };

  navigate = () => {
    const { history } = this.props;
    history.push("/signup");
  };

  errorToast = message => toast.error(message, { containerId: "Error" });

  flushState = () => {
    this.setState({
      email: "",
      pass: ""
    });
  };

  render() {
    const { email, pass } = this.state;
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
                <p style={style.headerSubHeading}>Login your account easily</p>
              </div>
            </div>
            <div style={style.fieldsWrapper}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
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
                <Button
                  variant="primary"
                  type="button"
                  style={style.makeWidth}
                  onClick={this.login}
                >
                  Login
                </Button>

                <Button
                  variant="outline-primary"
                  type="button"
                  style={style.btnCreateAccount}
                  onClick={this.navigate}
                >
                  Create Account
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
