function sound(){
  var audio = new Audio('notes/C4.mp3');
  audio.play();
}

function play_chord(chord_button){
  var notes_of_chord = document.getElementById(chord_button).innerHTML.split(" ");
  
  var note_playing1 = new Audio('notes/' + (notes_of_chord[0].substring(3)) + '4.mp3');
  var note_playing2 = new Audio('notes/' + notes_of_chord[1] + '4.mp3');
  var note_playing3 = new Audio('notes/' + (notes_of_chord[2].substring(0, notes_of_chord[2].length - 4)) + '4.mp3');

  var note_highlight1 = notes_of_chord[0].substring(3);
  var note_highlight2 = notes_of_chord[1];
  var note_highlight3 = (notes_of_chord[2].substring(0, notes_of_chord[2].length - 4));
  
  console.log(document.querySelector("." + note_highlight1));
  console.log(document.querySelector("." + note_highlight2));
  console.log(document.querySelector("." + note_highlight3));
  
  document.querySelector("." + note_highlight1).classList.add('active')
  document.querySelector("." + note_highlight2).classList.add('active')
  document.querySelector("." + note_highlight3).classList.add('active')
  setTimeout(() => {
    note_playing1.play();
    note_playing2.play();
    note_playing3.play();
    document.querySelector("." + note_highlight1).classList.remove('active')
    document.querySelector("." + note_highlight2).classList.remove('active')
    document.querySelector("." + note_highlight3).classList.remove('active')
  }, 500);

}

var piano_vis = false;
function display_piano(check){

  if(check){
    if(!piano_vis){
      h1.style.paddingTop = "0vh";
      document.getElementById("piano").style.opacity = "1";
      document.getElementById("piano").style.pointerEvents = "auto";
      piano_vis = true;

    } else {
      document.getElementById("piano").style.opacity = "0";
      document.getElementById("piano").style.pointerEvents = "none";
      piano_vis = false;

    }
  }
  else{
    document.getElementById("piano").style.opacity = "0";
    document.getElementById("piano").style.pointerEvents = "none";

    piano_vis = false;
  }

  display_border(check);
}

function keyPlay(press){
  var piano = document.querySelector(".piano");

  if(piano.style.opacity == 0) return;

  else
  {
    var key_playing = new Audio('notes/' + press + '4.mp3');
    key_playing.play();
    
    document.querySelector("." + press).classList.add('active');
    setTimeout(() => {
      document.querySelector("." + press).classList.remove('active');
    }, 300);
  }
 
}

window.onload=function(){
  const keys = document.querySelectorAll('.piano div');

  //Keys for keyboard.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
      var key_play = 'C';
      keyPlay(key_play);
    }
    else if (event.key === 'w') {
      var key_play = 'Cs';
      keyPlay(key_play);
    }
    else if (event.key === 's') {
      var key_play = 'D';
      keyPlay(key_play);
    }
    else if (event.key === 'e') {
      var key_play = 'Ds';
      keyPlay(key_play);
    }
    else if (event.key === 'd') {
      var key_play = 'E';
      keyPlay(key_play);
    }
    else if (event.key === 'f') {
      var key_play = 'F';
      keyPlay(key_play);
    }
    else if (event.key === 't') {
      var key_play = 'Fs';
      keyPlay(key_play);
    }
    else if (event.key === 'g') {
      var key_play = 'G';
      keyPlay(key_play);
    }
    else if (event.key === 'y') {
      var key_play = 'Gs';
      keyPlay(key_play);
    }
    else if (event.key === 'h') {
      var key_play = 'A';
      keyPlay(key_play);
    }
    else if (event.key === 'u') {
      var key_play = 'As';
      keyPlay(key_play);
    }
    else if (event.key === 'j') {
      var key_play = 'B';
      keyPlay(key_play);
    }
  });
  //Mouse.
  keys.forEach((key) => {
    key.addEventListener('mousedown', () => playNote(key));
    key.addEventListener('mouseup', () => removeNote(key));
  });

  let playNote = (key) => {
    key.classList.add('active');
    var note_playing = new Audio('notes/' + key.dataset.note + '4.mp3');
    note_playing.play();
  };
  let removeNote = (key) => {
    key.classList.remove('active');
  };
}

