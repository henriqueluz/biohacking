import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

const Activity = ({ description, kind, registeredAt }) => {
  const formatDate = moment(registeredAt).format('hh:mm a');
  const activityStyle = {
    display: 'flex',
    margin: '10px'
  }
  return (
    <div style={activityStyle}>
      <div className="header">
        <div className="type">{kind}</div>
        <div className="date">
          <DatePicker hintText="Landscape Dialog" mode="landscape" />
        </div>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default Activity;
