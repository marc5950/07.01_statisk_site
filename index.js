const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const menu = urlParams.get("menu") || "Categories";

console.log("menu;", menu);

document.querySelector(".katliste").innerHTML = `<h2>${menu}</h2> <section class="kategorier"></section>`;

let katListe = document.querySelector(".kategorier");
fetch(`https://kea-alt-del.dk/t7/api/${menu}`)
  .then((response) => response.json())
  .then((data) => showData(data));

function menukat(menu) {
  if (menu === "Categories") {
    return "category";
  } else if (menu === "Subcategories") {
    return "subcategory";
  } else if (menu === "Seasons") {
    return "season";
  } else {
    return "category"; // Hvis ingen match findes
  }
}

function showData(data) {
  console.log(data);
  const kategoriNavn = menukat(menu);
  const markup = data
    .map(
      (data) => `<a href="produktliste.html?kategori=${data[kategoriNavn]}">${data[kategoriNavn]}</a>
  `
    )
    .join(``);
  katListe.innerHTML = markup;
}
