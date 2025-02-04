const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const kategori = urlParams.get("kategori");
const menu = urlParams.get("menu");

console.log("kategori;", kategori);

document.querySelector(".produkter").innerHTML = `<h2>${kategori}</h2> <section class="produktliste"></section>`;

function prodkat(menu) {
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

let produktDesc = document.querySelector(".produktliste");
const prodKat = prodkat(menu);
fetch(`https://kea-alt-del.dk/t7/api/products?limit=100&${[prodKat]}=${kategori}`)
	.then((response) => response.json())
	.then((data) => showData(data));
function showData(produkter) {
	console.log(produkter);

	function onSale(pris, rabat) {
		if (rabat > 0) {
			return (pris * (1 - rabat / 100)).toFixed(2);
		}
		return pris; // Hvis rabatten er 0, returnér den oprindelige pris
	}

	let markup = produkter
		.map((produkt) => {
			let produktSale = produkt.discount > 0 ? "onSale" : "normal";
			let productSoldOut = produkt.soldout ? "soldOut" : "";

			return `
	  <article class="produktkort ${produktSale} ${productSoldOut}">
		<a href="produkt.html?produktId=${produkt.id}">
		  <img src="https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp" alt="Produktfoto" />
		</a>
		<p>
		  <span>${produkt.brandname}</span> <span style="filter: invert(30%)">${produkt.articletype}</span>
		</p>
		<h3>${produkt.productdisplayname}</h3>
		<p class="nulldiscount">${produkt.price} kr</p>
		<div class="discounted">
		  <p class="sale nyPris">${onSale(produkt.price, produkt.discount)} kr</p>
		  <p>
			<span style="font-size: 12px">
			  Before: <span style="text-decoration: line-through">${produkt.price} kr</span>
			</span>
			<span class="sale rabatProcent" style="font-size: 12px">Save -${produkt.discount}%</span>
		  </p>
		</div>
		<a href="produkt.html">Read more</a>
	  </article>
	`;
		})
		.join(``);
	produktDesc.innerHTML = markup;
}
