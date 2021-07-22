import { useTheme } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pane from '../pane/Pane';
import selectors from '../../store/selectors';
import Home from '../home/Home';
import TopNav from '../topNav/TopNav';
import ListTabItem from '../listTab/ListTabItem';
import ListTab from '../listTab/ListTab';
import TrackToAlbum from '../album/TrackToAlbum';
import Album from '../album/Album';
// import actions from '../../store/actions';

const CenterContent = () => {
  // const friends = [];

  const paneWidth = useSelector(selectors.centerContent.paneWidth);
  const width = useSelector(selectors.centerContent.paneWidth);
  const currentPage = useSelector(selectors.centerContent.currentPage);

  let pageComponent = null;
  switch (currentPage.type) {
    case 'home':
      pageComponent = <Home />;
      break;
    // case 'library':
    //   pageComponent = 'LIBRARY';
    //   break;
    case 'track':
      pageComponent = <TrackToAlbum track={currentPage} />;
      break;
    case 'album':
      pageComponent = <Album album={currentPage} />;
      break;
    default:
      pageComponent = (
        <div style={{ overflowY: 'auto', height: '90%' }}>
          <ListTab title='NOT SUPPORTED YET' />
          {Object.keys(currentPage).map((key) => {
            const value =
              typeof currentPage[key] === 'object'
                ? JSON.stringify(currentPage[key])
                : currentPage[key];
            const title = `${key}: ${value}`;
            return <ListTabItem item={{ name: title }} />;
          })}
        </div>
      );
      break;
  }

  const setWidth = (value) => {};
  const theme = useTheme();

  return (
    <Pane
      rootStyle={{
        backgroundColor: theme.palette.background[2],
        width: paneWidth,
      }}
      collapsed={false}
      width={width}
      maxWidth={width}
      resize={(event, { width }) => setWidth(width)}
    >
      {/* top nav */}
      <TopNav />
      {pageComponent}
    </Pane>
  );
};

export default CenterContent;
