window.addEventListener("DOMContentLoaded", function () {
  // Extract the blog ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("id");
  if (!blogId) {
    alert("No blog sent to server");
    window.location.href = "./blog.html";
  }
  const getBlogFull = async () => {
    try {
      // If the blog ID is present in the URL
      if (blogId) {
        // Fetch the specific blog content using the ID
        const response = await fetch(
          `https://my-brand-backend-5cne.onrender.com/api/blog/${blogId}`
        );
        const data = await response.json();


        // Update the elements with the retrieved blog content
        document.querySelector(".article-section h2").textContent =
          data.data.title;
        document.querySelector(
          ".article-section .img img"
        ).src = `./images/${data.data.cover}`;
        document.querySelector(".article-section .author span").textContent =
          data.data.author;
        document.querySelector(".article-section .time span").textContent =
          data.data.postedAt;
        document.querySelector(".article-section .overview").textContent =
          data.data.summary;
        document.querySelector(".article-section .full").innerHTML =
          data.data.article;
      } else {
        console.error("Blog ID not found in the URL");
      }
    } catch (error) {
      console.error("Error fetching blog content:", error.message);
    }
  };
  getBlogFull();

  // Get form elements
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const comment = document.getElementById("comment");

  // Post comment from the client
  const commentForm = document.getElementById("comment-form");
  commentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = {
      firstname: firstname.value.trim(),
      lastname: lastname.value.trim(),
      email: email.value.trim(),
      comment: comment.value.trim(),
    };
    const response = await fetch(
      `http://localhost:3301/api/comment/${blogId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const json = await response.json();

    if (!json.success) {
      alert(json.message);
    } else {
      alert("Sending comment succed.");
    }
  });
});
