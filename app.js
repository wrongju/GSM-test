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
});
