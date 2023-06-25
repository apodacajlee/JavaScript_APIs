console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "xBHEQM4r7k67dZDogmbLfnw7hKybWfPv";

const buttonEle = document.querySelector("#submitSearch");
const inputEle = document.querySelector("#searchWord");
const imgEle = document.getElementsByTagName("img")[0];
const feedbackEle = document.getElementsByTagName("p")[0];

// Exercise 2 and forward Section
console.log("EXERCISE 2:\n==========\n");

buttonEle.addEventListener("click", () => {
    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${inputEle.value}`)
        .then((res) => res.json())
        .then((body) =>  {
            imgEle.src = body.data.images.original.url;
            inputEle.value = "";
            feedbackEle.textContent = "Open the Browser Console to view your work (Right-Click => Inspect or fn+F12)"
        })
        .catch((err) => {
            //handle error
            console.log(err);
            feedbackEle.textContent = err.message
        });
});