
function explanation(theID) {
    var hasClassVisible = $(theID).hasClass("visible");
    $(theID).toggleClass("visible");
    if(hasClassVisible === true) {
        $(theID).addClass('notVisible');
    }
    else {
        $(theID).removeClass('notVisible');
    }
}