const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const produktId = urlParams.get("produktId");

console.log("produktId;", produktId);
let produktDesc = document.querySelector(".produktinfo");
fetch(`https://kea-alt-del.dk/t7/api/products/${produktId}`)
  .then((response) => response.json())
  .then((data) => {
    produktDesc.innerHTML = `
   <img src="https://kea-alt-del.dk/t7/images/webp/640/${produktId}.webp" alt="Produktfoto" />
      <div class="produktdesc">
        <div>
          <p>Nike | <span>Color: ${data.basecolour} </span></p>
          <h3>${data.productdisplayname}</h3>
          <div class="produktdescgreen">${data.styledesc}</div>
        </div>
        <div class="produktdesccta">
          <p class="bold" class="nulldiscount">${data.price} kr</p>
          <div class="discounted">
            <p class="sale bold"></p>
            <p>
              <span style="font-size: 12px">Before: <span style="text-decoration: line-through">${data.price} kr</span></span>
              <span class="sale rabatProcent_1163" style="font-size: 12px"></span>
            </p>
          </div>
          <div class="size-picker">
            <button class="size-btn" data-size="S">XS</button>
            <button class="size-btn" data-size="S">S</button>
            <button class="size-btn" data-size="M">M</button>
            <button class="size-btn" data-size="L">L</button>
            <button class="size-btn" data-size="L">XL</button>
            <button class="size-btn" data-size="L">XXL</button>
          </div>
          <button class="kurv bold">Add to cart</button>
        </div>
        <div class="produktdesc1">
          <p>Description</p>
          <p>${data.description}</p>
        </div>
      </div>`;
    sizeButtonListeners();
  });

function sizeButtonListeners() {
  const buttons = document.querySelectorAll(".size-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      console.log("Valgt størrelse:", button.dataset.size);
    });
  });
}
