import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import PaneHeader from '../paneHeader/PaneHeader';
import CollapseBar from './CollapseBar';

const Pane = ({ children, rootStyle, title, collapseTo }) => {
  //#region local state

  const [collapsed, setCollapsed] = useState(false);

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

  const header = title && <PaneHeader title={title} />;

  const collapseBar = collapseTo && (
    <CollapseBar to={collapseTo} collapseClicked={collapsePane} />
  );

  return (
    <div className={classes.root}>
      {header}
      {collapseBar}
      {children}
    </div>
  );
  //#endregion
};

//#region useStyles
const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    background: theme.palette.background[1],
    minWidth: '10%',
    width: '25%',
    maxWidth: '100%',
    height: '100%',
    ...props.rootStyle,
    position: 'relative',
  }),
  collapsedRoot: (props) => ({
    background: theme.palette.background[1],
    ...props.rootStyle,
    position: 'relative',
    width: '8px',
    height: '100%',
  }),
}));

//#endregion

//#region props

//#endregion

export default Pane;
