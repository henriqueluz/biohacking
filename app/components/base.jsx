import React from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Hammer from 'react-hammerjs';
import theme from 'theme.js';
import Menu from 'components/menu.jsx';

@connect(null)
export default class Base extends React.Component {

  static propTypes = {
    children: React.PropTypes.element,
    route: React.PropTypes.object,
    location: React.PropTypes.object,
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  onSwipeRight = () => {
    this.props.dispatch({
      type: 'ZX_NAVIGATION',
      payload: {
        direction: 'right',
        pathname: this.props.location.pathname,
      }
    });
  }

  onSwipeLeft = () => {
    this.props.dispatch({
      type: 'ZX_NAVIGATION',
      payload: {
        direction: 'left',
        pathname: this.props.location.pathname,
      }
    });
  }

  render() {
    const profile = this.props.children;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <Hammer onSwipeLeft={this.onSwipeLeft} onSwipeRight={this.onSwipeRight}>
          <div>
            {profile}
          </div>
        </Hammer>
      </MuiThemeProvider>
    );
  }
}
