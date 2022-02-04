const productSorting = document.querySelector(".added-product__sorting");
const addedProductSortingItem = document.querySelectorAll(
  ".added-product__sorting__item"
);

productSorting.addEventListener("click", () => {
  addedProductSortingItem.forEach((item) => {
    item.classList.add("added-product__sorting__item__visible");
  });
});

const arrDef = JSON.parse(localStorage.getItem("arrNewCards"));

//преобразуем строку с ценой к типу number
arrDef.forEach((item) => {
  if (typeof item.price == "string") {
    item.price = parseInt(item.price.replace(/\s+/g, ""));
  }
});

//сортировка min -> max
arrDef.sort(function (a, b) {
  return a.price - b.price;
});

//сортировка max -> min
const reverseNewArrDer = arrDef.reverse();

localStorage.setItem("arrNewCards", JSON.stringify(reverseNewArrDer));
