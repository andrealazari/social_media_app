function renderPostPage() {
  let localDate = new Date().toLocaleDateString();
  let localTime = new Date().toLocaleTimeString();
  let allTime = `${localDate} at ${localTime}`;
  document.querySelector(".entry-page-container").innerHTML = `
    <section>
      <form onSubmit="createPost(event)">
        <p>${state.loggedInUserName.userName}</p>
        <label>What's happening?</label>
        <textarea name='post' rows='4' cols='50'></textarea>
        <input name="attachment">Attachment</input>
        <input name="timestamp" value="${allTime}" type="hidden"></input>
        <button>Post</button>
      </form>
    </section>
  `;
}

function createPost(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((post) => {
      state.posts.unshift(post);
      // renderUserHomePage();
      crazyfunction();
      postCreated();
    });
  postCreated();
}

function postCreated() {
  document.querySelector(".entry-page-container").innerHTML = `
    <section>
      <h1>Tweet created!</h1>
      </section>
    `;
}
