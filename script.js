//initializing the variables
//by default assume all values to start wrt index 1
let songindex=0;
let audioElement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogbar= document.getElementById('progbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');

// audioElement.play();

let songs=[
    {songname:"Kiss and make up",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"2002",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"Levitating",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"Love Someone",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"Night Changes",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"Comethru",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"The spirits",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songname:"Mama Said",filepath:"songs/8.mp3",coverpath:"covers/8.jpg"}
]

//handling play/pause click in seekbar
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//listening to events

//updating time in seekbar
audioElement.addEventListener('timeupdate',()=>{
    console.log("update hua"); //just for checking whether event fired or not
    progess=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogbar.value=progess;
})

//updating song wrt seekbar
myprogbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogbar.value*audioElement.duration/100;
    // as current time / total duration *100 = progrss (in %age)
    //so %age progress is converted into current time duration
})

//for playing songs from icon

const makesongsplay=()=>{ //m
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{ //m
        // if(element.paused || element.currentTime<=0)
        // {
        // element.play();
        // element.classList.remove('fa-circle-play'); 
        // element.classList.add('fa-circle-pause'); 
        // }
        // else{
        //     element.pause();
        //     element.classList.remove('fa-circle-pause');  
        // element.classList.add('fa-circle-play'); 
        // }
        element.classList.remove('fa-circle-pause'); //m
        element.classList.add('fa-circle-play'); //m
        

    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        var isplay=true;
        if(isplay)
        {
        makesongsplay();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songindex+1}.mp3`; //after changing index , change song name as well
        mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        }
        else
        {
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
        // audioElement.pause();
        }
    })
})

//next and previous play buttons

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=7){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
})

// Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
// element.addEventListener('click', ()=>{
//     if(element.paused || element.currentTime<=0)
//     {
//         element.play();
//         element.classList.remove('fa-circle-play');
//         element.classList.add('fa-circle-pause');
//         gif.style.opacity=1;
//     }
//     else
//     {
//         element.pause();
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');
//         gif.style.opacity=0;
//     }
// })
// })
// Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
// {
// var myAudio = document.getElementsById("0");

// function togglePlay() {
//   return myAudio.paused ? myAudio.play() : myAudio.pause();
// }
// })