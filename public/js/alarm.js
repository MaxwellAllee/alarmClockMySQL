let horn =
    soundPlay = true
let aTime = 2500
let makeSound = false
let soundOnce = true
var audio = new Audio('/sound/foghorn.mp3');
let snooze = false
let stop = false
const upcoming = { 'count': 0 }
checking = () => {
    if (current === aTime && soundOnce) {
        makeSound = true
        makeNoise()
        setTimeout(() => { checking }, 61000);
    }
    setTimeout(checking, 1000)
}
checking()
makeNoise = () => {
    if (!snooze && !stop) {
        audio.play();
        console.log("alarm sounding")
        soundOnce = false
        setTimeout(makeNoise, 4000)
    }
    else if (stop) {
        stop = false
    }
}
$('#snooze').click(() => {
    if (!soundOnce) {
        snooze = true
        setTimeout(() => {
            snooze = false;
            makeNoise()
        }, 30000)
    }
})
$('#stop').click(() => {
    if (!soundOnce) {
        stop = true
        console.log("stop triggered")
    }

})
$('#set').click(() => {
    console.log(`don't just click it stick it`)
    $('#modal').modal('toggle');
})
save = () => {
    console.log('click it or ticket')

    let holder = parseInt($('#timeWanted').val().substring(0, 2) + $('#timeWanted').val().substring(3, 5))
    upcoming.count++

    upcoming['alert' + upcoming.count] = holder
    console.log(upcoming)
    $('#modal').modal('toggle');
    setAlarm()
}
setAlarm = () => {
    if (upcoming.count !== 0) {
        let nextAlarm = 2500
        for (i = 1; i < upcoming.count+1; i++) {
            let workingTime = upcoming['alert' + i] - converted
            console.log(workingTime)
            if (Math.sign(workingTime) === -1) {
                workingTime = workingTime + 2400
            }
            console.log(workingTime, nextAlarm)
            if (workingTime < nextAlarm) {
                aTime = upcoming['alert' + i]
            }
        }
    }
    console.log(aTime)
}
setAlarm()
