window.onload = () => {

    let width = window.innerWidth;
    let height = window.innerHeight;

    let img = document.getElementById("trick");
    img.draggable = false;

    img.onclick = (e) => {

        let x =  Math.floor(Math.random()*width) - img.width;
        let y = Math.floor(Math.random()*height) - img.height;

        x = x < 0 ? 0 : x;
        y = y < 0 ? 0 : y;

        img.style.left = `${x}px`;
        img.style.top = `${y}px`;

    };
};