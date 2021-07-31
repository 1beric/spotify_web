import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import selectors from '../../store/selectors';
import ListTab from '../listTab/ListTab';
import actions from '../../store/actions';

const LikedAlbums = () => {
  const classes = useStyles();

  return <div className={classes.root}>{/*  */}</div>;
};

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontSize: theme.font.size[8],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[400],
    color: theme.font.color[4],
    padding: 16,
  },
}));

export default LikedAlbums;
