import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { ResizableBox } from 'react-resizable';
import { useSelector } from 'react-redux';

import PaneHeader from '../paneHeader/PaneHeader';
import CollapseBar from './CollapseBar';
import selectors from '../../store/selectors';

const Pane = ({
  children,
  rootStyle,
  innerStyle,
  headerStyle,
  title,
  collapseTo,
  collapsed,
  setCollapsed,
  width,
  resize,
}) => {
  //#region local state

  const screenSize = useSelector(selectors.settings.screenSize);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  //#endregion

  //#region callbacks

  const collapsePane = useCallback(() => {
    setCollapsed(true);
  }, [setCollapsed]);

  const expandPane = useCallback(() => {
    setCollapsed(false);
  }, [setCollapsed]);

  //#endregion

  //#region classes & styles

  const jssProps = {
    rootStyle: rootStyle,
    innerStyle: innerStyle,
    collapsed: collapsed,
  };
  const classes = useStyles(jssProps);

  //#endregion

  //#region rendering

  if (collapsed) {
    const collapsedPane = (
      <CollapseBar to={collapseTo} collapseClicked={expandPane} />
    );
    return <div className={classes.collapsedRoot}>{collapsedPane}</div>;
  }

  const header = title && <PaneHeader title={title} style={headerStyle} />;

  const collapseBar = collapseTo && (
    <div>
      <div
        className={classes[collapseTo]}
        onMouseDown={({ clientX, clientY }) => {
          setMousePos({
            x: clientX,
            y: clientY,
          });
        }}
        onClick={({ clientX, clientY }) => {
          const distSqr =
            (clientX - mousePos.x) ** 2 + (clientY - mousePos.y) ** 2;
          if (distSqr < 25) collapsePane();
        }}
      />
    </div>
    // <CollapseHandle to={collapseTo} collapseClicked={collapsePane} />
  );

  const resizeHandles = [];
  switch (collapseTo) {
    case 'left':
      resizeHandles.push('e');
      break;
    case 'right':
      resizeHandles.push('w');
      break;
    case 'top':
      resizeHandles.push('s');
      break;
    case 'bottom':
      resizeHandles.push('n');
      break;
    default:
      break;
  }
  const middle = (
    <>
      {header}
      {children}
    </>
  );
  if (!collapseTo) <div className={classes.root}>{middle}</div>;
  return (
    <ResizableBox
      className={classes.root}
      minConstraints={[240, 0]}
      maxConstraints={[screenSize.width * 0.4, Infinity]}
      resizeHandles={resizeHandles}
      axis={collapseTo === 'left' || collapseTo === 'right' ? 'x' : 'y'}
      handle={collapseBar}
      width={width || 240}
      height={screenSize.height * 0.91}
      onResize={resize}
    >
      <div className={classes.inner}>{middle}</div>
    </ResizableBox>
  );
  //#endregion
};

//#region useStyles
const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    background: theme.palette.background[1],
    height: '100%',
    ...props.rootStyle,
    position: 'relative',
    flexShrink: 0,
  }),
  inner: (props) => ({
    height: '100%',
    padding: '0px 32px',
    ...props.innerStyle,
  }),
  collapsedRoot: (props) => ({
    background: theme.palette.background[1],
    ...props.rootStyle,
    position: 'relative',
    width: '8px',
    height: '100%',
  }),
  left: {
    position: 'absolute',
    top: '0px',
    right: 0,
    width: 8, // (props) => props.size,
    height: '100%',
    borderRight: `${theme.palette.border.width[2]} solid transparent`,
    transitionProperty: 'border-color',
    transitionDuration: '100ms',
    cursor: 'col-resize',
    '&:hover': {
      borderColor: theme.palette.border.color[4],
    },
  },
  right: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '8px',
    height: '100%',
    borderLeft: `${theme.palette.border.width[2]} solid transparent`,
    transitionProperty: 'border-color',
    transitionDuration: '100ms',
    cursor: 'col-resize',
    '&:hover': {
      borderColor: theme.palette.border.color[4],
    },
  },
}));

//#endregion

//#region props

//#endregion

export default Pane;
