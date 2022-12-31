var n = 1;
var n1 = n + 1;
var on = false;
document.onmousewheel = function (e) {
    if (on == false) {
        on = true;
        if (e.wheelDelta > 0) {
            let p = document.querySelector("#p");
            var top = getComputedStyle(document.documentElement).getPropertyValue('--top');
            top=top+100;
            style.setProperty('--top', top);
            console.log(`${top}vh`);
            p.style['top'] = `${top}vh`;
            p.style['animation'] = 'bg-x 1s 1';
        } else {
        }
        setTimeout(function () {
            on = false;
        }, 1000);
    }
}

// 火狐浏览器
document.addEventListener('DOMMouseScroll', (e) => {
    if (e.detail > 0) {
        console.log('向下滑');
    } else {
        console.log('向上滑');
    }
}, false);
