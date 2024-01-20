

$(".openNav").on("click" ,function () {
    $(".sidenav").animate({left: "0%"},1000)
})

$(".closebtn").on("click" ,function () {
    $(".sidenav").animate({left: "-220px"},1000)
})



$(".toggle1").on("click" ,function () {
    $(".inner1").slideToggle()
    $(".inner2").slideUp()
    $(".inner3").slideUp()
    $(".inner4").slideUp()
})
$(".toggle2").on("click" ,function () {
    $(".inner2").slideToggle()
    $(".inner1").slideUp()
    $(".inner3").slideUp()
    $(".inner4").slideUp()
})
$(".toggle3").on("click" ,function () {
    $(".inner3").slideToggle()
    $(".inner1").slideUp()
    $(".inner2").slideUp()
    $(".inner4").slideUp()
})
$(".toggle4").on("click" ,function () {
    $(".inner4").slideToggle()
    $(".inner1").slideUp()
    $(".inner2").slideUp()
    $(".inner3").slideUp()
})


let elwa2t = setInterval(()=>{
    let eve = new Date("Dec 31, 2024 23:59:59").getTime();
    let dateNow = new Date().getTime();
    let dateDiff = eve - dateNow;

    let days = Math.floor(dateDiff /(1000*60*60*24 ))
    let Hours = Math.floor(dateDiff %(1000*60*60*24)/(1000*60*60))
    let Minutes = Math.floor(dateDiff %(1000*60*60)/(1000*60))
    let seconds = Math.floor(dateDiff %(1000*60)/(1000))

    $(".days").text(days < 10 ? `0${days} D` : days+" D") ;
    $(".hours").text(Hours < 10 ? `0${Hours} H` : Hours+" H") ;
    $(".minutes").text(Minutes < 10 ? `0${Minutes} M` : Minutes+" M") ;
    $(".seconds").text(seconds < 10 ? `0${seconds} S` : seconds+" S") ;


    if (dateDiff<0) {
        clearInterval(elwa2t)
        $(".num").text("happy New Year ⭐🌟⭐ 2025")
    }
},1000)

// clearInterval(elwa2t)


let textNum = document.getElementById("#text100")
function textar100() {
    textNum = text100.value.length
    eqq =  100 - textNum
    chars.innerHTML = eqq
    if (eqq <= 0) {
        $("#chars").text("your available character finished")
    }
}
textar100()

