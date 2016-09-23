import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from '../theme.js';
import Hammer from 'react-hammerjs';

import Menu from './menu.jsx';

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
    if (this.props.location.pathname === '/new') {
      this.context.router.push('/activities');
    } else if (this.props.location.pathname === '/activities') {
      this.context.router.push('/search');
    }
  }

  onSwipeLeft = () => {
    if (this.props.location.pathname === '/activities') {
      this.context.router.push('/new');
    } else if (this.props.location.pathname === '/search') {
      this.context.router.push('/activities');
    }
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
