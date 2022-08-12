
let input = function (whatever) {
var this_input = document.createElement('input');
var p = document.createElement('p');
var span = document.createElement('span');
p.appendChild(this_input);
p.appendChild(span);
whatever.appendChild(p);
};

var these_array_values = function () {
let total_values = [];

document.querySelectorAll('input').forEach(function (this_input) {
total_values.push(this_input.value);
});
return total_values;
};
var input_values_set = function(these_rrays) {
let these_values = document.querySelectorAll('input');
for (let i = 0; i < these_values.length; ++i) {
these_values[i].value = these_rrays[i];
}
};
//Delete the output
var erase = function() {
var total_elements = (document
.querySelector('#wrapped')
.querySelectorAll('p'));
// remove element
total_elements[total_elements.length-1]
.parentNode
.removeChild(total_elements[total_elements.length-1]);
}
var main = function() {
var input_final = document.querySelector("#wrapped");
var add_button = document.querySelector("#cellAdd");
var button_sort = document.querySelector("#sort");
var button_removal = document.querySelector("#cellRemove");

var array_1_data = [];

button_removal.addEventListener("click", function () {// remove an input on click.
erase();
});
add_button.addEventListener("click", function () { //this will add the input when you click
input(input_final);
});


// sort button click
button_sort.addEventListener("click", function () {
array_1_data = these_array_values();
array_1_data = array_1_data.sort();
input_values_set(array_1_data);
});

//this is when the user enters the input
document.querySelectorAll('#wrapped').forEach(function(these_valuess) {
these_valuess.addEventListener('keyup', function(this_event) {
if (this_event.target.tagName === 'INPUT') {
var new_span = this_event.target.parentNode.querySelector('span');
new_span.textContent = this_event.target.value.length;
}
});
});
}

main();
