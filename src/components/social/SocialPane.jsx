import { useTheme } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pane from '../pane/Pane';
import selectors from '../../store/selectors';
import actions from '../../store/actions';

const SocialPane = () => {
  // const friends = useSelector(selectors.social.friends);
  const collapsed = useSelector(selectors.social.collapsed);
  const width = useSelector(selectors.social.paneWidth);
  const friends = useSelector(selectors.data.friends);

  const dispatch = useDispatch();

  const setCollapsed = (value) =>
    dispatch(actions.social.set({ collapsed: value }));

  const setWidth = (value) => {
    if (value) dispatch(actions.social.set({ paneWidth: value }));
  };

  useEffect(() => {
    dispatch(
      actions.social.set({
        friends: [
          { username: 'jessicadavis1972', name: 'Jess Davis' },
          { username: 'adamwwwwwww', name: 'Adam Wawawono' },
          { username: 'xxapplexx', name: 'Anonymous mouse' },
          { username: 'sarahpaulsonss', name: 'Sarah Paulson' },
          { username: 'winters123', name: 'George Winters' },
        ],
      }),
    );
    return () => {};
  }, []);

  const theme = useTheme();

  return (
    <Pane
      rootStyle={{ backgroundColor: theme.palette.background[1] }}
      title='Social'
      collapseTo='right'
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      width={width}
      resize={(event, { size: { width } }) => setWidth(width)}
    >
      {/* {elements} */}
    </Pane>
  );
};

export default SocialPane;
