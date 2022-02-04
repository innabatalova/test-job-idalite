const adding = () => {
  const cardsGrid = document.querySelector(".cards-grid");
  const addBoardName = document.querySelector(".name");
  const addBoardInfo = document.querySelector(".info");
  const addBoardLink = document.querySelector(".link");
  const addBoardPrice = document.querySelector(".price");
  const setForm = document.querySelector(".add-board");
  const addBoardButton = document.querySelector(".add-board__button");
  const arrNewCards = [];

  //отрисовка карточки
  const renderCard = (newCard) => {
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("id", newCard.id);
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
          <span class="card__price">${newCard.price} руб.</span>
        </div>
        <div class="card__basket">
          <img src="image/basket-icon.svg" alt="basket icon" />
        </div>
      `;
  };

  //добавление карточки при отправке формы
  setForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let addId = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const newCard = {
      id: addId,
      name: addBoardName.value,
      info: addBoardInfo.value,
      link: addBoardLink.value,
      price: addBoardPrice.value,
    };
    //сохранение карточки в массив
    arrNewCards.push(newCard);
    //сохранение карточки в localStorage
    setTimeout(function () {
      localStorage.setItem("arrNewCards", JSON.stringify(arrNewCards));
    }, 500);
    setTimeout(function () {
      renderCard(newCard);
    }, 300);
    //clearForm();
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
      let a = e.target.parentNode.id;
      arrOverWrit(a);
    }
    if (e.target.parentNode.classList.contains("card__basket")) {
      e.target.parentNode.parentNode.remove();
      let a = e.target.parentNode.parentNode.id;
      arrOverWrit(a);
    }
  });

  //перезапись массива c карточками
  const arrOverWrit = (a) => {
    const del = JSON.parse(localStorage.getItem("arrNewCards"));
    const delArr = del.filter((element) => {
      return !(element.id == a);
    });
    localStorage.setItem("arrNewCards", JSON.stringify(delArr));
  };

  //сохранение карточек при перезагрузке страницы
  if (localStorage.getItem("arrNewCards")) {
    const i = JSON.parse(localStorage.getItem("arrNewCards"));
    i.forEach((item) => {
      renderCard(item);
    });
  }
};

adding();
