# form_example

```html
<form class="form">
  <div class="form__area">
    <div class="form__container">
      <div class="input">
        <input class="input__field" type="text" placeholder="Name" name="name"/>
        <p class="input__placeholder">Name</p>
      </div>
      <div class="input">
        <input class="input__field" type="email" placeholder="Email" name="email"/>
        <p class="input__placeholder">Email</p>
      </div>
      <div class="input">
        <input class="input__field" type="tel" placeholder="Telephone" name="tel"/>
        <p class="input__placeholder">Telephone</p>
      </div>
      <div class="input">
        <input class="input__field" type="text" placeholder="Address" name="home"/>
        <p class="input__placeholder">Address</p>
      </div>
    </div>
    <div class="input">
      <input class="input__field" type="number" placeholder="Age" name="age" min="18" max="76" maxlength="2"/>
      <p class="input__placeholder">Age</p>
    </div>
    <div class="input">
      <input class="input__field" type="number" placeholder="Salary" name="salry"/>
      <p class="input__placeholder">Salary</p>
    </div>
  </div>
  <div class="form__area">
    <div class="form__group">
      <label class="form__label">Answer</label>
      <div class="radio">
        <div class="radio__container">
          <input class="radio__input" id="radio_answer1" type="radio" name="answer" value="answer1" checked="checked"/>
          <label class="radio__label" for="radio_answer1"><span class="radio__content">Yse   </span></label>
        </div>
        <div class="radio__container">
          <input class="radio__input" id="radio_answer2" type="radio" name="answer" value="answer2"/>
          <label class="radio__label" for="radio_answer2"><span class="radio__content">No     </span></label>
        </div>
      </div>
    </div>
  </div>
  <div class="form__area">
    <h4 class="form__title">Experience  </h4>
    <div class="form__group">
      <div class="form__group">
        <label class="form__label">since</label>
        <div class="input_date">
          <input class="input_date__field" type="date" name="workstart"/>
        </div>
        <label class="form__label">to</label>
        <div class="input_date">
          <input class="input_date__field" type="date" name="workend"/>
        </div>
      </div>
      <div class="input">
        <input class="input__field" type="text" placeholder="Workplace" name="workplace"/>
        <p class="input__placeholder">Workplace</p>
      </div>
    </div>
    <div class="add_more">add</div>
  </div>
  <div class="form__area">
    <h4 class="form__title">Additional information </h4>
    <div class="input">
      <textarea class="input__field" placeholder="Additional information" name="cources"></textarea>
      <p class="input__placeholder">Additional information</p>
    </div>
  </div>
  <div class="form__area">
    <div class="form__group">
      <label class="form__label">Attach file</label>
      <div class="input_file text" attach-text="Choose">
        <input class="input_file__input" type="file" name="photo"/>
        <div class="input_file__icon">
          <svg xmlns="http://www.w3.org/2000/svg">
            <use xlink:href="#svg-attach"></use>
          </svg>
        </div>
        <div class="input_file__text">Choose file </div>
      </div>
    </div>
  </div>
  <div class="form__area">
    <div class="checkbox agreement">
      <input class="checkbox__input" type="checkbox" id="agreement"/>
      <label class="checkbox__label" for="agreement"><span class="checkbox__content">I am agree with<a class="agreement__link" href="">
             confidentional politics</a></span></label>
    </div>
    <div class="form__captcha" style="min-width:40px; height: 80px; color: #ffffff; background-color: var(--dark_light_color); display: flex; align-items: center; justify-content: center;">Kaptcha place</div>
  </div>
  <div class="form__container">
    <div class="button reset dark_light_btn">reset</div>
    <button class="button dark_btn">send</button>
  </div>
</form>

```
