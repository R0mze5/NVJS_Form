# button

## [Example on Codepen](https://codepen.io/r0mzes/pen/vVXNWo)

## layouts

```html
<!-- emmet -->
.button.dark_btn{button}

<!-- html -->
<div class="button dark_btn">button</div>

<!-- pug -->
.button.dark_btn button
```

## mixins

mixins add to `button` element styles

- `any_class` - you should prepare styles for correctly preview of button
- `inverse` - usually used for setting inverted colors like for `hover` effect


## customization styles

``` css
.anyClass{
    --background_color: var(--any_color);
    --text_color: #ffffff;

    background-color: var(--background_color);
    border-color: var(--background_color);
    color: var(--text_color);

    &:hover{
        background-color: var(--text_color);
        color: var(--background_color);
    }

    &.inverse{
        background-color: var(--text_color);
        color:  var(--background_color);
        border-color: var(--background_color);

        &:hover{  
            background-color: var(--background_color);
            color: #fff;
        }
    }
}
```

## css code of component

```css

.button{
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    user-select: none;
    border: 2px solid transparent;


    font-size: 11px;
    color: #ffffff;
    text-transform: uppercase;
    font-family: Roboto;
    font-weight: 300;
    // padding-top: 4px;
    letter-spacing: 1px;

    
    height: 42px;
    border-radius: 100px;
    max-width: 180px;
    margin-left: auto;
    margin-right: auto;

    @media @tablet{
        font-size: 16px;
        letter-spacing: 1.2px;
        font-size: 12px;
    }

    @media @desktop{
        font-size: 16px;
        max-width: 187px;
        letter-spacing: 1.4px;
        font-size: 14px;
        height: 44px;
    }


    transition: transform 0.3s,  background-color 0.3s;
    
    &:focus,
    &:active{
        transform: scale(1.05);
        outline: none;
    }

    &:hover {
        color: #fff; 
    } 
}


.gradient{
    --start-color: #5f6368;
    --end-color: #202124;
    background: linear-gradient(95deg, var(--start-color) 0%, var(--end-color) 99%);
    background-size: contain;
    z-index: 1;
    overflow: hidden;
    color: var(--end-color);

    &:hover::after {
        background: transparent;
        right: -300%; 
    }

    &::after {
        display: block;
        content: '';
        position: absolute;
        width: calc(~"100% - 2px");
        height: calc(~"100% - 2px");
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        border-radius: 100px;
        background-color: #fff;
        z-index: -1;
        transition: all 0.3s; 
    }

    &.inverse{
        color: #ffffff;

        &:hover{
            color: var(--end-color);
        }

        &:hover::after {
            right: 0;
            background: #fff;
        }
    
        &::after {
            background: transparent;
            right: -300%; 
        }
    }
}

```
