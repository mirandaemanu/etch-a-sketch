const sketchContainer = document.querySelector('.sketch-container');

const createSketchGrid = (size) => {

    for(let i=0;i<size;i++) {
        let sketchLine = document.createElement('div');
        sketchLine.setAttribute("class", "sketch-line");
        sketchContainer.appendChild(sketchLine);        
    }

   let sketchGridLines = document.querySelectorAll('.sketch-line');
    sketchGridLines.forEach((line) => {
        for(let i=0;i<size;i++) {
            let sketchPixel = document.createElement('div');
            sketchPixel.setAttribute("class", "sketch-pixel");
            line.appendChild(sketchPixel);
        }
    })
    
}

let isClicked = false;
window.addEventListener('mousedown', () => {
    isClicked = true;
})

window.addEventListener('mouseup', () => {
    if(isClicked) { isClicked = false; }
})

createSketchGrid(82);

const gridPixels = document.querySelectorAll('.sketch-pixel');

gridPixels.forEach((pixel) => {
    pixel.addEventListener('mousemove', (event) => {
        if(isClicked) { 
            event.target.style.backgroundColor = '#707070';
            event.target.style.border = '1px solid #B6'; 
        }
    })

    pixel.addEventListener('click', (event) => {
        event.target.style.backgroundColor = '#707070';
        event.target.style.border = '1px solid #B6';
    })

    pixel.addEventListener('dragstart', event => {
        event.preventDefault();
    });
      
    pixel.addEventListener('drop', event => {
    event.preventDefault();
    });
})


