import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// Original code
// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// };

// Task 1
const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);

// Task 2
const fetchFunData = async (txt, apiEndPoint) => {
  try {
    const response = await fetch(
      apiEndPoint + "?text=" + encodeURIComponent(txt)
    );
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log("Ups... ");
    new Error("rejected!");
  }
};

const yoda = await fetchFunData(
  "There was a farmer who had a dog",
  "https://api.funtranslations.com/translate/yoda.json"
);
console.log("--------");
yoda.error
  ? console.log(yoda.error.message)
  : console.log(yoda.contents?.translated);
