import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';
import Card from '@hackclub/design-system/dist/Card';
import RedButton from 'pcln-design-system/dist/RedButton';

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            ' Present'
          ) : (
            <Moment format=" YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td>
          <RedButton onClick={this.onDeleteClick.bind(this, exp._id)}>
            Delete
          </RedButton>
        </td>
      </tr>
    ));
    return (
      <Card
        boxShadowSize="lg"
        borderWidth={0}
        borderRadius={3}
        p={5}
        my={2}
        bg="#b1d39f"
      >
        <h4 className="mb-4">Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
            {experience}
          </thead>
        </table>
      </Card>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
