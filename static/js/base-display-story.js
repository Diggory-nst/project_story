

// DISPLAY LIST CHAPTER

let listChapter = document.querySelector('.setting-list');
let errorChapter = document.querySelector('.error-chapter');
let settingChapter = document.querySelector('.setting-setting');

let modal = document.querySelector('.modal');
let modalListChapter = document.querySelector('.modal-body__list-chapter');
let modalErrorChapter = document.querySelector('.modal-body__error-chapter');
let customBackground = document.querySelector('.custom-background');
let iconClose1 = document.getElementById('icon-close-1');
let iconClose2 = document.getElementById('icon-close-2');
let iconClose3 = document.getElementById('icon-close-3');

let container = document.querySelector('.container'); // #e5e4db
let bodyStory = document.querySelector('.body-story') // #faf5eb
let customBackground1 = document.getElementById('custom-background-1');
let customBackground2 = document.getElementById('custom-background-2');
let customBackground3 = document.getElementById('custom-background-3');

listChapter.onclick = function () {
    modal.style.display = 'flex';
    modalListChapter.style.display = 'block';
}

iconClose1.onclick = function () {
    modal.style.display = 'none';
    modalListChapter.style.display = 'none';
}

errorChapter.onclick = function () {
    modal.style.display = 'flex';
    modalErrorChapter.style.display = 'block';
}

iconClose2.onclick = function () {
    modal.style.display = 'none';
    modalErrorChapter.style.display = 'none';
}

settingChapter.onclick = function () {
    customBackground.style.display = 'block';
}

iconClose3.onclick = function () {
    customBackground.style.display = 'none';
}

var arr = [customBackground1, customBackground2, customBackground3];

function checkExistColor() {
    for (var i = 0; i < arr.length; i++) {
        let check3 = arr[i].classList.contains('check-color');
        if (check3 == true) {
            let iconCheck = document.querySelector('.icon-check');
            arr[i].classList.remove('check-color');
            iconCheck.remove();
        }
    }
}

customBackground1.onclick = function () {
    let checkExist = customBackground1.classList.contains('check-color');

    if (checkExist == false) {
        checkExistColor();

        customBackground1.classList.add('check-color');
        customBackground1.innerHTML = '<i class="fa-solid fa-check icon-check"></i>';
        container.style.backgroundColor = '#e5e4db';
        bodyStory.style.backgroundColor = '#faf5eb';
    }
}

customBackground2.onclick = function () {
    let checkExist = customBackground2.classList.contains('check-color');
    if (checkExist == false) {
        checkExistColor();

        customBackground2.classList.add('check-color');
        customBackground2.innerHTML = '<i class="fa-solid fa-check icon-check"></i>';
        container.style.backgroundColor = '#dededeb5';
        bodyStory.style.backgroundColor = '#dcdcdc';
    }
}

customBackground3.onclick = function () {
    let checkExist = customBackground3.classList.contains('check-color');
    if (checkExist == false) {
        checkExistColor();

        customBackground3.classList.add('check-color');
        customBackground3.innerHTML = '<i class="fa-solid fa-check icon-check"></i>';
        container.style.backgroundColor = '#252626';
        bodyStory.style.backgroundColor = '#161819';
    }
}