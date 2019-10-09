import React , {Component} from 'react';
import SocialLogin from 'react-social-login';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""

      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  }
  render(){
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="" placeholder="First Name" type="text" name="firstName" noValidate onChnage={this.handleChnage} />

            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="" placeholder="Last Name" type="text" name="lastName" noValidate onChnage={this.handleChnage} />

            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" className="" placeholder="Email" type="text" name="email" noValidate onChnage={this.handleChnage} />

            </div>
            <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" className="" placeholder="Password" type="text" name="password" noValidate onChnage={this.handleChnage} />
            
          </div>
          <div className="createAccount">
            <button type="submit">Create Account</button>
            <small>Already Have an Account?</small>
          </div>
          
          </form>
        </div>
      </div>
    );
  }
}


export default App;