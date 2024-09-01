async function fetchPost1() {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  document.getElementById("root").innerHTML = resp.data.body;
}

fetchPost1();
