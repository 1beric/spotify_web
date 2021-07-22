import { makeStyles, useTheme } from '@material-ui/core';
import React from 'react';
import ListTabItem from './ListTabItem';

const ListTabContent = ({ items, onItemClicked }) => {
  const classes = useStyles();

  const listTabItems = items.map((item) => (
    <ListTabItem
      key={`${item.name}-tab-bar`}
      item={item}
      onItemClicked={onItemClicked}
    />
  ));

  return <div className={classes.root}>{listTabItems}</div>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: '92.5%',
    overflowY: 'auto',
  },
}));

export default ListTabContent;
