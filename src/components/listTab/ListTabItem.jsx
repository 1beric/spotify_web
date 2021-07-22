import { makeStyles, useTheme } from '@material-ui/core';
import React from 'react';

const ListTabItem = ({ item, onItemClicked }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={() => onItemClicked(item)}>
      {item.name}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '4%',
    fontSize: theme.font.size[3],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[400],
    color: theme.font.color[4],
    padding: '8px 0px',
    cursor: 'pointer',
    '&:hover': {
      color: theme.font.color[1],
    },
  },
}));

export default ListTabItem;
