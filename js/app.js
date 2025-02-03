const countryOl = document.getElementById("country");
const overlay = document.getElementById("overlay");

// MODE =================================================

const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
const modeLocal = localStorage.getItem("mode");

if (modeLocal) {
  body.classList.add("dark-mode");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
}

const toggleModeBtin = () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};

darkBtn.addEventListener("click", () => {
  toggleModeBtin();
  localStorage.setItem("mode", "dark-mode");
});

lightBtn.addEventListener("click", () => {
  toggleModeBtin();
  localStorage.setItem("mode", "");
});

//END ======================================================



// create Element ===========================================================
const li = document.createElement("li");
li.className = "list";

async function getData() {
  // overlay.classList.remove("hidden1");
  const req = await fetch("https://restcountries.com/v3.1/all");
  const data = await req.json();
  // overlay.classList.add("hidden1");
  console.log(data);
  return data;
}

function generateCountires(countries) {
  countries.forEach((c) => {
    const { population, region, capital, flags, name } = c;

    countryOl.innerHTML += `
  <li class="countrys">
  <img
  class="country-flags"
  alt="country photo"
  src= ${flags.png}
  width: 264px;
  height: 160px;
  />
  <h4>${name.common}</h4>
  <div class="countryDiv">
  <p>Population:<span> ${population}</span></p>
  <p>Region:<span> ${region}</span></p>
  <p>Capital:<span> ${capital}</span></p>
  </div>
  </li>
    `;
  });
}

getData()
  .then((data) => generateCountires(data))
  .catch((error) => console.log(error));
