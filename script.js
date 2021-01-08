window.addEventListener('load', () => {
    const sound = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const color = [
        "#60d394",
        "#cc2e78",
        "#dad726",
        "#5721d4",
        "#e21818",
        "#b104f5"
    ]

    

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sound[index].currentTime =0;
            sound[index].play();

            bubbles(index);
        });
    });


    const bubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = color[index];
        bubble.style.animation = "jump 1s  ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
});

