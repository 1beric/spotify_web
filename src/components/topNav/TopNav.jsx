import { makeStyles } from '@material-ui/core';
import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../store/selectors';
import actions from '../../store/actions';

const TopNav = () => {
  const { back, forward } = useSelector(selectors.centerContent.history);

  const dispatch = useDispatch();

  const goBack = () => dispatch(actions.centerContent.goBack());
  const goForward = () => dispatch(actions.centerContent.goForward());

  const jssProps = {};
  const classes = useStyles(jssProps);

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
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.background[2],
    width: '100%',
    height: '10%',
    // borderTop: `${theme.palette.border.width[1]} solid ${theme.palette.border.color[6]}`,
  },
  navButtons: {
    display: 'flex',
  },
  navIconOn: {
    flexShrink: 0,
    backgroundColor: theme.palette.background[6],
    padding: 8,
    marginRight: 16,
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color .2s',
    '&:hover': {
      backgroundColor: theme.palette.background[8],
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

export default TopNav;
