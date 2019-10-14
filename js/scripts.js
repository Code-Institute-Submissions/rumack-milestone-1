// let path = document.querySelector('.architecture');
// console.log(path.getTotalLength())

//console.log(Array.from(document.querySelectorAll('.path-36')).length);

let pathArr = Array.from(document.querySelectorAll('.path'));

pathArr.forEach((el, idx) => {
    let length = el.getTotalLength();
    console.log(`Path number: ${idx + 1}: ****${length}`);
})


// for (let i = 1; i <= 36; i++) {
//     let length = pathArr[i].getTotalLength();
//     console.log(`Path number: ${i}: ****${length}`);
// }

// let test = document.querySelector('.path-34');
// console.log(test.getTotalLength());
  