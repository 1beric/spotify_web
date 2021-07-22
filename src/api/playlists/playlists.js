import * as config from '../';

export const endpoints = {
  userPlaylists: (parameters) => {
    const keys = Object.keys(parameters);
    let request = 'https://api.spotify.com/v1/me/playlists';
    if (keys.length === 0) return request;
    request += '?';
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      const value = parameters[key];
      request += `${key}=${value}`;
      if (index < keys.length - 1) request += '&';
    }
    return request;
  },
};

export const getUserPlaylists = async (auth) => {
  const endpoint = endpoints.userPlaylists({ limit: 20, offset: 20 });
  const response = await (await fetch(endpoint, config.get(auth))).json();
  console.log(response);
  return response;
};
