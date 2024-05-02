window.addEventListener("DOMContentLoaded", async () => {
  // Show loading rings while waiting for the response
  const loadingDiv = document.querySelector(".center");
  loadingDiv.style.display = "flex";

  const getProjects = async () => {
    try {
      const response = await fetch("https://my-brand-backend-server.onrender.com/api/project/");
      const data = await response.json();
      console.log(data)
      const portfolioRow = document.getElementById("portfolioRow");
      portfolioRow.innerHTML = "";
      if (data.success && data.data) {
        var counter=1;
        data.data.forEach((project) => {
          const projectBox = document.createElement("div");
          projectBox.classList.add("portfolio-box");
          // Project Title
          const portTitle = document.createElement("div");
          portTitle.classList.add("port-title");
          projectBox.appendChild(portTitle);

          // Project Number
          const portNumber = document.createElement("div");
          portNumber.classList.add("port-number");
          const span = document.createElement("span");
          span.textContent =counter++;
          portNumber.appendChild(span);
          portTitle.appendChild(portNumber);

          // Project Name
          const projectName = document.createElement("h4");
          projectName.textContent = project.title;
          portTitle.appendChild(projectName);

          // Project Row
          const portRow = document.createElement("div");
          portRow.classList.add("port-row");
          projectBox.appendChild(portRow);

          // Image
          const imgDiv = document.createElement("div");
          imgDiv.classList.add("img");
          const img = document.createElement("img");
          img.src = project.image; // Use the image URL from your backend
          img.alt = project.image; // Set alt text for accessibility
          imgDiv.appendChild(img);
          portRow.appendChild(imgDiv);

          // Info
          const infoDiv = document.createElement("div");
          infoDiv.classList.add("info");
          portRow.appendChild(infoDiv);

          // Project Description
          const projectDesc = document.createElement("p");
          projectDesc.textContent = project.description;
          infoDiv.appendChild(projectDesc);

          // Timeline
          const timeline = document.createElement("div");
          timeline.classList.add("timeline");
          timeline.innerHTML = `<i class="fa fa-calendar"></i> ${project.startTime} - ${project.endTime}`;
          infoDiv.appendChild(timeline);

          // External Link
          const externalLink = document.createElement("a");
          externalLink.href = project.externalLink;
          externalLink.target = "_blank";
          externalLink.innerHTML = `<i class="fa fa-link"></i> External link`;
          infoDiv.appendChild(externalLink);

          // Append the project box to the portfolio row
          portfolioRow.appendChild(projectBox);
        });
        // Hide loading rings after data is fetched and displayed
        loadingDiv.style.display = "none";
      } else {
        console.error("Failed to fetch projects:", data.message);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  getProjects();
});
