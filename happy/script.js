/* =====================================
            ELEMENTS
===================================== */

const screens = document.querySelectorAll(".screen");

const welcome = document.getElementById("welcome");
const gift = document.getElementById("gift");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const video = document.getElementById("video");
const finalScreen = document.getElementById("final");

const openGiftBtn = document.getElementById("openGiftBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const bgMusic = document.getElementById("bgMusic");
const typingText = document.getElementById("typingText");
const giftBox = document.querySelector(".gift-box");


/* =====================================
        LỜI CHÚC
===================================== */

const message = `
Chúc mừng sinh nhật em ❤️

Cảm ơn em đã đến bên anh.

Anh hy vọng hôm nay sẽ là
một ngày thật đặc biệt.

Chúc em luôn cười thật nhiều,
luôn hạnh phúc,
và luôn là chính mình.

Hy vọng sau này
mọi sinh nhật của em
đều có anh bên cạnh.

Yêu em ❤️
`;


/* =====================================
      CHUYỂN MÀN HÌNH
===================================== */

function showScreen(id){

    screens.forEach(screen=>{

        screen.classList.remove("active");

    });

    document
        .getElementById(id)
        .classList.add("active");

}


/* =====================================
        PHÁT NHẠC
===================================== */

function playMusic(){

    bgMusic.play().catch(()=>{});

}


/* =====================================
      HIỆU ỨNG GÕ CHỮ
===================================== */

let index = 0;

function typeWriter(){

    typingText.innerHTML = "";

    index = 0;

    const timer = setInterval(()=>{

        typingText.innerHTML += message.charAt(index);

        index++;

        if(index >= message.length){

            clearInterval(timer);

        }

    },45);

}


/* =====================================
       MỞ QUÀ
===================================== */

openGiftBtn.onclick = ()=>{

    playMusic();

    showScreen("gift");

};


/* =====================================
     CLICK HỘP QUÀ
===================================== */

giftBox.onclick = ()=>{

    giftBox.style.transform="scale(1.15) rotate(8deg)";

    setTimeout(()=>{

        showScreen("letter");

        typeWriter();

    },900);

};


/* =====================================
     ĐI TIẾP
===================================== */

nextBtn.onclick = ()=>{

    showScreen("gallery");

};


/* =====================================
     CLICK ẢNH
===================================== */

const images = document.querySelectorAll(".gallery img");

images.forEach(image=>{

    image.onclick=()=>{

        image.classList.toggle("zoom");

    }

});


/* =====================================
      VIDEO KẾT THÚC
===================================== */

const videoPlayer = document.querySelector("video");

videoPlayer.onended = ()=>{

    showScreen("final");

};


/* =====================================
      RESTART
===================================== */

restartBtn.onclick = ()=>{

    location.reload();

};


/* =====================================
      PARALLAX CHUỘT
===================================== */

document.addEventListener("mousemove",(e)=>{

    const x =
        (e.clientX/window.innerWidth-.5)*20;

    const y =
        (e.clientY/window.innerHeight-.5)*20;

    document.querySelector(".stars").style.transform=
        `translate(${x}px,${y}px)`;

});


/* =====================================
       FLOATING HEART
===================================== */

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=
        Math.random()*20+18+"px";

    heart.style.opacity=.8;

    heart.style.transition="all 8s linear";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.style.top="-100px";

        heart.style.opacity=0;

    },100);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,700);


/* =====================================
        FLOWERS
===================================== */

const flowers = document.getElementById("flowers");

function createFlower(){

    const flower=document.createElement("div");

    flower.innerHTML="🌸";

    flower.style.position="absolute";

    flower.style.left=Math.random()*100+"vw";

    flower.style.top="-50px";

    flower.style.fontSize=
        Math.random()*18+18+"px";

    flower.style.transition="8s linear";

    flowers.appendChild(flower);

    setTimeout(()=>{

        flower.style.top="110vh";

        flower.style.transform=
        `rotate(${Math.random()*720}deg)`;

    },100);

    setTimeout(()=>{

        flower.remove();

    },8500);

}
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

// chuyển sang final khi bấm ảnh
function goFinal() {
    showScreen("final");
}
setInterval(createFlower,900);


/* =====================================
         FIREWORK
===================================== */
/*
Sẽ được viết ở phiên bản 2.

Canvas Firework
Particle
Explosion
Glow

*/


console.log("Happy Birthday ❤️");