function change_w(){
  document.getElementById("white").classList.add('active');
}

function change_back_w(){
  document.getElementById("white").classList.remove('active');
}

var note_selected = "default";
function note_select(n){
  note_selected = n;
  var flat = document.querySelector(".flat");
  var sharp = document.querySelector(".sharp");
  var flatMobile = document.querySelector(".flatMobile");
  var sharpMobile = document.querySelector(".sharpMobile");
  var title = document.querySelector(".title_accidental");
  var title_div = document.querySelector(".div_title_accidental");

  switch(note_selected){
    case "A":
      title.innerHTML = "Accidental";
      title.style.top = "12px";
      title_div.style.backgroundColor = "#ADECF4";

      flat.style.backgroundColor = "#ADECF4";
      flat.style.filter = "none";
      flat.style.pointerEvents = "auto";

      sharp.style.backgroundColor = "#ADECF4";
      sharp.style.filter = "none";
      sharp.style.pointerEvents = "auto";

      flatMobile.style.backgroundColor = "#ADECF4";
      flatMobile.style.filter = "none";
      flatMobile.style.pointerEvents = "auto";

      sharpMobile.style.backgroundColor = "#ADECF4";
      sharpMobile.style.filter = "none";
      sharpMobile.style.pointerEvents = "auto";
      break;
    case "C":
      title.innerHTML = "Accidental";
      title.style.top = "12px";
      title_div.style.backgroundColor = "#ADECF4";

      flatMobile.style.backgroundColor = "lightGray";
      flatMobile.style.filter = "blur(1px)";
      flatMobile.style.pointerEvents = "none";

      sharpMobile.style.backgroundColor = "#ADECF4";
      sharpMobile.style.filter = "none";
      sharpMobile.style.pointerEvents = "auto";

      flat.style.backgroundColor = "lightGray";
      flat.style.filter = "blur(1px)";
      flat.style.pointerEvents = "none";

      sharp.style.backgroundColor = "#ADECF4";
      sharp.style.filter = "none";
      sharp.style.pointerEvents = "auto";
      break;
    case "D":
      title.innerHTML = "Accidental";
      title.style.top = "12px";
      title_div.style.backgroundColor = "#ADECF4";

      flat.style.backgroundColor = "#ADECF4";
      flat.style.filter = "none";
      flat.style.pointerEvents = "auto";

      sharp.style.backgroundColor = "#ADECF4";
      sharp.style.filter = "none";
      sharp.style.pointerEvents = "auto";

      flatMobile.style.backgroundColor = "#ADECF4";
      flatMobile.style.filter = "none";
      flatMobile.style.pointerEvents = "auto";

      sharpMobile.style.backgroundColor = "#ADECF4";
      sharpMobile.style.filter = "none";
      sharpMobile.style.pointerEvents = "auto";
    break;
    case "F":
      title.innerHTML = "Accidental";
      title.style.top = "12px";
      title_div.style.backgroundColor = "#ADECF4";

      flat.style.backgroundColor = "lightGray";
      flat.style.filter = "blur(1px)";
      flat.style.pointerEvents = "none";

      sharp.style.backgroundColor = "#ADECF4";
      sharp.style.filter = "none";
      sharp.style.pointerEvents = "auto";

      flatMobile.style.backgroundColor = "lightGray";
      flatMobile.style.filter = "blur(1px)";
      flatMobile.style.pointerEvents = "none";

      sharpMobile.style.backgroundColor = "#ADECF4";
      sharpMobile.style.filter = "none";
      sharpMobile.style.pointerEvents = "auto";
    break;
    case "G":
      title.innerHTML = "Accidental";
      title.style.top = "12px";
      title_div.style.backgroundColor = "#ADECF4";

      flat.style.backgroundColor = "#ADECF4";
      flat.style.filter = "none";
      flat.style.pointerEvents = "auto";

      sharp.style.backgroundColor = "#ADECF4";
      sharp.style.filter = "none";
      sharp.style.pointerEvents = "auto";

      flatMobile.style.backgroundColor = "#ADECF4";
      flatMobile.style.filter = "none";
      flatMobile.style.pointerEvents = "auto";

      sharpMobile.style.backgroundColor = "#ADECF4";
      sharpMobile.style.filter = "none";
      sharpMobile.style.pointerEvents = "auto";
    break;
    case "B":
      title.innerHTML = "Accidental";
      title.style.top = "12px";
      title_div.style.backgroundColor = "#ADECF4";

      flat.style.backgroundColor = "#ADECF4";
      flat.style.filter = "none";
      flat.style.pointerEvents = "auto";

      sharp.style.backgroundColor = "lightGray";
      sharp.style.filter = "blur(1px)";
      sharp.style.pointerEvents = "none";

      flatMobile.style.backgroundColor = "#ADECF4";
      flatMobile.style.filter = "none";
      flatMobile.style.pointerEvents = "auto";

      sharpMobile.style.backgroundColor = "lightGray";
      sharpMobile.style.filter = "blur(1px)";
      sharpMobile.style.pointerEvents = "none";
    break;
    case "E":
      title.innerHTML = "Accidental";
      title.style.top = "12px";
      title_div.style.backgroundColor = "#ADECF4";

      sharp.style.backgroundColor = "lightGray";
      sharp.style.filter = "blur(1px)";
      sharp.style.pointerEvents = "none";

      flat.style.backgroundColor = "#ADECF4";
      flat.style.filter = "none";
      flat.style.pointerEvents = "auto";

      sharpMobile.style.backgroundColor = "lightGray";
      sharpMobile.style.filter = "blur(1px)";
      sharpMobile.style.pointerEvents = "none";

      flatMobile.style.backgroundColor = "#ADECF4";
      flatMobile.style.filter = "none";
      flatMobile.style.pointerEvents = "auto";
    break;

   
  }
  accidental = "natural";
}

