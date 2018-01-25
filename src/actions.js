const fetchSortedString = (payload) => {
  const url = 'http://localhost:3005/api/sort';
  const post = {
    method: 'POST',
    body: JSON.stringify({ payload }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  };

  return fetch(url, post)
    .then(res => res.json())
    .then(res => res.data)
    .catch(console.error);
}


export default fetchSortedString;
