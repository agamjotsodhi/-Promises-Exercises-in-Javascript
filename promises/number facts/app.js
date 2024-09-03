let favNum = 7;
let baseURL = "http://numbersapi.com";

// API request with .then
$.getJSON(`${baseURL}/${favNum}?json`).then(data => {
    console.log(data);
});

// Return data on multiple number requests
let favNums = [3, 2, 27, 10];
$getJSON(`${baseURL}/${favNums}?json`).then(data => {
    console.log(data)
});

// Promise function
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
