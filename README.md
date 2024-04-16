# 30 Days, 30 JavaScript Projects

Reference: [30 Days, 30 JavaScript Projects For Beginners to Practice](https://www.youtube.com/playlist?list=PLjwm_8O3suyOgDS_Z8AWbbq3zpCmR-WE9)

| Day | Date | Directory | Project |
|-----|------|-----------|---------|
| 1   | 12/04/2024 | randomPwd | Generate a Random Password Using JavaScript |
| 2   | 16/04/2024 | dragDrop  | Create Drag & Drop Using HTML CSS And JavaScript |

## Learnings
### General
- center everything in center of display
```CSS
.container {
    width: 100%;
    min-height: 100vh;
    background: #0b0423;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

### Drag & Drop
- requirement: attr draggable set to true
```HTML
 <div class="list" draggable="true">List Item 1</div>
```
- addEventListener dragstart for all draggable items
```JavaScript
for(list of lists) {
    list.addEventListener("dragstart", function(e) {
        let selected = e.target;
        // drag and drop
    });
}
```
- addEventListener "dragover" and "drop" for divs
```JavaScript
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
```