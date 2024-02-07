window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById(".sticky").style.fontSize = "30px";
  } else {
    document.getElementById(".sticky").style.fontSize = "90px";
  }
}