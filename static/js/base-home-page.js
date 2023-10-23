// Base phần Home-page

let textAddStory = document.querySelectorAll('.text-add-story');
let addStory = document.querySelectorAll('.add-story');
let btnAddStory = document.querySelectorAll('#btn-add-story');
let valueTextAdd = document.querySelectorAll('#text-vote-story');
let voteStoryInfo = document.querySelector('#list-nameStory-vote');

var arrVoteStory = [];

addStory[0].onclick = function () {
    textAddStory[0].style.display = 'block';
}

btnAddStory[0].onclick = function () {
    let valueStory = valueTextAdd[0].value;

    if (valueStory != '') {
        arrVoteStory.push(valueStory);
        console.log(arrVoteStory);
        textAddStory[0].style.display = 'none';
    }
}

// Tablet

addStory[1].onclick = function () {
    textAddStory[1].style.display = 'block';
}

btnAddStory[1].onclick = function () {
    let valueStoryTablet = valueTextAdd[1].value;

    if (valueStoryTablet != '') {
        arrVoteStory.push(valueStoryTablet);
        console.log(arrVoteStory);
        textAddStory[1].style.display = 'none';
    }
}

// Mobile

addStory[2].onclick = function () {
    textAddStory[2].style.display = 'block';
}

btnAddStory[2].onclick = function () {
    let valueStoryMobile = valueTextAdd[2].value;

    if (valueStoryMobile != '') {
        arrVoteStory.push(valueStoryMobile);
        console.log(arrVoteStory);
        textAddStory[2].style.display = 'none';
    }
}