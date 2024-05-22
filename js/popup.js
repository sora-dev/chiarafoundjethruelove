function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Show the popup
    var popup = document.getElementById("popup");
    popup.style.display = "flex";

    // Close the popup when the user clicks the close button
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        popup.style.display = "none";
    };

    // Close the popup when the user clicks outside of the popup
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    };
}
