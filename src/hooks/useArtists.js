import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../store/actions';

const values = [
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/04BsVprJtIhl2C4fgPEz4W',
    },
    followers: {
      href: null,
      total: 17076,
    },
    genres: [],
    href: 'https://api.spotify.com/v1/artists/04BsVprJtIhl2C4fgPEz4W',
    id: '04BsVprJtIhl2C4fgPEz4W',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273ce8df4288c66cd5aca23734b',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e02ce8df4288c66cd5aca23734b',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d00004851ce8df4288c66cd5aca23734b',
        width: 64,
      },
    ],
    name: 'Layla',
    popularity: 34,
    type: 'artist',
    uri: 'spotify:artist:04BsVprJtIhl2C4fgPEz4W',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/07EcmJpfAday8xGkslfanE',
    },
    followers: {
      href: null,
      total: 595926,
    },
    genres: ['afrofuturism', 'hip hop', 'lgbtq+ hip hop', 'rap'],
    href: 'https://api.spotify.com/v1/artists/07EcmJpfAday8xGkslfanE',
    id: '07EcmJpfAday8xGkslfanE',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5ebfbd82e545a207383af447959',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab67616100005174fbd82e545a207383af447959',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f178fbd82e545a207383af447959',
        width: 160,
      },
    ],
    name: 'Kevin Abstract',
    popularity: 65,
    type: 'artist',
    uri: 'spotify:artist:07EcmJpfAday8xGkslfanE',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/0ubGY2CcC0tvR0eE6hJaT8',
    },
    followers: {
      href: null,
      total: 90646,
    },
    genres: [
      'ann arbor indie',
      'bedroom soul',
      'chill r&b',
      'indie cafe pop',
      'indie pop',
    ],
    href: 'https://api.spotify.com/v1/artists/0ubGY2CcC0tvR0eE6hJaT8',
    id: '0ubGY2CcC0tvR0eE6hJaT8',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5eba616ff51b2f86235e0f537a5',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab67616100005174a616ff51b2f86235e0f537a5',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f178a616ff51b2f86235e0f537a5',
        width: 160,
      },
    ],
    name: 'Charlie Burg',
    popularity: 60,
    type: 'artist',
    uri: 'spotify:artist:0ubGY2CcC0tvR0eE6hJaT8',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/15MP9KaeGLPI7AjVBwC0A5',
    },
    followers: {
      href: null,
      total: 96,
    },
    genres: [],
    href: 'https://api.spotify.com/v1/artists/15MP9KaeGLPI7AjVBwC0A5',
    id: '15MP9KaeGLPI7AjVBwC0A5',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5eb2f1f2308491dec3352d84e66',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab676161000051742f1f2308491dec3352d84e66',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f1782f1f2308491dec3352d84e66',
        width: 160,
      },
    ],
    name: 'Bellah',
    popularity: 7,
    type: 'artist',
    uri: 'spotify:artist:15MP9KaeGLPI7AjVBwC0A5',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/1dy5WNgIKQU6ezkpZs4y8z',
    },
    followers: {
      href: null,
      total: 267916,
    },
    genres: ['alt z', 'bedroom pop', 'indie cafe pop', 'indie pop', 'pop'],
    href: 'https://api.spotify.com/v1/artists/1dy5WNgIKQU6ezkpZs4y8z',
    id: '1dy5WNgIKQU6ezkpZs4y8z',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5eb8d56fd82ddbca080dfa615f8',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab676161000051748d56fd82ddbca080dfa615f8',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f1788d56fd82ddbca080dfa615f8',
        width: 160,
      },
    ],
    name: 'ROLE MODEL',
    popularity: 67,
    type: 'artist',
    uri: 'spotify:artist:1dy5WNgIKQU6ezkpZs4y8z',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/1fZpYWNWdL5Z3wrDtISFUH',
    },
    followers: {
      href: null,
      total: 405341,
    },
    genres: [
      'austin americana',
      'austindie',
      'deep new americana',
      'indie folk',
      'new americana',
      'stomp and holler',
    ],
    href: 'https://api.spotify.com/v1/artists/1fZpYWNWdL5Z3wrDtISFUH',
    id: '1fZpYWNWdL5Z3wrDtISFUH',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5eb09ee68605f71dee374718b08',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab6761610000517409ee68605f71dee374718b08',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f17809ee68605f71dee374718b08',
        width: 160,
      },
    ],
    name: 'Shakey Graves',
    popularity: 65,
    type: 'artist',
    uri: 'spotify:artist:1fZpYWNWdL5Z3wrDtISFUH',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/1iH2Yx2Ea0kZ0zKI3Nlk30',
    },
    followers: {
      href: null,
      total: 103261,
    },
    genres: ['pop rap', 'sad rap'],
    href: 'https://api.spotify.com/v1/artists/1iH2Yx2Ea0kZ0zKI3Nlk30',
    id: '1iH2Yx2Ea0kZ0zKI3Nlk30',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5eb6107ce61357dde78da6b52b8',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab676161000051746107ce61357dde78da6b52b8',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f1786107ce61357dde78da6b52b8',
        width: 160,
      },
    ],
    name: 'Goody Grace',
    popularity: 64,
    type: 'artist',
    uri: 'spotify:artist:1iH2Yx2Ea0kZ0zKI3Nlk30',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/1kDGbuxWknIKx4FlgWxiSp',
    },
    followers: {
      href: null,
      total: 745280,
    },
    genres: [
      'alternative pop rock',
      'modern alternative rock',
      'modern rock',
      'rock',
    ],
    href: 'https://api.spotify.com/v1/artists/1kDGbuxWknIKx4FlgWxiSp',
    id: '1kDGbuxWknIKx4FlgWxiSp',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5ebcae342353c20324440b9e453',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab67616100005174cae342353c20324440b9e453',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f178cae342353c20324440b9e453',
        width: 160,
      },
    ],
    name: 'Nothing But Thieves',
    popularity: 71,
    type: 'artist',
    uri: 'spotify:artist:1kDGbuxWknIKx4FlgWxiSp',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/1t20wYnTiAT0Bs7H1hv9Wt',
    },
    followers: {
      href: null,
      total: 898968,
    },
    genres: ['electropop', 'indie poptimism', 'modern rock', 'pop'],
    href: 'https://api.spotify.com/v1/artists/1t20wYnTiAT0Bs7H1hv9Wt',
    id: '1t20wYnTiAT0Bs7H1hv9Wt',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5eb144917cfd37b881bb9142924',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab67616100005174144917cfd37b881bb9142924',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f178144917cfd37b881bb9142924',
        width: 160,
      },
    ],
    name: 'EDEN',
    popularity: 70,
    type: 'artist',
    uri: 'spotify:artist:1t20wYnTiAT0Bs7H1hv9Wt',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/24qqDoA4BBXVnPOdHBjT54',
    },
    followers: {
      href: null,
      total: 43657,
    },
    genres: ['cincinnati rap', 'emo rap', 'sad rap'],
    href: 'https://api.spotify.com/v1/artists/24qqDoA4BBXVnPOdHBjT54',
    id: '24qqDoA4BBXVnPOdHBjT54',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5eb4dbb80fa8f58b51a4ad69922',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab676161000051744dbb80fa8f58b51a4ad69922',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f1784dbb80fa8f58b51a4ad69922',
        width: 160,
      },
    ],
    name: 'Jack Kays',
    popularity: 60,
    type: 'artist',
    uri: 'spotify:artist:24qqDoA4BBXVnPOdHBjT54',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/26plsJBmW5se3wurhwzaEK',
    },
    followers: {
      href: null,
      total: 172283,
    },
    genres: [],
    href: 'https://api.spotify.com/v1/artists/26plsJBmW5se3wurhwzaEK',
    id: '26plsJBmW5se3wurhwzaEK',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b27301ec392dd41fd0df6e229c06',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e0201ec392dd41fd0df6e229c06',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d0000485101ec392dd41fd0df6e229c06',
        width: 64,
      },
    ],
    name: 'Eden Project',
    popularity: 55,
    type: 'artist',
    uri: 'spotify:artist:26plsJBmW5se3wurhwzaEK',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/28dDyPkw069ypiqC78dhRb',
    },
    followers: {
      href: null,
      total: 83612,
    },
    genres: ['indie anthem-folk'],
    href: 'https://api.spotify.com/v1/artists/28dDyPkw069ypiqC78dhRb',
    id: '28dDyPkw069ypiqC78dhRb',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5ebc2f04123810060c8fee88588',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab67616100005174c2f04123810060c8fee88588',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f178c2f04123810060c8fee88588',
        width: 160,
      },
    ],
    name: 'Oliver Riot',
    popularity: 47,
    type: 'artist',
    uri: 'spotify:artist:28dDyPkw069ypiqC78dhRb',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/2G8UkPZnQ8i78L8TfqP1X6',
    },
    followers: {
      href: null,
      total: 268601,
    },
    genres: ['alt z', 'indie cafe pop', 'indie pop', 'modern rock', 'pop'],
    href: 'https://api.spotify.com/v1/artists/2G8UkPZnQ8i78L8TfqP1X6',
    id: '2G8UkPZnQ8i78L8TfqP1X6',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5eb00d052516c58837fe4532a28',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab6761610000517400d052516c58837fe4532a28',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f17800d052516c58837fe4532a28',
        width: 160,
      },
    ],
    name: 'Christian Leave',
    popularity: 67,
    type: 'artist',
    uri: 'spotify:artist:2G8UkPZnQ8i78L8TfqP1X6',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/2cFrymmkijnjDg9SS92EPM',
    },
    followers: {
      href: null,
      total: 4221445,
    },
    genres: ['electropop', 'modern rock', 'pop', 'pop rap'],
    href: 'https://api.spotify.com/v1/artists/2cFrymmkijnjDg9SS92EPM',
    id: '2cFrymmkijnjDg9SS92EPM',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5ebdf8b060d0ba6822e17e79b12',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab67616100005174df8b060d0ba6822e17e79b12',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f178df8b060d0ba6822e17e79b12',
        width: 160,
      },
    ],
    name: 'blackbear',
    popularity: 87,
    type: 'artist',
    uri: 'spotify:artist:2cFrymmkijnjDg9SS92EPM',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/2hR4h1Cao2ueuI7Cx9c7V8',
    },
    followers: {
      href: null,
      total: 2103864,
    },
    genres: ['bedroom pop', 'indie pop', 'modern rock'],
    href: 'https://api.spotify.com/v1/artists/2hR4h1Cao2ueuI7Cx9c7V8',
    id: '2hR4h1Cao2ueuI7Cx9c7V8',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5ebdb84295167720ad0241de31d',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab67616100005174db84295167720ad0241de31d',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f178db84295167720ad0241de31d',
        width: 160,
      },
    ],
    name: 'Cavetown',
    popularity: 80,
    type: 'artist',
    uri: 'spotify:artist:2hR4h1Cao2ueuI7Cx9c7V8',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/2kGBy2WHvF0VdZyqiVCkDT',
    },
    followers: {
      href: null,
      total: 623111,
    },
    genres: ['indie folk', 'indie pop', 'indie rock', 'stomp and holler'],
    href: 'https://api.spotify.com/v1/artists/2kGBy2WHvF0VdZyqiVCkDT',
    id: '2kGBy2WHvF0VdZyqiVCkDT',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5ebcb1d98e8066f904971d33455',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab67616100005174cb1d98e8066f904971d33455',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f178cb1d98e8066f904971d33455',
        width: 160,
      },
    ],
    name: 'Father John Misty',
    popularity: 65,
    type: 'artist',
    uri: 'spotify:artist:2kGBy2WHvF0VdZyqiVCkDT',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/2o8lOQRjzsSC8UdbNN88HN',
    },
    followers: {
      href: null,
      total: 279913,
    },
    genres: ['pop rap'],
    href: 'https://api.spotify.com/v1/artists/2o8lOQRjzsSC8UdbNN88HN',
    id: '2o8lOQRjzsSC8UdbNN88HN',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5eb8de2f56a5b04fa97c5c6ab9f',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab676161000051748de2f56a5b04fa97c5c6ab9f',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f1788de2f56a5b04fa97c5c6ab9f',
        width: 160,
      },
    ],
    name: 'mansionz',
    popularity: 60,
    type: 'artist',
    uri: 'spotify:artist:2o8lOQRjzsSC8UdbNN88HN',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/2xe8IXgCTpwHE3eA9hTs4n',
    },
    followers: {
      href: null,
      total: 967380,
    },
    genres: [
      'alternative r&b',
      'art pop',
      'electropop',
      'indie poptimism',
      'pop',
      'vapor soul',
    ],
    href: 'https://api.spotify.com/v1/artists/2xe8IXgCTpwHE3eA9hTs4n',
    id: '2xe8IXgCTpwHE3eA9hTs4n',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5eb325d3c5d2dc1ce9d6067b4f4',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab67616100005174325d3c5d2dc1ce9d6067b4f4',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f178325d3c5d2dc1ce9d6067b4f4',
        width: 160,
      },
    ],
    name: 'BANKS',
    popularity: 67,
    type: 'artist',
    uri: 'spotify:artist:2xe8IXgCTpwHE3eA9hTs4n',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/2zPdY1UXnOn4PC4GpoOkPm',
    },
    followers: {
      href: null,
      total: 44298,
    },
    genres: ['bedroom pop'],
    href: 'https://api.spotify.com/v1/artists/2zPdY1UXnOn4PC4GpoOkPm',
    id: '2zPdY1UXnOn4PC4GpoOkPm',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5ebaa42b260cd5a9bcfbf8c34b0',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab67616100005174aa42b260cd5a9bcfbf8c34b0',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f178aa42b260cd5a9bcfbf8c34b0',
        width: 160,
      },
    ],
    name: 'DYSN',
    popularity: 46,
    type: 'artist',
    uri: 'spotify:artist:2zPdY1UXnOn4PC4GpoOkPm',
  },
  {
    external_urls: {
      spotify: 'https://open.spotify.com/artist/382aq8Pij5V2nE2JMHMoxl',
    },
    followers: {
      href: null,
      total: 682451,
    },
    genres: ['indie pop rap', 'pop rap'],
    href: 'https://api.spotify.com/v1/artists/382aq8Pij5V2nE2JMHMoxl',
    id: '382aq8Pij5V2nE2JMHMoxl',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5ebaaa2420069d10e2c70cfcacf',
        width: 640,
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab67616100005174aaa2420069d10e2c70cfcacf',
        width: 320,
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f178aaa2420069d10e2c70cfcacf',
        width: 160,
      },
    ],
    name: 'Hoodie Allen',
    popularity: 64,
    type: 'artist',
    uri: 'spotify:artist:382aq8Pij5V2nE2JMHMoxl',
  },
];

const useArtists = () => {
  const [fetched, setFetched] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.data.setArtists(values));
    setFetched(true);
  }, []);

  return fetched;
};

export default useArtists;
