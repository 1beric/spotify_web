import { makeStyles } from '@material-ui/core';
import React from 'react';

const PaneHeader = ({ title, style, icon }) => {
  const classes = useStyles({ style: style });
  return (
    <div className={classes.root}>
      {icon}
      {title.toUpperCase()}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: ({ style }) => ({
    // background: theme.palette.background[3],
    height: '10%',
    width: '100%',
    // margin: '0px 7.5%',
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.font.size[7],
    fontFamily: theme.font.family.title,
    fontWeight: theme.font.weight[200],
    color: theme.font.color[4],
    borderBottom: `${theme.palette.border.width[2]} solid ${theme.palette.border.color[5]}`,
    ...style,
  }),
}));

export default PaneHeader;