var accidental = "natural";
function sharp_or_flat(a){
  if(a != null){
    accidental = a;
  } else{
    accidental = "natural";
  }
}

var tonality;
function maj_or_min(t){
  tonality = t;
}

function run(){
  var num = note_to_num(note_selected, accidental);

  if(tonality == "maj"){
    construct_major(num);
  } else {
    construct_minor(num);
  }
}

function note_to_num(note_name, accidental_name){
  var out = 0;
  var val = note_name + accidental_name;

  if(val == "Anatural") out = 1;
  else if(val == "Bb") out = 2;
  else if(val == "A#") out = 2;
  else if(val == 'Bnatural') out = 3;
  else if(val == 'Cnatural') out = 4;
  else if(val == 'C#') out = 5;
  else if(val == 'Db') out = 5;
  else if(val == 'Dnatural') out = 6;
  else if(val == 'D#') out = 7;
  else if(val == 'Eb') out = 7;
  else if(val == 'Enatural') out = 8;
  else if(val == 'Fnatural') out = 9;
  else if(val == 'F#') out = 10;
  else if(val == 'Gb') out = 10;
  else if(val == 'Gnatural') out = 11;
  else if(val == 'G#') out = 12;
  else if(val == 'Ab') out = 12;
  else {
    out = 0;
  }

  return out;
}

function num_to_note(val){
  var out;

  if(val == 1) out = 'A';
  else if(val == 2) out= 'As';
  else if(val == 3) out = 'B';
  else if(val == 4) out = 'C';
  else if(val == 5) out = 'Cs';
  else if(val == 6) out = 'D';
  else if(val == 7) out = 'Ds';
  else if(val == 8) out = 'E';
  else if(val == 9) out = 'F';
  else if(val == 10) out = 'Fs';
  else if(val == 11) out = 'G';
  else if(val == 12) out = 'Gs';
  else if(val == 0) out = 'Gs';

  return out;
}

function construct_major(val){
  //WWHWWWH
  var range_notes = document.querySelector(".range_notes");

  var scale_string;
  var scale_array = [7];
  if(val == 0) alert("Error! Non valid input!");
  else{
    scale_array[0] = num_to_note(val);
    scale_string = num_to_note(val);

    val += 2;
    val %= 12;
    scale_array[1] = num_to_note(val);
    scale_string += " " + num_to_note(val);

    val += 2;
    val %= 12;
    scale_array[2] = num_to_note(val);
    scale_string += " " + num_to_note(val);

    val += 1;
    val %= 12;
    scale_array[3] = num_to_note(val);
    scale_string += " " + num_to_note(val);

    val += 2;
    val %= 12;
    scale_array[4] = num_to_note(val);
    scale_string += " " + num_to_note(val);

    val += 2;
    val %= 12;
    scale_array[5] = num_to_note(val);
    scale_string += " " + num_to_note(val);

    val += 2;
    val %= 12;
    scale_array[6] = num_to_note(val);
    scale_string += " " + num_to_note(val);
  }

  range_notes.style.opacity = 1;
  range_notes.innerHTML = "Notes Playable: " + scale_string;
  construct_chords(scale_array);
}

