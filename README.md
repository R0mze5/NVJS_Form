NVJS_Form
==========

NVJS_Form - is the free and responsive Form script, which used for check form and control events on it.

- **No dependencies**
- All modern browsers are supported
- Fully **responsive**

NVJS_Form is not compatible with all platforms, because it used ES6. it is a modern menu which is focused only on modern apps/platforms to bring the best experience and simplicity.

## [Example on Codepen](https://codepen.io/r0mzes/pen/rqLQRq)

<!-- _Read documentation in other languages:_
[_Русский_](documentation/README.ru-Ru.md) -->

# Supported Browsers

- Edge
- Chrome
- Safari
- Mobile Safari
- Android Default Browser

# API

## Initialize NVJS_Form

``` js
// initialize form with options:
new NVJS_Form(formContainer);
```

- `formContainer` - `string` (with CSS Selector) of NVJS_Form container HTML element or `Node`. Required

## Events

**example:**
``` js
    let form = new NVJS_Form('.form');
    form.form.addEventListener('sended', ()=>{
        console.log('form send')
    })
```

> **`sended`** \
> When form checked and send

# Get Started

## Include NVJS_Form Files To Website/App

```html
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <link rel="stylesheet" href="path/to/NVJS_Form.css">
</head>
<body>
    ...
    <script src="path/to/NVJS_Form.js"></script>
</body>
</html>
```


## Add NVJS_Form HTML Layout

- **[html form example](documentation/form_example.md)**

```html
<form class="form">
    <div class="form__wrapper">
        <div class="form__area">
            <div class="form__container">
                <div class="form__group"></div>
                <div class="form__group"></div>
            </div>
            <div class="form__group"></div>
        </div>
        <div class="form__area">
            <div class="form__group"></div>
            <div class="form__group"></div>
        </div>
    </div>
</div>
```

- `.form__wrapper` - horizontal centered element
- `.form__area` - make area of elements with large margin-bottom
- `.form__title` - large title for area
- `.form__container` - break the row on same column on resize (`--form_container_column: 4;`)
- `.form__group` - make group of elements
- `.form__label` - title for elements

## Initialize NVJS_Form

```js
    new NVJSForm("form.form");
```


# FormElements

- **[duplicate previous block](documentation/duplicate_previous_block.md)**
- **[inputs and textarea](documentation/inputs_and_textarea.md)**
- **[input_date](documentation/input_date.md)**
- **[input_file](documentation/input_file.md)**
- **[input_search](documentation/input_search.md)**

- **[checkbox](documentation/checkbox.md)**
- **[radio button](documentation/radio_button.md)**

- **[button](documentation/button.md)**

# Changelog

Changelog is available on [Changelog documentation](documentation/changelog.md).


# License

 NVJS_Form is licensed [WTFPL](http://www.wtfpl.net/about/). You can use it **for free** and **without any attribution**, in any personal or commercial project. You may also fork the project and re-release it under another license you prefer.
