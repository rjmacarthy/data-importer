const logger = (text) => {
    var div = document.createElement('div');
    div.innerHTML = text;
    document.body.appendChild(div);
}

export default logger;