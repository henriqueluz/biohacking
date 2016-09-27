import React from 'react';
import Activity from 'components/activities/activity.jsx';
import ActivityEdit from 'components/activities/activityedit.jsx';

export default function({editMode, id, activity, editHandler}) {

  if(editMode && id === activity.id) {
    return <ActivityEdit {...activity} />;
  } else {
    return <Activity {...activity} editHandler={editHandler} />;
  }

}
