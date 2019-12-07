import React from "react";

import "./pages-styles/signup.css";
import undefined from "firebase/empty-import";

class SignUp extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: ""
    }
  };

  handleSubmit = async e => {
    this.setState({loading:true, error: null})

    try {

    }
    catch(err) {
      this.setState({loading: false, error: err})
    }
  };

  handleChange = e => {
    this.setState({
        form: {
        this.state.form,
        [e.target.name]: e.target.value
      }
    })
  };

  render() {
    return (
      <React.Fragment>
        <section className="signup__hero dflex-center">
          <article className="signup__hero-container dflex-center">
            <h1 className="signup__title">Sign Up</h1>
            <form className="signup__form" onSubmit={this.hangleSubmit}>
              <label className="form__label">First name</label>
              <input className="form__input" type="text" name="firstName" />
              <label className="form__label">Last name</label>
              <input className="form__input" type="text" name="lastName" />
              <label className="form__label">Email</label>
              <input className="form__input" type="email" name="email" />
              <label className="form__label">Password</label>
              <input className="form__input" type="password" name="password" />
              <label className="form__label">Confrim password</label>
              <input
                className="form__input"
                type="password"
                name="passwordTwo"
              />
            </form>
            <button className="btn__tertiary form__button">Sign Up</button>
          </article>
        </section>
      </React.Fragment>
    );
  }
}

export default SignUp;
