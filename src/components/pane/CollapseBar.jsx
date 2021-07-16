import React from 'react';
import { makeStyles } from '@material-ui/core';

const CollapseBar = ({ to, collapseClicked }) => {
  const jssProps = {
    size: 8,
  };
  const classes = useStyles(jssProps);

  return <div className={classes[to]} onClick={collapseClicked}></div>;
};

const useStyles = makeStyles((theme) => ({
  left: {
    position: 'absolute',
    top: '0px',
    right: 0,
    width: (props) => props.size,
    height: '100%',
    borderRight: `${theme.palette.border.width[2]} solid transparent`,
    transitionProperty: 'border-color',
    transitionDuration: '100ms',
    '&:hover': {
      borderColor: theme.palette.border.color[4],
      cursor: 'col-resize',
    },
  },
  right: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '8px',
    height: '100%',
    borderLeft: `${theme.palette.border.width[2]} solid transparent`,
    transitionProperty: 'border-color',
    transitionDuration: '100ms',
    '&:hover': {
      borderColor: theme.palette.border.color[4],
      cursor: 'col-resize',
    },
  },
  top: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    width: '100%',
    height: '8px',
    borderBottom: `${theme.palette.border.width[2]} solid transparent`,
    transitionProperty: 'border-color',
    transitionDuration: '100ms',
    '&:hover': {
      borderColor: theme.palette.border.color[4],
      cursor: 'ns-resize',
    },
  },
  bottom: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '8px',
    borderTop: `${theme.palette.border.width[2]} solid transparent`,
    transitionProperty: 'border-color',
    transitionDuration: '100ms',
    '&:hover': {
      borderColor: theme.palette.border.color[4],
      cursor: 'ns-resize',
    },
  },
}));

export default CollapseBar;
