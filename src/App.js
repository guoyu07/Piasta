import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ToggleButton from '@material-ui/lab/ToggleButton';


import {  } from 'react-icons/fa';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  body: {
    height: '100%',
    width: '100%',
    display: 'grid',
    justifyItems: 'center',
  },
  button: {
    margin: theme.spacing.unit,
  },
  icons: {
    marginLeft: theme.spacing.unit,
  },
  replyField: {
    width: '70%',
    // margin: '5%',
  },
  postField: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
    margin: '5%',
  },
  postButtons:{
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontFamily: 'Nothing You Could Do',
    fontSize: 50,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge className={classes.margin} badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge className={classes.margin} badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="title" color="inherit" noWrap>
              Piasta
            </Typography>
            
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input
                placeholder="Search…"
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />

            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge className={classes.margin} badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge className={classes.margin} badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}

        <div className={classes.body}>

          <Paper className={classes.postField} label = "Post">
            <Typography variant = 'display1'>
              What are we doing in class on Tuesday?
            </Typography>


                <br></br>

            <Typography variant='body2'>
            Aenean tincidunt ultricies sem, ut tristique velit dignissim ut. Curabitur vestibulum leo ut lorem commodo, eget tincidunt metus malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc mattis condimentum sapien et cursus. Vestibulum quis feugiat magna. Sed interdum, mi facilisis dignissim congue, quam lectus vehicula tellus, sit amet convallis leo leo eu massa. Quisque odio eros, vehicula sed laoreet sit amet, tincidunt quis ligula. Praesent semper lacus ac nunc efficitur, eget venenatis orci volutpat. Pellentesque quis lacus a nibh blandit dictum id vel tortor. Aenean viverra rutrum diam, ut vestibulum odio efficitur at. In sit amet ante molestie, ultrices nisl non, imperdiet tellus. Aliquam sit amet sem quis nisl sodales faucibus. Ut bibendum sollicitudin ipsum, pulvinar dignissim ex rhoncus a. Vestibulum cursus bibendum accumsan. Sed viverra urna non ex varius imperdiet. Nam efficitur urna ac dolor laoreet, vel ornare lacus accumsan.
            </Typography>

<br>
</br>
                        <Typography variant = 'caption'>
              Anonymous Poster
            </Typography>
          </Paper>

         <div className = {classes.postButtons}>
                <ToggleButton className={classes.button}>
                    <Icon >keyboard_arrow_up</Icon>
                </ToggleButton>
                <ToggleButton className={classes.button}>
                    <Icon >keyboard_arrow_down</Icon>
                </ToggleButton>
                <IconButton className={classes.button}>
                    <Icon >star</Icon>
                </IconButton>
                <IconButton className={classes.button}>
                    <Icon >share</Icon>
                </IconButton>
                <IconButton className={classes.button}>
                    <Icon >notifications</Icon>
                </IconButton>
         </div>

          <TextField
            id="outlined-multiline-static"
            label="Reply"
            multiline
            rows="4"
            // defaultValue="Hey, I think the presentation is due today!"
            className = {classes.replyField}
            margin="normal"
            variant="outlined"
          />
          
          <Button variant="contained" color="primary" className={classes.button}>
            Submit
            <Icon className={classes.icons}>send</Icon>
          </Button>

        </div>

      </div>



    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);
