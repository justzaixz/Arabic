function firstWiki(){
    console.log("first wiki button clicked")
    window.location.href = "https://www.albayan.ae/uae/news/2021-03-16-1.4117011"
}

function updateContent() {
    var slider = document.getElementById("yearSlider");
    var yearText = document.getElementById("yearText");

    // Array of possible years
    var years = ["Early Years", "Middle Years", "Later Years"];

    // Update the text of h2 based on the slider value
    yearText.textContent = years[slider.value];

    // Hide all containers
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "none";

    // Show the container corresponding to the slider value
    document.getElementById("container" + (parseInt(slider.value) + 1)).style.display = "block";
}

// Initialize content on page load
document.addEventListener("DOMContentLoaded", function() {
    updateContent();
});


