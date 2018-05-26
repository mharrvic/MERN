import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { registeruser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    };

    // bind 'this'
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  // Get Errors from REDUX state and put into PROPS
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    // (nextProps.errors) ? this.setState({ errors: nextProps.errors }) : null;
  }

  onChange = x =>
    this.setState({
      [x.target.name]: x.target.value,
    });

  onSubmit = x => {
    x.preventDefault(); // to disable defautl behavior

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    // axios // Send http request to API
    //   .post('/api/users/register', newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err.response.data))

    this.props.registeruser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your DevConnector account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup 
                  placeholder="Name" 
                  name="name" 
                  value={this.state.name} 
                  onChange={this.onChange} 
                  error={errors.name} 
                />
                <TextFieldGroup 
                  placeholder="Email" 
                  name="email" 
                  type="email" 
                  value={this.state.email} 
                  onChange={this.onChange} 
                  error={errors.email} 
                  info="This site uses Gravatar so if you want a profile image, use a Gravatar email" 
                />
                <TextFieldGroup 
                  placeholder="Password" 
                  name="password" 
                  type="password" 
                  value={this.state.password} 
                  onChange={this.onChange} 
                  error={errors.password} 
                />
                <TextFieldGroup 
                  placeholder="Confirm Password" 
                  name="password2" 
                  type="password" 
                  value={this.state.password2} 
                  onChange={this.onChange} 
                  error={errors.password2} 
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>;
  }
}
// Name of the component is Register
// registerUser is a action but also a properties
Register.propTypes = {
  registerUser: PropTypes.func.isRequired, // is a function and required
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

// Mapping all the propTypes
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registeruser })(withRouter(Register));
