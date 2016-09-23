import React from 'react';
import moment from 'moment';

const Activity = ({ description, type, date }) => {
  const formatDate = moment(date).format('h:mm:ss a');
  const activityStyle = {
    display: 'flex',
    margin: '10px'
  }
  return (
    <div style={activityStyle}>
      <div className="header">
        <div className="type">{type.description}</div>
        <div className="date">{formatDate}</div>
      </div>
      <div>{description}</div>
    </div>
  );
};

Activity.propTypes = {
  description: React.PropTypes.string
};

export default Activity;
