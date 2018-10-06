# input_search

## [Example on Codepen](https://codepen.io/r0mzes/pen/rqMaoB)

## layouts

```html
<!-- emmet -->
form.input_search>input.input_search__input[type="text" placeholder="" name="search" value="" required]+svg.input_search__icon[xmlns="http://www.w3.org/2000/svg"]>use[xlink:href="#svg-search"]^button.input_search__button+label.input_search__placeholder

<!-- html -->
<form action="" class="input_search">
    <input type="text" class="input_search__input" placeholder="" name="search" value="" required="required">
    <svg class="input_search__icon" xmlns="http://www.w3.org/2000/svg">
        <use xlink:href="#svg-search"></use>
    </svg>
    <button class="input_search__button"></button>
    <label for="" class="input_search__placeholder"></label>
</form>

<!-- pug -->
form.input_search(action="")
    input.input_search__input(type="text" placeholder="" name="search" value="" required)
    svg.input_search__icon(xmlns="http://www.w3.org/2000/svg")
        use(xlink:href="#svg-search")
        button.input_search__button
    label.input_search__placeholder(for="")

<!-- search icon -->
<div class="svg-root" style="position: absolute; width: 0; height: 0; visibility: hidden;">
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" display="none" aria-hidden="true">
    <symbol id="svg-search" viewBox="0 0 21 22">
        <title>svg-search</title>
        <path d="M20.8852437,21.2967942 L14.766795,14.8782238 C16.3273926,13.2994374 17.294222,11.1229468 17.294222,8.72257675 C17.294222,3.91269871 13.4153751,0 8.647111,0 C3.87884693,0 0,3.91269871 0,8.72257675 C0,13.5324548 3.87884693,17.4451535 8.647111,17.4451535 C10.7401236,17.4451535 12.6610176,16.6904429 14.1582031,15.4381301 L20.2914754,21.8724842 C20.3721817,21.9576332 20.4800647,22 20.5883595,22 C20.6913013,22 20.7938313,21.9613714 20.8737142,21.8841143 C21.0375975,21.7250312 21.0425387,21.4621078 20.8852437,21.2967942 Z M8.647111,16.6144319 C4.33302614,16.6144319 0.823534381,13.0743118 0.823534381,8.72257675 C0.823534381,4.37084167 4.33302614,0.830721595 8.647111,0.830721595 C12.9611958,0.830721595 16.4706876,4.37084167 16.4706876,8.72257675 C16.4706876,13.0743118 12.9607841,16.6144319 8.647111,16.6144319 Z">
    </symbol>
</div>
```


## mixins

mixins add to `input_file` element styles

- `bordered` - border to bottom to active or hovered input
- `colored` - icon change color to selected (`--elements_color_hover` property)
- `right` - icon change position from left to right
- `wide` - input take maximal avaliable width

## customization styles

``` css
    --button_width: 23px; //width of image (button)

    --padding-w: 10px; //horizontal padding
    --padding-h: 10px; //vertical padding

    --coefficient_of_elongation: 5;
    --z-index: 1; //initial z-index

    --background-color: #202124;
    --elements_color: #ffffff;

    --background-color-hover: #5f6368; // settings for "colored" mixin
    --elements_color_hover: #000000; // settings for "colored" mixin

    --border-radius: 0px;

    --border_color: #202124; // settings for "bordered" mixin
```

## css code of component

