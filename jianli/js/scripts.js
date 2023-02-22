function dingdianbaopo(name1, name2, can1, can2, callback) {
    const targetName = document.querySelector(name1)
    if (can1 > can2) {
        targetName.classList.add(name2)
        if (callback) callback()
    } else if (can1 < can2) {
        targetName.classList.remove(name2)
        if (callback) callback()
    }
}
const htmlX = document.documentElement
const photoM = document.querySelector('.about-img')
const leftDiv = document.querySelectorAll('.timeline ul li')
const select0 = document.querySelector('#section1')
const select1 = document.querySelector('#section2')
const select2 = document.querySelector('#section3')
const select3 = document.querySelector('#section4')
const select4 = document.querySelector('#section5')
const select5 = document.querySelector('#section6')
const bar = document.querySelector('.active-bar')
const ul = bar.parentElement.parentElement.children
let arr = [select0, select1, select2, select3, select4, select5]
bar.style.width = ul[0].offsetWidth + 'px'
window.addEventListener('scroll', () => {
    const backTop = document.querySelector('.back-to-top')
    dingdianbaopo('.back-to-top', 'active', select2.offsetTop, htmlX.scrollTop + window.innerHeight)
    dingdianbaopo('header', 'scroll', htmlX.scrollTop, 10)
    dingdianbaopo('.about-img', 'active', htmlX.scrollTop + window.innerHeight, photoM.offsetTop)
    leftDiv.forEach((x, y) => {
        dingdianbaopo(`.timeline ul li:nth-child(${y + 1}) div`, 'active', htmlX.scrollTop + window.innerHeight, x.offsetTop)
    })
    for (let i = 0; i < 6; i++) {
        dingdianbaopo('.active-bar', 'a', htmlX.scrollTop + window.innerHeight - arr[i].offsetHeight / 2, arr[i].offsetTop, function () {
            if (htmlX.scrollTop + window.innerHeight - arr[i].offsetHeight / 2 > arr[i].offsetTop) {
                bar.style.left = ul[i].offsetLeft + 'px'
                bar.style.width = ul[i].offsetWidth + 'px'
            }
        })
    }
    dingdianbaopo('#section3', 'a', htmlX.scrollTop + window.innerHeight - select2.offsetHeight / 2, select2.offsetTop, function () {
        const proArr = document.querySelectorAll('.skills-illustrate progress')
        const labArr = document.querySelectorAll('.skills-illustrate .progress label')
        let arrB = [80, 95, 70, 75, 85]
        if (htmlX.scrollTop + window.innerHeight - select2.offsetHeight / 2 > select2.offsetTop) {
            arrB.forEach((x, y) => {
                labArr[y].innerHTML = arrB[y] + '%'
                labArr[y].style.left = proArr[y].offsetWidth * x / 100 - 10 + 'px'
                let time = setInterval(function () {
                    if (proArr[y].value > x) {
                        clearInterval(time)
                    } else {
                        proArr[y].value += 2
                    }
                }, 1)
            })
        } else if (htmlX.scrollTop + window.innerHeight - select2.offsetHeight / 2 < select2.offsetTop) {
            arrB.forEach((x, y) => {
                labArr[y].innerHTML = '0%'
                labArr[y].style.left = 0 + 'px'
                let time = setInterval(function () {
                    if (proArr[y].value == 0) {
                        clearInterval(time)
                    } else {
                        proArr[y].value -= 2
                    }
                }, 1)
            })
        }
    })
})