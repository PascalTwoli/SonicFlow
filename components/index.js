const toDiscover = document.querySelector('.for-discover')
const toggleDiscover = document.querySelector('.toggle-discover')
const dismissDiscover = document.querySelector('.dismiss')
const addToFavorite  = document.querySelectorAll('.bi-plus-circle')
const playMusicBtn = document.querySelectorAll('.play-music')
const toggleRepeat = document.querySelector('.bi-repeat')
const progressBar = document.querySelector('#progress-bar') 
const song = document.querySelectorAll('.song') 
const mainRowSidebar = document.querySelector('.main-row-side-bar')
const mainRowCenter = document.querySelector('.main-row-center')
const sidebarSlider = document.querySelector('.sidebar-slider')

// const addToFavoriteArray = Array.from(addToFavorite)
// console.log(Array.isArray(addToFavoriteArray));


console.log(addToFavorite.innerHTML);
toDiscover.style.display = 'none';

// sidebarSlider.addEventListener('click', () => {
//     if (mainRowSidebar.style.width = '15px') {
//         mainRowSidebar.style.background = 'green'
//         mainRowSidebar.style.width = '10px'
//     }
// })


for (let i = 0; i < song.length; i++) {
    song[i].pause()
    song[i].onloadedmetadata = () => {
        progressBar.max = song[i].duration;
        progressBar.value = song[i].currentTime;
    } 
}



toggleDiscover.addEventListener('click', () => {
    if (toDiscover.style.display == 'none'){
        toDiscover.style.display = 'block';
    } else {
        toDiscover.style.display = 'none';
    } 

})
dismissDiscover.addEventListener('click', () => {
    toDiscover.style.display = 'none'
})

for (let i = 0; i < addToFavorite.length; i++) {
    // const element = array[i];
    addToFavorite[i].addEventListener('click', () => {
        const toggleFavStatus = addToFavorite[i].classList
    
        if (toggleFavStatus.contains('bi-plus-circle')) {
            toggleFavStatus.replace('bi-plus-circle', 'bi-check-circle-fill')
        } else {
            toggleFavStatus.replace('bi-check-circle-fill', 'bi-plus-circle')
        }
    })
}



for (let i = 0; i < playMusicBtn.length; i++) {
    // const element = array[i];
    playMusicBtn[i].addEventListener('click', () => {
        const toggleSongStatus = playMusicBtn[i].classList
    
        if (toggleSongStatus.contains('bi-play-circle-fill')) {
            toggleSongStatus.replace('bi-play-circle-fill', 'bi-pause-circle-fill')
            for (let j = 0; j < song.length; j++) {
                song[j].play();
            }
            
        } else {
            toggleSongStatus.replace('bi-pause-circle-fill', 'bi-play-circle-fill')
            for (let j = 0; j < song.length; j++) {
                song[j].pause();
            }  
        }
    
    })
}


// // for (let i = 0; i < .length; i++) {
//     // const element = array[i];
    
// // }
// function playMusic() {
//     const toggleSongStatus = playMusicBtn.classList

//     if (toggleSongStatus.contains('bi-play-circle-fill')) {
//         toggleSongStatus.replace('bi-play-circle-fill', 'bi-pause-circle-fill')
//         song.play();
//     } else {
//         toggleSongStatus.replace('bi-pause-circle-fill', 'bi-play-circle-fill')
//         song.pause();
//     } 
// }
for (let i = 0; i < playMusicBtn.length; i++) {
    // const element = array[i];
    for (let j = 0; j < song.length; j++) {
        if (song[j].play()) {
            playMusicBtn[i].classList.replace('bi-pause-circle-fill', 'bi-play-circle-fill')
            setInterval(() => {
                progressBar.value = song[j].currentTime;
            },500)
        } else if (song[j].pause()) {
            playMusicBtn[i].classList.replace('bi-play-circle-fill', 'bi-pause-circle-fill')
        }
    }
}

for (let i = 0; i < playMusicBtn.length; i++) {
    // const element = array[i];
    progressBar.onchange = () => {
        for (let j = 0; j < song.length; j++) {
            song[j].play()
            song[j].currentTime = progressBar.value;
        }
        playMusicBtn[i].classList.replace('bi-play-circle-fill', 'bi-pause-circle-fill')
    
    }
}

if (progressBar.value == progressBar.max) {
    playMusicBtn.classList.replace('bi-pause-circle-fill', 'bi-play-circle-fill')
}

toggleRepeat.addEventListener('click', () => {
    const songRepeat = toggleRepeat.classList;
    if (songRepeat.contains('bi-repeat')) {
        songRepeat.replace('bi-repeat', 'bi-repeat-1')
    } else {
        songRepeat.replace('bi-repeat-1', 'bi-repeat')
    }
})