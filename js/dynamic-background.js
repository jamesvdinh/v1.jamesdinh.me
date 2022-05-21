
var date = new Date();
var hours = date.getHours();
if (hours > 20 || hours < 6) {
    document.write('<div class="entrance-background" style="background-image: url(../img/mountains.jpg);">')
}