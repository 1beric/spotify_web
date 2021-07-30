import { makeStyles, useTheme } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import React from 'react';

const ListTab = ({ title, onSelect, selected }) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.root} ${
        selected ? classes.selected : classes.unselected
      }`}
      onClick={onSelect}
    >
      {title.toUpperCase()}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    borderWidth: 0,
    borderTopWidth: theme.palette.border.width[4],
    borderStyle: 'solid',
    borderColor: 'transparent',
    fontSize: theme.font.size[2],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[400],
    color: theme.font.color[4],
    padding: '12px',
    cursor: 'pointer',
    '&:hover': {
      color: theme.font.color[1],
    },
  },
  selected: {
    backgroundColor: theme.palette.background[2],
    borderColor: theme.palette.primary.light,
  },
  unselected: {
    borderColor: theme.palette.primary.dark,
  },
}));

export default ListTab;
