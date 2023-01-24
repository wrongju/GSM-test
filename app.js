// document.querySelector('#click-search').oninput = function () {
//   let val = this.value.trim();
//   let items = document.querySelectorAll('.list li');
//   if (val != '') {
//     items.forEach((a) => {
//       if (a.innerText.search(val) == -1) {
//         a.classList.add('hide');
//       } else {
//         a.classList.remove('hide');
//       }
//     });
//   } else {
//     items.forEach((a) => {
//       a.classList.remove('hide');
//     });
//   }
// };

let create = document.querySelector('.creater');
let list = document.querySelector('.list');
let documents = document.querySelectorAll('.list-folders');

create.addEventListener('click', () => {
  let number = document.querySelector('.number');

  let doci = document.createElement('li');
  doci.classList.add('list-folders');
  doci.innerHTML = `<img class='document' src="./svg/folder_icon_129381.png" alt="documents">New Document`;
  list.append(doci);

  number.textContent++

//   function func() {
//     let k = 0;
//     function count() {
//       return k++;
//     }
//   }

//   number.textContent = func();
});
