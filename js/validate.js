const validate = () => {
  const addBoardForm = document.querySelector(".add-board");
  const validityForm = addBoardForm.querySelectorAll(".add-val");
  const addBoardButton = addBoardForm.querySelector(".add-board__button");

  //проверка валидности
  addBoardForm.addEventListener("change", (e) => {
    e.preventDefault();
    checkErrors();
    checkValidity();
  });

  //проверка полей формы при отправке
  const checkValidity = () => {
    validityForm.forEach((item) => {
      if (!item.value) {
        addBoardButton.classList.remove("add-board__button_create");
        item.classList.add("add-inval");
        let error = document.createElement("div");
        error.className = "error";
        error.innerHTML = "Поле является обязательным";
        item.parentElement.insertBefore(error, item);
      } else if (item.value.length < 6 && item.type == "text") {
        addBoardButton.classList.remove("add-board__button_create");
        item.classList.add("add-inval");
        let error = document.createElement("div");
        error.className = "error";
        error.innerHTML = "Мин количество символов: 6";
        item.parentElement.insertBefore(error, item);
      } else if (item.value.length > 50 && item.type == "text") {
        addBoardButton.classList.remove("add-board__button_create");
        item.classList.add("add-inval");
        let error = document.createElement("div");
        error.className = "error";
        error.innerHTML = "Макс количество символов: 50";
        item.parentElement.insertBefore(error, item);
      } else if (!item.value.replace(/[\s]+/g, "")) {
        addBoardButton.classList.remove("add-board__button_create");
        item.classList.add("add-inval");
        let error = document.createElement("div");
        error.className = "error";
        error.innerHTML = "Введите корректное значение";
        item.parentElement.insertBefore(error, item);
      } else {
        console.log(addBoardButton);
        addBoardButton.classList.add("add-board__button_create");
      }
    });
  };

  //обновление списка ошибок при новой попытке отправки
  const checkErrors = () => {
    let errors = addBoardForm.querySelectorAll(".error");
    let addInvals = addBoardForm.querySelectorAll(".add-inval");

    errors.forEach((item) => {
      item.remove();
    });

    addInvals.forEach((item) => {
      item.classList.remove("add-inval");
    });
  };
};

validate();
