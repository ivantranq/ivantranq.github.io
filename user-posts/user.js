const postsListEl = document.querySelector(".post-list")
const id = localStorage.getItem("id")

async function renderPosts(id) {
    const userPostsBackend = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const userPosts = await userPostsBackend.json();

    const postHTML = userPosts.map(post => postsHTML(post)).join("");

    postsListEl.innerHTML = postHTML;
}

function onSearchChange(event) {
    const id = event.target.value;
    renderPosts(id);
}

function postsHTML(post) {
    return `
        <div class="post">
            <div class="post__title">
                ${post.title}
            </div>
            <p class="post__body">
                ${post.body}
            </p>
        </div>
    `;
}

renderPosts(id);
