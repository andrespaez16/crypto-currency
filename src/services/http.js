const url = "https://api.coinlore.net/api";

export function apiCallback(queryParams) {
  return fetch(`${url}/${queryParams}`)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log(response, "estopy desde http");
      return { data: response };
    })
    .catch((error) => {
      console.log(error);
    });
}
