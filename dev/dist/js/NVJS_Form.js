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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJOVkpTX0Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyDQtNC+0LHQsNCy0LjRgtGMINGE0YPQvdC60YbQuNGOINC/0YDQvtCy0LXRgNC60Lgg0YHQuNC80LLQvtC70L7QsiDQv9GA0Lgg0LLQstC+0LTQtSDQvdC+0LzQtdGA0LBcblxuZnVuY3Rpb24gTkpWU0Zvcm0oY29uZmlnKXtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgaWYodHlwZW9mIGNvbmZpZyA9PSAnc3RyaW5nJyl7XG4gICAgc2VsZi5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcpO1xuICB9IGVsc2UgaWYoY29uZmlnIGluc3RhbmNlb2YgTm9kZSl7XG4gICAgc2VsZi5mb3JtID0gY29uZmlnO1xuICB9XG5cbiAgbGV0IGRhdGVGb3JtO1xuICBsZXQgZGF0ZUZvcm1DaGVjayA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXRfZGF0ZV9fZmllbGQnKTtcbiAgaWYoZGF0ZUZvcm1DaGVjay5sZW5ndGggPiAwKXtcbiAgICBkYXRlRm9ybSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRhdGVGb3JtQ2hlY2ssIDApO1xuICB9XG5cbiAgaWYoZGF0ZUZvcm0pe1xuICAgIGRhdGVGb3JtLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBzZXREYXRlLmNhbGwoZWxlbWVudCwgbmV3IERhdGUoKSk7XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldERhdGUoZGF0ZSl7XG4gICAgdHJ5e3RoaXMudmFsdWVBc0RhdGUgPSBkYXRlfVxuICAgIGNhdGNoKGUpe1xuXG4gICAgICBsZXQgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCkgKyAxOyAvL21vbnRocyBmcm9tIDEtMTJcbiAgICAgIGxldCBkYXkgPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgdGhpcy52YWx1ZSA9IGRheSArIFwiLlwiICsgbW9udGggKyBcIi5cIiArIHllYXI7XG4gICAgfVxuICB9XG5cblxuICBsZXQgY2hvaWNlc0FyciA9IFtdO1xuICAvLyBsZXQgY2hvaWNlc0NvbmZpZyA9IHtcbiAgLy8gICBsb2FkaW5nVGV4dDogJ9CX0LDQs9GA0YPQt9C60LAuLi4nLFxuICAvLyAgIG5vUmVzdWx0c1RleHQ6ICfQndC40YfQtdCz0L4g0L3QtSDQvdCw0LnQtNC10L3QvicsXG4gIC8vICAgbm9DaG9pY2VzVGV4dDogJ9Ct0LvQtdC80LXQvdGC0Ysg0LTQu9GPINCy0YvQsdC+0YDQsCDQvtGC0YHRgtGD0YLRgdGC0LLRg9GO0YInLFxuICAvLyAgIGl0ZW1TZWxlY3RUZXh0OiAn0J3QsNC20LzQuNGC0LUsINGH0YLQvtCx0Ysg0LLRi9Cx0YDQsNGC0YwnLFxuICAvLyAgIGFkZEl0ZW1UZXh0OiAodmFsdWUpID0+IHtcbiAgLy8gICAgIHJldHVybiBg0J3QsNC20LzQuNGC0LUgRW50ZXIsINGH0YLQvtCx0Ysg0LTQvtCx0LDQstC40YLRjCA8Yj5cIiR7dmFsdWV9XCI8L2I+YDtcbiAgLy8gICB9LFxuICAvLyAgIG1heEl0ZW1UZXh0OiAobWF4SXRlbUNvdW50KSA9PiB7XG4gIC8vICAgICByZXR1cm4gYNCc0L7QttC10YIg0LHRi9GC0Ywg0LLRi9Cx0YDQsNC90L4g0L3QtSDQsdC+0LvQtdC1LCDRh9C10LwgJHttYXhJdGVtQ291bnR9INC30L3QsNGH0LXQvdC40LkuYDtcbiAgLy8gICB9LFxuICAvLyB9O1xuICAvLyBsZXQgY2hvaWNlcztcbiAgLy8gbGV0IGNob2ljZXNDaGVjayA9IHNlbGYuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X2Nob2ljZXMnKTtcbiAgLy8gaWYoY2hvaWNlc0NoZWNrLmxlbmd0aCA+IDApIHtcbiAgLy8gICBjaG9pY2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY2hvaWNlc0NoZWNrLCAwKTtcblxuXHQvLyBcdGNyZWF0ZVByb21pc2UoJy9sb2NhbC90ZW1wbGF0ZXMvd2Vic2l0ZS9qcy92ZW5kb3JzL2Nob2ljZXMuanMnKVxuXHQvLyBcdC50aGVuKCgpID0+IHtcbiAgLy8gICAgICAgY2hvaWNlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAvLyAgICAgICAgIGNob2ljZXNBcnIucHVzaChuZXcgQ2hvaWNlcyhlbGVtZW50LCBjaG9pY2VzQ29uZmlnKSk7XG4gIC8vICAgICAgIH0pO1xuXHQvLyBcdH0pO1xuICAvLyB9XG5cbiAgXG4gIGxldCByZXNldDtcbiAgbGV0IHJlc2V0Q2hlY2sgPSBzZWxmLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0Jyk7XG4gIGlmKHJlc2V0Q2hlY2subGVuZ3RoID4gMCkge1xuICAgIHJlc2V0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocmVzZXRDaGVjaywgMCk7XG4gIH1cbiAgXG4gIGxldCBzZWFyY2hJbnB1dDtcbiAgbGV0IHNlYXJjaElucHV0Q2hlY2sgPSBzZWxmLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0X3NlYXJjaCcpO1xuICBpZihzZWFyY2hJbnB1dENoZWNrLmxlbmd0aCA+IDApIHtcbiAgICBzZWFyY2hJbnB1dCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHNlYXJjaElucHV0Q2hlY2ssIDApO1xuICB9XG4gIFxuICBsZXQgaW5wdXRzO1xuICBsZXQgaW5wdXRzQ2hlY2sgPSBzZWxmLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0IC5pbnB1dF9fZmllbGQnKTtcbiAgaWYoaW5wdXRzQ2hlY2subGVuZ3RoID4gMCkge1xuICAgIGlucHV0cyA9IEFycmF5LmFwcGx5KG51bGwsIGlucHV0c0NoZWNrKTtcbiAgfVxuXG4gIHNldEV2ZW50cygpO1xuXG4gIGlmKHNlbGYuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkX21vcmUnKS5sZW5ndGggPiAwKXtcbiAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRfbW9yZScpO1xuICAgIGlmIChidXR0b25zLmxlbmd0aCA+IDApe1xuICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYnV0dG9ucywgMCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgbGV0IG9sZE5vZGUgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgbGV0IG5ld05vZGUgPSBvbGROb2RlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChuZXdOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JyksIDApLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaW5jTmFtZVZhbHVlLmNhbGwoaW5wdXQpO1xuICAgICAgICAgICAgaWYoaW5wdXQudHlwZSA9PSAnZGF0ZScpIHNldERhdGUuY2FsbChpbnB1dCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCBlbGVtZW50KTtcbiAgXG4gICAgICAgICAgaWYob2xkTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKXtcbiAgICAgICAgICAgIGluaXRpYWxpc2VDaG9pY2VzLmNhbGwob2xkTm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gaW5jTmFtZVZhbHVlKCl7XG4gICAgICBsZXQgbGFzdENoYXIgPSB0aGlzLm5hbWVbdGhpcy5uYW1lLmxlbmd0aCAtIDFdO1xuICAgICAgaWYoaXNOYU4oK2xhc3RDaGFyKSl7XG4gICAgICAgIHRoaXMubmFtZSArPSAnMSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUuc2xpY2UoMCwgLTEpICsgKCtsYXN0Q2hhcisxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2V0RGF0ZSgpe1xuICAgICAgdGhpcy52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBpbml0aWFsaXNlQ2hvaWNlcygpe1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgXG4gICAgICBsZXQgc2VsZWN0cyA9IHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9uby1jaG9pY2VzJyk7XG4gICAgICBpZihzZWxlY3RzLmxlbmd0aCA+IDApe1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzZWxlY3RzLCAwKS5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgICAgbmV3IENob2ljZXMoc2VsZWN0LCBjaG9pY2VzQ29uZmlnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBmdW5jdGlvbiBzZXRFdmVudHMoKXtcbiAgICBzZWxmLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgXG4gICAgICBsZXQgYWdyZWVtZW50ID0gc2VsZi5mb3JtLnF1ZXJ5U2VsZWN0b3IoJy5hZ3JlZW1lbnQgaW5wdXQnKTtcbiAgICAgIGlmIChhZ3JlZW1lbnQpe1xuICAgICAgICBpZiAoYWdyZWVtZW50LmNoZWNrZWQpe1xuICAgICAgICAgIC8vINC+0YLQv9GA0LDQstC60LAg0YHQvtCx0YvRgtC40Y8g0L/QvtGB0LvQtSDQv9GA0L7QstC10YDQutC4XG4gICAgICAgICAgc2VuZEZvcm0oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFcnJvci5jYWxsKGFncmVlbWVudClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VuZEZvcm0oKTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYocmVzZXQpe1xuICAgICAgcmVzZXQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpe1xuICAgIGlmKHNlYXJjaElucHV0KXtcbiAgICAgIHNlYXJjaElucHV0LmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPSBcIlwiKTtcbiAgICB9XG5cbiAgICBpZihpbnB1dHMpe1xuICAgICAgaW5wdXRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnZhbHVlID0gXCJcIik7XG4gICAgfVxuXG5cblxuICAgIGlmKGNob2ljZXNBcnIubGVuZ3RoID4gMCl7XG4gICAgICBjaG9pY2VzQXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuZGVzdHJveSgpO1xuICAgICAgICBlbGVtZW50LmluaXQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmRGb3JtKCl7XG4gICAgc2VsZi5mb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdzZW5kZWQnKSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRFcnJvcigpe1xuICAgIHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgcmVtb3ZlRXJyb3IuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUVycm9yKCl7XG4gICAgdGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCByZW1vdmVFcnJvci5iaW5kKHRoaXMpKVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbCgpIHtcbiAgICB2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgcmV0dXJuIHJlLnRlc3QoU3RyaW5nKHRoaXMpLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVUZWwoKSB7XG4gICAgdmFyIHJlID0gL14oKDh8XFwrNylbXFwtIF0/KT8oXFwoP1xcZHszfVxcKT9bXFwtIF0/KT9bXFxkXFwtIF17NywxMH0kLztcbiAgICAgIHJldHVybiByZS50ZXN0KFN0cmluZyh0aGlzKS50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVGV4dCgpIHtcbiAgICB2YXIgcmUgPSAvW2EtekEtWtCwLdGP0ZHQkC3Qr9CBXXsxLH0vO1xuICAgICAgcmV0dXJuIHJlLnRlc3QoU3RyaW5nKHRoaXMpLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbn0iXSwiZmlsZSI6Ik5WSlNfRm9ybS5qcyJ9