```css
.input_search{
    color: var(--elements_color);
    fill: var(--elements_color);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    position: relative;
    background-color: var(--background-color);
    overflow: hidden;
    z-index: var(--z-index);
    transition: background-color 300ms ease-in-out;
    width: fit-content;


    .input_hover_mixin{
        width: calc(~'(var(--button_width) + var(--padding-w) * 3) * var(--coefficient_of_elongation)');
        padding-left: calc(~'var(--button_width) + var(--padding-w) * 2');
        opacity: 1;
    }

    .input_hover_icon_mixin{
        z-index: calc(~'var(--z-index) + 3');
    }

    .input_hover_button_mixin{
        z-index: calc(~'var(--z-index) + 4');
    }

    &:hover,
    &:focus,
    &:active{
        & .input_search__input{
            .input_hover_mixin;
        }

        & .input_search__icon{
            .input_hover_icon_mixin;
        }

        & .input_search__button{
            .input_hover_button_mixin;
        }
    }

    & .input_search__input{
        width: calc(~'var(--button_width) + var(--padding-w) * 2');
        height: calc(~'var(--button_width) + var(--padding-h) * 2');
        transition: width 300ms ease-in,  border-color 300ms ease-out 100ms, color 300ms ease-out;
        padding: var(--padding-h) var(--padding-w);
        background-color: transparent;
        position: relative;
        z-index: calc(~'var(--z-index) + 2');
        opacity: 0;
        border-radius: var(--border-radius);
        color: inherit;
        border: none;
        border-bottom: 1px solid transparent;

        &:valid{
            padding-left: calc(~'var(--button_width) + var(--padding-w) * 2');
            width: calc(~'(var(--button_width) + var(--padding-w) * 3) * var(--coefficient_of_elongation)');
            color: inherit;
            opacity: 1;

            & + .input_search__icon + .input_search__button{
                .input_hover_button_mixin;
            }
        }

        
        &:hover,
        &:focus,
        &:active{
            .input_hover_mixin;

            & + .input_search__icon{
                .input_hover_icon_mixin;
            }

            & + .input_search__icon + .input_search__button{
                .input_hover_button_mixin;
            }
        }

        &:-webkit-autofill{
            & + .input_search__icon{
                fill: var(--elements_color_hover);
                z-index: calc(~'var(--z-index) + 2');
            }

            & + .input_search__icon + .input_search__button{
                z-index: calc(~'var(--z-index) + 3');
            }
        }
    }


    & svg{
        height: var(--button_width);
        width: var(--button_width);
        max-height: var(--button_width);
        max-width: var(--button_width);
        min-height: var(--button_width);
        min-width: var(--button_width);
        object-fit: contain;
        position: absolute;
        left:  var(--padding-w);
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
        z-index: calc(~'var(--z-index) + 1');
        fill: inherit;
        transition: fill 300ms ease-in-out, z-index 0ms ease-in-out 100ms;
    }




    & .input_search__button{
        height: var(--button_width);
        width: var(--button_width);
        max-height: var(--button_width);
        max-width: var(--button_width);
        min-height: var(--button_width);
        min-width: var(--button_width);
        position: absolute;
        left:  var(--padding);
        cursor: pointer;
        top: var(--padding);
        bottom: var(--padding);
        z-index: var(--z-index);
        opacity: 0;
        background-color: transparent;
        border: none;
    }

    & .input_search__placeholder{
        display: none;
    }

    // effects
    
    &.bordered{
        &:hover,
        &:focus,
        &:active{
            & .input_search__input{
                border-color: var(--border_color);
            }
        } 

        & .input_search__input{
            &:hover,
            &:focus,
            &:active,
            &:valid{
                border-color: var(--border_color);
            }
        }
    }
    
    &.colored{
        .input_hover_color_mixin{
            color: var(--elements_color_hover);
            background-color: var(--background-color-hover);
        }

        &:hover,
        &:focus,
        &:active{
            & .input_search__input{
                .input_hover_color_mixin;
            }

            & .input_search__icon{ 
                fill: var(--elements_color_hover);
            }
        } 


        & .input_search__input{
            &:hover,
            &:focus,
            &:active{
                .input_hover_color_mixin;

                & + .input_search__icon{ 
                    fill: var(--elements_color_hover);
                }
            }

            &:valid{

            }
        }
    }
    
    &.right{

        .input_hover_right_mixin{
            padding-left: var(--padding-w);
            padding-right: calc(~'var(--button_width) + var(--padding-w) * 2');
        }

        & .input_search__icon,
        & .input_search__button{
            left: initial;
            right:  var(--padding-w);
        }

        &:hover,
        &:focus,
        &:active{
            & .input_search__input{
                .input_hover_right_mixin;
            }
        } 

        & .input_search__input{
            &:hover,
            &:focus,
            &:active{
                .input_hover_right_mixin;
            }

            &:valid{
                .input_hover_right_mixin;
            }
        }
    }


    &.wide{

        & .input_hover_mixin{
            width: 100%;
            padding-left: calc(~'var(--button_width) + var(--padding-w) * 2');
            opacity: 1;
        }

        & .input_search__input{
            padding-left: calc(~'var(--button_width) + var(--padding-w) * 2');
            width: 100%;
            opacity: 1;

            &:valid{
                width: 100%;
            }
        }
    }
}
```
