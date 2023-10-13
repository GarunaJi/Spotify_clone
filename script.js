console.log("hello Sportify Clone ");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let next = document.getElementById("next")
let previous = document.getElementById("previous")
let masterSongName = document.getElementsByClassName("masterSongName")

let songList = [

{name:"Let me Love You", filePath:"songs/1.mp3", coverPath:"covers/1.jpg" },
{name:"Janu na", filePath:"songs/2.mp3", coverPath:"covers/2.jpg" } ,
{name:"phero na najariya ", filePath:"songs/3.mp3", coverPath:"covers/3.jpg" },
{name:"Bhula dena mujhe", filePath:"songs/4.mp3", coverPath:"covers/4.jpg" },
{name:" Kyu Jane na", filePath:"songs/5.mp3", coverPath:"covers/5.jpg" },
{name:"Pyarr hau", filePath:"songs/6.mp3", coverPath:"covers/6.jpg" },
{name:"Ikrar hua", filePath:"songs/7.mp3", coverPath:"covers/7.jpg" },
{name:"Tum se hi", filePath:"songs/8.mp3", coverPath:"covers/8.jpg" },
{name:"Na jane kyu", filePath:"songs/9.mp3", coverPath:"covers/9.jpg" }
 
]
//covers

  songItems.forEach((element,i)=>{

  console.log(element ,i);
  element.getElementsByTagName("img")[0].src = songList[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songList[i].name; 
  
})

//play or pause 
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterSongName.innerText = songList[songIndex].name;
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    gif.style.opacity = 1;   
}
  else{ 
       audioElement.pause();
       masterPlay.classList.remove('fa-pause-circle')
       masterPlay.classList.add('fa-play-circle')
       gif.style.opacity = 0;
    }

})

//listen to events

audioElement.addEventListener('timeupdate', ()=>{
      console.log("timeupdate")
progress = parseFloat((audioElement.currentTime/audioElement.duration)*100)
myProgressBar.value = progress; 
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100
});

next.addEventListener("click",()=>{
   if(songIndex > songList.length){
    songIndex=0
   }
   else{
       songIndex++;
   }
   audioElement.currentTime =0; 
   audioElement.src = songList[songIndex].filePath;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle')
   masterPlay.classList.add('fa-pause-circle')
   masterSongName.innerText = songList[songIndex].name;
})

previous.addEventListener("click",()=>{
  if(songIndex == 0){
   songIndex = songList.length-1;
  }
  else{
      songIndex--;
  }
  audioElement.currentTime = 0; 
  audioElement.src = songList[songIndex].filePath;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle')
  masterPlay.classList.add('fa-pause-circle')
  masterSongName.innerText = songList[songIndex].name;
})




