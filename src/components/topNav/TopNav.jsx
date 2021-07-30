import { makeStyles } from '@material-ui/core';
import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../store/selectors';
import actions from '../../store/actions';

const TopNav = () => {
  const { back, forward } = useSelector(selectors.centerContent.history);
  const isDarkTheme = useSelector(selectors.settings.isDarkTheme);

  const dispatch = useDispatch();

  const goBack = () => dispatch(actions.centerContent.goBack());
  const goForward = () => dispatch(actions.centerContent.goForward());
  const toggleDarkMode = () => {
    dispatch(actions.settings.set({ isDarkTheme: !isDarkTheme }));
  };

  const jssProps = {};
  const classes = useStyles(jssProps);

  const ToggleIcon = isDarkTheme ? BrightnessHighIcon : Brightness3Icon;

  return (
    <div className={classes.root}>
      <div className={classes.navButtons}>
        <ChevronLeftIcon
          className={back.length !== 0 ? classes.navIconOn : classes.navIconOff}
          onClick={goBack}
        />
        <ChevronRightIcon
          className={
            forward.length !== 0 ? classes.navIconOn : classes.navIconOff
          }
          onClick={goForward}
        />
      </div>
      <div className={classes.profileButtons}>
        <ToggleIcon className={classes.navIconOn} onClick={toggleDarkMode} />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.background[2],
    color: theme.font.color[4],
    width: 'calc(100% - 64px)',
    height: '10%',
    padding: '0px 32px',
  },
  navButtons: {
    display: 'flex',
  },
  profileButtons: {
    display: 'flex',
  },
  navIconOn: {
    flexShrink: 0,
    backgroundColor: theme.palette.background[6],
    padding: 8,
    marginRight: 16,
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color .2s, color .2s',
    '&:hover': {
      backgroundColor: theme.palette.background[8],
      color: theme.font.color[1],
    },
  },
  navIconOff: {
    flexShrink: 0,
    backgroundColor: theme.palette.background[3],
    padding: 8,
    marginRight: 16,
    borderRadius: '50%',
    transition: 'background-color .2s',
  },
}));

const propTypes = {};

const defaultProps = {};

TopNav.propTypes = propTypes;
TopNav.defaultProps = defaultProps;

export default TopNav;
