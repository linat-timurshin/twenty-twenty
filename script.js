document.querySelector('#myside').onmousemove = (event) => {
    let x = event.offsetX;
    document.querySelector('#two').style.width = x + 'px';
}
