import { makeStyles, useTheme } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import React from 'react';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import PersonIcon from '@material-ui/icons/Person';
import AlbumIcon from '@material-ui/icons/Album';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

const ListTab = ({ title, onSelect, selected }) => {
  const classes = useStyles();
  let content = title.toUpperCase();
  if (title === 'playlists') content = <SubscriptionsIcon />;
  if (title === 'tracks') content = <AudiotrackIcon />;
  if (title === 'albums') content = <AlbumIcon />;
  if (title === 'artists') content = <PersonIcon />;

  return (
    <div
      className={`${classes.root} ${
        selected ? classes.selected : classes.unselected
      }`}
      onClick={onSelect}
    >
      {content}
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
