/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


function getRandomItem(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getRandomRate() {
  
  const min = PRICE_RANGE.min;
  const max = PRICE_RANGE.max;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateFreelancer() {
  return {
    name: getRandomItem(NAMES),
    occupation: getRandomItem(OCCUPATIONS),
    rate: getRandomRate(),
  };
}


let freelancers = Array.from({ length: NUM_FREELANCERS }, generateFreelancer);


function getAverageRate() {
  const total = freelancers.reduce((sum, f) => sum + f.rate, 0);
  return total / freelancers.length;
}


let averageRate = getAverageRate();


function FreelancerRow(freelancer) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${freelancer.name}</td>
    <td>${freelancer.occupation}</td>
    <td>$${freelancer.rate}</td>
  `;

  return tr;
}


function FreelancerRows() {
  const tbody = document.createElement("tbody");
  tbody.id = "FreelancerRows";

  freelancers.forEach((f) => {
    tbody.appendChild(FreelancerRow(f));
  });

  return tbody;
}


function AverageRate() {
  const div = document.createElement("div");
  div.id = "average";

  div.innerHTML = `<h2>Average Hourly Rate: $${averageRate.toFixed(2)}</h2>`;
  return div;
}


function render() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <div id="average"></div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody id="FreelancerRows"></tbody>
    </table>
  `;

  
  app.querySelector("#average").replaceWith(AverageRate());
  app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}

render();