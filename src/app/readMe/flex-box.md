# Properties for the Parent (flex container)
    display: flex;
    flex-direction: flex-direction: row | row-reverse | column | column-reverse;
    flex-wrap: nowrap | wrap | wrap-reverse;
    flex-flow: <‘flex-direction’> || <‘flex-wrap’>
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
    align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
    align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;

# Properties for the Children (flex items)
    order: <integer>; /* default is 0 */
    flex-grow: <number>; /* default 0 */
    flex-shrink: <number>; /* default 1 */
    flex-basis: <length> | auto; /* default auto */
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
