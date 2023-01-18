$(document).ready(function () {
    var item = ["#i1", "#i2", "#i3", "#i4", "#i5",];
    var active = 0;
    $("#right").click(function () {
        $(item[active]).addClass('none');
        $(item[active]).removeClass('block');
        if (active === 4) {
            active = 0;
        } else {
            active += 1;
        }
        $(item[active]).addClass('block');
        $(item[active]).removeClass('none');
        document.getElementById("m").innerHTML = (active + 1) + "/5";
    });
    $("#left").click(function () {
        $(item[active]).addClass('none');
        $(item[active]).removeClass('block');
        if (active === 0) {
            active = 4;
        } else {
            active -= 1;
        }
        $(item[active]).addClass('block');
        $(item[active]).removeClass('none');
        document.getElementById("m").innerHTML = (active + 1) + "/5";
    });
    $("#b_right").click(function () {
        $(item[active]).addClass('none');
        $(item[active]).removeClass('block');
        if (active === 4) {
            active = 0;
        } else {
            active += 1;
        }
        $(item[active]).addClass('block');
        $(item[active]).removeClass('none');
        document.getElementById("m").innerHTML = (active + 1) + "/5";
    });
    $("#b_left").click(function () {
        $(item[active]).addClass('none');
        $(item[active]).removeClass('block');
        if (active === 0) {
            active = 4;
        } else {
            active -= 1;
        }
        $(item[active]).addClass('block');
        $(item[active]).removeClass('none');
        document.getElementById("m").innerHTML = (active + 1) + "/5";
    });
})