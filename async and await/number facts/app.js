// Using await
let favNum = 7;
let baseURL = "http://numbersapi.com";

// Await request
async function part1() {
    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
}
part1();

// Return data on multiple numbers
const favNums = [3, 2, 27];
async function part2() {
    let data = await $.getJSON(`${baseURL}/${favNums}?json`);
    console.log(data);
  }
  part2();
  

// Return data on multiple number requests
async function part3() {
    let facts = await Promise.all(
      Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data => {
      $('body').append(`<p>${data.text}</p>`);
    });
  }
  part3();

  
