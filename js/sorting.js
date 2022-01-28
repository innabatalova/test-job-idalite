const sorting = () => {
  const productSorting = document.querySelector(".added-product__sorting");
  const addedProductSortingItem = document.querySelectorAll(".list");

  productSorting.addEventListener("click", () => {
    addedProductSortingItem.forEach((item) => {
      item.classList.toggle("added-product__sorting__item__visible");
    });
  });
};

sorting();
