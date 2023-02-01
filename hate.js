
var stories = document.getElementById("stories")

var somequote = [`<p>"الثقه بالنفس تصنع المعجزات"</p>
<p>--شخص عارف قيمة نفسه--</p>` , `<p>"ستبقى وحيداً . فقط تعود"</p>
<p>--وحيد--</p>` , `<p>"لا تتعلق بأحد . فالناس ليست أشجاراً . وأنت لست قرداً"</p>
<p>--إنسان مجروح--</p>` , `<p>"غداً لن يكون أفضل . إذا لم تجعله أنت أفضل"</p>
<p>--قيمة الذات--</p>` , `<p>"نحن عادةً ما نعاني في الخيال أكثر من الواقع"</p>
<p>--الصمت--</p>`]




function view() {

    stories.innerHTML = somequote[Math.floor(Math.random()*somequote.length)];


}










































