






/* VARIABLE */
const resolution = document.querySelector('.resolution');
const gridContainer = document.querySelector('.grid-container');
const submitBtn = document.querySelector('.submit-btn');
const colorPicker = document.querySelector('#color-picker');
const message = document.querySelector('.message')
const blackBtn = document.querySelector('#black-btn');
const eraserBtn = document.querySelector('#eraser-btn');
const randomColorBtn = document.querySelector('#random-color-btn');
const resetBtn = document.querySelector('#reset-btn');

let resolutionValue = resolution.value;


/* function creates grid */
function createGrid() {


   let resolutionValue = resolution.value;


   gridContainer.style.gridTemplateColumns = `repeat(${resolutionValue}, 1fr)`;
   gridContainer.style.gridTemplateRows = `repeat(${resolutionValue}, 1fr)`;


   let divNum = resolutionValue * resolutionValue;

   for(let i = 0; i < divNum; i++) {
      
      let grid = document.createElement('div');
      gridContainer.appendChild(grid);
      grid.classList.add('grid');

      blackBackground();
      eraseBackground();
      randomColorBackground();
      resetBackground();
      
   

     

   }
}


/*removes grids */
function removeGrid() {
   while(gridContainer.hasChildNodes()) {
      gridContainer.removeChild(gridContainer.firstChild)
   }
}

/*buttons that adds grid */
submitBtn.addEventListener('click', () => {
   if(gridContainer.hasChildNodes()){
      removeGrid()
   }else {
      createGrid()
     
   }
})



/*create background color btn */
function blackBackground() {
   let grid = gridContainer.querySelectorAll('.grid');


   blackBtn.addEventListener('click', () => {
      grid.forEach(element => element.addEventListener('mouseover', (e) => {
         element.style.backgroundColor = 'black';
      }),
   )
   })
}

/*create eraser btn */
function eraseBackground() {
   let grid = gridContainer.querySelectorAll('.grid');

   eraserBtn.addEventListener('click', () => {
      grid.forEach(element => element.addEventListener('mouseover', (e) => {
         element.style.backgroundColor = 'white';
      }),
   )
   })
}

/*create random color btn */
function randomColorBackground() {
   let grid = gridContainer.querySelectorAll('.grid');

   randomColorBtn.addEventListener('click', () => {
      grid.forEach(element => element.addEventListener('mouseover', (e) => {
         let R = Math.floor(Math.random() * 255);
         let G = Math.floor(Math.random() * 255);
         let B = Math.floor(Math.random() * 255);
         element.style.backgroundColor = `rgba(${R},${G},${B})`;
      }),
   )
   })
}




/*create reset btn */
function resetBackground() {
   let grid = gridContainer.querySelectorAll('.grid');

   resetBtn.addEventListener('click', () => {
     if(gridContainer.hasChildNodes()) {
         while(gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.firstChild);
      }}
     resolution.value = ''; 
   })
}