import React from 'react';
import { connect } from 'react-redux';
import Popover from 'material-ui/Popover';
import MenuUI from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import { yellow500, red500 } from 'material-ui/styles/colors';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { Link } from 'react-router';


@connect((state) => ({
  failure: state.failure,
}))
export default class Menu extends React.Component {

  static propTypes = {
    dispatch: React.PropTypes.func,
    failure: React.PropTypes.object,
  }

  state = {
    openMenu: false,
    openFailure: false,
  }

  handleTouchTap = event => {
    event.preventDefault();
    this.setState({
      openMenu: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      openMenu: false,
      openFailure: false,
    });
  };

  handleException = event => {
    event.preventDefault();
    this.setState({
      openFailure: true,
      anchorEl: event.currentTarget,
    });
  }

  closeException = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'CLOSE_FAILURE',
      error: {}
    });
  }

  openSettings = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'OPEN_SETTINGS',
    });
  }

  configureStyles = (message) => {
    const hasException = (message) ? 'visible': 'hidden';
    const styles = {
      buttonStyle: {
        padding: 0,
        top: '5px',
      },
      iconStyle: {
        fontSize: '3rem',
      },
      bellStyle: {
        position: 'absolute',
        left: '-30px',
      },
      buttonExceptionStyle: {
        padding: 0,
        top: '10px',
        visibility: hasException,
      },
      exception: {
        fontSize: '2rem',
        color: red500,
      },
    };
    return styles;
  }

  render() {
    const { message } = this.props.failure;
    const styles = this.configureStyles(message);
    return (
      <Toolbar style={styles.global} className="feedbacks-menu">
        <ToolbarGroup />
          <div></div>
        <ToolbarGroup />
        <ToolbarGroup>
          <div>
            <Link to={'/new'}>
              <IconButton
                style={styles.buttonStyle}
                iconStyle={styles.iconStyle}
                iconClassName="fa fa-plus-circle"
              />
            </Link>
          </div>
        </ToolbarGroup>
        <ToolbarGroup>
          <div>
            <Link to={'/search'}>
              <IconButton
                style={styles.buttonStyle}
                iconClassName="fa fa-search"
              />
            </Link>
          </div>
        </ToolbarGroup>
        <ToolbarGroup>
          <div>
            <Link to={'/activities'}>
              <IconButton
                style={styles.buttonStyle}
                iconClassName="fa fa-calendar-check-o"
              />
            </Link>
          </div>
        </ToolbarGroup>
        <ToolbarGroup>
          <div>
            <Link to={'/charts'}>
              <IconButton
                style={styles.buttonStyle}
                iconClassName="fa fa-bar-chart-o"
              />
            </Link>
          </div>
        </ToolbarGroup>
        <ToolbarGroup>
          <div className="mdl-layout--small-screen-only feedbacks-menu__exception">
            <IconButton
              onTouchTap={this.handleException}
              iconStyle={styles.exception}
              style={styles.buttonExceptionStyle}
              iconClassName="fa fa-exclamation-circle"
            >
              <Popover
                open={this.state.openFailure}
                anchorEl={this.state.anchorEl}
                onTouchTap={this.handleRequestClose}
                anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
                targetOrigin={{ horizontal: 'middle', vertical: 'top' }}
                onRequestClose={this.handleRequestClose}
              >
                <List>
                  <ListItem onTouchTap={this.closeException} primaryText={message} />
                </List>
              </Popover>
            </IconButton>
          </div>
        </ToolbarGroup>
        <ToolbarGroup>
          <div style={styles.bellStyle} className="mdl-layout--small-screen-only">
            <Link to={'/invites'}>
              <IconButton
                style={styles.buttonStyle}
                iconClassName="fa fa-bell"
              />
            </Link>
          </div>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
