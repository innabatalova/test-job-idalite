const adding = () => {
  const cardsGrid = document.querySelector(".cards-grid");
  const addBoardName = document.querySelector(".name");
  const addBoardInfo = document.querySelector(".info");
  const addBoardLink = document.querySelector(".link");
  const addBoardPrice = document.querySelector(".price");
  const setForm = document.querySelector(".add-board");
  const addBoardButton = document.querySelector(".add-board__button");

  //добавление карточки при отправке формы
  setForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newCard = {
      name: addBoardName.value,
      info: addBoardInfo.value,
      link: addBoardLink.value,
      price: addBoardPrice.value,
    };

    //отрисовка карточки
    const renderCard = () => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      cardsGrid.append(cardDiv);
      cardDiv.innerHTML = `
        <img
          src=${newCard.link}
          alt="card image"
          class="card__image"
        />
        <div class="card__content">
          <h2 class="card__title">${newCard.name}</h2>
          <p class="card__info">${newCard.info}</p>
          <div class="span card__price">${newCard.price} руб.</div>
        </div>
        <div class="card__basket">
          <img src="image/basket-icon.svg" alt="basket icon" />
        </div>
      `;
    };

    setTimeout(function () {
      renderCard();
    }, 300);
    clearForm();
  });

  //очистка формы после отправки
  const clearForm = () => {
    addBoardName.value = "";
    addBoardInfo.value = "";
    addBoardLink.value = "";
    addBoardPrice.value = "";
    addBoardButton.classList.remove("add-board__button_create");
    addBoardButton.disabled = true;
  };

  //удаление карточки из списка
  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("card__basket") &&
      e.target.parentNode.classList.contains("card")
    ) {
      e.target.parentNode.remove();
    }
    if (e.target.parentNode.classList.contains("card__basket")) {
      e.target.parentNode.parentNode.remove();
    }
  });
};

adding();
