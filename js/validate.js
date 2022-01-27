const validate = () => {
  const addBoardForm = document.querySelector(".add-board");
  const validityForm = addBoardForm.querySelectorAll(".add-val");
  const addBoardNumber = addBoardForm.querySelector(".add-board__number");
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
        item.classList.add("add-inval");
        addBoardButton.classList.remove("add-board__button_create");
        let error = document.createElement("div");
        error.className = "error";
        error.innerHTML = "Поле является обязательным";
        item.parentElement.insertBefore(error, item);
      } else if (item.value.length < 6 && item.type == "text") {
        item.classList.add("add-inval");
        addBoardButton.classList.remove("add-board__button_create");
        let error = document.createElement("div");
        error.className = "error";
        error.innerHTML = "Мин количество символов: 6";
        item.parentElement.insertBefore(error, item);
      } else if (item.value.length > 50 && item.type == "text") {
        item.classList.add("add-inval");
        addBoardButton.classList.remove("add-board__button_create");
        let error = document.createElement("div");
        error.className = "error";
        error.innerHTML = "Макс количество символов: 50";
        item.parentElement.insertBefore(error, item);
      } else if (!item.value.replace(/[\s]+/g, "")) {
        item.classList.add("add-inval");
        addBoardButton.classList.remove("add-board__button_create");
        let error = document.createElement("div");
        error.className = "error";
        error.innerHTML = "Введите корректное значение";
        item.parentElement.insertBefore(error, item);
      } else {
        addBoardButton.classList.add("add-board__button_create");
        addBoardButton.disabled = false;
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

  //маска разделения тысячных пробелом для поля цены
  addBoardNumber.addEventListener("keypress", () => {
    console.log(addBoardNumber);
    if (addBoardNumber.value.length > 2) {
      var str = addBoardNumber.value;
      let newStr = str.replace(/(\d\d)(?=(\d\d)+([^\d]|$))/g, "$1 ");
      console.log(newStr);
      addBoardNumber.value = newStr;
    }
  });
};

validate();
