import React from 'react';
import { connect } from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import ZXComponent from 'components/component.jsx';
import Kind from 'components/activities/kind.jsx';

@connect(({user, kinds}) => ({user, kinds}))
export default class NewActivity extends ZXComponent {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'ZX_KINDS_LIST_REQUEST'
    });
  }

  create = (kind) => {
    const {dispatch, user} = this.props;

    dispatch({
      type: 'ZX_ACTIVITY_CREATE',
      payload: {
        userId: user.uid,
        kind: kind.description,
        color: kind.color,
        registeredAt: moment().format(),
        description: ''
      }
    })
  }

  render() {
    const kinds = this.props.kinds.map(Kind, this);
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        minWidth: 500,
        minHeight: 450,
        flexGrow: 1,
        padding: 0,
      },
    };
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={200}
          padding={0}
          style={styles.gridList}
        >
        {kinds}
        </GridList>
      </div>
    )
  }
}
