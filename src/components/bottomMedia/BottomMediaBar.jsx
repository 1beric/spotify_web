import { makeStyles } from '@material-ui/core';
import React from 'react';

const BottomMediaBar = () => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background[2],
    width: '100%',
    height: '10%',
    borderTop: `${theme.palette.border.width[1]} solid ${theme.palette.border.color[6]}`,
  },
}));

export default BottomMediaBar;
