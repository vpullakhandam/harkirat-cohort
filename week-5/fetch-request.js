async function fetchPost() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await resp.json();
  //   console.log(JSON.stringify(data));
  document.getElementById("root").innerHTML = data.body;
}
fetchPost();
