import { makeStyles } from '@material-ui/core';
import React from 'react';
import ListTab from './ListTab';

const ListTabBar = ({ tabTitles, onChange, selected }) => {
  const classes = useStyles();

  const listTabs = tabTitles.map((title) => (
    <ListTab
      key={`${title}-tab-bar`}
      title={title}
      onSelect={() => onChange(title)}
      selected={selected === title}
    />
  ));

  return <div className={classes.root}>{listTabs}</div>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '7.5%',
    // justifyContent: 'center',
    // background: theme.palette.background[2],
    // borderTop: `${theme.palette.border.width[2]} solid ${theme.palette.border.color[5]}`,
    // borderBottom: `${theme.palette.border.width[2]} solid ${theme.palette.border.color[5]}`,
  },
}));

export default ListTabBar;
