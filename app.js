const pencilDrawings = document.querySelector('#pencil');
const paintings = document.querySelector('#paintings');
const pencilBtn = document.querySelector('.pencil-btn');
const paintingBtn = document.querySelector('.painting-btn');


// Hide & Show Pencil Drawings and Paintings 
function toggle1() {
    pencilDrawings.classList.add('hide');
    paintings.classList.remove('hide');
    pencilBtn.classList.remove('current');
    paintingBtn.classList.add('current');
}

function toggle2() {
    pencilDrawings.classList.remove('hide');
    paintings.classList.add('hide');
    paintingBtn.classList.remove('current');
    pencilBtn.classList.add('current');
}

// CREATE GALLERY MODAL