function construct_minor(val){
  //WWHWWWH
  var range_notes = document.querySelector(".range_notes");

  var scale_string;
  var scale_array = [7];
  if(val == 0) alert("Error! Non valid input!");
  else{
    scale_array[0] = num_to_note(val);
    scale_string = num_to_note(val);

    val += 2;
    val %= 12;
    scale_array[1] = num_to_note(val);
    scale_string += " " + num_to_note(val);

    val += 1;
    val %= 12;
    scale_array[2] = num_to_note(val);
    scale_string += " " + num_to_note(val);

    val += 2;
    val %= 12;
    scale_array[3] = num_to_note(val);
    scale_string += " " + num_to_note(val);

    val += 2;
    val %= 12;
    scale_array[4] = num_to_note(val);
    scale_string += " " + num_to_note(val);

    val += 1;
    val %= 12;
    scale_array[5] = num_to_note(val);
    scale_string += " " + num_to_note(val);

    val += 2;
    val %= 12;
    scale_array[6] = num_to_note(val);
    scale_string += " " + num_to_note(val);
  }

  range_notes.style.opacity = 1;
  range_notes.innerHTML ="Notes Playable: " + scale_string;
  construct_chords(scale_array);
}

function construct_chords(val){

  if(window.innerWidth >= 1280)
  {
    document.getElementById('I').innerHTML = "<p>" + val[0] + " " + val[2] + " " + val[4] + "</p>";
    document.getElementById('V').innerHTML = "<p>" + val[4] + " " + val[6] + " " + val[1] + "</p>";
    document.getElementById('IV').innerHTML = "<p>" + val[3] + " " + val[5] + " " +  val[0] + "</p>";
    document.getElementById('II').innerHTML = "<p>" + val[1] + " " +  val[3] + " " + val[5] + "</p>";
    document.getElementById('VI').innerHTML = "<p>" + val[5] + " " + val[0] + " " + val[2] + "</p>";
    document.getElementById('III').innerHTML = "<p>" + val[2] + " " + val[4] + " " + val[6] + "</p>";
  }

  else
  {
    document.getElementById('Imobile').innerHTML = "<p>" + val[0] + " " + val[2] + " " + val[4] + "</p>";
    document.getElementById('Vmobile').innerHTML = "<p>" + val[4] + " " + val[6] + " " + val[1] + "</p>";
    document.getElementById('IVmobile').innerHTML = "<p>" + val[3] + " " + val[5] + " " +  val[0] + "</p>";
    document.getElementById('IImobile').innerHTML = "<p>" + val[1] + " " +  val[3] + " " + val[5] + "</p>";
    document.getElementById('VImobile').innerHTML = "<p>" + val[5] + " " + val[0] + " " + val[2] + "</p>";
    document.getElementById('IIImobile').innerHTML = "<p>" + val[2] + " " + val[4] + " " + val[6] + "</p>";
  }






}


function display_border(check){
  var border = document.querySelector(".border-bottom");
  if(check){
    if(window.innerWidth >= 1280)
    {
      border.style.width = "50%";
    }
    else
    {
      border.style.width = "90%";
    }

  }
  else{
    border.style.width = "0%";
  }


}


function titleText_notes(text, innerText){

  var title = document.querySelector(".title_notes");
  var innerText = document.querySelector(".notes_button p");
  var div_title = document.querySelector(".div_title_notes");

    title.innerHTML = text;
    innerText.style.top = 0;
    div_title.style.backgroundColor = "white";
    reveal_results_button();
}

