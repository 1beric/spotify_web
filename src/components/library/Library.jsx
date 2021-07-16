import { useTheme } from '@material-ui/core';
import React from 'react';

import Pane from '../pane/Pane';

const Library = () => {
  const elements = []; //[<p>HELLO</p>, <button />, <input />];

  const theme = useTheme();

  return (
    <Pane
      rootStyle={{ backgroundColor: theme.palette.background[1] }}
      title='Library'
      collapseTo='left'
    >
      {elements}
    </Pane>
  );
};

export default Library;
