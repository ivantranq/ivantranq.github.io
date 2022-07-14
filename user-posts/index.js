// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


async function renderUsers() {
    const userListEl = document.querySelector('.user-list');
    const usersBackend = await fetch("https://jsonplaceholder.typicode.com/users");
    
    const users = await usersBackend.json();

    const usersHTML = users.map(user => userHTML(user)).join("");

    userListEl.innerHTML = usersHTML
}

renderUsers()

function showUserPosts(id) {
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/ivantranq.github.io/user-posts/user.html`
    
}

function userHTML(user) {
    return `<div class="user">
    <div class="user-card" onclick="showUserPosts(${user.id})">
        <div class="user-card__container">
            <h3>${user.name}</h4>
            <p><b>Email:</b> ${user.email}</p>
            <p><b>Phone:</b> ${user.phone}</p>
            <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
        </div>
    </div>
    </div>`;
}
