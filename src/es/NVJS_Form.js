'use strict';

// добавить функцию проверки символов при вводе номера

function NJVSForm(config){
  const self = this;

  if(typeof config == 'string'){
    self.form = document.querySelector(config);
  } else if(config instanceof Node){
    self.form = config;
  }

  let dateForm;
  let dateFormCheck = this.form.querySelectorAll('.input_date__field');
  if(dateFormCheck.length > 0){
    dateForm = Array.prototype.slice.call(dateFormCheck, 0);
  }

  if(dateForm){
    dateForm.forEach(element => {
      setDate.call(element, new Date());
    })
  }

  function setDate(date){
    try{this.valueAsDate = date}
    catch(e){

      let month = date.getUTCMonth() + 1; //months from 1-12
      let day = date.getUTCDate();
      let year = date.getUTCFullYear();
      this.value = day + "." + month + "." + year;
    }
  }


  let choicesArr = [];
  // let choicesConfig = {
  //   loadingText: 'Загрузка...',
  //   noResultsText: 'Ничего не найдено',
  //   noChoicesText: 'Элементы для выбора отстутствуют',
  //   itemSelectText: 'Нажмите, чтобы выбрать',
  //   addItemText: (value) => {
  //     return `Нажмите Enter, чтобы добавить <b>"${value}"</b>`;
  //   },
  //   maxItemText: (maxItemCount) => {
  //     return `Может быть выбрано не более, чем ${maxItemCount} значений.`;
  //   },
  // };
  // let choices;
  // let choicesCheck = self.form.querySelectorAll('.select_choices');
  // if(choicesCheck.length > 0) {
  //   choices = Array.prototype.slice.call(choicesCheck, 0);

	// 	createPromise('/local/templates/website/js/vendors/choices.js')
	// 	.then(() => {
  //       choices.forEach(element => {
  //         choicesArr.push(new Choices(element, choicesConfig));
  //       });
	// 	});
  // }

  
  let reset;
  let resetCheck = self.form.querySelectorAll('.reset');
  if(resetCheck.length > 0) {
    reset = Array.prototype.slice.call(resetCheck, 0);
  }
  
  let searchInput;
  let searchInputCheck = self.form.querySelectorAll('.input_search');
  if(searchInputCheck.length > 0) {
    searchInput = Array.prototype.slice.call(searchInputCheck, 0);
  }
  
  let inputs;
  let inputsCheck = self.form.querySelectorAll('.input .input__field');
  if(inputsCheck.length > 0) {
    inputs = Array.apply(null, inputsCheck);
  }

  setEvents();

  if(self.form.querySelectorAll('.add_more').length > 0){
    let buttons = document.querySelectorAll('.add_more');
    if (buttons.length > 0){
      Array.prototype.slice.call(buttons, 0).forEach(element => {
        element.style.cursor = 'pointer';
        element.addEventListener('click', () => {
          let oldNode = element.previousElementSibling;
          let newNode = oldNode.cloneNode(true);
          Array.prototype.slice.call(newNode.querySelectorAll('input'), 0).forEach(input => {
            incNameValue.call(input);
            if(input.type == 'date') setDate.call(input);
          });
          
          element.parentNode.insertBefore(newNode, element);
  
          if(oldNode.classList.contains('hidden')){
            initialiseChoices.call(oldNode);
          }
        });
      });
    }
  
    function incNameValue(){
      let lastChar = this.name[this.name.length - 1];
      if(isNaN(+lastChar)){
        this.name += '1';
      } else {
        this.name = this.name.slice(0, -1) + (+lastChar+1);
      }
    }
    
    function setDate(){
      this.valueAsDate = new Date();
    }
  
    function initialiseChoices(){
      this.classList.remove('hidden');
  
      let selects = this.querySelectorAll('.select_no-choices');
      if(selects.length > 0){
        Array.prototype.slice.call(selects, 0).forEach(select => {
          new Choices(select, choicesConfig);
        });
      }
    }
  }


  function setEvents(){
    self.form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      let agreement = self.form.querySelector('.agreement input');
      if (agreement){
        if (agreement.checked){
          // отправка события после проверки
          sendForm();
        } else {
          setError.call(agreement)
        }
      } else {
        sendForm();
      }
    })

    if(reset){
      reset.forEach(element => {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          resetForm();
        });
      });
    }
  }

  function resetForm(){
    if(searchInput){
      searchInput.forEach(element => element.querySelector('input').value = "");
    }

    if(inputs){
      inputs.forEach(element => element.value = "");
    }



    if(choicesArr.length > 0){
      choicesArr.forEach(element => {
        element.destroy();
        element.init();
      });
    }
  }

  function sendForm(){
    self.form.dispatchEvent(new Event('sended'));
  }

  function setError(){
    this.parentNode.classList.add('error');
    this.addEventListener('change', removeError.bind(this))
  }

  function removeError(){
    this.parentNode.classList.remove('error');
    this.removeEventListener('change', removeError.bind(this))
  }

  function validateEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this).toLowerCase());
  }

  function validateTel() {
    var re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
      return re.test(String(this).toLowerCase());
  }

  function validateText() {
    var re = /[a-zA-Zа-яёА-ЯЁ]{1,}/;
      return re.test(String(this).toLowerCase());
  }

}