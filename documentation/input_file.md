# input_file

## [Example on Codepen](https://codepen.io/r0mzes/pen/vVXYKM)

## layouts

```html
<!-- emmet -->
.file[attach-text="Choose"]>input.file__input[type="file"]+.file__icon>svg[xmlns="http://www.w3.org/2000/svg"]>use[xlink:href="#svg-attach"]^^.input_file__text{choose file}

<!-- html -->
<div class="input_file text" attach-text="Choose">
    <input class="input_file__input" type="file" name="photo"/>
    <div class="input_file__icon">
        <svg xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#svg-attach"></use>
        </svg>
    </div>
    <div class="input_file__text">choose file</div>
</div>

<!-- pug -->
.input_file.text(attach-text="Choose")
    input.input_file__input(type="file", name="photo")
    .input_file__icon
        svg(xmlns="http://www.w3.org/2000/svg")
            use(xlink:href="#svg-attach")
    .input_file__text choose file
```

## mixins

mixins add to `input_file` element styles

- `icon` - add icon from svg to input_file
- `text` - add text to input_file

## customization styles

``` css
    --input_file_padding--left: 22px;
    --input_file_padding--right: 15px;
    --input_file_padding--top: 15px;
    --input_file_padding--bottom: var(--input_file_padding--top);
    --input_background: #ffffff;
    --input_file_font-family: Roboto;

    --placeholder_margin-left: 14px;
    --placeholder_color: #5f6368;
    --placeholder_active-color: #202124;
    --placeholder_font-size: 18px;
    --placeholder_font-weight: 300;

    --text_color: #202124;
    --text_font-size: 11px;
    --text_font-weight: 300;
    --text_decoration: underline solid;

    --icon_size: 40px;
```

## css code of component

```css

.input_file{
    position: relative;
    
    display: flex;
    width: fit-content;
    align-items: center;
    background-color: var(--input_background);
    padding-top: var(--input_file_padding--top);
    padding-right: var(--input_file_padding--right);
    padding-bottom: var(--input_file_padding--bottom);
    padding-left: var(--input_file_padding--left);


    &.icon{
        & .input_file__icon{
            display: flex;
        }
    }

    &.text{
        & .input_file__text{
            display: flex;
        }
    }

    &.icon,
    &.text{
        &::after{
            margin-left: var(--placeholder_margin-left);
        }
    }


    &::after{
        content: attr(attach-text);
        display: block;
        color: var(--placeholder_color);
        font-size: var(--placeholder_font-size);
        font-weight: var(--placeholder_font-weight);
        font-family: var(--input_file_font-family);
        transition: all 100ms ease-in-out;    
    }

    &:hover{
        &::after{
            color: var(--placeholder_active-color);
        }

        & .file__icon{
            border-color: #393f42;
            fill: #393f42;
        }
    }

    &__input{
        position: absolute;
        z-index: 3;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        opacity: 0;
    }

    &__icon,
    &__text{
        display: none;
    }


    &__icon{
        border-radius: 50%;
        width: var(--icon_size);
        height: var(--icon_size);
        min-width: var(--icon_size);
        min-height: var(--icon_size);
        max-width: var(--icon_size);
        max-height: var(--icon_size);
        align-items: center; 
        justify-content: center;
        border: 1px solid #f3f4f4;
        fill: #afafaf;
        transition: all 100ms ease-in-out;

        & svg{
            fill: inherit;
            max-width: 60%;
            max-height: 60%;
        }
    }

    &__text{
        color:  var(--text_color);
        font-family: var(--input_file_font-family);
        font-size: var(--text_font-size);
        font-weight: var(--text_font-weight);
        text-decoration: var(--text_decoration, none);
    }
}
```
