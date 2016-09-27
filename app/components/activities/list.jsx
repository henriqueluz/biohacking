import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import ZXComponent from 'components/component.jsx';
import Container from 'components/activities/activitycontainer.jsx';

@connect(({user, activities}) => ({ user, activities }))
export default class Activities extends ZXComponent {

  static propTypes = {
    activities: React.PropTypes.object.isRequired,
  }

  componentDidMount() {
    const {dispatch, user} = this.props;
    dispatch({ type: 'ZX_ACTIVITIES_REQUEST' });
  }

  edit = (payload) => {
    const {dispatch} = this.props;
    dispatch({type: 'ZX_ACTIVITIES_EDIT', payload});
  }

  mapActivity = item => {
    const {activities} = this.props;
    const editMode = activities.get('editMode');
    const id = activities.get('entity').get('id');
    return (
      <ListItem key={`activity-${item.id}`}>
        <Container editHandler={this.edit.bind(this, item)} editMode={editMode} id={id} activity={item} />
      </ListItem>
    );

  }

  render() {
    const {activities} = this.props;
    const items = activities.get('data').toArray().map(this.mapActivity, this);

    return (
      <List>
        {items}
      </List>
    );
  }
}
