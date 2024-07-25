function changeFontMonsterrat() {
    $(':root').css('--font', 'Monserrat');
    $(':root').css('--font-size', '20px');
    $('#Off').removeClass('visible');
    $('#On').addClass('visible');
}

function changeFontFNAF() {
    $(':root').css('--font', 'fnaf');
    $(':root').css('--font-size', '27px');
    $('#Off').addClass('visible');
    $('#On').removeClass('visible');
}

function credits() {
    $('#creditswrapper').addClass('visible');
    $('#fade').addClass('visible');
    $('#creditswrapper').removeClass('notvisible');
    $('#fade').removeClass('notvisible');
}

function exit() {
    $('#creditswrapper').removeClass('visible');
    $('#fade').removeClass('visible');
    $('#creditswrapper').addClass('notvisible');
    $('#fade').addClass('notvisible');
}