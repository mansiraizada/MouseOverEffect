
// first method
var crsr = document.querySelector('.cursor');

document.addEventListener('mousemove', function (det) {
    crsr.style.top = `${det.y}px`;
    crsr.style.left = `${det.x}px`;
})





// Second method
// var body = document.querySelector('body');
// var crsr = document.createElement('div');

// crsr.classList.add('cursor');
// body.appendChild(crsr);
// body.addEventListener('mousemove', function (det) {
//     crsr.style.top = `${det.y}px`;
//     crsr.style.left = `${det.x}px`;
// })