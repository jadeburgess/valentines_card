//1.0
// function open_card() {
//     document.getElementById('inside').className = 'open_card'
// }

// function close_card() {
//     document.getElementById('outside').className = 'close_card'
// }

// scripts.js

// //1.1
// function open_card() {
//     document.getElementById('inside').style.display = 'block';
// }

// function close_card() {
//     document.getElementById('inside').style.display = 'none';
// }

// 1.3 working
function open_card() {
    // Hide the outside title
    document.getElementById('outside-title').style.display = 'none';

    // Hide the outside picture
    document.getElementById('outside-pic').style.display = 'none';

    // Hide the "click to open" button
    document.getElementById('open-button').style.display = 'none';

    // Show the "close" button
    document.getElementById('close-button').style.display = 'block';
    
    // Show the inside element
    document.getElementById('inside').style.display = 'block';

    // Set a flag in local storage to remember the state
    localStorage.setItem('isOpened', 'true');
}


function close_card() {
    // Show the outside title when closing the card
    document.getElementById('outside-title').style.display = 'block';

    // Show the outside picture when closing the card
    document.getElementById('outside-pic').style.display = 'block';

    // Show the "click to open" button when closing the card
    document.getElementById('open-button').style.display = 'block';

    // Hide the "close" button
    document.getElementById('close-button').style.display = 'none';
    
    // Hide the inside element
    document.getElementById('inside').style.display = 'none';

    // Remove the flag from local storage when closing the card
    localStorage.removeItem('isOpened');
}


