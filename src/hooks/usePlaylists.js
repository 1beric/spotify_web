import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../store/actions';

const values = [
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/26Dm0xIRg5vuz4qxnKlTC5',
    },
    href: 'https://api.spotify.com/v1/playlists/26Dm0xIRg5vuz4qxnKlTC5',
    id: '26Dm0xIRg5vuz4qxnKlTC5',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebbacb498a9c6149799f584e8db',
        width: null,
      },
    ],
    name: 'GOD',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MjEsNWY2N2M2YzEyN2Q2NWE1OTZjNWYwYzMxZDE0ODYwZmRlYzMzMWVjYQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/26Dm0xIRg5vuz4qxnKlTC5/tracks',
      total: 18,
    },
    type: 'playlist',
    uri: 'spotify:playlist:26Dm0xIRg5vuz4qxnKlTC5',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/1gQuf0RhSR24g5Qcv7GaBX',
    },
    href: 'https://api.spotify.com/v1/playlists/1gQuf0RhSR24g5Qcv7GaBX',
    id: '1gQuf0RhSR24g5Qcv7GaBX',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb3081a8f2b586cab78ae2ba28',
        width: null,
      },
    ],
    name: '2021 SUM',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MTYwLDAyOTYxNDM2Njk4NjlkMjU0YWE0NzY2N2VjZTEwZTdiOTIxZjQxNDU=',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/1gQuf0RhSR24g5Qcv7GaBX/tracks',
      total: 186,
    },
    type: 'playlist',
    uri: 'spotify:playlist:1gQuf0RhSR24g5Qcv7GaBX',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/1trnpa0aCJANar4A8gXmHY',
    },
    href: 'https://api.spotify.com/v1/playlists/1trnpa0aCJANar4A8gXmHY',
    id: '1trnpa0aCJANar4A8gXmHY',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb3b5fb6f4de4aad0df5c63aad',
        width: null,
      },
    ],
    name: '2021 ALL',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MzA4LDdiY2EzNGNiMmU2ZDZiNmU5MmE3MmE2MWQ3ZWRhODQ0MWE3NDI3ODc=',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/1trnpa0aCJANar4A8gXmHY/tracks',
      total: 2785,
    },
    type: 'playlist',
    uri: 'spotify:playlist:1trnpa0aCJANar4A8gXmHY',
  },
  {
    collaborative: false,
    description: 'EDM',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/7Li2I1bN2L3IecLHpCFXlg',
    },
    href: 'https://api.spotify.com/v1/playlists/7Li2I1bN2L3IecLHpCFXlg',
    id: '7Li2I1bN2L3IecLHpCFXlg',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb93885ad3971720182b2b45eb',
        width: null,
      },
    ],
    name: '2021 GREEN',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'NCw4YjA1MGY5MmQyZjg3NjEzYWU5ODIwMzdmODRlZTQwNjg5YjliOGYz',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/7Li2I1bN2L3IecLHpCFXlg/tracks',
      total: 0,
    },
    type: 'playlist',
    uri: 'spotify:playlist:7Li2I1bN2L3IecLHpCFXlg',
  },
  {
    collaborative: false,
    description: 'DRIVE',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/7gmsvKHC5kzIxcarCCRVn6',
    },
    href: 'https://api.spotify.com/v1/playlists/7gmsvKHC5kzIxcarCCRVn6',
    id: '7gmsvKHC5kzIxcarCCRVn6',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb4f3f9ced7f403a5e1958e48f',
        width: null,
      },
    ],
    name: '2021 BLACK',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'NjIsYmExOGU1MjFlMmYyN2Q4MzQ5Y2IzN2I1ZDNlZjVmN2VmMWM5MmUxNQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/7gmsvKHC5kzIxcarCCRVn6/tracks',
      total: 58,
    },
    type: 'playlist',
    uri: 'spotify:playlist:7gmsvKHC5kzIxcarCCRVn6',
  },
  {
    collaborative: false,
    description: 'STUDY',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/1Q13z4EjPvheTc1Az0R2J2',
    },
    href: 'https://api.spotify.com/v1/playlists/1Q13z4EjPvheTc1Az0R2J2',
    id: '1Q13z4EjPvheTc1Az0R2J2',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb2644be19aa8fd67b207e113f',
        width: null,
      },
    ],
    name: '2021 WHITE',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'OCwzZWJjYjBkMjM4OTUxOTAxOGFiZjdhZDMwZDQxYzM4ODk2ZTZiMzEz',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/1Q13z4EjPvheTc1Az0R2J2/tracks',
      total: 13,
    },
    type: 'playlist',
    uri: 'spotify:playlist:1Q13z4EjPvheTc1Az0R2J2',
  },
  {
    collaborative: false,
    description: 'DANCE PARTY',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/0uAIJumuH69wa4vsU7PfUY',
    },
    href: 'https://api.spotify.com/v1/playlists/0uAIJumuH69wa4vsU7PfUY',
    id: '0uAIJumuH69wa4vsU7PfUY',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb4c1d991ffe570c0f03cb4900',
        width: null,
      },
    ],
    name: '2021 PURPLE',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MzksZGE4NWZhNTdkYWJkNDcyMjQ2ZTk3N2FmNDk0ZjQ5YjUwMDhkNjFmMg==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/0uAIJumuH69wa4vsU7PfUY/tracks',
      total: 35,
    },
    type: 'playlist',
    uri: 'spotify:playlist:0uAIJumuH69wa4vsU7PfUY',
  },
  {
    collaborative: false,
    description: 'HAPPY',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/2S9EyAjhI8J1QgXSRU7Bud',
    },
    href: 'https://api.spotify.com/v1/playlists/2S9EyAjhI8J1QgXSRU7Bud',
    id: '2S9EyAjhI8J1QgXSRU7Bud',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb4d18ea9bf48454491fc80c2b',
        width: null,
      },
    ],
    name: '2021 YELLOW',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MzYsNzI1OTY4OWEyMGJlYzAyYTU4NWMyNzg1OTdhNjEyZDJjNjMyMDZiMQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/2S9EyAjhI8J1QgXSRU7Bud/tracks',
      total: 30,
    },
    type: 'playlist',
    uri: 'spotify:playlist:2S9EyAjhI8J1QgXSRU7Bud',
  },
  {
    collaborative: false,
    description: 'RAIN',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/14I5g5ByemOsWSVLi6Vv4G',
    },
    href: 'https://api.spotify.com/v1/playlists/14I5g5ByemOsWSVLi6Vv4G',
    id: '14I5g5ByemOsWSVLi6Vv4G',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb53fa43038119d07e657bd24e',
        width: null,
      },
    ],
    name: '2021 BLUE',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'NDMsYTJhMmY3OWY4ZTQ0ZmRiMDkzNjc1YjcwZjkyNjFjNDQ1OTI1ZWQxZQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/14I5g5ByemOsWSVLi6Vv4G/tracks',
      total: 37,
    },
    type: 'playlist',
    uri: 'spotify:playlist:14I5g5ByemOsWSVLi6Vv4G',
  },
  {
    collaborative: false,
    description: 'MTFT',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/1JqBDK1rxQA7pKBBZ7sd7s',
    },
    href: 'https://api.spotify.com/v1/playlists/1JqBDK1rxQA7pKBBZ7sd7s',
    id: '1JqBDK1rxQA7pKBBZ7sd7s',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebbc796e585d106fc85e00bdbce',
        width: null,
      },
    ],
    name: '2021 PINK',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MTUsZDI2OTAwMjk2MWU4NDhkNzk1NjhmZDhlNGE3OTY1ODBiM2Y1M2I3OQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/1JqBDK1rxQA7pKBBZ7sd7s/tracks',
      total: 11,
    },
    type: 'playlist',
    uri: 'spotify:playlist:1JqBDK1rxQA7pKBBZ7sd7s',
  },
  {
    collaborative: false,
    description: 'MTMOT',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/0a4KuwvVeidLt1lZv4PI7M',
    },
    href: 'https://api.spotify.com/v1/playlists/0a4KuwvVeidLt1lZv4PI7M',
    id: '0a4KuwvVeidLt1lZv4PI7M',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb52c935afd79ddee7ca7b2672',
        width: null,
      },
    ],
    name: '2021 RED',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MTMsZTg2ZDUxYTAzY2M3Zjk1NTEzZTRhOTc4NDM5YjAwMGNhN2VmYWZkOA==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/0a4KuwvVeidLt1lZv4PI7M/tracks',
      total: 9,
    },
    type: 'playlist',
    uri: 'spotify:playlist:0a4KuwvVeidLt1lZv4PI7M',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/3iCFBbZMQBAsRSwYole5ll',
    },
    href: 'https://api.spotify.com/v1/playlists/3iCFBbZMQBAsRSwYole5ll',
    id: '3iCFBbZMQBAsRSwYole5ll',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b27305d9b34c8a670ec1447121c8ab67616d0000b27366b9bf56e2e057eed8ba6297ab67616d0000b27391295436bcc70bf9614487adab67616d0000b273c6aa6fca567129638c3c4355',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b27305d9b34c8a670ec1447121c8ab67616d0000b27366b9bf56e2e057eed8ba6297ab67616d0000b27391295436bcc70bf9614487adab67616d0000b273c6aa6fca567129638c3c4355',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b27305d9b34c8a670ec1447121c8ab67616d0000b27366b9bf56e2e057eed8ba6297ab67616d0000b27391295436bcc70bf9614487adab67616d0000b273c6aa6fca567129638c3c4355',
        width: 60,
      },
    ],
    name: 'rock',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MTEsMzM3NjJjZjBkMzBkZGJhOTllM2Y0MTQ3Mzc0MmIwM2NlMTEzMTU2ZQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/3iCFBbZMQBAsRSwYole5ll/tracks',
      total: 10,
    },
    type: 'playlist',
    uri: 'spotify:playlist:3iCFBbZMQBAsRSwYole5ll',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/191fOxYB7E9V1RbpVppyyk',
    },
    href: 'https://api.spotify.com/v1/playlists/191fOxYB7E9V1RbpVppyyk',
    id: '191fOxYB7E9V1RbpVppyyk',
    images: [],
    name: 'downloads',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MyxiY2UwZmNkMzBiMTQzNmZkOWRiZDBjMGViNDgzNWMyYTAwZmIwOWUx',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/191fOxYB7E9V1RbpVppyyk/tracks',
      total: 2,
    },
    type: 'playlist',
    uri: 'spotify:playlist:191fOxYB7E9V1RbpVppyyk',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/2qUAaPzmbV5YzsZfZMmHeP',
    },
    href: 'https://api.spotify.com/v1/playlists/2qUAaPzmbV5YzsZfZMmHeP',
    id: '2qUAaPzmbV5YzsZfZMmHeP',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b2730315efc555d5a157b0392652ab67616d0000b2730c053ee476f7ce576369241eab67616d0000b27395517befb15ad5d63af701abab67616d0000b273fb704b7e832b40f08c14629c',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b2730315efc555d5a157b0392652ab67616d0000b2730c053ee476f7ce576369241eab67616d0000b27395517befb15ad5d63af701abab67616d0000b273fb704b7e832b40f08c14629c',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b2730315efc555d5a157b0392652ab67616d0000b2730c053ee476f7ce576369241eab67616d0000b27395517befb15ad5d63af701abab67616d0000b273fb704b7e832b40f08c14629c',
        width: 60,
      },
    ],
    name: 'ITS CHRISTMAS',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MjYsYzAzOWZjOTQ0MzU0NmFkYmMzZjRiZTg0NmRlYWZkMzNiYjQ2YWRlYw==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/2qUAaPzmbV5YzsZfZMmHeP/tracks',
      total: 25,
    },
    type: 'playlist',
    uri: 'spotify:playlist:2qUAaPzmbV5YzsZfZMmHeP',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/4eePVR7H93VaxLPIPluCEN',
    },
    href: 'https://api.spotify.com/v1/playlists/4eePVR7H93VaxLPIPluCEN',
    id: '4eePVR7H93VaxLPIPluCEN',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebbaf5dbf62f7eadf1c45ce5636',
        width: null,
      },
    ],
    name: 'vibey n bangers',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'NDUsODU3YjgxZDIwYTQ4ZGI1MjdjZWM4Zjk1YzU2YWE5NTY0ZTE5NjRlMA==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/4eePVR7H93VaxLPIPluCEN/tracks',
      total: 41,
    },
    type: 'playlist',
    uri: 'spotify:playlist:4eePVR7H93VaxLPIPluCEN',
  },
  {
    collaborative: false,
    description: "Get happy with today's dose of feel-good songs!",
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0',
    },
    href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX3rxVfibe1L0',
    id: '37i9dQZF1DX3rxVfibe1L0',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706f00000003bd0e19e810bb4b55ab164a95',
        width: null,
      },
    ],
    name: 'Mood Booster',
    owner: {
      display_name: 'Spotify',
      external_urls: {
        spotify: 'https://open.spotify.com/user/spotify',
      },
      href: 'https://api.spotify.com/v1/users/spotify',
      id: 'spotify',
      type: 'user',
      uri: 'spotify:user:spotify',
    },
    primary_color: null,
    public: true,
    snapshot_id:
      'MTYyNjc2MzE4OCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX3rxVfibe1L0/tracks',
      total: 75,
    },
    type: 'playlist',
    uri: 'spotify:playlist:37i9dQZF1DX3rxVfibe1L0',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/1mxJxOH3n80hUOMmazLfnS',
    },
    href: 'https://api.spotify.com/v1/playlists/1mxJxOH3n80hUOMmazLfnS',
    id: '1mxJxOH3n80hUOMmazLfnS',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb040ff55639f809001c4e4139',
        width: null,
      },
    ],
    name: 'slow',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MzIsNTk2MzEwMDEyZmUzMTk4YTcyNGY1ODk0OWY0MDA5OTA1MzYzNzg2Yw==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/1mxJxOH3n80hUOMmazLfnS/tracks',
      total: 28,
    },
    type: 'playlist',
    uri: 'spotify:playlist:1mxJxOH3n80hUOMmazLfnS',
  },
  {
    collaborative: false,
    description:
      "The world's biggest dance hits. Featuring new music from Swedish House Mafia, Nina Kraviz, Paul Oakenfold, Toddla T & Sweetie Irie, ILLENIUM and more!",
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX4dyzvuaRJ0n',
    },
    href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX4dyzvuaRJ0n',
    id: '37i9dQZF1DX4dyzvuaRJ0n',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706f00000003585cd2e4ae269140f9a1a13c',
        width: null,
      },
    ],
    name: 'mint',
    owner: {
      display_name: 'Spotify',
      external_urls: {
        spotify: 'https://open.spotify.com/user/spotify',
      },
      href: 'https://api.spotify.com/v1/users/spotify',
      id: 'spotify',
      type: 'user',
      uri: 'spotify:user:spotify',
    },
    primary_color: null,
    public: false,
    snapshot_id:
      'MTYyNjcxNzg3MiwwMDAwMDQ5ZjAwMDAwMTdhYmZmMGUxMmIwMDAwMDE3YWFiMGNmNWU3',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX4dyzvuaRJ0n/tracks',
      total: 96,
    },
    type: 'playlist',
    uri: 'spotify:playlist:37i9dQZF1DX4dyzvuaRJ0n',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/2akE5bzEakR22GtV9OtQ9V',
    },
    href: 'https://api.spotify.com/v1/playlists/2akE5bzEakR22GtV9OtQ9V',
    id: '2akE5bzEakR22GtV9OtQ9V',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b273437e77cb00b32f05aa413975ab67616d0000b273a857fa8f0bd55a5919640fc5ab67616d0000b273d0c97444ecc52c4ca601144aab67616d0000b273eb3a6d9c69ee04f74b4250d4',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b273437e77cb00b32f05aa413975ab67616d0000b273a857fa8f0bd55a5919640fc5ab67616d0000b273d0c97444ecc52c4ca601144aab67616d0000b273eb3a6d9c69ee04f74b4250d4',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b273437e77cb00b32f05aa413975ab67616d0000b273a857fa8f0bd55a5919640fc5ab67616d0000b273d0c97444ecc52c4ca601144aab67616d0000b273eb3a6d9c69ee04f74b4250d4',
        width: 60,
      },
    ],
    name: 'head bang vibes',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MTIsZGQ5MWMxYmQwOGEyNzI2MmQ5ZjMzNTYxZjMxMjE2MWRlODZiM2NmOA==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/2akE5bzEakR22GtV9OtQ9V/tracks',
      total: 11,
    },
    type: 'playlist',
    uri: 'spotify:playlist:2akE5bzEakR22GtV9OtQ9V',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/15lHcDcIYF7KULxeehnmOy',
    },
    href: 'https://api.spotify.com/v1/playlists/15lHcDcIYF7KULxeehnmOy',
    id: '15lHcDcIYF7KULxeehnmOy',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273d72fb5571087bca0a2fed008',
        width: 640,
      },
    ],
    name: 'ham',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MzEsMDU0NTI1ZmM2Y2U3ODg4ZDRhNzFlNGJhZmNmMjE5ZWUyOTczM2ZmYg==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/15lHcDcIYF7KULxeehnmOy/tracks',
      total: 27,
    },
    type: 'playlist',
    uri: 'spotify:playlist:15lHcDcIYF7KULxeehnmOy',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/5dxtVygsIonrDrdvLJqRKI',
    },
    href: 'https://api.spotify.com/v1/playlists/5dxtVygsIonrDrdvLJqRKI',
    id: '5dxtVygsIonrDrdvLJqRKI',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b2730f2cbc60d54c141d63eaa7faab67616d0000b273661c404c96cc197faf8ec9d7ab67616d0000b2739039c70e23f1261d5ccf275eab67616d0000b273b8154fb1b994e5f8cd3652df',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b2730f2cbc60d54c141d63eaa7faab67616d0000b273661c404c96cc197faf8ec9d7ab67616d0000b2739039c70e23f1261d5ccf275eab67616d0000b273b8154fb1b994e5f8cd3652df',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b2730f2cbc60d54c141d63eaa7faab67616d0000b273661c404c96cc197faf8ec9d7ab67616d0000b2739039c70e23f1261d5ccf275eab67616d0000b273b8154fb1b994e5f8cd3652df',
        width: 60,
      },
    ],
    name: 'chill',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MzAsNzBlMzU0ZjhlNGQ5YTBlNDEyZTk2MzAxYjZkYjJlM2NmZjY5YzExNA==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/5dxtVygsIonrDrdvLJqRKI/tracks',
      total: 29,
    },
    type: 'playlist',
    uri: 'spotify:playlist:5dxtVygsIonrDrdvLJqRKI',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/6gCIQT1jaIVbfuGqJomMOM',
    },
    href: 'https://api.spotify.com/v1/playlists/6gCIQT1jaIVbfuGqJomMOM',
    id: '6gCIQT1jaIVbfuGqJomMOM',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b27311e50151974d60a789b9626dab67616d0000b273623e3c5fc66ac6fb9c5c8bc6ab67616d0000b2737523fa5897155dfd3217755dab67616d0000b273d48594c1f94e34eba9a1d490',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b27311e50151974d60a789b9626dab67616d0000b273623e3c5fc66ac6fb9c5c8bc6ab67616d0000b2737523fa5897155dfd3217755dab67616d0000b273d48594c1f94e34eba9a1d490',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b27311e50151974d60a789b9626dab67616d0000b273623e3c5fc66ac6fb9c5c8bc6ab67616d0000b2737523fa5897155dfd3217755dab67616d0000b273d48594c1f94e34eba9a1d490',
        width: 60,
      },
    ],
    name: 'sweat',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'NDgsNjFiMDYyMWZjZTkwYzFlZTk0ZGNiZTk1NjNmNzY5MWNhODlhMmIzYQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/6gCIQT1jaIVbfuGqJomMOM/tracks',
      total: 47,
    },
    type: 'playlist',
    uri: 'spotify:playlist:6gCIQT1jaIVbfuGqJomMOM',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/4gbyOG2QeHhqrXwM5BPQqp',
    },
    href: 'https://api.spotify.com/v1/playlists/4gbyOG2QeHhqrXwM5BPQqp',
    id: '4gbyOG2QeHhqrXwM5BPQqp',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b27311e50151974d60a789b9626dab67616d0000b2731f6a2a40bb692936879db730ab67616d0000b2738863bc11d2aa12b54f5aeb36ab67616d0000b273b5371df75c13182b15ae475f',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b27311e50151974d60a789b9626dab67616d0000b2731f6a2a40bb692936879db730ab67616d0000b2738863bc11d2aa12b54f5aeb36ab67616d0000b273b5371df75c13182b15ae475f',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b27311e50151974d60a789b9626dab67616d0000b2731f6a2a40bb692936879db730ab67616d0000b2738863bc11d2aa12b54f5aeb36ab67616d0000b273b5371df75c13182b15ae475f',
        width: 60,
      },
    ],
    name: 'red lights',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MjQsYzJlMTNiNTc4YmEzMzFiYThjMGNhMDkxZmFhNzU2YzRkOGRlMzBiOA==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/4gbyOG2QeHhqrXwM5BPQqp/tracks',
      total: 23,
    },
    type: 'playlist',
    uri: 'spotify:playlist:4gbyOG2QeHhqrXwM5BPQqp',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/7CaIfqfDSNd5hxhHIqP8XN',
    },
    href: 'https://api.spotify.com/v1/playlists/7CaIfqfDSNd5hxhHIqP8XN',
    id: '7CaIfqfDSNd5hxhHIqP8XN',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b27311555ed45c4377e101d7979dab67616d0000b273464316473dbcc9d9da236632ab67616d0000b273dd6502566928582c022c77b9ab67616d0000b273f7406e9cbd7f974e7ddf7b0e',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b27311555ed45c4377e101d7979dab67616d0000b273464316473dbcc9d9da236632ab67616d0000b273dd6502566928582c022c77b9ab67616d0000b273f7406e9cbd7f974e7ddf7b0e',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b27311555ed45c4377e101d7979dab67616d0000b273464316473dbcc9d9da236632ab67616d0000b273dd6502566928582c022c77b9ab67616d0000b273f7406e9cbd7f974e7ddf7b0e',
        width: 60,
      },
    ],
    name: '2020',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MTQyLDFhMjVhMWIwNzBjMjE4MmE3YjRmNzFiODEzMjJiYTU2MmMxNjMzZWQ=',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/7CaIfqfDSNd5hxhHIqP8XN/tracks',
      total: 126,
    },
    type: 'playlist',
    uri: 'spotify:playlist:7CaIfqfDSNd5hxhHIqP8XN',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/258RcNyTpgf17GF4iMjhVZ',
    },
    href: 'https://api.spotify.com/v1/playlists/258RcNyTpgf17GF4iMjhVZ',
    id: '258RcNyTpgf17GF4iMjhVZ',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b273616450de17b5a6ecf625b37eab67616d0000b273c61b46cf682d7f0183fcb87cab67616d0000b273c7ec91ed46429c9a70351f6cab67616d0000b273da09e2843f974e8fdf807d27',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b273616450de17b5a6ecf625b37eab67616d0000b273c61b46cf682d7f0183fcb87cab67616d0000b273c7ec91ed46429c9a70351f6cab67616d0000b273da09e2843f974e8fdf807d27',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b273616450de17b5a6ecf625b37eab67616d0000b273c61b46cf682d7f0183fcb87cab67616d0000b273c7ec91ed46429c9a70351f6cab67616d0000b273da09e2843f974e8fdf807d27',
        width: 60,
      },
    ],
    name: 'SING <3',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MTcsOWVlOGE1N2Y5ZmFlYmJlZmQ5NWZiOGUxNTg3YmI5YTI2NmY1YTJmNQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/258RcNyTpgf17GF4iMjhVZ/tracks',
      total: 55,
    },
    type: 'playlist',
    uri: 'spotify:playlist:258RcNyTpgf17GF4iMjhVZ',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/5suE5ScMFeAeXpia1i92Ho',
    },
    href: 'https://api.spotify.com/v1/playlists/5suE5ScMFeAeXpia1i92Ho',
    id: '5suE5ScMFeAeXpia1i92Ho',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b273627353dfb4e99f9fff6a7930ab67616d0000b27364cf949eb6e426904f182823ab67616d0000b273c3154cfa34de902d1f20e019ab67616d0000b273d45404b4c5a5444cb06c9f7b',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b273627353dfb4e99f9fff6a7930ab67616d0000b27364cf949eb6e426904f182823ab67616d0000b273c3154cfa34de902d1f20e019ab67616d0000b273d45404b4c5a5444cb06c9f7b',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b273627353dfb4e99f9fff6a7930ab67616d0000b27364cf949eb6e426904f182823ab67616d0000b273c3154cfa34de902d1f20e019ab67616d0000b273d45404b4c5a5444cb06c9f7b',
        width: 60,
      },
    ],
    name: 'new songs',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'ODAsNzRlMjAwMGVjMTc0OTY2YTc3NTU2ZDQ2MTQyMzk2MmY0YmM2ZWYzMw==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/5suE5ScMFeAeXpia1i92Ho/tracks',
      total: 79,
    },
    type: 'playlist',
    uri: 'spotify:playlist:5suE5ScMFeAeXpia1i92Ho',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/65fBUb53PbLwHTEiww63op',
    },
    href: 'https://api.spotify.com/v1/playlists/65fBUb53PbLwHTEiww63op',
    id: '65fBUb53PbLwHTEiww63op',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b2730a1d20ec09cab4bb17a36aabab67616d0000b27320cac893b7a494f729128dacab67616d0000b2732c059d230aea10400c4f1692ab67616d0000b273cb66bcc14c6f857c127d5969',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b2730a1d20ec09cab4bb17a36aabab67616d0000b27320cac893b7a494f729128dacab67616d0000b2732c059d230aea10400c4f1692ab67616d0000b273cb66bcc14c6f857c127d5969',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b2730a1d20ec09cab4bb17a36aabab67616d0000b27320cac893b7a494f729128dacab67616d0000b2732c059d230aea10400c4f1692ab67616d0000b273cb66bcc14c6f857c127d5969',
        width: 60,
      },
    ],
    name: 'rap fast',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: false,
    snapshot_id: 'OCxkOTAwNmQ5MjZjMmU2NDUyNmEyODhhZjE3NjVlZDJlMjhjNWM4YWY1',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/65fBUb53PbLwHTEiww63op/tracks',
      total: 7,
    },
    type: 'playlist',
    uri: 'spotify:playlist:65fBUb53PbLwHTEiww63op',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/5YAZcbuCuEdhF5JsDgsWL8',
    },
    href: 'https://api.spotify.com/v1/playlists/5YAZcbuCuEdhF5JsDgsWL8',
    id: '5YAZcbuCuEdhF5JsDgsWL8',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b27347fa4895a04fbb517fd42070ab67616d0000b2734b804ee215dd066e5f856e85ab67616d0000b2735485ea186d6971e18fabcc2fab67616d0000b273b5ea1cb4ed9ef489db89597f',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b27347fa4895a04fbb517fd42070ab67616d0000b2734b804ee215dd066e5f856e85ab67616d0000b2735485ea186d6971e18fabcc2fab67616d0000b273b5ea1cb4ed9ef489db89597f',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b27347fa4895a04fbb517fd42070ab67616d0000b2734b804ee215dd066e5f856e85ab67616d0000b2735485ea186d6971e18fabcc2fab67616d0000b273b5ea1cb4ed9ef489db89597f',
        width: 60,
      },
    ],
    name: 'yelling',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'NSwwODIyNTY1YTg0ZDAxZGEwYjJlNTM0ZGEwMTRmYzlkODUzMzQ5MTc5',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/5YAZcbuCuEdhF5JsDgsWL8/tracks',
      total: 4,
    },
    type: 'playlist',
    uri: 'spotify:playlist:5YAZcbuCuEdhF5JsDgsWL8',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/4hRbfI6sYExaMTZ0sxANvY',
    },
    href: 'https://api.spotify.com/v1/playlists/4hRbfI6sYExaMTZ0sxANvY',
    id: '4hRbfI6sYExaMTZ0sxANvY',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb2efd3455fde48db41f82562a',
        width: null,
      },
    ],
    name: 'rappp',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MTgsMTY2NDA0NTQ0OWVmNjc4ZTRlYTc2N2IwODNiZGY0NDJlNzk0YmMwYQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/4hRbfI6sYExaMTZ0sxANvY/tracks',
      total: 18,
    },
    type: 'playlist',
    uri: 'spotify:playlist:4hRbfI6sYExaMTZ0sxANvY',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/4tFQ2EFhBangFSl2N6Kk6V',
    },
    href: 'https://api.spotify.com/v1/playlists/4tFQ2EFhBangFSl2N6Kk6V',
    id: '4tFQ2EFhBangFSl2N6Kk6V',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b2731e4dff2b4d8adcacf7ba62f6ab67616d0000b273372815e631dda54f8931f83bab67616d0000b2735556fb4dfea9c05e09519c25ab67616d0000b273cf7e54f668d6a31dd6566f24',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b2731e4dff2b4d8adcacf7ba62f6ab67616d0000b273372815e631dda54f8931f83bab67616d0000b2735556fb4dfea9c05e09519c25ab67616d0000b273cf7e54f668d6a31dd6566f24',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b2731e4dff2b4d8adcacf7ba62f6ab67616d0000b273372815e631dda54f8931f83bab67616d0000b2735556fb4dfea9c05e09519c25ab67616d0000b273cf7e54f668d6a31dd6566f24',
        width: 60,
      },
    ],
    name: 'españolas',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: false,
    snapshot_id: 'MTYsYjc4MTY2ZmRkMzlmYWQxNjI4NzBlN2RhODZmMmVmNmZjYjI0ZDkyNQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/4tFQ2EFhBangFSl2N6Kk6V/tracks',
      total: 12,
    },
    type: 'playlist',
    uri: 'spotify:playlist:4tFQ2EFhBangFSl2N6Kk6V',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/0ylyea259sSYEdStG12J8B',
    },
    href: 'https://api.spotify.com/v1/playlists/0ylyea259sSYEdStG12J8B',
    id: '0ylyea259sSYEdStG12J8B',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebbb9e1dc4732d556c56ed80299',
        width: null,
      },
    ],
    name: 'chill vocals',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'NjMsYTc1MGVhZWQ5ZGZkM2ZlNjc5NDhiOGM4YjE5NGQ2MzgxZDQxM2E1Yw==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/0ylyea259sSYEdStG12J8B/tracks',
      total: 56,
    },
    type: 'playlist',
    uri: 'spotify:playlist:0ylyea259sSYEdStG12J8B',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/1UwWhcB80cMf8HiZfppkpx',
    },
    href: 'https://api.spotify.com/v1/playlists/1UwWhcB80cMf8HiZfppkpx',
    id: '1UwWhcB80cMf8HiZfppkpx',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b273227ddebf4541c325f6245421ab67616d0000b273540fc1d083eac5bcff8dad21ab67616d0000b27356277bb70d3a48ed654a0a57ab67616d0000b273b33059c7a7dcbdafea3db2e6',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b273227ddebf4541c325f6245421ab67616d0000b273540fc1d083eac5bcff8dad21ab67616d0000b27356277bb70d3a48ed654a0a57ab67616d0000b273b33059c7a7dcbdafea3db2e6',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b273227ddebf4541c325f6245421ab67616d0000b273540fc1d083eac5bcff8dad21ab67616d0000b27356277bb70d3a48ed654a0a57ab67616d0000b273b33059c7a7dcbdafea3db2e6',
        width: 60,
      },
    ],
    name: 'cunt-ry :)',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: false,
    snapshot_id: 'NTEsNGJjMzU2ZDZjM2EwYzA2MmM1YjY1NTIzNzMyMDAzODIxYmYyZWZiMQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/1UwWhcB80cMf8HiZfppkpx/tracks',
      total: 48,
    },
    type: 'playlist',
    uri: 'spotify:playlist:1UwWhcB80cMf8HiZfppkpx',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/5vMLvOd00CsqZ1aKpCrcjN',
    },
    href: 'https://api.spotify.com/v1/playlists/5vMLvOd00CsqZ1aKpCrcjN',
    id: '5vMLvOd00CsqZ1aKpCrcjN',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb7a3dcd7bbe6ee08193540a6a',
        width: null,
      },
    ],
    name: 'go hard',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: false,
    snapshot_id: 'MzQsNTkxNWY2ODdjNmVkM2Y1MWRhMzRkYTRiNzU0NmQ1NDgwZDY5YTM0MQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/5vMLvOd00CsqZ1aKpCrcjN/tracks',
      total: 30,
    },
    type: 'playlist',
    uri: 'spotify:playlist:5vMLvOd00CsqZ1aKpCrcjN',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/5s9ZyshvTSwJN8LpKnZSXm',
    },
    href: 'https://api.spotify.com/v1/playlists/5s9ZyshvTSwJN8LpKnZSXm',
    id: '5s9ZyshvTSwJN8LpKnZSXm',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b27301cd9fee228b470cf66696cfab67616d0000b2732dc817144c8081281f77508dab67616d0000b2732f9dc2df7028345b7dcf134bab67616d0000b27366ae841cd0a38d7254f168e4',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b27301cd9fee228b470cf66696cfab67616d0000b2732dc817144c8081281f77508dab67616d0000b2732f9dc2df7028345b7dcf134bab67616d0000b27366ae841cd0a38d7254f168e4',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b27301cd9fee228b470cf66696cfab67616d0000b2732dc817144c8081281f77508dab67616d0000b2732f9dc2df7028345b7dcf134bab67616d0000b27366ae841cd0a38d7254f168e4',
        width: 60,
      },
    ],
    name: 'remixess',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: false,
    snapshot_id: 'OCw5ODY1MWZkNGQzMTYyOTAzODNlOTIyN2RiMjUzN2RhM2ZjYjA3NTdi',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/5s9ZyshvTSwJN8LpKnZSXm/tracks',
      total: 5,
    },
    type: 'playlist',
    uri: 'spotify:playlist:5s9ZyshvTSwJN8LpKnZSXm',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/2KUQvPTDrc1KJzRamQ5tNU',
    },
    href: 'https://api.spotify.com/v1/playlists/2KUQvPTDrc1KJzRamQ5tNU',
    id: '2KUQvPTDrc1KJzRamQ5tNU',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebbc09b1900eb13e60a0196faa6',
        width: null,
      },
    ],
    name: 'nineteen',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MTc0LDU3NzM1ZmNiMDU4ZWJmMzQ0ODFjMmFkMDZkZjg1MTg2YzhmMjhhZTU=',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/2KUQvPTDrc1KJzRamQ5tNU/tracks',
      total: 247,
    },
    type: 'playlist',
    uri: 'spotify:playlist:2KUQvPTDrc1KJzRamQ5tNU',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/1tqED0snD3mTUQZKNq9w1r',
    },
    href: 'https://api.spotify.com/v1/playlists/1tqED0snD3mTUQZKNq9w1r',
    id: '1tqED0snD3mTUQZKNq9w1r',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b27305e4408393e1c81a8ab1bf26ab67616d0000b27311555ed45c4377e101d7979dab67616d0000b2732a25bf3e2a4e63850930095aab67616d0000b2732eeac36270a1f47bea6a0c9b',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b27305e4408393e1c81a8ab1bf26ab67616d0000b27311555ed45c4377e101d7979dab67616d0000b2732a25bf3e2a4e63850930095aab67616d0000b2732eeac36270a1f47bea6a0c9b',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b27305e4408393e1c81a8ab1bf26ab67616d0000b27311555ed45c4377e101d7979dab67616d0000b2732a25bf3e2a4e63850930095aab67616d0000b2732eeac36270a1f47bea6a0c9b',
        width: 60,
      },
    ],
    name: 'Liked from Radio',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: false,
    snapshot_id: 'NyxjYmNkMTVjY2Q1NjBiYTk1ZDViMjc3MWM2YjY5MzFmMjM2MDMzOTdj',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/1tqED0snD3mTUQZKNq9w1r/tracks',
      total: 6,
    },
    type: 'playlist',
    uri: 'spotify:playlist:1tqED0snD3mTUQZKNq9w1r',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/42CGM07RWGVVtyZYi70hMP',
    },
    href: 'https://api.spotify.com/v1/playlists/42CGM07RWGVVtyZYi70hMP',
    id: '42CGM07RWGVVtyZYi70hMP',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb2af16db8bb86d1ca5e88e3b5',
        width: null,
      },
    ],
    name: 'lil eighteen',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'OTksZjA0Y2E1ODIxMjIwZDQ1NDJiNGRjOTFiZjVhMDI2MGNmNGE0NzhhYQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/42CGM07RWGVVtyZYi70hMP/tracks',
      total: 98,
    },
    type: 'playlist',
    uri: 'spotify:playlist:42CGM07RWGVVtyZYi70hMP',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/2ZHGEf5gkJrx1fgCtArnjM',
    },
    href: 'https://api.spotify.com/v1/playlists/2ZHGEf5gkJrx1fgCtArnjM',
    id: '2ZHGEf5gkJrx1fgCtArnjM',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b27346a157795d939b7a6868d207ab67616d0000b273b787b5b8c27a5dbd360c0f59ab67616d0000b273ca74d3d623930d10f2c3c1f1ab67616d0000b273d707b98008798c612d5eea72',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b27346a157795d939b7a6868d207ab67616d0000b273b787b5b8c27a5dbd360c0f59ab67616d0000b273ca74d3d623930d10f2c3c1f1ab67616d0000b273d707b98008798c612d5eea72',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b27346a157795d939b7a6868d207ab67616d0000b273b787b5b8c27a5dbd360c0f59ab67616d0000b273ca74d3d623930d10f2c3c1f1ab67616d0000b273d707b98008798c612d5eea72',
        width: 60,
      },
    ],
    name: 'k good',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: false,
    snapshot_id: 'MjUsNWJjYjM1ODczZWUwYTdjMDViODg1ZTI2NmQ0MzNmNWVkYmM5ZGFkNA==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/2ZHGEf5gkJrx1fgCtArnjM/tracks',
      total: 22,
    },
    type: 'playlist',
    uri: 'spotify:playlist:2ZHGEf5gkJrx1fgCtArnjM',
  },
  {
    collaborative: false,
    description: 'The songs you loved most this year, all wrapped up.',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/37i9dQZF1EjweYSHW3TWza',
    },
    href: 'https://api.spotify.com/v1/playlists/37i9dQZF1EjweYSHW3TWza',
    id: '37i9dQZF1EjweYSHW3TWza',
    images: [
      {
        height: null,
        url: 'https://lineup-images.scdn.co/your-top-songs-2018_LARGE-en.jpg',
        width: null,
      },
    ],
    name: 'Your Top Songs 2018',
    owner: {
      display_name: 'Spotify',
      external_urls: {
        spotify: 'https://open.spotify.com/user/spotify',
      },
      href: 'https://api.spotify.com/v1/users/spotify',
      id: 'spotify',
      type: 'user',
      uri: 'spotify:user:spotify',
    },
    primary_color: null,
    public: false,
    snapshot_id:
      'MjU3NjA4ODQsMDAwMDAwMDA3YzQzMDI4MDZkYjQ2ZGY1ODQwMjNhNDAzNGU0N2QyZg==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/37i9dQZF1EjweYSHW3TWza/tracks',
      total: 100,
    },
    type: 'playlist',
    uri: 'spotify:playlist:37i9dQZF1EjweYSHW3TWza',
  },
  {
    collaborative: false,
    description: 'Chill vibes x',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/3qPi8JYkBdYGovtCW0nZit',
    },
    href: 'https://api.spotify.com/v1/playlists/3qPi8JYkBdYGovtCW0nZit',
    id: '3qPi8JYkBdYGovtCW0nZit',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebbb2cf96aff69d06d01bbccc73',
        width: null,
      },
    ],
    name: 'EDEN, Witt, BlackBear, NF, Jeremy Zucker and others ♥',
    owner: {
      display_name: 'edan',
      external_urls: {
        spotify: 'https://open.spotify.com/user/113120453',
      },
      href: 'https://api.spotify.com/v1/users/113120453',
      id: '113120453',
      type: 'user',
      uri: 'spotify:user:113120453',
    },
    primary_color: null,
    public: false,
    snapshot_id: 'NDc1LGM2ZDdkNzNkYjgzNjQwZDZhYTUyMjBlYzhiZGY4YzQwODY4ODIyNjk=',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/3qPi8JYkBdYGovtCW0nZit/tracks',
      total: 434,
    },
    type: 'playlist',
    uri: 'spotify:playlist:3qPi8JYkBdYGovtCW0nZit',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/78oj2E4CZzZwx8hjSvgBtI',
    },
    href: 'https://api.spotify.com/v1/playlists/78oj2E4CZzZwx8hjSvgBtI',
    id: '78oj2E4CZzZwx8hjSvgBtI',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b273897f73256b9128a9d70eaf66ab67616d0000b2738add1bbf8e9fe4b121b1e8a6ab67616d0000b273c3af0c2355c24ed7023cd394ab67616d0000b273d72fb5571087bca0a2fed008',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b273897f73256b9128a9d70eaf66ab67616d0000b2738add1bbf8e9fe4b121b1e8a6ab67616d0000b273c3af0c2355c24ed7023cd394ab67616d0000b273d72fb5571087bca0a2fed008',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b273897f73256b9128a9d70eaf66ab67616d0000b2738add1bbf8e9fe4b121b1e8a6ab67616d0000b273c3af0c2355c24ed7023cd394ab67616d0000b273d72fb5571087bca0a2fed008',
        width: 60,
      },
    ],
    name: 'songs to sing!',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: false,
    snapshot_id: 'MTksODljOTMwODcyNjk1M2YyODI2MDMyMThjM2MwMzU2ZGI4YmQ1MmI4OA==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/78oj2E4CZzZwx8hjSvgBtI/tracks',
      total: 15,
    },
    type: 'playlist',
    uri: 'spotify:playlist:78oj2E4CZzZwx8hjSvgBtI',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/35Vii9VQdTqlQrSR5pZKOO',
    },
    href: 'https://api.spotify.com/v1/playlists/35Vii9VQdTqlQrSR5pZKOO',
    id: '35Vii9VQdTqlQrSR5pZKOO',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b27321108e396b83d171cc5c2692ab67616d0000b2736feb6d9ed7891f40e9a524ddab67616d0000b2737df155730d4d753560ec28a5ab67616d0000b2739db43b5fb2b278d7f70a6cf9',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b27321108e396b83d171cc5c2692ab67616d0000b2736feb6d9ed7891f40e9a524ddab67616d0000b2737df155730d4d753560ec28a5ab67616d0000b2739db43b5fb2b278d7f70a6cf9',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b27321108e396b83d171cc5c2692ab67616d0000b2736feb6d9ed7891f40e9a524ddab67616d0000b2737df155730d4d753560ec28a5ab67616d0000b2739db43b5fb2b278d7f70a6cf9',
        width: 60,
      },
    ],
    name: 'ALL K',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: false,
    snapshot_id: 'MTczLGRkYTRjNWFmMDY3OTM4NTVlNzEwZDY2MjFjOGUwMGQ0YTNjMTA0N2M=',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/35Vii9VQdTqlQrSR5pZKOO/tracks',
      total: 427,
    },
    type: 'playlist',
    uri: 'spotify:playlist:35Vii9VQdTqlQrSR5pZKOO',
  },
  {
    collaborative: false,
    description: 'all the songs',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/0CLxeLA3V4jUUyWIEvcOJ9',
    },
    href: 'https://api.spotify.com/v1/playlists/0CLxeLA3V4jUUyWIEvcOJ9',
    id: '0CLxeLA3V4jUUyWIEvcOJ9',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb4f3990750d0776ccdc2e8080',
        width: null,
      },
    ],
    name: 'overloaded eighteen',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MTUxLGExYTZhYTFmNjY2MjNiNzNjOGE3ZjlhNzBjMjkyYzc0Yzk1ZTQ0NDE=',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/0CLxeLA3V4jUUyWIEvcOJ9/tracks',
      total: 1363,
    },
    type: 'playlist',
    uri: 'spotify:playlist:0CLxeLA3V4jUUyWIEvcOJ9',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/5P53LCtTwcHFYIO7FVfLIu',
    },
    href: 'https://api.spotify.com/v1/playlists/5P53LCtTwcHFYIO7FVfLIu',
    id: '5P53LCtTwcHFYIO7FVfLIu',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b273627c7ec189cd356acb9ff8b3ab67616d0000b2736b0e2e97dcbdd557b63c0560ab67616d0000b2737cc94e776ebb63dd08c8422cab67616d0000b273ab80b73233e4568a224b2ed9',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b273627c7ec189cd356acb9ff8b3ab67616d0000b2736b0e2e97dcbdd557b63c0560ab67616d0000b2737cc94e776ebb63dd08c8422cab67616d0000b273ab80b73233e4568a224b2ed9',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b273627c7ec189cd356acb9ff8b3ab67616d0000b2736b0e2e97dcbdd557b63c0560ab67616d0000b2737cc94e776ebb63dd08c8422cab67616d0000b273ab80b73233e4568a224b2ed9',
        width: 60,
      },
    ],
    name: 'upbeat',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'NDAsMTgzYmE0MzhmZjc2ZTIyMTY2NDc2NDk5NDdhNTVhZmRmMTY0MDMyMg==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/5P53LCtTwcHFYIO7FVfLIu/tracks',
      total: 23,
    },
    type: 'playlist',
    uri: 'spotify:playlist:5P53LCtTwcHFYIO7FVfLIu',
  },
  {
    collaborative: false,
    description: 'cry cry time',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/2kxJNdXtnKwiyCd1mItiHD',
    },
    href: 'https://api.spotify.com/v1/playlists/2kxJNdXtnKwiyCd1mItiHD',
    id: '2kxJNdXtnKwiyCd1mItiHD',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebbaeedb0c0681c7622d6eee7b6',
        width: null,
      },
    ],
    name: 'time to CRY',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MzUsMDFmY2JmNjFmM2IzOWIxMWNkM2E1MWY3YzMzNTkyMGMwYTJmZWY3OQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/2kxJNdXtnKwiyCd1mItiHD/tracks',
      total: 26,
    },
    type: 'playlist',
    uri: 'spotify:playlist:2kxJNdXtnKwiyCd1mItiHD',
  },
  {
    collaborative: false,
    description:
      'To the friends that helped me curate this playlist, from the East to the West, both new and old: thank you. I love you to death. I&#x27;m so grateful to have you in my life. Here&#x27;s to you.',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/7spVosogob3bPJPPXdodYn',
    },
    href: 'https://api.spotify.com/v1/playlists/7spVosogob3bPJPPXdodYn',
    id: '7spVosogob3bPJPPXdodYn',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb216099995f81cf9124936683',
        width: null,
      },
    ],
    name: 'To My Friends, vol. 2',
    owner: {
      display_name: 'zestayvan',
      external_urls: {
        spotify: 'https://open.spotify.com/user/estevanmendez',
      },
      href: 'https://api.spotify.com/v1/users/estevanmendez',
      id: 'estevanmendez',
      type: 'user',
      uri: 'spotify:user:estevanmendez',
    },
    primary_color: null,
    public: false,
    snapshot_id: 'Mjk2LDJhZGVjNjI1MjU1OGYyZjdiMjMxNjZhZjk0M2MwZWZmZjIwNmYyMjg=',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/7spVosogob3bPJPPXdodYn/tracks',
      total: 69,
    },
    type: 'playlist',
    uri: 'spotify:playlist:7spVosogob3bPJPPXdodYn',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/2C0NyHE6X8sw2juSz6lHg5',
    },
    href: 'https://api.spotify.com/v1/playlists/2C0NyHE6X8sw2juSz6lHg5',
    id: '2C0NyHE6X8sw2juSz6lHg5',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b2731e0a93db928b32f1992fd3e8ab67616d0000b273a0caffda54afd0a65995bbabab67616d0000b273d9194aa18fa4c9362b47464fab67616d0000b273fce23dadb51975ebf2e9d75c',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b2731e0a93db928b32f1992fd3e8ab67616d0000b273a0caffda54afd0a65995bbabab67616d0000b273d9194aa18fa4c9362b47464fab67616d0000b273fce23dadb51975ebf2e9d75c',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b2731e0a93db928b32f1992fd3e8ab67616d0000b273a0caffda54afd0a65995bbabab67616d0000b273d9194aa18fa4c9362b47464fab67616d0000b273fce23dadb51975ebf2e9d75c',
        width: 60,
      },
    ],
    name: 'PUMPED',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MzYsOWQ3MWMwYWNiNDlhNGQ1NmQxOWY3MjM1ZGM3MTZiZWQ1MTA4NWUyMQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/2C0NyHE6X8sw2juSz6lHg5/tracks',
      total: 31,
    },
    type: 'playlist',
    uri: 'spotify:playlist:2C0NyHE6X8sw2juSz6lHg5',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/7wW2U3vmeu3JHVug5AyZuu',
    },
    href: 'https://api.spotify.com/v1/playlists/7wW2U3vmeu3JHVug5AyZuu',
    id: '7wW2U3vmeu3JHVug5AyZuu',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b2732469b26a9bd201985e9465beab67616d0000b2735c565c10777093da18ce50faab67616d0000b273d84a9bbcba91cb6a4a212b1bab67616d0000b273fdbcee40748537ff80a7af70',
        width: 640,
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b2732469b26a9bd201985e9465beab67616d0000b2735c565c10777093da18ce50faab67616d0000b273d84a9bbcba91cb6a4a212b1bab67616d0000b273fdbcee40748537ff80a7af70',
        width: 300,
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b2732469b26a9bd201985e9465beab67616d0000b2735c565c10777093da18ce50faab67616d0000b273d84a9bbcba91cb6a4a212b1bab67616d0000b273fdbcee40748537ff80a7af70',
        width: 60,
      },
    ],
    name: 'well i dont listen to these anymore bc sad haha :(',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MTAxLDgyNTljMWI3NDRiMzZmODllNzc4NzI4OTRiNDE4NTA1MjE5ZGFlOGQ=',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/7wW2U3vmeu3JHVug5AyZuu/tracks',
      total: 40,
    },
    type: 'playlist',
    uri: 'spotify:playlist:7wW2U3vmeu3JHVug5AyZuu',
  },
  {
    collaborative: false,
    description:
      'To the friends that helped me curate this playlist, I love you all. Thank you for being in my life. I will always be sending you good juju, even from across the country! -zesty',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/2dy0sSfv8PAmCY7le76fOY',
    },
    href: 'https://api.spotify.com/v1/playlists/2dy0sSfv8PAmCY7le76fOY',
    id: '2dy0sSfv8PAmCY7le76fOY',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebbfccc625de2b627be0fb690e1',
        width: null,
      },
    ],
    name: 'To My Friends, vol. 1',
    owner: {
      display_name: 'zestayvan',
      external_urls: {
        spotify: 'https://open.spotify.com/user/estevanmendez',
      },
      href: 'https://api.spotify.com/v1/users/estevanmendez',
      id: 'estevanmendez',
      type: 'user',
      uri: 'spotify:user:estevanmendez',
    },
    primary_color: null,
    public: false,
    snapshot_id: 'NzEsMzQ4N2QxNDI2NjA0MjM0MjNmZTFjMjc4NjZkMDI5MTU5NWE2NTI3NQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/2dy0sSfv8PAmCY7le76fOY/tracks',
      total: 42,
    },
    type: 'playlist',
    uri: 'spotify:playlist:2dy0sSfv8PAmCY7le76fOY',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/3gw52dyB9NHcZbkvcPudpM',
    },
    href: 'https://api.spotify.com/v1/playlists/3gw52dyB9NHcZbkvcPudpM',
    id: '3gw52dyB9NHcZbkvcPudpM',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb722a3aebe7e2da87faa547e3',
        width: null,
      },
    ],
    name: 'overloaded seventeen',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'OTgsZDhlNDZjYWE4NjA3NjMyYjg2Y2M2NTBjOGNmMWI5NmZmZTZhYWE5Ng==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/3gw52dyB9NHcZbkvcPudpM/tracks',
      total: 655,
    },
    type: 'playlist',
    uri: 'spotify:playlist:3gw52dyB9NHcZbkvcPudpM',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/7iS25jwj1LfVsojpHSEAEQ',
    },
    href: 'https://api.spotify.com/v1/playlists/7iS25jwj1LfVsojpHSEAEQ',
    id: '7iS25jwj1LfVsojpHSEAEQ',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb1993a56eaaf36459884b1d90',
        width: null,
      },
    ],
    name: 'jam seventeen',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MjksNzRhM2VlY2NjYjc1ZDdhNDNhMjNkNTcxMTI5MjM4MGU5ZjI4NzFlNA==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/7iS25jwj1LfVsojpHSEAEQ/tracks',
      total: 154,
    },
    type: 'playlist',
    uri: 'spotify:playlist:7iS25jwj1LfVsojpHSEAEQ',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/5n05ZCww1i5k9X0ZnHPxv3',
    },
    href: 'https://api.spotify.com/v1/playlists/5n05ZCww1i5k9X0ZnHPxv3',
    id: '5n05ZCww1i5k9X0ZnHPxv3',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebbede060c53ca21b5fc90d608e',
        width: null,
      },
    ],
    name: 'good music with friends :)',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MTc3LGE5YWZmZTVmOTdhNjM4MTRhYTdiNWY0ZDVlZWQyMWQ4YTk2ZWM4NGI=',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/5n05ZCww1i5k9X0ZnHPxv3/tracks',
      total: 111,
    },
    type: 'playlist',
    uri: 'spotify:playlist:5n05ZCww1i5k9X0ZnHPxv3',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/0oFJ3K3KclGwNWnrnTRChL',
    },
    href: 'https://api.spotify.com/v1/playlists/0oFJ3K3KclGwNWnrnTRChL',
    id: '0oFJ3K3KclGwNWnrnTRChL',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb122ee72e948b34c74094ee90',
        width: null,
      },
    ],
    name: 'moodboard 2017',
    owner: {
      display_name: 'Noel Doran',
      external_urls: {
        spotify: 'https://open.spotify.com/user/1283822982',
      },
      href: 'https://api.spotify.com/v1/users/1283822982',
      id: '1283822982',
      type: 'user',
      uri: 'spotify:user:1283822982',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'NTksZjFkYzBhNmZiYzA3YzE3MDQyYTc0NWFkYTIwYjk5NjBkYzJlYjMzOA==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/0oFJ3K3KclGwNWnrnTRChL/tracks',
      total: 51,
    },
    type: 'playlist',
    uri: 'spotify:playlist:0oFJ3K3KclGwNWnrnTRChL',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/1bhm87WGBOi73ApxReEls9',
    },
    href: 'https://api.spotify.com/v1/playlists/1bhm87WGBOi73ApxReEls9',
    id: '1bhm87WGBOi73ApxReEls9',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb5229bcfcb46baacad1409a33',
        width: null,
      },
    ],
    name: 'overloaded sixteen',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'ODEsYjAxNzY3YTkyZjE3MTNhYzFhN2EyNjJiMjA0MDkxZDU1Yjg5Yjg5Ng==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/1bhm87WGBOi73ApxReEls9/tracks',
      total: 784,
    },
    type: 'playlist',
    uri: 'spotify:playlist:1bhm87WGBOi73ApxReEls9',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/3SIa57m5akX7StYTELxEIM',
    },
    href: 'https://api.spotify.com/v1/playlists/3SIa57m5akX7StYTELxEIM',
    id: '3SIa57m5akX7StYTELxEIM',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebbd2f49b168c6d9c4f4c528169',
        width: null,
      },
    ],
    name: 'mixed feelings sixteen',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'MTI4LGY2N2I1YmM2NzBjNzlkYzRlZGM4ZDUxM2VlNTlmZjc4NDEyODlhOTE=',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/3SIa57m5akX7StYTELxEIM/tracks',
      total: 124,
    },
    type: 'playlist',
    uri: 'spotify:playlist:3SIa57m5akX7StYTELxEIM',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/0adQr6Jv9RtMDMKjkzrwIc',
    },
    href: 'https://api.spotify.com/v1/playlists/0adQr6Jv9RtMDMKjkzrwIc',
    id: '0adQr6Jv9RtMDMKjkzrwIc',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebbd8208a1896058678f263f1eb',
        width: null,
      },
    ],
    name: 'jam sixteen',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: true,
    snapshot_id: 'NDMsZDRlMjY1NmRkMGVmMDFiOGJmYmU5ZTJkZDE5MGEwMDQwZDEyMmUyMQ==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/0adQr6Jv9RtMDMKjkzrwIc/tracks',
      total: 80,
    },
    type: 'playlist',
    uri: 'spotify:playlist:0adQr6Jv9RtMDMKjkzrwIc',
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/6O60RQy08XdFhJwZqw9Ylb',
    },
    href: 'https://api.spotify.com/v1/playlists/6O60RQy08XdFhJwZqw9Ylb',
    id: '6O60RQy08XdFhJwZqw9Ylb',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706c0000bebb62392d907ea19d18b94d58fd',
        width: null,
      },
    ],
    name: 'monstercat fifteen',
    owner: {
      display_name: 'Brandon Erickson',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12156061751',
      },
      href: 'https://api.spotify.com/v1/users/12156061751',
      id: '12156061751',
      type: 'user',
      uri: 'spotify:user:12156061751',
    },
    primary_color: null,
    public: false,
    snapshot_id: 'MjksMjQwMTA3OTAzMjIzNjlhNzc1NzJkZWYzNGI3YzljMzU4MjA5MzE1Ng==',
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/6O60RQy08XdFhJwZqw9Ylb/tracks',
      total: 12,
    },
    type: 'playlist',
    uri: 'spotify:playlist:6O60RQy08XdFhJwZqw9Ylb',
  },
];

const usePlaylists = () => {
  const [fetched, setFetched] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.data.setPlaylists(values));
    setFetched(true);
  }, []);

  return fetched;
};

export default usePlaylists;
