const getRandomUser = async () => {
  //by default fetch makes a GET request
  const response = await fetch("https://randomuser.me/api");
  console.log(response.ok);
  // response has an ok property that tells me if my request was successful or not

  const data = await response.json();
  const user = data.results;
  return user;
};

// console.log(getRandomUser());
// getRandomUser().then(console.log);
getRandomUser().then(console.log);

const button = document.querySelector("button");
button.addEventListener("click", async () => {
  const randomUser = await getRandomUser();
  console.log(randomUser, "random user");
  const firstName = randomUser.name.first;
  const lastName = randomUser.name.last;
  console.log(firstName, " ", lastName);
  document.querySelector("h3").innerText = `${firstName} ${lastName}`;
});
