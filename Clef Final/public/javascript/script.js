"use strict";

function run(){
  var answer = document.getElementById("note_val").value;
  answer = note_to_num(answer);
  construct_major(answer);
}

function note_to_num(val){
  var out = 0;

  if(val == 'A') out = 1;
  else if(val == 'A#') out = 2;
  else if(val == 'B') out = 3;
  else if(val == 'C') out = 4;
  else if(val == 'C#') out = 5;
  else if(val == 'D') out = 6;
  else if(val == 'D#') out = 7;
  else if(val == 'E') out = 8;
  else if(val == 'F') out = 9;
  else if(val == 'F#') out = 10;
  else if(val == 'G') out = 11;
  else if(val == 'G#') out = 12;
  else {
    out = 0;
  }

  return out;
}

function num_to_note(val){
  var out;

  if(val == 1) out = 'A';
  else if(val == 2) out= 'A#';
  else if(val == 3) out = 'B';
  else if(val == 4) out = 'C';
  else if(val == 5) out = 'C#';
  else if(val == 6) out = 'D';
  else if(val == 7) out = 'D#';
  else if(val == 8) out = 'E';
  else if(val == 9) out = 'F';
  else if(val == 10) out = 'F#';
  else if(val == 11) out = 'G';
  else if(val == 12) out = 'G#';
  else if(val == 0) out = 'G#';

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
  construct_maj_chords(scale_array);
}

function construct_maj_chords(val){
    document.getElementById('first').innerHTML = val[0] + val[2] + val[4];
    document.getElementById('second').innerHTML = val[1] + val[3] + val[5];
    document.getElementById('third').innerHTML = val[2] + val[4] + val[6];
    document.getElementById('fourth').innerHTML = val[3] + val[5] + val[0];
    document.getElementById('fifth').innerHTML = val[4] + val[6] + val[1];
    document.getElementById('sixth').innerHTML = val[5] + val[0] + val[2];
    document.getElementById('seventh').innerHTML = val[6] + val[1] + val[3];
}
