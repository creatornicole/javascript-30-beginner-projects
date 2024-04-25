# 30 Days, 30 JavaScript Projects

Reference: [30 Days, 30 JavaScript Projects For Beginners to Practice](https://www.youtube.com/playlist?list=PLjwm_8O3suyOgDS_Z8AWbbq3zpCmR-WE9)

| Day | Date | Directory | Project |
|-----|------|-----------|---------|
| 1   | 12/04/2024 | randomPwd | Generate a Random Password Using JavaScript |
| 2   | 16/04/2024 | dragDrop  | Create Drag & Drop Using HTML CSS And JavaScript |
| 3   | 23/04/2024 | toastNotification | Make Toast Notification or Snack Bar For Website Using HTML CSS JavaScript |
| 4   | 24/04/2024 | darkMode | Dark Theme Website Desing Using HTML, CSS & JS |
| 5   | 25/04/2024 | modalBox | Modal Box In HTML Website |

## Learnings
### General
- center everything in center of display
```CSS
.container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
```
- following box-shadow properties adds simple shadow
```CSS
.btn {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}
```
- add `border-radius: 50%;` to element if you want to add a border-shadow to some circular shape (e.g. image)
```CSS
.img {
    border-radius: 50%;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}
```
- you can change the color fo font awesome icons by simply changing the `color` value
```CSS
i {
    color: green;
}
```
- you can check whether a string contains some specific substring/word by using `.includes(word)` on the string
```JavaScript
let msg = 'Some error might occur';
if (msg.includes('error')) {
    // do something
}
```

### Dark Mode
- change between dark and light mode by making use of variables in CSS
```CSS
:root {
    --primary-color: #edf2fc;
    --secondary-color: #212121;    
}

.dark-theme {
    --primary-color: #000106;
    --secondary-color: #fff;
}
```
- and use JavaScript to toggle classes
```JavaScript
let icon = document.getElementById('icon');
icon.onclick = function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.src = 'images/sun.png';
    } else {
        icon.src = 'images/moon.png';
    }
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

### Modal Box
- make use of classname to create animation where something appears and disappears again (create animation by adding/removing class with JavaScript on specified action)

### Toast Notification
- most animations are implemented with CSS
```CSS
.toast {
    transform: translateX(100%);
    animation: moveleft 0.25s linear forward;
}

@keyframes moveleft {
    100% {
        transform: translateX(0%);
    }
}
```
- you can make use of timers in JavaScript
```JavaScript
setTimeout(() => {
    toast.remove();
}), 6000; // 6000ms = 6s
```