let katListe = document.querySelector(".kategorier");
fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showData(data));

function showData(data) {
  console.log(data);
  const markup = data.map((data) => `<a href="produktliste.html?kategori=${data.category}">${data.category}</a>`).join(``);
  katListe.innerHTML = markup;
}
