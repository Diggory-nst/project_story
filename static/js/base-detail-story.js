

// RATE STORY
function checkRateStory(a, b) {
    let rate1 = document.getElementById(a);
    let rate2 = document.getElementById(b);
    let check1 = rate1.classList.contains('act-rate')
    let check2 = rate2.classList.contains('act-rate')

    if (check1 == true) {
        if (check2 == false) {
            rate2.classList.add('act-rate');
        } else {
            rate2.classList.remove('act-rate');
        }
    }
}


function rateStory(a) {
    let rate = document.getElementById(a);
    let check = rate.classList.contains('act-rate')

    if (check == false) {
        rate.classList.add('act-rate');
    } else {
        rate.classList.remove('act-rate');
    }
}

// RATE STORY Tablet

function checkRateStoryTablet(a, b) {
    let rate1 = document.getElementById(a);
    let rate2 = document.getElementById(b);
    let check1 = rate1.classList.contains('act-rate');
    let check2 = rate2.classList.contains('act-rate');

    if (check1 == true) {
        if (check2 == false) {
            rate2.classList.add('act-rate');
        } else {
            rate2.classList.remove('act-rate');
        }
    }
}


function rateStoryTablet(a) {
    let rate = document.getElementById(a);
    let check = rate.classList.contains('act-rate');

    if (check == false) {
        rate.classList.add('act-rate');
    } else {
        rate.classList.remove('act-rate');
    }
}

let btnRateTablet = document.querySelector('.rate-for-tablet');

let iconClose1 = document.getElementById('icon-close-1');
let modalTablet = document.querySelector('.modal-rateStory-tablet');

btnRateTablet.onclick = function () {
    modalTablet.style.display = 'flex';
}

iconClose1.onclick = function () {
    modalTablet.style.display = 'none';
}

// Mobile

let btnListChapterMobile = document.getElementById('list-chapter-mobile');
let listChapterMobile = document.querySelector('.list-chapter-mobile');

let iconCloseListChap = document.getElementById('icon-close-list-chap');
let closeListChap = document.getElementById('close-list-chap');

btnListChapterMobile.onclick = function () {
    listChapterMobile.style.display = 'block';
}

iconCloseListChap.onclick = function () {
    listChapterMobile.style.display = 'none';
}

closeListChap.onclick = function () {
    listChapterMobile.style.display = 'none';
}

function checkRateStoryMobile(a, b) {
    let rate1 = document.getElementById(a);
    let rate2 = document.getElementById(b);
    let check1 = rate1.classList.contains('act-rate');
    let check2 = rate2.classList.contains('act-rate');

    if (check1 == true) {
        if (check2 == false) {
            rate2.classList.add('act-rate');
        } else {
            rate2.classList.remove('act-rate');
        }
    }
}


function rateStoryMobile(a) {
    let rate = document.getElementById(a);
    let check = rate.classList.contains('act-rate');

    if (check == false) {
        rate.classList.add('act-rate');
    } else {
        rate.classList.remove('act-rate');
    }
}

let btnRateMobile = document.querySelector('.rate-for-mobile');

let iconClose2 = document.getElementById('icon-close-2');
let modalMobile = document.querySelector('.modal-rateStory-mobile');

btnRateMobile.onclick = function () {
    modalMobile.style.display = 'flex';
}

iconClose2.onclick = function () {
    modalMobile.style.display = 'none';
}

// swap introduce story and list Chapter

let detailInfo = document.getElementById('detail-info');
let listChapter = document.getElementById('list-chapter');
let introduceStory = document.querySelector('.story-content__introduce-story');
let listStory = document.querySelector('.story-content__list-chap');

detailInfo.onclick = function () {
    if (listChapter.classList.contains('act')) {
        listChapter.classList.remove('act');
    }

    detailInfo.classList.add('act');
    introduceStory.style.display = 'block';
    listStory.style.display = 'none';
}

listChapter.onclick = function () {
    if (detailInfo.classList.contains('act')) {
        detailInfo.classList.remove('act');
    }

    listChapter.classList.add('act');
    listStory.style.display = 'block';
    introduceStory.style.display = 'none';
}
