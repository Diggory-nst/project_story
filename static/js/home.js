// Get Cookie for fetch

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2)
        return parts
        .pop()
        .split(";")
        .shift();
}

// Vote story Laptop

let textAddStoryLap = document.getElementById('text-add-story-laptop');
let addStoryLap = document.getElementById('add-story-laptop');
let btnAddStoryLap = document.getElementById('btn-add-story-laptop');
let valueTextAddLap = document.getElementById('text-vote-story-laptop');
let listStoryLap = document.querySelector('#list-nameStory-vote-laptop');
let btnVoteLap = document.querySelectorAll('#list-nameStory-vote-laptop .vote');

let infoUpdate = document.getElementById('info-update-laptop');
  
if(localStorage.getItem('addStoryClickedLap') === 'true'){
    addStoryLap.remove();
    let listVoteLap = document.getElementById('list-nameStory-vote-laptop');
    listVoteLap.style.marginTop = '30px';
}

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function displayText(textAddStory){
    textAddStory.style.display = 'block';
}

if(addStoryLap){
    addStoryLap.addEventListener('click', function(){
        displayText(textAddStoryLap);
    });
}

if(btnAddStoryLap){
    btnAddStoryLap.onclick = function () {
        let valueStory = valueTextAddLap.value;
    
        const apiAddVoteStory = "https://tangkinhcac.vn/add_vote_story/";
    
        const new_valueStory = capitalizeWords(valueStory)
    
        fetch(apiAddVoteStory, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data:{
                    'name_story': new_valueStory,
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status == 'success'){
    
                let story_id = data.story_id;
    
                listStoryLap.insertAdjacentHTML('afterbegin', `
                <div class="vote-story__info">
                    <span class="name-vote">${new_valueStory}</span>
                    <span class="vote" onclick="voteStoryLap(${story_id})" id="${story_id}">Vote</span>
                </div>`)

                infoUpdate.style.transform = 'unset';
    
                valueTextAddLap.value = '';
                textAddStoryLap.style.display = 'none';
    
                addStoryLap.remove();
    
                localStorage.setItem('addStoryClickedLap', 'true');
            }
        })
        .catch(error => {
            const text_error = document.getElementById('info-update-laptop');
            text_error.insertAdjacentHTML('afterend', `<p id="text-error">Bạn Cần Đăng Nhập Để Thêm Truyện</p>`)
        });
    }
}


function voteStoryLap(story_id){
    const apiAddVote = "https://tangkinhcac.vn/vote_story/";

    fetch(apiAddVote, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'story_id': story_id,
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.status == 'success'){
            let receive_data = data.data_send;
            let number_vote = receive_data.number_vote;
            let story_votes = receive_data.story_votes;

            let changeBtnVote = document.getElementById(`${story_id}`);
            changeBtnVote.innerHTML = number_vote;

            let btnvotes = document.querySelectorAll('#list-nameStory-vote-laptop .vote');
            let arrBtnVotes = [...btnvotes];
            let arrStoryVotes = [...story_votes];

            arrBtnVotes.forEach((btn)=>{
                const pk = btn.dataset.pk
                const storyVote = arrStoryVotes.find((story)=> story.pk == pk);
                if(storyVote){
                    btn.innerHTML = storyVote.fields.number_vote;
                }
            })
        }
    })
    .catch(error => {
        const text_error = document.getElementById('info-update-laptop');
        text_error.insertAdjacentHTML('afterend', `<p id="text-error">Bạn Cần Đăng Nhập Để Vote Truyện</p>`)
    });
}

// Vote story Tablet

let textAddStoryTab = document.getElementById('text-add-story-tablet');
let addStoryTab = document.getElementById('add-story-tablet');
let btnAddStoryTab = document.getElementById('btn-add-story-tablet');
let valueTextAddTab = document.getElementById('text-vote-story-tablet');
let listStoryTab = document.querySelector('#list-nameStory-vote-tablet');
let btnVoteTab = document.querySelectorAll('#list-nameStory-vote-tablet .vote');

let infoUpdateTab = document.getElementById('info-update-tablet');

if(localStorage.getItem('addStoryClickedTab') === 'true'){
    addStoryTab.remove();
    let listVoteTab = document.getElementById('list-nameStory-vote-tablet');
    listVoteTab.style.marginTop = '30px';
}

