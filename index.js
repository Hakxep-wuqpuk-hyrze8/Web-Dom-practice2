
const drum = document.querySelectorAll(".drum");

for (let i = 0; i < drum.length; i++) {
    drum[i].addEventListener("click", function () {
        let key = drum[i].innerHTML;
        key = key.toLowerCase();
        
        makeSound(key);

        buttonAnimation(key);
    })
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);

    buttonAnimation(key);
});

function makeSound (key) {
    switch(key){
        case "w":
            const tom1Sound = new Audio("sounds/tom-1.mp3") 
            tom1Sound.play();
        break;
        case "a":
            const tom2Sound = new Audio("sounds/tom-2.mp3") 
            tom2Sound.play();
        break;
        case "s":
            const tom3Sound = new Audio("sounds/tom-3.mp3") 
            tom3Sound.play();
        break;
        case "d":
            const tom4Sound = new Audio("sounds/tom-4.mp3") 
            tom4Sound.play();
        break;
        case "j":
            const snareSound = new Audio("sounds/snare.mp3") 
            snareSound.play();
        break;
        case "k":
            const kickBassSound = new Audio("sounds/kick-bass.mp3") 
            kickBassSound.play();
        break;
        case "l":
            const crash = new Audio("sounds/crash.mp3") 
            crash.play();
        break;
        
        default: console.log("Wrong");
    }
}

function buttonAnimation (currentKey) {

    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 1000);
}