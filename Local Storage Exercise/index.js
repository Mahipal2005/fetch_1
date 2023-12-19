// // HTML elements
// let inputName = document.querySelector('#name');
// let inputAge = document.querySelector('#age');
// let submitBtn = document.querySelector('#submit');
// let displayData = document.querySelector('#displayData');

// // Event listener for form submission
// submitBtn.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevents the default form submission behavior

//     // Get values from input fields
//     let name = inputName.value;
//     let age = inputAge.value;

//     // Create an object with user data
//     let user = { username: name, userAge: age };

//     // Check if localStorage already has data
//     let storedData = localStorage.getItem('userData');
//     let arr = storedData ? JSON.parse(storedData) : [];

//     // Push new user data to the array
//     arr.push(user);
//     console.log(arr)

//     // Store the updated array in localStorage
//     localStorage.setItem('userData', JSON.stringify(arr));

//     // Clear input fields after submission
//     inputName.value = '';
//     inputAge.value = '';

//     // Display success message or update UI as needed
//     displayData.textContent = 'Data stored successfully!';
// });





// Get references to HTML elements
const inputName = document.querySelector('#name');
const inputAge = document.querySelector('#age');
const submitBtn = document.querySelector('#submit');
const displayDataBtn = document.querySelector('#displayData');
const userDataDisplay = document.querySelector('#userDataDisplay');

// Function to display user data in a table format
function displayUserData() {
    userDataDisplay.innerHTML = ''; // Clear the display area before adding new data

    const storedData = localStorage.getItem('userData');
    if (storedData) {
        const userData = JSON.parse(storedData);
        if (userData.length > 0) {
            const table = document.createElement('table');
            const headerRow = table.insertRow(0);
            const headers = ['Name', 'Age'];

            // Create table headers
            headers.forEach((headerText, index) => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });

            // Add data to the table
            userData.forEach((user, index) => {
                const row = table.insertRow(index + 1);
                const nameCell = row.insertCell(0);
                const ageCell = row.insertCell(1);
                nameCell.textContent = user.username;
                ageCell.textContent = user.userAge;
            });

            userDataDisplay.appendChild(table);
        } else {
            userDataDisplay.textContent = 'No data available.';
        }
    } else {
        userDataDisplay.textContent = 'No data available.';
    }
}

// Event listener for form submission
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const name = inputName.value;
    const age = inputAge.value;

    const user = { username: name, userAge: age };

    let arr = JSON.parse(localStorage.getItem('userData') || '[]');
    if(name=='' || age==''){
        alert("please enter valid entry")
    }
    else{

        arr.push(user);
        
        localStorage.setItem('userData', JSON.stringify(arr));
        
        inputName.value = '';
        inputAge.value = '';
        
        displayDataBtn.textContent = 'Data stored successfully!';
    }
});

// Event listener for displaying data
displayDataBtn.addEventListener('click', function() {
    displayUserData();
});
