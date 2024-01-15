document.addEventListener("DOMContentLoaded", function() {
    // Find all elements with the 'code_block_container' class
    var containers = document.querySelectorAll(".code_block_container");

    // Loop through each container
    containers.forEach(function(container) {
        // Get the content from the 'data-content' attribute
        var content = container.getAttribute("data-content");

        // Create the code block HTML
        var codeBlockHtml = `
            <pre class="code_block" style="background-color: #000000; color: #00FF66; padding: 10px; border-radius: 10px; overflow:scroll;">${content}</pre>
        `;

        // Insert the code block HTML into the container
        container.innerHTML = codeBlockHtml;
    });
});