import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import Activity from './activity.jsx';

@connect((state) => ({
  activities: state.activities
}))
export default class Activities extends React.Component {

  static propTypes = {
    activities: React.PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'BIO_ACTIVITIES_REQUEST'
    });
  }

  edit = (event, item) => {
    debugger
  }

  mapActivity = item => (
    <ListItem onClick={this.edit} key={`activity-${item.id}`}>
      <Activity {...item} />
    </ListItem>
  );

  render() {

    const lista = this.props.activities.map(this.mapActivity);

    return (
      <List>
        {lista}
      </List>
    );
  }
}
