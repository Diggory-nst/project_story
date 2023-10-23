let des = document.querySelectorAll('.des-wrap');
initIndex = 0;

// setInterval(() => {
//     let lists = document.querySelectorAll('.swiper-slide');
//     document.querySelector('.swiper-wrapper').appendChild(lists[0])
//     elm = lists[1];
//     let index = elm.dataset.index;
//     des[index].style.visibility = 'visible';
//     des[initIndex].style.visibility = 'hidden';
//     initIndex = index;
// }, 5000)

document.querySelector('.sls-btn__prev').onclick = function () {
    let lists = document.querySelectorAll('.slide');
    document.querySelector('.sls-wrapper').prepend(lists[lists.length - 1]);
    elm = lists[lists.length - 1];
    let index = elm.dataset.index;
    des[index].style.visibility = 'visible';
    des[initIndex].style.visibility = 'hidden';
    initIndex = index;
}

document.querySelector('.sls-btn__next').onclick = function () {
    let lists = document.querySelectorAll('.slide');
    document.querySelector('.sls-wrapper').appendChild(lists[0])
    elm = lists[1];
    let index = elm.dataset.index;
    des[index].style.visibility = 'visible';
    des[initIndex].style.visibility = 'hidden';
    initIndex = index;
}