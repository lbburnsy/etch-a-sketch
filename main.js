var container = document.getElementById('container');
var reset_button = document.querySelector('button');

reset_button.addEventListener('click', function(e) {
    var count_columns = prompt('How many squares per side?');
    container.innerHTML = '';
    container.setAttribute('style', `grid-template-columns: repeat(${count_columns}, auto)`);
    for(var i = 0; i <count_columns*count_columns; i++) {
        var new_grid_box = document.createElement('div');
        new_grid_box.classList.add('grid-box');
        container.appendChild(new_grid_box);
    }
});

