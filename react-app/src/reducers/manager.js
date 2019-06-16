export function updateGist(newFork, oldGistList) {
  const { id, forks } = newFork;
  const newGists = oldGistList.map(gist => {
    if (gist.id === id) {
      return Object.assign({}, gist, { forks, loading: false })
    }
    return gist;
  });
  return newGists;
}
