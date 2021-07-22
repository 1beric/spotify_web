import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ListTabBar from './ListTabBar';
import ListTabContent from './ListTabContent';

const ListTabPane = ({ tabItems, className, onItemClicked }) => {
  const tabTitles = Object.keys(tabItems);
  const [tabContentTitle, setTabContentTitle] = useState(tabTitles[0]);

  const classes = useStyles();

  return (
    <div className={`${classes.root} ${className}`}>
      <ListTabBar
        tabTitles={tabTitles}
        onChange={setTabContentTitle}
        selected={tabContentTitle}
      />
      <ListTabContent
        items={tabItems[tabContentTitle]}
        onItemClicked={onItemClicked}
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default ListTabPane;
