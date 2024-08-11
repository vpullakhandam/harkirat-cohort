const promisifiedSetTimeout = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

promisifiedSetTimeout(2000).then(() => {
  console.log("logged after 2000ms");
});
