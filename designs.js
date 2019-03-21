/*jshint esversion: 6 */

// Select color input
console.log('Check');
console.log($('#colorPicker').val());

// Constants
//const inputHeight = $('#inputHeight').val();
//const inputWidth = $('#inputWidth').val();

// Grid size button
$('#gridSizeButton').on('click', function (event) {
  event.preventDefault();
  const height = $('#inputHeight').val();
  const width = $('#inputWidth').val();
  makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  for (let h = 1; h <= height; h++) {
    $('#pixelCanvas').append('<tr>');
    console.log('row' + h);
    for (let w = 1; w <= width; w++) {
      $('tr:last-child').append('<td>');
    }
  }
}
