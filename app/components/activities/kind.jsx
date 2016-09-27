import React from 'react';
import {GridTile} from 'material-ui/GridList';

export default function (kind) {

  const {id, description, color} = kind;
  return (<GridTile
    key={`kind-${id}`}
    style={{
      backgroundColor: color,
    }}
    onClick={this.create.bind(this, kind)}
  >
    {description}
  </GridTile>);
}
