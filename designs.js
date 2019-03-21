/*jshint esversion: 6 */

// Grid size button
$('#gridSizeButton').on('click', function (event) {
  event.preventDefault();
  clearGrid();
  const height = $('#inputHeight').val();
  const width = $('#inputWidth').val();
  makeGrid(height, width);
});

// Color grid squares
$('#pixelCanvas').on('click', 'td', function (event) {
  console.log('Clicked Square!');
  $(this).css('background-color', $('#colorPicker').val());
});

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
  for (let h = 1; h <= height; h++) {
    $('#pixelCanvas').append('<tr>');
    for (let w = 1; w <= width; w++) {
      $('tr:last-child').append('<td>');
    }
  }
}

// Clears grid and resets color to black
function clearGrid() {
  $('#pixelCanvas').empty();
  $('#colorPicker').val('#000000');
}
