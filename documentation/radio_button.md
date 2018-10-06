# radio button

## [Example on Codepen](https://codepen.io/r0mzes/pen/xyOvKN)

## layouts

```html
<!-- html -->
<div class="radio">
    <div class="radio__container">
        <input class="radio__input" id="radio_answer1" type="radio" name="answer" value="answer1" checked="checked"/>
        <label class="radio__label" for="radio_answer1"><span class="radio__content">Yes</span></label>
    </div>
    <div class="radio__container">
        <input class="radio__input" id="radio_answer2" type="radio" name="answer" value="answer2"/>
        <label class="radio__label" for="radio_answer2"><span class="radio__content">No</span></label>
    </div>
</div>

<!-- pug -->
- var radioName =  "answer"
.radio
    .radio__container
        - var radioMarker =  "1"
        input.radio__input(id="radio_"+radioName + radioMarker type="radio" name=radioName value=radioName + radioMarker)
        label.radio__label(for="radio_"+radioName+radioMarker)
            span.radio__content yes
    .radio__container
        - var radioMarker =  "2"
        input.radio__input(id="radio_"+radioName+radioMarker type="radio" name=radioName value=radioName+radioMarker)
        label.radio__label(for="radio_"+radioName+radioMarker)
            span.radio__content no
```

## mixins

mixins add to `radio` element styles

- `error` - highlights like an error

## customization styles

``` css
    --checkbox_box-width: 11px;
    --inside_color: #ffffff;
    --border__active_color: #202124;

    --border-width: 1px;
    --border-radius: 50%;
    --border_color: #8f8f8f;
    --border__active_color: #202124;
    --error_color: var(--red_color);

    --foolish_space: 3px;

    --dot-margin-right: 3px;
    --dot-margin-top: 0px;
    --radio_margin-right: 18px;
    --content_padding-top: 0px;
```

## css code of component

```css

.radio{
    --box-size: calc(~'var(--checkbox_box-width) - var(--foolish_space) * 2');
    border-radius: 50%;
    display: flex;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;

    &.error{
        --border-width: 2px;
        & .radio__label::before{
            box-shadow: 0 0 0 var(--border-width) var(--error_color);
        }
    }

    &__container{
        margin-right: var(--radio_margin-right);
        &:last-child{
            margin-right: 0;
        }
    }

    &__input{
        display: none;
        &:checked + .radio__label::before{
            background-color: var(--check_backround_color);
            --border_color: var(--border__active_color);
        }
    }

    &__label{
        cursor: pointer;
        display: flex;
        user-select: none;
        align-items: flex-start;

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
            margin-right: var(--dot-margin-right);
            margin-top: var(--dot-margin-top);
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
