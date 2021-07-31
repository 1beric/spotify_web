import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const TableRow = ({
  values,
  onSelected,
  selected,
  hoverable,
  rootStyle,
  textStyle,
}) => {
  const jssProps = {
    hoverable: hoverable,
    rootStyle: rootStyle,
    textStyle: textStyle,
  };
  const classes = useStyles(jssProps);

  const rootClass = [selected ? classes.selectedRoot : classes.root].join(' ');

  return (
    <div>
      <div className={rootClass} onClick={onSelected}>
        <div className={`${classes.text} ${classes.value1}`}>{values[0]}</div>
        <div className={`${classes.text} ${classes.value2}`}>{values[1]}</div>
        <div className={`${classes.text} ${classes.value3}`}>{values[2]}</div>
        <div className={`${classes.text} ${classes.value4}`}>{values[3]}</div>
        {/* <div className={`${classes.text} ${classes.value5}`}>{values[4]}</div> */}
        <div className={`${classes.text} ${classes.value6}`}>{values[4]}</div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: ({ rootStyle, hoverable }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100% - 16px)',
    padding: 8,
    borderRadius: theme.palette.border.radius[3],
    '&:hover': hoverable && {
      backgroundColor: theme.palette.background[3],
    },
    ...rootStyle,
  }),
  selectedRoot: {
    // height: '4%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100% - 16px)',
    padding: 8,
    backgroundColor: theme.palette.background[4],
    borderRadius: theme.palette.border.radius[3],
  },
  cell: {},
  value1: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '5%',
  },
  value2: {
    flexShrink: 0,
    margin: '0px 8px',
    width: '45%',
    textAlign: 'center',
  },
  value3: {
    flexShrink: 0,
    margin: '0px 8px',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '10%',
  },
  value4: {
    flexShrink: 0,
    margin: '0px 8px',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '10%',
  },
  value5: {
    flexShrink: 0,
    margin: '0px 8px',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '10%',
  },
  value6: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '10%',
  },
  text: ({ textStyle }) => ({
    display: 'flex',
    fontSize: theme.font.size[3],
    fontFamily: theme.font.family.subtitle,
    fontWeight: theme.font.weight[400],
    color: theme.font.color[4],
    whiteSpace: 'nowrap',
    ...textStyle,
  }),
}));

const propTypes = {
  values: [],
  onSelected: PropTypes.func,
  selected: PropTypes.boolean,
  hoverable: PropTypes.boolean,
  rootStyle: {},
  textStyle: {},
};

const defaultProps = {
  values: [],
  onSelected: () => {},
  selected: false,
  hoverable: true,
  rootStyle: {},
  textStyle: {},
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