if(addStoryTab){
    addStoryTab.addEventListener('click', function(){
        displayText(textAddStoryTab);
    });
}

if(btnAddStoryTab){
    btnAddStoryTab.onclick = function () {
        let valueStory = valueTextAddTab.value;
    
        const apiAddVoteStory = "https://tangkinhcac.vn/add_vote_story/";
    
        const new_valueStory = capitalizeWords(valueStory)
    
        fetch(apiAddVoteStory, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data:{
                    'name_story': new_valueStory,
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status == 'success'){
    
                let story_id = data.story_id;
    
                listStoryTab.insertAdjacentHTML('afterbegin', `
                <div class="vote-story__info">
                    <span class="name-vote">${new_valueStory}</span>
                    <span class="vote" onclick="voteStoryTab(${story_id})" id="${story_id}">Vote</span>
                </div>`)

                infoUpdateTab.style.transform = 'unset';
    
                valueTextAddTab.value = '';
                textAddStoryTab.style.display = 'none';
    
                addStoryTab.remove();
    
                localStorage.setItem('addStoryClickedTab', 'true');
            }
        })
        .catch(error => {
            const text_error = document.getElementById('info-update-tablet');
            text_error.insertAdjacentHTML('afterend', `<p id="text-error">Bạn Cần Đăng Nhập Để Thêm Truyện</p>`)
        });
    }
}

function voteStoryTab(story_id){
    const apiAddVote = "https://tangkinhcac.vn/vote_story/";

    fetch(apiAddVote, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'story_id': story_id,
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.status == 'success'){
            let receive_data = data.data_send;
            let number_vote = receive_data.number_vote;
            let story_votes = receive_data.story_votes;

            let changeBtnVote = document.getElementById(`${story_id}`);
            changeBtnVote.innerHTML = number_vote;

            let btnvotes = document.querySelectorAll('#list-nameStory-vote-tablet .vote');
            let arrBtnVotes = [...btnvotes];
            let arrStoryVotes = [...story_votes];

            arrBtnVotes.forEach((btn)=>{
                const pk = btn.dataset.pk
                const storyVote = arrStoryVotes.find((story)=> story.pk == pk);
                if(storyVote){
                    btn.innerHTML = storyVote.fields.number_vote;
                }
            })
        }
    })
    .catch(error => {
        const text_error = document.getElementById('info-update-tablet');
        text_error.insertAdjacentHTML('afterend', `<p id="text-error">Bạn Cần Đăng Nhập Để Vote Truyện</p>`)
    });
}

// Vote story Mobile

let textAddStoryMob = document.getElementById('text-add-story-mobile');
let addStoryMob = document.getElementById('add-story-mobile');
let btnAddStoryMob = document.getElementById('btn-add-story-mobile');
let valueTextAddMob = document.getElementById('text-vote-story-mobile');
let listStoryMob = document.querySelector('#list-nameStory-vote-mobile');
let btnVoteMob = document.querySelectorAll('#list-nameStory-vote-mobile .vote');

if(localStorage.getItem('addStoryClickedMob') === 'true'){
    addStoryMob.remove();
    let listVoteMob = document.getElementById('list-nameStory-vote-mobile');
    listVoteMob.style.marginTop = '30px';
}

if(addStoryMob){
    addStoryMob.addEventListener('click', function(){
        displayText(textAddStoryMob);
    });
}

if(btnAddStoryMob){
    btnAddStoryMob.onclick = function () {
        let valueStory = valueTextAddMob.value;
    
        const apiAddVoteStory = "https://tangkinhcac.vn/add_vote_story/";
    
        const new_valueStory = capitalizeWords(valueStory)
    
        fetch(apiAddVoteStory, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data:{
                    'name_story': new_valueStory,
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status == 'success'){
    
                let story_id = data.story_id;
    
                listStoryMob.insertAdjacentHTML('afterbegin', `
                <div class="vote-story__info">
                    <span class="name-vote">${new_valueStory}</span>
                    <span class="vote" onclick="voteStoryMob(${story_id})" id="${story_id}">Vote</span>
                </div>`)
    
                valueTextAddMob.value = '';
                textAddStoryMob.style.display = 'none';
    
                addStoryMob.remove();
    
                localStorage.setItem('addStoryClickedMob', 'true');
            }
        })
        .catch(error => {
            const text_error = document.getElementById('info-update-mobile');
            text_error.insertAdjacentHTML('afterend', `<p id="text-error">Bạn Cần Đăng Nhập Để Thêm Truyện</p>`)
        });
    }
}

