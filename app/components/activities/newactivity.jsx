import React from 'react';
import { connect } from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import ZXComponent from 'components/component.jsx';

@connect(({user, kinds}) => ({user, kinds}))
export default class NewActivity extends ZXComponent {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'ZX_KINDS_LIST_REQUEST'
    });
  }

  create = (event, item) => {
    console.log("Create Kind", event, item);
  }

  mappingKind = ({id, description, color}) => (
    <GridTile
      key={`kind-${id}`}
      style={{
        backgroundColor: color,
      }}
      kindId={id}
      onClick={this.create}
    >
      {description}
    </GridTile>
  )

  render() {
    const kinds = this.props.kinds.map(this.mappingKind);
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
