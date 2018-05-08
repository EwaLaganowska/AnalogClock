function clock() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    var second = date.getSeconds();
    if (second < 10) {
        second = "0" + second;
    }
    var time = hour + ":" + minute + ":" + second;
    document.getElementById("clock").innerHTML = time;
    }
    var initiate = setInterval(function() {clock()}, 1000);
    

function clock2() {
    var d, h, m, s;
    d = new Date;
    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();

    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);

    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    setText('sec', s);
    setText('min', m);
    setText('hr', h);

    setTimeout(clock2, 1000);

};

function setAttr(id,val) {
    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', v);
};

function setText(id,val) {
    if(val < 10) {
        val = "0" + val;
    }
    document.getElementById(id).innerHTML = val;
};

window.onload=clock2;