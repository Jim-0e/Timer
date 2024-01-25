

let deadline ='2024-9-21'

function getTime(endtime){
    let t = Date.parse(endtime) - Date.parse(new Date())

    const days = Math.floor(t / (1000 * 60 *60 *24)),
          hours = Math.floor((t / (1000 * 60 * 60)) % 24),
          minutes = Math.floor(( t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60)
        
    return {
        't': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    }
}

function getZero(n){
    if( n>=0 && n<10 ){
        return `0${n}`
    }else{
        return n
    }
    
}

function setClock(selector, endtime){
    const t = document.querySelector(selector),
        days = document.querySelector('#days'),
        hours = document.querySelector('#hours'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds'),
        timer = setInterval(updateClock, 1000)

    
    updateClock()

    

    function updateClock(){
        const time = getTime(endtime)
        days.innerHTML =  getZero(time.days)
        hours.innerHTML = getZero(time.hours)
        minutes.innerHTML = getZero(time.minutes)
        seconds.innerHTML = getZero(time.seconds)

        if (time.t <= 0){
            clearInterval(timer)
        }
    }
}





const dateBirthday = document.querySelector('#date')
const btn = document.querySelector('#btn')
const title = document.querySelector('.title')
const box = document.querySelector('.box')

let times;

btn.addEventListener('click',(e)=>{
    btn.classList.add('button-none')
    box.classList.add('box-border')
    let d = Date.parse(dateBirthday.value) - Date.parse(new Date())
    seconds.classList.add('bigs')
    if (d>0){

        title.classList.remove('title--none')
        btn.disabled = true

        e.preventDefault()
        times = dateBirthday.value
    
        setClock('.title', times)
    }
     
    
})