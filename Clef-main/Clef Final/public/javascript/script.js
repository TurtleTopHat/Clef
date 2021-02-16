function sound(){
  var audio = new Audio('notes/C4.mp3');
  audio.play();
}

function play_chord(chord_button){
  var notes_of_chord = document.getElementById(chord_button).innerHTML.split(" ");
  var note_playing = new Audio('notes/' + notes_of_chord[0] + '4.mp3');
  note_playing.play();
  var note_playing = new Audio('notes/' + notes_of_chord[1] + '4.mp3');
  note_playing.play();
  var note_playing = new Audio('notes/' + notes_of_chord[2] + '4.mp3');
  note_playing.play();
}

var piano_vis = false;

function display_piano(){
  if(!piano_vis){
    document.getElementById("piano").style.visibility = "visible";
    piano_vis = true;
  } else {
    document.getElementById("piano").style.visibility = "hidden";
    piano_vis = false;
  }
}

window.onload=function(){
  const keys = document.querySelectorAll('.key');

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
  switch(note_selected){
    case "A":
    document.getElementById("b").style.visibility = "visible";
    document.getElementById("#").style.visibility = "visible";
    break;
    case "B":
    document.getElementById("b").style.visibility = "visible";
    document.getElementById("#").style.visibility = "hidden";
    break;
    case "C":
    document.getElementById("b").style.visibility = "visible";
    document.getElementById("#").style.visibility = "visible";
    break;
    case "D":
    document.getElementById("b").style.visibility = "visible";
    document.getElementById("#").style.visibility = "visible";
    break;
    case "E":
    document.getElementById("b").style.visibility = "visible";
    document.getElementById("#").style.visibility = "hidden";
    break;
    case "F":
    document.getElementById("b").style.visibility = "visible";
    document.getElementById("#").style.visibility = "visible";
    break;
    case "G":
    document.getElementById("b").style.visibility = "visible";
    document.getElementById("#").style.visibility = "visible";
    break;
  }
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
    alert(note_selected + " " + accidental + " " + tonality);
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

  alert(scale_string);
  construct_chords(scale_array);
}

function construct_minor(val){
  //WWHWWWH
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

  alert(scale_string);
  construct_chords(scale_array);
}

function construct_chords(val){

    document.getElementById('I').innerHTML = val[0] + " " + val[2] + " " + val[4];
    document.getElementById('V').innerHTML = val[4] + " " + val[6] + " " + val[1];
    document.getElementById('IV').innerHTML = val[3] + " " + val[5] + " " +  val[0];
    document.getElementById('II').innerHTML = val[1] + " " +  val[3] + " " + val[5];
    document.getElementById('VI').innerHTML = val[5] + " " + val[0] + " " + val[2];
    document.getElementById('III').innerHTML = val[2] + " " + val[4] + " " + val[6];

    document.getElementById("b").style.visibility = "hidden";
    document.getElementById("#").style.visibility = "hidden";
}
