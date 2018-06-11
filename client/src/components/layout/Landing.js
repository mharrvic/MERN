import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
// import Button from '../styled-components/MakComponents';
import { Button } from 'pcln-design-system';
import OutlineButton from 'pcln-design-system/dist/OutlineButton';
import GreenButton from 'pcln-design-system/dist/GreenButton';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">FrontEnd Noobs</h1>
                <p className="lead">
                  {' '}
                  Share ideas, and get help from other cool designers.
                </p>
                <hr />
                <Link to="/register">
                  <GreenButton size="large" mr={2}>
                    Register
                  </GreenButton>
                </Link>
                <Link to="/login">
                  <Button color="red" size="large">
                    Login
                  </Button>
                </Link>
                {/* <Button>tae</Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
