# checkbox

## [Example on Codepen](https://codepen.io/r0mzes/pen/yRJdJb)

## layouts

```html
<!-- emmet -->
.checkbox>.checkbox__container>input.checkbox__input#checkBoxId[type="checkbox"]+label.checkbox__label[for="checkBoxId"]>.checkbox__content{content}

<!-- html -->
<div class="checkbox">
      <input class="checkbox__input" type="checkbox" id="checkBoxId"/>
      <label class="checkbox__label" for="checkBoxId"><span class="checkbox__content">
          content
    </div>

<!-- pug -->
- var checkBoxId =  "checkBoxId"
.checkbox
    input.checkbox__input(type="checkbox" id=checkBoxId)
    label.checkbox__label(for=checkBoxId)
        span.checkbox__content content
```

## mixins

mixins add to `checkbox` element styles

- `error` - highlights like an error

## customization styles

``` css
    --checkbox_box-width: 12px;
    --inside_color: #ffffff;
    --check_backround_color: var(--dark_color);

    --border-width: 1px;
    --border-radius: 0px;
    --border_color: #979797;
    --error_color: var(--red_color);

    --foolish_space: 2px;

    --margin-right: 9px;
    --margin-top: 2px;

    --content_padding-top: 1px;
```

## css code of component

```css

.checkbox{
    --box-size: calc(~'var(--checkbox_box-width) - var(--foolish_space) * 2');
    display: flex;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;

    &.error{
        --border-width: 2px;
        & .checkbox__label::before{
            box-shadow: 0 0 0 var(--border-width) var(--error_color);
        }
    }

    &__input{
        display: none;
        &:checked + .checkbox__label::before{
            background-color: var(--check_backround_color);
        }
    }

    &__label{
        cursor: pointer;
        display: flex;
        user-select: none;

        &::before{         
            display: block;
            box-sizing: content-box;
            content: '';
            width: var(--box-size);
            height: var(--box-size);
            min-width: var(--box-size);
            min-height: var(--box-size);
            max-width: var(--box-size);
            max-height: var(--box-size);
            background-color: var(--inside_color);
            border: solid var(--foolish_space) var(--inside_color);
            box-shadow: 0 0 0 var(--border-width) var(--border_color);
            border-radius: var(--border-radius);
            margin-right: var(--margin-right);
            margin-top: var(--margin-top);
        }
    }

    &__content,
    &__link,
    &__label{
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
    }

    &__content{
        padding-top: var(--content_padding-top);
    }

    &__link{
        text-decoration: underline solid;
    }
}

```
