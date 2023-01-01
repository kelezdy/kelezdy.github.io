var n = true;
var on = false;
document.onmousewheel = function (e) {
    if (on == false) {
        on = true;
        let p = document.querySelector("#p");
        var top = getComputedStyle(document.documentElement).getPropertyValue('--top');
        top = top.slice(0, top.indexOf('v'));
        document.documentElement.style.setProperty('--ytop', top + 'vh');
        console.log(top + 'vh');
        if (e.wheelDelta > 0) {
            top = parseInt(top) + 100;
        } else {
            top = parseInt(top) - 100;
        }
        document.documentElement.style.setProperty('--top', top + 'vh')
        console.log(top + 'vh');
        if (n == true) {
            n = false
            p.style['animation'] = 'bg-s 0.9s 1 forwards';
        } else {
            n = true
            p.style['animation'] = 'bg-x 0.9s 1 forwards';
        }
        setTimeout(function () {
            on = false;
        }, 900);
    }
}

function p1on() {
    if (on == false) {
        on = true;
        let p = document.querySelector("#p");
        var top = getComputedStyle(document.documentElement).getPropertyValue('--top');
        top = top.slice(0, top.indexOf('v'));
        document.documentElement.style.setProperty('--ytop', top + 'vh');
        console.log(top + 'vh');
        top = parseInt(top) - 100;
        document.documentElement.style.setProperty('--top', top + 'vh')
        console.log(top + 'vh');
        if (n == true) {
            n = false
            p.style['animation'] = 'bg-s 0.9s 1 forwards';
        } else {
            n = true
            p.style['animation'] = 'bg-x 0.9s 1 forwards';
        }
        setTimeout(function () {
            on = false;
        }, 900);
    }
}
