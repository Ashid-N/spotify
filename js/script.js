console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('../song/Kanmani.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songsName: "OK_Kanmani - Mentalmanadhil", FilePath: "../song/Kanmani.mp3", coverpath: "../assets/ok kanman.jpg" },
    { songsName: "Manavyalakinchara", FilePath: "../song/Manavyalakinchara.mp3", coverpath: "../assets/manavaya.jpg" },
    { songsName: "Amma Song(From Kanam)", FilePath: "../song/AmmaSong.mp3", coverpath: "../assets/amma.jpg" },
    { songsName: "Janiye_Music", FilePath: "../song/Janiye _ Music Video.mp3", coverpath: "../assets/janiye.jpg" },
    { songsName: "A.R.Rahman - poovukkal Olinthirukkum", FilePath: "../song/puvukul....mp3", coverpath: "../assets/poovukkul.jpg" },
    { songsName: "Alors On Dance ", FilePath: "../song/stromae.mp3", coverpath: "../assets/alors.jpeg" },
    { songsName: "Master", FilePath: "../song/Master-polakatum para...mp3", coverpath: "../assets/master.jpg" }
];

songitem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songsName;
});

// Handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else { 
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle'); 
        gif.style.opacity = 0;
    }
});

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // Calculate progress
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    console.log(progress);
    myprogressbar.value = progress; 
});

// Set the initial progress bar value to 0
myprogressbar.value = 0;

myprogressbar.addEventListener('input', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
});
const makeAllPlays =()=>{
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');

})
}

// ...

Array.from(document.getElementsByClassName('songitemplay')).forEach((element, songIndex) => {
    element.addEventListener('click', () => {
        console.log(element);
        makeAllPlays();
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
        
        // Change the audio source based on the clicked song
        audioElement.src = songs[songIndex].FilePath;
        mastersongname.innerText = songs[songIndex].songsName;    
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle'); 
    });
});

// ...

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else
    {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].FilePath;
    mastersongname.innerText = songs[songIndex].songsName;       
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle'); 
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else
    {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].FilePath;
    mastersongname.innerText = songs[songIndex].songsName;    
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle'); 
    
})