import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (


  ProfileExperience.propTypes = {
    experience: PropTypes.object.isRequired
  };

export default ProfileExperience;
