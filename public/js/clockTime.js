let current = ''
let converted = 0
startTime = ()=>{
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    if (h<10){
        h='0'+h
    }
    current = `${h}:${m}`
    converted = parseInt(current.substring(0, 2)+current.substring(3, 5))
    $('.time').html(current)
    let t = setTimeout(startTime, 500)
    

}
checkTime=(i)=>{
    if (i<10) {i = "0"+i};
    return i
}
$('#start').click(()=>{
    $('.snooze').show()
    $('.bottom').show()
    startTime()
})
$('.snooze').hide()
$('.bottom').hide()

