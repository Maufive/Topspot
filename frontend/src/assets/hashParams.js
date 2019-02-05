export function getHashParams() {
  const hashParams = {};
  // eslint-disable-next-line
  let e, // eslint-disable-next-line
    r = /([^&;=]+)=?([^&;]*)/g, // eslint-disable-next-line
    q = window.location.hash.substring(1); // eslint-disable-next-line
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}
