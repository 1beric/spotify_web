import { makeStyles } from '@material-ui/core';
import React from 'react';

const Highlight = ({ title, image, onClicked, size, fontIndex }) => {
  const jssProps = {
    size: size,
    fontIndex: fontIndex,
  };
  const classes = useStyles(jssProps);

  return (
    <div className={classes.root} onClick={onClicked}>
      {image && <img className={classes.img} src={image} alt={title} />}
      <div className={classes.block1} />
      <p className={classes.text}>{title}</p>
      <div className={classes.block2} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    alignItems: 'center',
    position: 'relative',
    height: ({ size }) => size,
    width: 'fit-content',
    backgroundColor: theme.palette.background[3],
    borderRadius: theme.palette.border.radius[4],
    cursor: 'pointer',
    '&:hover > $text': {
      color: theme.font.color[1],
    },
    '&:hover > $img': {
      width: '100%',
      opacity: 0.4,
      filter: 'blur(8px)',
    },
    '&:hover > $block1': {
      width: ({ size }) => size / 2,
    },
    '&:hover > $block2': {
      width: ({ size }) => size / 2,
    },
  },
  img: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    flexShrink: 0,
    width: ({ size }) => size,
    filter: 'blur(0px)',
    transition: 'width 1s, opacity 1s, filter 1s',
  },
  block1: {
    flexShrink: 0,
    width: ({ size }) => size,
    transition: 'width 1s',
  },
  block2: {
    flexShrink: 0,
    width: () => 0,
    transition: 'width 1s',
  },
  text: {
    flexShrink: 0,
    display: 'block',
    fontSize: ({ fontIndex }) => theme.font.size[fontIndex],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[400],
    color: theme.font.color[4],
    wordWrap: 'wrap',
    padding: ({ size }) => `0 ${Math.sqrt(size)}px`,
    transition: 'transform 1s, width 1s',
    zIndex: 2,
  },
}));

export default Highlight;
