
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2)
        return parts
        .pop()
        .split(";")
        .shift();
}

const apiSearch = "https://tangkinhcac.vn/search_story/"

function search_story(){

    const value_search = document.getElementById('search-story').value

    fetch(apiSearch, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'value_search': value_search
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const story_pk = receive_data.story_pk;
            const story_slug = receive_data.story_slug;
            const author = receive_data.author;

            if(story_slug && author == null){
                window.location.assign(`https://tangkinhcac.vn/story/${story_pk}/${story_slug}`);
            }else if( story_slug == null && author){
                window.location.assign(`https://tangkinhcac.vn/story/author/${author}`);
            }else{
                console.log('Không Có Kết Quả Phù Hợp');
            }
        }
    })
    .catch(error => console.log(error))
}

// SEARCH FOR MOBILE

function search_story_mob(){
    const value_search = document.getElementById('search-story-mobile').value

    fetch(apiSearch, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'value_search': value_search
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const story_slug = receive_data.story_slug;
            const author = receive_data.author;

            if(story_slug && author == null){
                window.location.assign(`https://tangkinhcac.vn/story/${story_pk}/${story_slug}`);
            }else if( story_slug == null && author){
                window.location.assign(`https://tangkinhcac.vn/story/author/${author}`);
            }else{
                console.log('Không Có Kết Quả Phù Hợp');
            }
        }
    })
    .catch(error => console.log(error))
}

// SEARCH FOR TABLET

function search_story_tablet(){
    const value_search = document.getElementById('search-story-tablet').value

    fetch(apiSearch, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'value_search': value_search
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const story_pk = receive_data.story_pk;
            const story_slug = receive_data.story_slug;
            const author = receive_data.author;

            if(story_slug && author == null){
                window.location.assign(`https://tangkinhcac.vn/story/${story_pk}/${story_slug}`);
            }else if( story_slug == null && author){
                window.location.assign(`https://tangkinhcac.vn/story/author/${author}`);
            }else{
                console.log('Không Có Kết Quả Phù Hợp');
            }
        }
    })
    .catch(error => console.log(error))
}