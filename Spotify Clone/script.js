console.log("Hello ")

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');

let masterPlay = document.getElementById("masterPlay");

let masterSongName  = document.getElementById("masterSongName");
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let songItems =Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Khali salam Dua",filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Tu na jane Aas pas hai khuda",filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Apna bana le piya",filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Dekha hazaro dafa",filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Hum toh diwane diwane",filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "tu yaad kare ya na mujko",filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Teri zuki nazar teri har aada",filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Ve kamleya",filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName: "Zalima",filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName: "zara sa",filePath:"songs/10.mp3", coverPath:"covers/10.jpg"}
]

songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;

})


masterPlay.addEventListener("click",()=>{
  
    songItemPlay.classList.add("fa-circle-play")
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        songItemPlay.classList.remove("fa-circle-play");
        songItemPlay.classList.add("fa-circle-pause")
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play")
        songItemPlay.classList.remove("fa-circle-pause");
        songItemPlay.classList.add("fa-circle-play")
        gif.style.opacity= 0;
    }
    


})


audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100 
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play")
    })
}
let songItemPlay= document.getElementsByClassName("songItemPlay");
Array.from(songItemPlay).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        songIndex = parseInt(e.target.id);
        makeAllPlays();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause")
        
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity= 1;
    })
})

document.getElementById('next').addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity= 1;
})

document.getElementById('previous').addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity= 1;
})