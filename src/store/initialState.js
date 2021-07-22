const state = {
  library: {
    paneWidth: 240,
    collapsed: false,
  },
  social: {
    paneWidth: 240,
    collapsed: false,
  },
  data: {
    playlists: [],
    artists: [],
    albums: [],
    tracks: [],
    friends: [],
  },
  centerContent: {
    currentPage: {
      type: 'home',
    },
    history: {
      back: [],
      forward: [],
    },
  },
  media: {
    currentSong: null,
    playing: false,
    userQueue: [],
    playQueue: [],
    history: [],
    volume: 100,
    muted: false,
    shuffling: false,
    repeating: 'none', // ['none', 'one', 'all']
  },
  settings: {
    isDarkTheme: true,
    collapsedPaneWidth: 8,
    screenSize: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  },
};

export default state;
