export const header = (auth) => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${auth}`,
});

export const post = (body, auth) => ({
  method: 'POST',
  header: header(auth),
  body: body,
});

export const put = (body, auth) => ({
  method: 'PUT',
  header: header(auth),
  body: body,
});

export const get = (auth) => ({
  method: 'GET',
  header: header(auth),
});
