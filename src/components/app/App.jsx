import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Library from '../library/Library';
import LightTheme from '../themeProviders/LightTheme';
import DarkTheme from '../themeProviders/DarkTheme';
import SocialPane from '../social/SocialPane';
import BottomNav from '../bottomMedia/BottomMediaBar';
import CenterContent from '../centerContent/CenterContent';

import actions from '../../store/actions';
import usePlaylists from '../library/usePlaylists';
import useArtists from '../library/useArtists';
import useAlbums from '../library/useAlbums';
import useTracks from '../library/useTracks';
import selectors from '../../store/selectors';

function App() {


  const isDarkMode = useSelector(selectors.settings.isDarkTheme);

  const dispatch = useDispatch();

  useEffect(() => {
    const resizeHandler = () => {
      dispatch(
        actions.settings.set({
          screenSize: {
            width: window.innerWidth,
            height: window.innerHeight,
          },
        }),
      );
    };
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  // initial fetches
  usePlaylists();
  useArtists();
  useAlbums();
  useTracks();

  const jssProps = {};
  const classes = useStyles(jssProps);

  const CustomThemeProvider = isDarkMode ? DarkTheme : LightTheme;

  return (
    <CustomThemeProvider>
      <div className={classes.root}>
        <div className={classes.row}>
          <Library />
          <CenterContent />
          <SocialPane />
        </div>
        <BottomNav />
      </div>
    </CustomThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
  },
}));

export default App;
