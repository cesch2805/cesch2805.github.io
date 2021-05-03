function getSet() {
  var input = document.getElementsByName("array[]");
  var arr = [];
  for (var i = 0; i < input.length; i++) {
      var a = input[i];
      if (a.value !== "") {
          arr.push(a.value);
      }
  }
  return arr;
}

document.getElementById("btnM").onclick = function(){
  document.getElementById("resultM").innerHTML = "media: " + math.mean(getSet());
}
document.getElementById("btnV").onclick = function(){
  document.getElementById("resultV").innerHTML = "varianza: " + math.variance(getSet(), "uncorrected");
}
document.getElementById("btnD").onclick = function(){
  document.getElementById("resultD").innerHTML = "Desviación Estándar: " + Math.sqrt(math.variance(getSet(),"uncorrected"));
 
}