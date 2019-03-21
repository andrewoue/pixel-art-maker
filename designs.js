/* jshint esversion: 6 */

/*
Pixel Art Maker! 2.0
Andrew Ouellette
Adapted from Andrew Ouellette - Grow wih Google Project SP18
Submitted for Udacity Programing Nano Degree SP19
*/

// Sets up grid size
$('#gridSizeButton').on('click', function (event) {
  event.preventDefault();
  clearGrid();
  const height = $('#inputHeight').val();
  const width = $('#inputWidth').val();
  makeGrid(height, width);
});

// Color grid squares
$('#pixelCanvas').on('click', 'td', function (event) {
  $(this).css('background-color', $('#colorPicker').val());
});

// Makes grid
function makeGrid(height, width) {
  for (let h = 1; h <= height; h++) {
    $('#pixelCanvas').append('<tr>');
    for (let w = 1; w <= width; w++) {
      $('tr:last-child').append('<td>');
    }
  }
}

// Clears grid and resets square color to black
function clearGrid() {
  $('#pixelCanvas').empty();
  $('#colorPicker').val('#000000');
}
