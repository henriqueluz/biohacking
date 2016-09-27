import React from 'react';

export default class Tag extends React.Component {

  static propTypes = {
    onSelect: React.PropTypes.func.isRequired,
    tag: React.PropTypes.string.isRequired,
  }

  state = {
    style: {
      background: 'rgba(0, 0, 0, 0.4)',
      margin: '5px',
      padding: '5px',
      cursor: 'pointer',
      opacity: 0.5,
    },
    isSelected: false,
  }

  toggle = () => {
    const oldState = this.state;
    const oldStyle = oldState.style;
    const state = {
      style: {
        ...oldStyle
      }
    }
    if (oldState.isSelected) {
      state.isSelected = false;
      state.style.opacity = 0.5;
    } else {
      state.isSelected = true;
      state.style.opacity = 1;
    }
    return state;
  }

  onSelect = () => {
    const state = this.toggle();
    this.props.onSelect(state.isSelected, this.props.tag);
    this.setState(state);
  }

  render() {
    const { tag } = this.props;
    return (<span onClick={this.onSelect} style={this.state.style}><b>{tag}</b></span>);
  }
}
