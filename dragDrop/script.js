let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

// enable drag and drop for all list items
for(list of lists) {
    list.addEventListener("dragstart", function(e) {
        let selected = e.target;
        // allow to drag to the right box
        rightBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        // drop event on right box
        rightBox.addEventListener("drop", function(e) {
            rightBox.appendChild(selected);
            // clear selection to drag other elements
            selected = null;
        });
        // allow to drag to the left box
        leftBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        // drop event on left box
        leftBox.addEventListener("drop", function(e) {
            leftBox.appendChild(selected);
            // clear selection to drag other elements
            selected = null;
        });
    });
}