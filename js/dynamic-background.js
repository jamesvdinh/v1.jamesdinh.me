
var date = new Date();
var hours = date.getHours();
if (hours > 18 || hours < 6) {
    document.write('<div class="entrance-background" style="background-image: url(../img/mountains.jpg);">')
}
else {
    document.write('<div class="entrance-background" style="background-image: url(../img/mountains-2.jpg);">')
}