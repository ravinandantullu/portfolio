# Nice Videos
# https://www.youtube.com/watch?v=qKoajPPWpmo&list=PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C&index=1

# CSS
   * Style used in Head

# Box model
 * Content
 * Padding
 * Border
 * Margin

# Margin (top | left | bottom | right)
# Example for image:
display: block;
margin-left: auto;
margin-right: auto;

# Padding (top | left | bottom | right)

# BORDER (width | style(solid | dashed | dotted | double | groove | ridge | inset | outset ) | color) (top | left | bottom | right) | radius (top | left | bottom | right)
border: 1px solid black;
border-radius: 10px;

# IHERITANCE(Parent to Child)
html > body > h1, p, p, h2

# RULES
# Apply for mutiple tags, elements...
h1, h2, p{}

# Web Colors (background-color)
 * 16 primary colors
 * RGB(red | green | blue) rgb(0,0,0)
 * Hexa code: #ffcf79

# Classes 
Select the elements individually

# Color (for text color)
color: red;

# Text (decoration | align)
text-decoration: underline | line-through | overline | none;
text-align: center | right | left;

# Background: (color | image)
background-color: color;
background-image: url(clouds.jpeg);

# FONT(Size | Family | Weight | Style)
line-height: 20px;
font-family: Verdana, Arial, Geneva, Arial Black, Helvetica;
font-weight: lighter | normal | bold | bolder;
font-style: italic | oblique
font-size: Pixels(20px) | Percentage(150%) | 1.2em | keywords(xx-small | x-small | small | medium | large | x-large | xx-large)






# Display(inline | block | inline-block | )

# Float (left | right)
 * should have the width for the elements

# Position (top | bottom | left | right) (absolute | relative | fixed | static)

# Overflow (scroll | hidden)

# Cursor(default | inherit | auto | url crosshair | pointer | move | text.....)

# Styling the Body
body{
    background-color: red;
    margin: 20px;
    font-family: Gerogia;
    font-size: 14px;
}

# Media Quires
* View Port:
    > The viewport is the user's visible area of a web page.
    > The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.
    > <meta name="viewport" content="width=device-width, initial-scale=1.0">

# /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .example {background: red;}
}

# /* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .example {background: green;}
}

# /* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .example {background: blue;}
} 

# /* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .example {background: orange;}
} 

# /* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .example {background: pink;}
}


