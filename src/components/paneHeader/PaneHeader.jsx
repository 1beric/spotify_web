import { makeStyles } from '@material-ui/core';
import React from 'react';

const PaneHeader = ({ title }) => {
  const classes = useStyles();
  return <div className={classes.root}>{title.toUpperCase()}</div>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.background[3],
    height: '10%',
    margin: '0px 7.5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.font.size[1],
    fontFamily: theme.font.family.title,
    fontWeight: theme.font.weight[200],
    color: theme.font.color[4],
    borderBottom: `${theme.palette.border.width[2]} solid ${theme.palette.border.color[5]}`,
  },
}));

export default PaneHeader;
