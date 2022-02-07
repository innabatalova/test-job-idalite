const productSorting = document.querySelector(".added-product__sorting");
const addedProductSortingItem = document.querySelectorAll(
  ".added-product__sorting__item"
);
const sortRandom = productSorting.querySelector(".sort-random");
const sortMinMax = productSorting.querySelector(".sort-min-max");
const sortMaxMin = productSorting.querySelector(".sort-max-min");
const sortName = productSorting.querySelector(".sort-name");

//показать варианты сортировки
productSorting.addEventListener("click", (e) => {
  addedProductSortingItem.forEach((item) => {
    item.classList.add("added-product__sorting__item__visible");
  });
});

//сортировка рандомно
sortRandom.addEventListener("click", (e) => {
  e.stopPropagation(); //отмена всплытия клика

  addedProductSortingItem.forEach((item) => {
    item.classList.remove("added-product__sorting__item__visible");
  });
  sortRandom.classList.add("added-product__sorting__item__visible");

  const arrDef = JSON.parse(localStorage.getItem("arrNewCards"));

  arrDef.sort(function () {
    return 0.5 - Math.random();
  });

  localStorage.setItem("arrNewCards", JSON.stringify(arrDef));

  setTimeout(function () {
    const oldCard = document.querySelectorAll(".card");

    oldCard.forEach((item) => {
      item.remove();
    });

    const i = JSON.parse(localStorage.getItem("arrNewCards"));
    i.forEach((item) => {
      renderCard(item);
    }, 600);
  });
});

//сортировка min -> max
sortMinMax.addEventListener("click", (e) => {
  e.stopPropagation();

  addedProductSortingItem.forEach((item) => {
    item.classList.remove("added-product__sorting__item__visible");
  });
  sortMinMax.classList.add("added-product__sorting__item__visible");

  const arrDef = JSON.parse(localStorage.getItem("arrNewCards"));

  //преобразуем строку с ценой к типу number
  arrDef.forEach((item) => {
    if (typeof item.price == "string") {
      item.price = parseInt(item.price.replace(/\s+/g, ""));
    }
  });

  arrDef.sort(function (a, b) {
    return a.price - b.price;
  });

  localStorage.setItem("arrNewCards", JSON.stringify(arrDef));

  setTimeout(function () {
    const oldCard = document.querySelectorAll(".card");

    oldCard.forEach((item) => {
      item.remove();
    });

    const i = JSON.parse(localStorage.getItem("arrNewCards"));
    i.forEach((item) => {
      renderCard(item);
    }, 600);
  });
});

//сортировка max -> min
sortMaxMin.addEventListener("click", (e) => {
  e.stopPropagation();

  addedProductSortingItem.forEach((item) => {
    item.classList.remove("added-product__sorting__item__visible");
  });
  sortMaxMin.classList.add("added-product__sorting__item__visible");

  const arrDef = JSON.parse(localStorage.getItem("arrNewCards"));

  //преобразуем строку с ценой к типу number
  arrDef.forEach((item) => {
    if (typeof item.price == "string") {
      item.price = parseInt(item.price.replace(/\s+/g, ""));
    }
  });

  arrDef.sort(function (a, b) {
    return a.price - b.price;
  });

  const reverseNewArrDer = arrDef.reverse();

  localStorage.setItem("arrNewCards", JSON.stringify(reverseNewArrDer));

  setTimeout(function () {
    const oldCard = document.querySelectorAll(".card");

    oldCard.forEach((item) => {
      item.remove();
    });

    const i = JSON.parse(localStorage.getItem("arrNewCards"));
    i.forEach((item) => {
      renderCard(item);
    }, 600);
  });
});

//сортировка по наименованию
sortName.addEventListener("click", (e) => {
  e.stopPropagation();

  addedProductSortingItem.forEach((item) => {
    item.classList.remove("added-product__sorting__item__visible");
  });
  sortName.classList.add("added-product__sorting__item__visible");

  const arrDef = JSON.parse(localStorage.getItem("arrNewCards"));

  arrDef.sort(function (a, b) {
    var nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  localStorage.setItem("arrNewCards", JSON.stringify(arrDef));

  setTimeout(function () {
    const oldCard = document.querySelectorAll(".card");

    oldCard.forEach((item) => {
      item.remove();
    });

    const i = JSON.parse(localStorage.getItem("arrNewCards"));
    i.forEach((item) => {
      renderCard(item);
    }, 600);
  });
});
