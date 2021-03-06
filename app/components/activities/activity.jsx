import React from 'react';
import moment from 'moment';

const Activity = ({ description, kind, registeredAt, editHandler }) => {
  const formatDate = moment(registeredAt).format('hh:mm a');
  const activityStyle = {
    display: 'flex',
    margin: '10px'
  }
  return (
    <div style={activityStyle} onClick={editHandler}>
      <div className="header">
        <div className="type">{kind}</div>
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
