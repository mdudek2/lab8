function init(){
  var alertbutton = document.getElementById('entrybutton');
  
  function displayText(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Maks Dudek: " + textbox.value);
  }

  alertbutton.addEventListener('click', displayText);
}

window.addEventListener('load', init);
