const sketchContainer = document.querySelector('.sketch-container');
let penColor = "#707070";

const createSketchGrid = (size) => {
    let oldGridPixels = document.querySelectorAll('.sketch-line');
    if(oldGridPixels) {
        oldGridPixels.forEach((line) => line.remove())
    }
    
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
    
    gridPixelsDraw(penColor);
}

let isClicked = false;
window.addEventListener('mousedown', () => {
    isClicked = true;
})

window.addEventListener('mouseup', () => {
    if(isClicked) { isClicked = false; }
})

const gridPixelsDraw = (color) => {
    const gridPixels = document.querySelectorAll('.sketch-pixel');
    penColor = color;
    gridPixels.forEach((pixel) => {
        pixel.addEventListener('mousemove', (event) => {
            if(isClicked) { 
                event.target.style.backgroundColor = color();
                event.target.style.border = '1px solid #B6'; 
            }
        })
    
        pixel.addEventListener('click', (event) => {
            event.target.style.backgroundColor = color();
            event.target.style.border = '1px solid #B6';
        })
    
        pixel.addEventListener('dragstart', event => {
            event.preventDefault();
        });
          
        pixel.addEventListener('drop', event => {
        event.preventDefault();
        });
    })
}

const randomColor = () => {
    const colorsPallete = ["#f94144", "#f3722c", "#f8961e", "#f9844a", "#f9c74f", "#90be6d", "#43aa8b", "#4d908e", "#577590", "#277da1"];
    return colorsPallete[Math.floor(Math.random() * colorsPallete.length)];
}

const changeSelectedButton = (btn, btnClass) => {
    let buttons = document.querySelectorAll(btnClass).forEach(button => {
        button.style.background = "#1982C4";
        button.style.color = "#F9C74F";
    })

    btn.style.background = "#F9C74F";
    btn.style.color = "#1982C4";
}

document.querySelectorAll('.pen-btn').forEach((btn) => {
    btn.addEventListener('click', () => changeSelectedButton(btn, ".pen-btn"));
})

document.querySelectorAll('.size-btn').forEach((btn) => {
    btn.addEventListener('click', () => changeSelectedButton(btn, ".size-btn"));
})

createSketchGrid(42);
gridPixelsDraw(() => "#707070")

document.querySelector('.grid-btn-small').addEventListener('click', () => { createSketchGrid(26); })
document.querySelector('.grid-btn-medium').addEventListener('click', () => { createSketchGrid(46); })
document.querySelector('.grid-btn-big').addEventListener('click', () => { createSketchGrid(66); })


document.querySelector('.erase-btn').addEventListener('click', () => { 
    let color = () => "#D8D8D8";
    gridPixelsDraw(color);
})
document.querySelector('.normal-btn').addEventListener('click', () => {
    let color = () => "#707070";
    gridPixelsDraw(color);
})

document.querySelector(".rainbow-btn").addEventListener('click', () => {
    gridPixelsDraw(randomColor);
})

document.querySelector(".clear-btn").addEventListener('click', () => {
    let gridSize = [...document.querySelectorAll(".sketch-line")].length;
    createSketchGrid(gridSize);
})