function titleText_accidental(text, innerText){

  var title = document.querySelector(".title_accidental");
  var innerText = document.querySelector(".accidental_button p");
  var div_title = document.querySelector(".div_title_accidental");

    title.innerHTML = text;
    innerText.style.top = 0;
    div_title.style.backgroundColor = "white";
    reveal_results_button();
}

function titleText_major(text, innerText){

  var title = document.querySelector(".title_major");
  var innerText = document.querySelector(".major_button p");
  var div_title = document.querySelector(".div_title_major");

    title.innerHTML = text;
    innerText.style.top = 0;
    div_title.style.backgroundColor = "white";
    reveal_results_button();
}

function selectInstrument(textInput){
  var buttons = document.querySelector(".buttons");
  var Instrumentselection = document.querySelector(".selection_container");
  var startButton = document.querySelector(".selection_mobile");

  var body = document.getElementById("body");
  var h1 = document.getElementById("h1");

  display_piano(true);

  buttons.style.pointerEvents = "all";
  buttons.style.opacity = 1;
  h1.style.marginTop = 0;
  body.style.overFlow = "auto";


  startButton.remove();
  Instrumentselection.remove();
}

function reset() //reset the selected elements and hide the results and show results button
{
  var results_button = document.querySelector(".results_container");

  var title_notes = document.querySelector(".title_notes");
  var title_accidental = document.querySelector(".title_accidental");
  var title_major = document.querySelector(".title_major");

  var div_title_notes = document.querySelector(".div_title_notes");
  var div_title_accidental = document.querySelector(".div_title_accidental");
  var div_title_major = document.querySelector(".div_title_major");

  var sharp = document.querySelector(".sharp");
  var flat = document.querySelector(".flat");

  var results = document.querySelector(".chord_options");

  title_notes.innerHTML = "Note";
  title_accidental.innerHTML = "Accidental";
  title_major.innerHTML = "Major / Minor";

  title_notes.style.top = "12px";
  title_accidental.style.top = "12px";
  title_major.style.top = "12px";

  div_title_notes.style.backgroundColor = "#ADECF4";
  div_title_accidental.style.backgroundColor = "#ADECF4";
  div_title_major.style.backgroundColor = "#ADECF4";

  results_button.style.opacity = "0";
  results_button.style.pointerEvents = "none";

  results.style.opacity = "0";
  results.style.pointerEvents = "none";

  flat.style.backgroundColor = "#ADECF4";
  sharp.style.backgroundColor = "#ADECF4";

  flat.style.filter = "blur(0px)";
  sharp.style.filter = "blur(0px)";

  flat.style.pointerEvents = "auto";
  sharp.style.pointerEvents = "auto";

  note_selected = "default";
  accidental = "natural";

}

function reveal_results_button() //if all select buttons necessary are white show the show results button
{
  var div_title_notes = document.querySelector(".div_title_notes");
  var div_title_major = document.querySelector(".div_title_major");

  var results_button = document.querySelector(".results_container");

  if(div_title_notes.style.backgroundColor == "white" && div_title_major.style.backgroundColor == "white"){
      results_button.style.opacity = "1";
      results_button.style.pointerEvents = "auto";
  }
}

function reveal_results() //show the buttons with chord results on them
{
  var results = document.querySelector(".chord_options");
  var results_mobile = document.querySelector(".chords_row");

  if(window.innerWidth >= 1280) //if on desktop change according html element
  {
    results.style.opacity = 1;
    results.style.pointerEvents = "auto";
  }

  else //else change other html element for phone
  {
    results_mobile.style.opacity = 1;
  }

}


function showButtons() //if the start button is hit show the buttons
{
  var buttons = document.querySelector(".buttons_mobile");
  buttons.style.opacity = 1;
}

var sharpEnabled = true;
var flatEnabled = true;

var noteSelected = false;
var majorSelected = false;



