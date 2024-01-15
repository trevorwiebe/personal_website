document.addEventListener("DOMContentLoaded", function() {
    // Fetch the header.html file
    fetch("/ui_elements/header/header.html")
        .then(response => response.text())
        .then(headerHtml => {
            // Insert the header HTML into the header element on each page
            document.querySelectorAll(".header-container").forEach(function(headerContainer) {
                headerContainer.innerHTML = headerHtml;
                
                // Highlight the active item in the header
                var navigationItems = headerContainer.querySelectorAll(".menu_item");
                navigationItems.forEach(function(item) {
                    if (item.getAttribute("href") === activePage) {
                        item.classList.add("active"); // Add a CSS class for styling
                    }
                });
            });
        })
        .catch(error => console.log(error));
});
