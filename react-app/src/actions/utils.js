const UNKNOWN_LANG = 'Unknown';
const DEFAULT_DESC = 'No description';

export function formatGistList(respArr, username) {
  return respArr.map(gist => {
    // console.log("GIST::", gist);
    const { files, name, id, owner } = gist;

    const fileTypes = [];

    return {
      id,
      username,
      owner,
      name: name || DEFAULT_DESC,
      fileTypes,
      forks: [],
      loading: true
    }
  });
}

export function formatForkList(respArr, id) {
  const forks = respArr.map(fork => {
    const { avatar_url, login } = fork.owner;
    return { avatar_url, name: login }
  });

  return { forks: forks || [], id };
}

const shortName = name => (name.length > 2) ? name.substring(0, 2).toUpperCase() : name || '-'
