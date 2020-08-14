// output the header row
let headerColor = prompt(
  "Input what color you would like for the multiplication header background."
);

document.write(
  '<span class="cell header" style="background-color:' +
    headerColor +
    '">&times;</span>'
);
let i = 0;

let tableDimensions = prompt(
  "Input table dimensions for multiplication table."
);

while (i <= tableDimensions) {
  document.write('<span class="cell header">' + i + "</span>");
  i++;
}

document.write("<br>");

let j = 0;

while (j <= tableDimensions) {
  document.write('<span class="cell header">' + j + "</span>");

  let k = 0;
  while (k <= tableDimensions) {
    document.write('<span class="cell">' + k * j + "</span>");
    k++;
  }
  j++;
  document.write("<br>");
}

// TODO: Write two nested while loops to output the rest of the multiplication table
