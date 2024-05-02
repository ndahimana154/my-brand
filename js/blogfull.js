window.addEventListener("DOMContentLoaded", function () {
  const loadingDiv = document.querySelector(".center");
  loadingDiv.style.display = "flex"; // Show loading rings initially

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
          `https://my-brand-backend-server.onrender.com/api/blog/${blogId}`
        );
        const data = await response.json();

        // Update the elements with the retrieved blog content
        document.querySelector(".article-section h5").textContent =
          data.data.title;
        document.querySelector(
          ".article-section .img img"
        ).src = `${data.data.cover}`;
        document.querySelector(".article-section .author span").textContent =
          "Ndahimana Bonheur";
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
    } finally {
      loadingDiv.style.display = "none"; // Hide loading rings after data is fetched
    }
  };
  getBlogFull();

  const getBlogComments = async (blogId) => {
    try {
      const response = await fetch(
        `https://my-brand-backend-server.onrender.com/api/comment/${blogId}`
      );
      const data = await response.json();

      const commentsRow = document.querySelector(".comments-row");

      // Clear existing HTML content
      commentsRow.innerHTML = "";
      if (data.blogComments.length < 1) {
        commentsRow.innerHTML = "No comments found!";
      }
      // Loop through the fetched comments data and create HTML elements
      data.blogComments.forEach((comment) => {
        const commentBox = document.createElement("div");
        commentBox.classList.add("comment-box");

        const names = document.createElement("div");
        names.classList.add("names");
        names.textContent = comment.name;

        const email = document.createElement("div");
        email.classList.add("email");
        email.textContent = `${comment.firstname} ${comment.lastname}`;

        const commentText = document.createElement("div");
        commentText.classList.add("comment");
        commentText.textContent = comment.comment;

        commentBox.appendChild(names);
        commentBox.appendChild(email);
        commentBox.appendChild(commentText);

        commentsRow.appendChild(commentBox);
      });
    } catch (error) {
      console.error("Error fetching blog comments:", error.message);
    } finally {
      loadingDiv.style.display = "none"; // Hide loading rings after data is fetched
    }
  };

  // Call the function with the appropriate blog ID
  getBlogComments(blogId);

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
    try {
      // Show loading rings while sending comment
      loadingDiv.style.display = "flex";
      const response = await fetch(
        `https://my-brand-backend-server.onrender.com/api/comment/${blogId}`,
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
        firstname.value = "";
        lastname.value = "";
        email.value = "";
        comment.value = "";
        alert("Sending comment succeeded.");
      }
    } catch (error) {
      console.error("Error sending comment:", error.message);
    } finally {
      loadingDiv.style.display = "none"; // Hide loading rings after comment is sent
    }
  });
});
