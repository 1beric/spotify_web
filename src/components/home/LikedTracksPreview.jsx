import { makeStyles } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';

import selectors from '../../store/selectors';
import actions from '../../store/actions';
import TrackHighlight from '../track/TrackMediumHighlight';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
// import actions from '../../store/actions';

const LikedTracksPreview = () => {
  // const friends = [];

  let amt = 20;
  const tracks = useSelector(selectors.data.tracks).slice(0, amt);
  amt = tracks.length;

  const [scrollPos, setScrollPos] = useState(0);
  const scrollRef = useRef(null);

  const dispatch = useDispatch();

  const likedTracksClicked = () =>
    dispatch(
      actions.centerContent.setCurrentPage({
        type: 'liked_tracks',
      }),
    );

  const handleScroll = (direction) => {
    if (scrollRef.current && direction === 'left') {
      setScrollPos((amt) => {
        scrollRef.current.scrollLeft = (Math.round(amt / 272) - 1) * 272;
        return scrollRef.current.scrollLeft;
      });
    } else if (scrollRef) {
      setScrollPos((amt) => {
        scrollRef.current.scrollLeft = (Math.round(amt / 272) + 1) * 272;
        return scrollRef.current.scrollLeft;
      });
    }
  };

  const onUserScroll = () => {
    if (scrollRef.current) setScrollPos(scrollRef.current.scrollLeft);
  };

  const classes = useStyles();

  const highlights = [];
  for (let index = 0; index < amt / 2; index++) {
    const trackTop = tracks[index];
    const trackBot = tracks[index + amt / 2];
    highlights.push(
      <div
        className={classes.highlightStack}
        key={`liked_preview_${trackTop.id}`}
      >
        <TrackHighlight
          track={trackTop}
          rootStyle={{
            marginLeft: index === 0 ? 0 : 8,
            marginRight: index + amt / 2 === tracks.length - 1 ? 0 : 8,
            marginBottom: 16,
          }}
        />
        <TrackHighlight
          track={trackBot}
          rootStyle={{
            marginLeft: index === 0 ? 0 : 8,
            marginRight: index + amt / 2 === tracks.length - 1 ? 0 : 8,
          }}
        />
      </div>,
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>
          <FavoriteIcon
            id="liked_icon"
            className={classes.icon}
            onClick={likedTracksClicked}
          />
          <h2 className={classes.titleText} onClick={likedTracksClicked}>
            Liked Tracks
          </h2>
        </div>
        <div className={classes.title}>
          <ArrowLeft
            className={classes.navArrow}
            onClick={() => handleScroll('left')}
          />
          <ArrowRight
            className={classes.navArrow}
            onClick={() => handleScroll('right')}
          />
        </div>
      </div>
      <div
        className={classes.highlights}
        ref={scrollRef}
        onScroll={onUserScroll}
      >
        {highlights}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.background[3],
    borderRadius: theme.palette.border.radius[5],
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.font.size[6],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[400],
    color: theme.font.color[4],
    padding: 16,
    paddingBottom: 0,
    cursor: 'pointer',
    '&:hover > h2': {
      color: theme.font.color[1],
    },
    '&:hover > #liked_icon': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  titleText: {
    flexShrink: 0,
    fontSize: theme.font.size[6],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[400],
    color: theme.font.color[4],
  },
  icon: {
    flexShrink: 0,
    backgroundColor: theme.palette.background[6],
    padding: 8,
    marginRight: 16,
    borderRadius: '50%',
    transition: 'background-color .2s',
  },
  navArrow: {
    flexShrink: 0,
    backgroundColor: theme.palette.background[6],
    padding: 8,
    marginRight: 16,
    borderRadius: '50%',
    transition: 'background-color .2s',
    '&:hover': {
      backgroundColor: theme.palette.background[7],
    },
  },
  highlights: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    margin: 16,
  },
  highlightStack: {
    display: 'flex',
    flexShrink: 0,
    flexDirection: 'column',
  },
}));

export default LikedTracksPreview;
