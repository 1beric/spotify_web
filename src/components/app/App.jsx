import './App.css';
import Library from '../library/Library';
import LightTheme from '../themeProviders/LightTheme';
import DarkTheme from '../themeProviders/DarkTheme';
import SocialPane from '../social/SocialPane';
import { makeStyles } from '@material-ui/core';
import BottomNav from '../bottomMedia/BottomMediaBar';
import ContentPage from '../contentPane/ContentPane';

function App() {
  const isDarkMode = true;
  const CustomThemeProvider = isDarkMode ? DarkTheme : LightTheme;

  const classes = useStyles();

  return (
    <CustomThemeProvider>
      <div className={classes.root}>
        <div className={classes.row}>
          <Library />
          <ContentPage />
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
  },
}));

export default App;
