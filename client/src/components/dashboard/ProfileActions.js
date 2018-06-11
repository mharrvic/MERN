import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'pcln-design-system/dist/Button';
import OutlineButton from 'pcln-design-system/dist/OutlineButton';

const ProfileActions = () => {
  return (
    <div>
      <Link to="/edit-profile">
        <OutlineButton mr={2}>
          <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
        </OutlineButton>
      </Link>
      <Link to="/add-experience">
        <OutlineButton mr={2}>
          <i className="fab fa-black-tie text-info mr-1" />
          Add Experience
        </OutlineButton>
      </Link>
      <Link to="/add-education">
        <OutlineButton>
          <i className="fas fa-graduation-cap text-info mr-1" />
          Add Education
        </OutlineButton>
      </Link>
    </div>
  );
};

export default ProfileActions;
