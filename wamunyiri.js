let topButton=document.getElementById("topBtn");
window.onscroll=function(){
    if(document.documentElement.scrollTop>300){
        topButton.style.display="block";
    }else{
        topButton.style.display="none";
    }
};
topButton.onclick=function(){
    document.documentElement.scrollTo({top:0,behavior:'smooth'});
};
window.onload=function(){
    alert("Welcome to Wamunyiri Football Club!⚽🔥");
};
const yearSpan=document.createElement('span');
yearSpan.textContent= new Date().getFullYear();
document.querySelector('footer p').innerHTML=`© ${yearSpan.textContent} Wamunyiri FC - All Rights Reserved`;

const nav=document.querySelector('nav')
window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        nav.style.backgroundColor='#f1f1f1';
    }else{
        nav.style.backgroundColor='transparent';
    }
});
const slides=document.querySelector('.slides');
const slideImages=document.querySelectorAll('.slide');
let counter=0;
document.querySelector('.next').addEventListener('click',()=>{
    counter++;
    if (counter>=slideImages.length) counter=0;
    updateSlide();
});
document.querySelector('prev').addEventListener('click',()=>{
    counter--;
    if (counter<0) counter=slideImages.length-1;
    updateSlide();
});
function updateSlide(){
    slides.style.transform=`translateX(-${counter*100}%)`;
}
function filterVideos(category){
    const videos=document.querySelectorAll('.video');
    videos.forEach(video=>{
        if (category==='all'){
            video.style.display='block';
        }else if(video.classList.contains(category)){
            video.style.display='block';
        }else{
            video.style.display='none';
        }
    });
}