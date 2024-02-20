
// constants for query selector
const studentId = "123456789";
// function to change bg color from user input and add student id
function changeCustomColor() {
    const number = document.getElementById('customNumber').value;
    const colorValue = parseInt(number, 10) || 0;
    let color = '';
    if (number < 0 || number > 100) {
        color = 'red';
    } else if (number >= 0 && number <= 20) {
        color = 'green';
    } else if (number > 20 && number <= 40) {
        color = 'blue';
    } else if (number > 40 && number <= 60) {
        color = 'orange';
    } else if (number > 60 && number <= 80) {
        color = 'purple';
    } else if (number > 80 && number <= 100) {
        color = 'yellow';
    }
    document.body.style.backgroundColor = color;
    document.getElementById('myStudentId').innerText = `Student ID: ${studentId}`;

}
// function to change bg color from random no.
function changeRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    //console.log("Hello, World!");

}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    const select = document.getElementById('imageSelect');
    const images = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg', './img/img5.jpg']; // Example image file names
    
    // Clear existing options except the first placeholder
    while (select.options.length > 1) select.remove(1);
    // Add new options
    images.forEach((image) => {
        const option = document.createElement('option');
        option.value = image;
        option.text = image;
        select.appendChild(option);
    });
}

// function to change image
function changeImage() {
    const selectedImage = document.getElementById('imageSelect').value;
    document.getElementById('images').src = `${selectedImage}`;

}

// event listeners for on click event of buttons and select

// event listeners for on change event of select
document.querySelector('.custColor').addEventListener('click', changeCustomColor);
document.querySelector('.randColor').addEventListener('click', changeRandomColor);
document.getElementById('imageSelect').addEventListener('change', changeImage);

// Call addList to populate the select options on page load
document.addEventListener('DOMContentLoaded', addList);

