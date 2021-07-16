import { useTheme } from '@material-ui/core';
import React from 'react';

import Pane from '../pane/Pane';

const SocialPane = () => {
  // const friends = [];

  const theme = useTheme();

  return (
    <Pane
      rootStyle={{ backgroundColor: theme.palette.background[1] }}
      title='Social'
      collapseTo='right'
    >
      {/* {elements} */}
    </Pane>
  );
};

export default SocialPane;
