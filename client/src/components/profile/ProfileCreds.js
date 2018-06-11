import React, { Component } from 'react';
import Moment from 'react-moment';
import Card from '@hackclub/design-system/dist/Card';

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;
    const expItems = experience.map(exp => (
      <Card
        boxShadowSize="lg"
        borderWidth={0}
        borderRadius={3}
        p={5}
        my={2}
        bg="#2d9ee4"
      >
        <h3 className="text-center ">Experience</h3>
        <li key={exp._id}>
          <h4>{exp.company}</h4>
          <p>
            <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
            {exp.to === null ? (
              ' Present'
            ) : (
              <Moment format="YYYY/MM/DD">{exp.to}</Moment>
            )}
          </p>
          <p>
            <strong>Position:</strong> {exp.title}
          </p>
          <p>
            {exp.location === '' ? null : (
              <span>
                <strong>Location: </strong>
                {exp.location}
              </span>
            )}
          </p>
          <p>
            {exp.description === '' ? null : (
              <span>
                <strong>Description: </strong>
                {exp.description}
              </span>
            )}
          </p>
        </li>
      </Card>
    ));

    const eduItems = education.map(edu => (
      <Card
        boxShadowSize="lg"
        borderWidth={0}
        borderRadius={3}
        p={5}
        my={2}
        bg="#2d9ee4"
      >
        <h3 className="text-center">Education</h3>
        <li key={edu._id}>
          <h4>{edu.school}</h4>
          <p>
            <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{' '}
            {edu.to === null ? (
              ' Present'
            ) : (
              <Moment format="YYYY/MM/DD">{edu.to}</Moment>
            )}
          </p>
          <p>
            <strong>Degree:</strong> {edu.degree}
          </p>
          <p>
            <strong>Field of Study:</strong> {edu.fieldofstudy}
          </p>
          <p>
            {edu.description === '' ? null : (
              <span>
                <strong>Description: </strong>
                {edu.description}
              </span>
            )}
          </p>
        </li>
      </Card>
    ));

    return (
      <div className="row">
        <div className="col-md-6">
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No Experience Listed</p>
          )}
        </div>
        <div className="col-md-6">
          {expItems.length > 0 ? (
            <ul className="list-group">{eduItems}</ul>
          ) : (
            <p className="text-center">Self Study</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
