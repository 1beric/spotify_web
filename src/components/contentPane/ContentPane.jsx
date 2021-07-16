import { useTheme } from '@material-ui/core';
import React from 'react';

import Pane from '../pane/Pane';

const ContentPane = () => {
  // const friends = [];

  const theme = useTheme();

  return (
    <Pane
      rootStyle={{
        backgroundColor: theme.palette.background[2],
        width: '50%',
      }}
    >
      {/* {elements} */}
    </Pane>
  );
};

export default ContentPane;
