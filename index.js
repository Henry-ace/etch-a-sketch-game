




/* VARIABLE */
const resolution = document.querySelector('.resolution');
const gridContainer = document.querySelector('.grid-container');
const submitBtn = document.querySelector('.submit-btn');
const colorPicker = document.querySelector('#color-picker');
const gridOpacity = document.querySelector('.grid-btn');
const grids = document.querySelectorAll('.grid');





/* varaibles for grid area width, height and grid size */
const GRIDWIDTH = 700;
const GRIDHEIGHT = 500;
let cols = 15;


/* styling grid-area */
gridContainer.style.height = `${GRIDHEIGHT}px`
gridContainer.style.width = `${GRIDWIDTH}px`






/*  function that creates the grids */
function createsGrid() {
   const resolution = (cols * cols)
   for(let i = 0; i < resolution; i++) {
      let grid = document.createElement('div')
      grid.style.width = `${(GRIDWIDTH / cols)}px`;
      grid.style.height = `${(GRIDHEIGHT / cols)}px`;
      grid.classList.add('grid')
      gridContainer.append(grid)


   }
}

/* function that removes grid*/
function removeGrid() {
   while(gridContainer.hasChildNodes()) {
      gridContainer.removeChild(gridContainer.firstChild);
   }
}


/*event listn for that displays te grids*/
submitBtn.addEventListener('click', function() {
   cols = resolution.value;
   if(gridContainer.hasChildNodes()) {
      removeGrid()
   }else {
      createsGrid()
   }
   
})


/*event listener to change the background */
gridContainer.addEventListener('mouseover', function(e) {
   target = e.target
   if(target.classList.contains('grid')) {
      target.style.backgroundColor = colorPicker.value;
   }
})


/* function for grid opacity change */

function gridOpacityChange( ) {
   if(gridContainer.hasChildNodes()){
      grids.style.border = `1px solid white`;
}}

3