function noteSelectMobile(element, text) //change the colour of the clicked note button
{
  var notes = document.querySelectorAll(".notes_row div");
  var sharp = document.querySelector(".sharpMobile");
  var flat = document.querySelector(".flatMobile");
  var divRun = document.querySelector(".div_run");


  for(var i = 0; i < 7; i++) //change all the other notes back to blue
  {
    notes[i].style.backgroundColor = "#ADECF4";
  }
  element.style.backgroundColor = "white"; //change the colour of the clicked note button
  if(element.innerHTML == "<p>C</p>") //depending on note set value of the sharp and flat buttons to false and true accordingly
  {
    flatEnabled = false;
    sharpEnabled = true;
  }
  else if(element.innerHTML == "<p>D</p>")
  {
    flatEnabled = true;
    sharpEnabled = true;
  }
  else if(element.innerHTML == "<p>E</p>")
  {
    flatEnabled = true;
    sharpEnabled = false;
  }
  else if(element.innerHTML == "<p>F</p>")
  {
    flatEnabled = false;
    sharpEnabled = true;
  }
  else if(element.innerHTML == "<p>G</p>")
  {
    flatEnabled = true;
    sharpEnabled = true;
  }
  else if(element.innerHTML == "<p>A</p>")
  {
    flatEnabled = true;
    sharpEnabled = true;
  }
  else if(element.innerHTML == "<p>B</p>")
  {
    flatEnabled = true;
    sharpEnabled = false;
  }
  noteSelected = true;
  majorSelected = false;

  if(!sharpEnabled) //check the values of the boolean and set styling accordingly
  {
    sharp.style.backgroundColor = "lightGray";
    sharp.style.pointerEvents = "none";
    sharp.style.filter = "blur(1px)";
  }
  else
  {
    sharp.style.backgroundColor = "#ADECF4";
    sharp.style.pointerEvents = "auto";
    sharp.style.filter = "blur(0px)";
  }
  if(!flatEnabled)
  {
    flat.style.backgroundColor = "lightGray";
    flat.style.pointerEvents = "none";
    flat.style.filter = "blur(1px)";
  }
  else
  {
    flat.style.backgroundColor = "#ADECF4";
    flat.style.pointerEvents = "auto";
    flat.style.filter = "blur(0px)";
  }

  if(majorSelected && noteSelected)
  {
    divRun.style.backgroundColor = "#ADECF4";
    divRun.style.pointerEvents = "auto";
    divRun.style.filter = "blur(0px)";
  }

  accidental = "natural";
}

function accidentalSelectMobile(element, text)
{
  var accidentals = document.querySelectorAll(".accidental_row div");
  for(var i = 0; i < accidentals.length; i++)
  {
    if(accidentals[i].style.backgroundColor != "lightgray")
    {
      accidentals[i].style.backgroundColor = "#ADECF4";
    }
  }
  element.style.backgroundColor = "white";


}

function majorSelectMobile(element, text) //turn major or minor note white depending on which one is picked
{
  var majors = document.querySelectorAll(".major_row div");
  var divRun = document.querySelector(".div_run");

  for(var i = 0; i < 2; i++)
  {
    majors[i].style.backgroundColor = "#ADECF4";
  }
  element.style.backgroundColor = "white";
  majorSelected = true;

  if(majorSelected && noteSelected) //if a note and minor or major is selected make the show results button clickable
  {
    divRun.style.backgroundColor = "#ADECF4";
    divRun.style.pointerEvents = "auto";
    divRun.style.filter = "blur(0px)";
  }
}

function resetMobile() //reset all of the buttons on the mobile layout
{
  var notes = document.querySelectorAll(".notes_row div");
  var majors = document.querySelectorAll(".major_row div");
  var accidentals = document.querySelectorAll(".accidental_row div");
  var sharp = document.querySelector(".sharp");
  var flat = document.querySelector(".flat");
  var divRun = document.querySelector(".div_run");
  var results = document.querySelector(".chords_row");

  for(var i = 0; i < 7; i++)
  {
    notes[i].style.backgroundColor = "#ADECF4";
  }

  for(var i = 0; i < 2; i++)
  {
    majors[i].style.backgroundColor = "#ADECF4";
    accidentals[i].style.backgroundColor = "#ADECF4";
    accidentals[i].style.filter = "blur(0px)";
    accidentals[i].style.pointerEvents = "auto";
    flat.style.filter = "blur(0px)";
    sharp.style.filter = "blur(0px)";
  }

    divRun.style.backgroundColor = "lightgray";
    divRun.style.pointerEvents = "none";
    divRun.style.filter = "blur(1px)";
    results.style.opacity = 0;

    note_selected = "default";
    accidental = "natural";

    noteSelected = false;
    majorSelect = false;
}
