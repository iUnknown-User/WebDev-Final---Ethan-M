// all credit goes to chatgpt for javascript

/*This code is creating a pop-up window that displays the job title
and the job's description. From what I understand what this code is doing is
that the modalOverlay thing creats a div element. with that div element it creates 
a box where its like normal html from there wit common functions that we used in 
class, like position, top, left, height, and even flex box 

with the append child part down below it creates a child of the html webpage the addEventListener 
part allowes for us to click on the webpage. lastly document.body.removeChild(modalOverlay); removes 
the popup window from the web page*/

// Wait for the page to fully load before running code
document.addEventListener("DOMContentLoaded", () => {
  // Function to display a modal with job details
  const showModal = (jobTitle, jobDescription) => {
    // Create a dark overlay for the modal
    const modalOverlay = document.createElement("div");
    modalOverlay.style.position = "fixed"; // Fixes the overlay on the screen
    modalOverlay.style.top = "0"; // Start overlay at the top
    modalOverlay.style.left = "0"; // Start overlay at the left edge
    modalOverlay.style.width = "100%"; // Cover the entire width
    modalOverlay.style.height = "100%"; // Cover the entire height
    modalOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Semi-transparent background
    modalOverlay.style.display = "flex"; // Center modal content
    modalOverlay.style.justifyContent = "center"; // Center horizontally
    modalOverlay.style.alignItems = "center"; // Center vertically
    modalOverlay.style.zIndex = "1000"; // Place on top of all elements

    // Create the content box for the modal
    const modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "#ffffff"; // White background for content
    modalContent.style.padding = "20px"; // Add space inside the content box
    modalContent.style.borderRadius = "10px"; // Rounded corners for content box
    modalContent.style.textAlign = "center"; // Center align text
    modalContent.style.maxWidth = "600px"; // Set maximum width
    modalContent.style.width = "80%"; // Make it responsive
    modalContent.innerHTML = `
      <h2>${
        jobTitle || "Job Title Not Available"
      }</h2> <!-- Display job title -->
      <p>${
        jobDescription || "Job description not available."
      }</p> <!-- Show job description -->
      <button id="close-modal" style="
        margin-top: 20px; /* Add space above button */
        padding: 10px 20px; /* Button size */
        background-color: #333; /* Dark button color */
        color: #fff; /* White text */
        border: none; /* Remove default button border */
        cursor: pointer; /* Change cursor to pointer */
        border-radius: 5px;">Close</button> <!-- Button to close modal -->
    `;

    // Add content box to the overlay
    modalOverlay.appendChild(modalContent);
    // Add overlay to the page
    document.body.appendChild(modalOverlay);

    // Add event listener to close the modal
    document.getElementById("close-modal").addEventListener("click", () => {
      // Remove overlay from the page
      document.body.removeChild(modalOverlay);
    });
  };

  // Select all elements with the "job-box" class
  const jobBoxes = document.querySelectorAll(".job-box");

  // Loop through each job-box element
  jobBoxes.forEach((jobBox) => {
    // Find the button inside the job-box
    const button = jobBox.querySelector("button");

    // Get job title from headings
    const jobTitle =
      jobBox.querySelector("h2")?.textContent.trim() || // Use <h2> if available
      jobBox.querySelector("h4")?.textContent.trim(); // Otherwise, use <h4>

    // Combine all paragraphs in the job-box
    const jobDescription = Array.from(jobBox.querySelectorAll("p")) // Get all <p> tags
      .map((p) => p.textContent.trim()) // Get text content of each paragraph
      .join("\n\n"); // Add space between paragraphs

    // If a button exists, add click event listener
    if (button) {
      button.addEventListener("click", () => {
        // Show modal when button is clicked
        showModal(jobTitle, jobDescription);
      });
    }
  });
});
