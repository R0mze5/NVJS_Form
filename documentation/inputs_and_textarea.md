# inputs and textarea

## [Example on Codepen](https://codepen.io/r0mzes/pen/dqaYaJ)

## layouts

### input

```html
<!-- emmet -->
.input>input.input__field[type="text" placeholder="SomeName*"]+p.input__placeholder{SomeName*}

<!-- html -->
<div class="input">
  <input type="text" class="input__field" placeholder="SomeName*">
  <p class="input__placeholder">SomeName*</p>
</div>

<!-- pug -->
- var name = "SomeName"
input.input__field(type="text", placeholder= name, name="anyName")
p.input__placeholder= name

```

### textarea

```html
<!-- html -->
<div class="input">
    <textarea name="" cols="30" rows="10" placeholder="Комментарий"></textarea>
    <p class="input__placeholder">Комментарий</p>
</div>

```

## mixins

mixins add to `input` element styles

- `no-placeholder` - hide placeholder
- `error` - highlights like an error

## customization styles

``` css
    --input_min_height: 37px;
    --textarea_height: 115px;

    --input_padding--left: 15px;
    --input_padding--right: var(--input_padding--left);
    --input_padding--top: 10px;
    --input_padding--bottom: var(--input_padding--top);

    --input_border: 1px solid #ffffff;
    --input_border_active: 1px solid #979797;
    --input_border-radius: 0px;
    
    --input_background: #ffffff;
    --error_color: var(--red_color);

    --input_text_color: #171717;
    --input_placeholder_color: #5a5a5a;
    --input_font_size: 12px;
    --input_font_family: var(--text_font);
    --input_font_weight: 400;

    --box_shadow_color: transparent;

    --add_placeholder_top_coef: 0.7;
    --add_placeholder_left_coef: 0.65;
```

## css code of component

```css

.input{
    position: relative;
    display: block;

    &.error{
        /* --box_shadow_color: var(--error_color); */
        --input_border: 1px solid var(--error_color);
        --input_text_color: var(--error_color);
        --input_placeholder_color: var(--error_color);
    }

    &.no-placeholder{
        & .input__placeholder{
            display: none;
        }

        & input{
            padding-top: var(--input_padding--top);
        }
    }

    box-shadow: inset 0 0 0 1px var(--box_shadow_color);
    min-height: var(--input_min_height);    
    font-size: var(--input_font_size);
    border-radius: var(--input_border-radius);
    background-color: var(--input_background);

    .placeholder_mixin{
        color:  var(--input_placeholder_color);
        font-family: var(--input_font_family);
        font-size: var(--input_font_size);
        font-weight: var(--input_font_weight);
        transition: border 150ms ease-in-out;
    }
    
    & > *::-webkit-input-placeholder {.placeholder_mixin}
    & > *::-moz-placeholder {.placeholder_mixin}
    & > *:-ms-input-placeholder {.placeholder_mixin}
    & > *:-moz-placeholder {.placeholder_mixin}
    & > *::placeholder {.placeholder_mixin}
    
    .form_mixin{
        .placeholder_mixin;
        color:  var(--input_text_color);
        border: var(--input_border);
        border-radius: var(--input_border-radius);
        background-color: var(--input_background);
        padding-top: var(--input_padding--top);
        padding-right: var(--input_padding--right);
        padding-bottom: var(--input_padding--bottom);
        padding-left: var(--input_padding--left);
        width: 100%;
    
        &:focus,
        &:active,
        &:hover{
            border: var(--input_border_active);
            outline: none;
        }
    
        &:-webkit-autofill{
            border-radius: var(--input_border-radius);
        }
    
        &:placeholder-shown{
            padding-left: var(--input_padding--left);
        }
    
        &:placeholder-shown + .input__placeholder{
            display: none;
        }
    
    }

    
    & input{
        .form_mixin;
        height: var(--input_min_height);
        padding-top: calc(~'var(--input_padding--top) * 1.4');
    
        &:placeholder-shown{
            padding-top: var(--input_padding--top);
        }
    }	
    
    & textarea{
        .form_mixin;
        height: var(--textarea_height);
        padding-top: calc(~"var(--input_padding--top) * 1.6");
        resize: none;
        display: block;
    }		
    
    
    &__placeholder{
        .placeholder_mixin;
        font-size: 0.7em;
        position: absolute;
        top: calc(~'var(--input_padding--top) * var(--add_placeholder_top_coef)');
        left: calc(~'var(--input_padding--left) * var(--add_placeholder_left_coef)');
        text-transform: none;
        line-height: 1;

        @supports (-ms-ime-align:auto) {
            display: none;
        }
    
        @media @tablet{
            font-size: 0.7em;
        }
    }

}

```
