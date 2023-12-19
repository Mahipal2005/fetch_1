const fetchUsersButton = document.getElementById('fetch_user');
const userDataDisplay = document.querySelector('.user_detail');

function displayUsers(users) {
    userDataDisplay.innerHTML = '';
    users.data.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        const avatar = document.createElement('img');
        avatar.src = user.avatar;
        avatar.alt = 'User Avatar';
        avatar.classList.add('user-avatar');

        const name = document.createElement('p');
        name.textContent = `Name: ${user.first_name} ${user.last_name}`;

        const email = document.createElement('p');
        email.textContent = `Email: ${user.email}`;

        userCard.appendChild(avatar);
        userCard.appendChild(name);
        userCard.appendChild(email);

        userDataDisplay.appendChild(userCard);
    });
}

fetchUsersButton.addEventListener('click', async () => {
    try {
        const response = await fetch('https://reqres.in/api/users');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
});
