# inputs and textarea

## [Example on Codepen](https://codepen.io/r0mzes/pen/BqzeKG)

## layouts

```html
<!-- emmet -->
.input_date>input.input_date__field[type="date" name="someDate"]

<!-- html -->
<div class="input_date">
    <input class="input_date__field" type="date" name="someDate"/>
</div>

<!-- pug -->
.input_date
    input.input_date__field(type="date", name="someDate")
```

## mixins

mixins add to `input_date` element styles

- `error` - highlights like an error

## customization styles

``` css
    --input_min_height: 30px;

    --input_padding--left: 35px;
    --input_padding--right: var(--input_padding--left);
    --add_placeholder_left_coef: 0.65;
    --input_padding--bottom: var(--input_padding--top);

    --input_border: 1px solid #5f6368;
    --input_border_active: 1px solid #202124;
    --input_border-radius: 20px;
    
    --input_background: #ffffff;
    --error_color: var(--red_color);

    --input_text_color: #171717;
    --input_placeholder_color: #5a5a5a;
    --input_font_size: 12px;
    --input_font_family: Roboto;
    --input_font_weight: 400;

    --box_shadow_color: transparent;
```

## css code of component

```css

.input_date{
    position: relative;
    display: block;

    &.error{
        /* --box_shadow_color: var(--error_color); */
        --input_border: 1px solid var(--error_color);
        --input_text_color: var(--error_color);
    }

    .style_mixin{
        color:  var(--input_text_color);
        font-family: var(--input_font_family);
        font-size: var(--input_font_size);
        font-weight: var(--input_font_weight);
    }

    box-shadow: inset 0 0 0 1px var(--box_shadow_color);
    min-height: var(--input_min_height);    
    font-size: var(--input_font_size);
    border-radius: var(--input_border-radius);
    background-color: var(--input_background);


    
    &__field{
        .style_mixin;
        min-height: var(--input_min_height);  
        border: var(--input_border);
        border-radius: var(--input_border-radius);
        background-color: var(--input_background);
        padding-top: var(--input_padding--top);
        padding-right: calc(~'var(--input_padding--right) / 2');
        padding-bottom: var(--input_padding--bottom);
        padding-left: var(--input_padding--left);
        position: relative;
        width: 100%;
    
        &:focus,
        &:active,
        &:hover{
            border: var(--input_border_active);
            outline: none;
        }
    

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button,
        &::-webkit-calendar-picker-indicator {
            position: absolute;
            right: calc(~'var(--input_padding--right) / 2');
        }
    
    
        &::-webkit-clear-button { /* Removes blue cross */
            display: none;
            -webkit-appearance: none;
            margin: 0;
        }
    }
}

```
