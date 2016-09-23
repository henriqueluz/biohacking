import React from 'react';
import { connect } from 'react-redux';

@connect((state) => ({
  count: state.count
}))
export default class Menu extends React.Component {

  render() {
    const {count} = this.props;
    return (
      <div>{count}</div>
    );
  }
}