function voteStoryMob(story_id){
    const apiAddVote = "https://tangkinhcac.vn/vote_story/";

    fetch(apiAddVote, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'story_id': story_id,
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.status == 'success'){
            let receive_data = data.data_send;
            let number_vote = receive_data.number_vote;
            let story_votes = receive_data.story_votes;

            let changeBtnVote = document.getElementById(`${story_id}`);
            changeBtnVote.innerHTML = number_vote;

            let btnvotes = document.querySelectorAll('#list-nameStory-vote-mobile .vote');
            let arrBtnVotes = [...btnvotes];
            let arrStoryVotes = [...story_votes];

            arrBtnVotes.forEach((btn)=>{
                const pk = btn.dataset.pk
                const storyVote = arrStoryVotes.find((story)=> story.pk == pk);
                if(storyVote){
                    btn.innerHTML = storyVote.fields.number_vote;
                }
            })
        }
    })
    .catch(error => {
        const text_error = document.getElementById('info-update-mobile');
        text_error.insertAdjacentHTML('afterend', `<p id="text-error">Bạn Cần Đăng Nhập Để Vote Truyện</p>`)
    });
}

// Prevent User Submit When input empty

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-story');

if(searchForm){
    searchForm.addEventListener('submit', (event) => {
        // Use trim() to remove any whitespace from the beginning and end of the input value
        if (searchInput.value.trim() === '') {
            event.preventDefault();
        }
    });
}

// SHOW CATEGORY FOR TABLET

const showCategory = document.querySelector('.header-category-tablet');

if(showCategory){
    showCategory.onclick = function(){
        const modalCategory = document.querySelector('.modal-category-tablet');
    
        if (modalCategory.style.display === 'block') {
            modalCategory.style.display = 'none';
        } else {
            modalCategory.style.display = 'block';
        }
    }
}

function show_search_tablet(){
    let elm = document.querySelector('.section-search-tablet');

    if (elm.style.display === 'flex') {
        elm.style.display = 'none';
    } else {
        elm.style.display = 'flex';
    }
}


// SHOW CATEGORY FOR MOBILE

const showCategoryMob = document.querySelector('.container-for-mobile .header-category');
const modalCategoryMob = document.querySelector('.modal-category-mobile');
const iconCloseMob = document.getElementById('icon-close-mob');

if(showCategoryMob){
    showCategoryMob.onclick = function(){
    
        if (modalCategoryMob.style.display === 'flex') {
            modalCategoryMob.style.display = 'none';
        } else {
            modalCategoryMob.style.display = 'flex';
        }
    }
}

if(iconCloseMob){
    iconCloseMob.onclick = function(){
        modalCategoryMob.style.display = 'none';
    }
}

// Show section search mobile

let btnSearchMob = document.getElementById('btn-search-mob');
let sectionSearchMob = document.querySelector('.section-search-mobile');

if(btnSearchMob){
    btnSearchMob.onclick = function(){
        let statusCheck = sectionSearchMob.style.display;

        if(statusCheck == 'none'){
            sectionSearchMob.style.display = 'block';
        }else{
            sectionSearchMob.style.display = 'none';
        }
    }
}

// Show list mobile

let btnListMob = document.getElementById('btn-list-mob');
let btnCloseList = document.getElementById('btn-close-list');
let headerNaviMob = document.getElementById('header-navigation-mob');
let modalListMob = document.querySelector('.modal-list-mobile');
let modalItem = document.querySelector('.modal-item');

if(btnListMob){
    btnListMob.onclick = function(){
        headerNaviMob.style.marginBottom = '0';
        modalListMob.style.display = 'block';
        modalItem.style.animationName = 'listMobOpen';
        modalItem.style.animationDuration = '1s';
        btnListMob.style.display = 'none';
        btnCloseList.style.display = 'block';
    }
}

if(btnCloseList){
    btnCloseList.onclick = function(){
        modalItem.style.animationName = 'listMobClose';
        modalItem.style.animationDuration = '1s';
        setTimeout(function(){
            modalListMob.style.display = 'none';
        }, 900);
        btnCloseList.style.display = 'none';
        btnListMob.style.display = 'block';
        headerNaviMob.style.marginBottom = '10px';
    }
}