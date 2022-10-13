 var PADDING = 60;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 document.addEventListener('DOMContentLoaded', function () {
 const ele = document.getElementById('chart1');
     let x = 0;
     let y = 0;
     let w = 0;
     let h = 0;
 const mouseDownHandler = function (e) {
     x = e.clientX;
     y = e.clientY;
 const styles = window.getComputedStyle(ele);
     w = parseInt(styles.width, 10);
     h = parseInt(styles.height, 10);
 document.addEventListener('mousemove', mouseMoveHandler);
 document.addEventListener('mouseup', mouseUpHandler);
 rect = elmnt.getBoundingClientRect();
 viewport.bottom = window.innerHeight - PADDING;
 viewport.left = PADDING;
 viewport.right = window.innerWidth - PADDING;
 viewport.top = PADDING;
};            
 const mouseMoveHandler = function (e) {
 const dx = e.clientX - x;
 const dy = e.clientY - y;
 ele.style.width = `${w + dx}px`;
 ele.style.height = `${h + dy}px`;
 var newLeft = elmnt.offsetLeft - pos1;
 var newTop = elmnt.offsetTop - pos2;
 if (newLeft < viewport.left
     || newTop < viewport.top
     || newLeft + rect.width > viewport.right
     || newTop + rect.height > viewport.bottom
) {
 } else {
 elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
 elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }
};
 const mouseUpHandler = function () {
 document.removeEventListener('mousemove', mouseMoveHandler);
 document.removeEventListener('mouseup', mouseUpHandler);
};
 const resizers = ele.querySelectorAll('.resizer');
 [].forEach.call(resizers, function (resizer) {
 resizer.addEventListener('mousedown', mouseDownHandler);
 });
});

 var PADDING = 60;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 document.addEventListener('DOMContentLoaded', function () {
 const ele = document.getElementById('chart2');
     let x = 0;
     let y = 0;
     let w = 0;
     let h = 0;
 const mouseDownHandler = function (e) {
     x = e.clientX;
     y = e.clientY;
 const styles = window.getComputedStyle(ele);
     w = parseInt(styles.width, 10);
     h = parseInt(styles.height, 10);
 document.addEventListener('mousemove', mouseMoveHandler);
 document.addEventListener('mouseup', mouseUpHandler);
 rect = elmnt.getBoundingClientRect();
 viewport.bottom = window.innerHeight - PADDING;
 viewport.left = PADDING;
 viewport.right = window.innerWidth - PADDING;
 viewport.top = PADDING;
};            
 const mouseMoveHandler = function (e) {
 const dx = e.clientX - x;
 const dy = e.clientY - y;
 ele.style.width = `${w + dx}px`;
 ele.style.height = `${h + dy}px`;
 var newLeft = elmnt.offsetLeft - pos1;
 var newTop = elmnt.offsetTop - pos2;
 if (newLeft < viewport.left
     || newTop < viewport.top
     || newLeft + rect.width > viewport.right
     || newTop + rect.height > viewport.bottom
) {
 } else {
 elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
 elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }
};
 const mouseUpHandler = function () {
 document.removeEventListener('mousemove', mouseMoveHandler);
 document.removeEventListener('mouseup', mouseUpHandler);
};
 const resizers = ele.querySelectorAll('.resizer');
 [].forEach.call(resizers, function (resizer) {
 resizer.addEventListener('mousedown', mouseDownHandler);
 });
});

 var PADDING = 60;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 document.addEventListener('DOMContentLoaded', function () {
 const ele = document.getElementById('chart3');
     let x = 0;
     let y = 0;
     let w = 0;
     let h = 0;
 const mouseDownHandler = function (e) {
     x = e.clientX;
     y = e.clientY;
 const styles = window.getComputedStyle(ele);
     w = parseInt(styles.width, 10);
     h = parseInt(styles.height, 10);
 document.addEventListener('mousemove', mouseMoveHandler);
 document.addEventListener('mouseup', mouseUpHandler);
 rect = elmnt.getBoundingClientRect();
 viewport.bottom = window.innerHeight - PADDING;
 viewport.left = PADDING;
 viewport.right = window.innerWidth - PADDING;
 viewport.top = PADDING;
};            
 const mouseMoveHandler = function (e) {
 const dx = e.clientX - x;
 const dy = e.clientY - y;
 ele.style.width = `${w + dx}px`;
 ele.style.height = `${h + dy}px`;
 var newLeft = elmnt.offsetLeft - pos1;
 var newTop = elmnt.offsetTop - pos2;
 if (newLeft < viewport.left
     || newTop < viewport.top
     || newLeft + rect.width > viewport.right
     || newTop + rect.height > viewport.bottom
) {
 } else {
 elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
 elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }
};
 const mouseUpHandler = function () {
 document.removeEventListener('mousemove', mouseMoveHandler);
 document.removeEventListener('mouseup', mouseUpHandler);
};
 const resizers = ele.querySelectorAll('.resizer');
 [].forEach.call(resizers, function (resizer) {
 resizer.addEventListener('mousedown', mouseDownHandler);
 });
});

 var PADDING = 60;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 document.addEventListener('DOMContentLoaded', function () {
 const ele = document.getElementById('chart4');
     let x = 0;
     let y = 0;
     let w = 0;
     let h = 0;
 const mouseDownHandler = function (e) {
     x = e.clientX;
     y = e.clientY;
 const styles = window.getComputedStyle(ele);
     w = parseInt(styles.width, 10);
     h = parseInt(styles.height, 10);
 document.addEventListener('mousemove', mouseMoveHandler);
 document.addEventListener('mouseup', mouseUpHandler);
 rect = elmnt.getBoundingClientRect();
 viewport.bottom = window.innerHeight - PADDING;
 viewport.left = PADDING;
 viewport.right = window.innerWidth - PADDING;
 viewport.top = PADDING;
};            
 const mouseMoveHandler = function (e) {
 const dx = e.clientX - x;
 const dy = e.clientY - y;
 ele.style.width = `${w + dx}px`;
 ele.style.height = `${h + dy}px`;
 var newLeft = elmnt.offsetLeft - pos1;
 var newTop = elmnt.offsetTop - pos2;
 if (newLeft < viewport.left
     || newTop < viewport.top
     || newLeft + rect.width > viewport.right
     || newTop + rect.height > viewport.bottom
) {
 } else {
 elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
 elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }
};
 const mouseUpHandler = function () {
 document.removeEventListener('mousemove', mouseMoveHandler);
 document.removeEventListener('mouseup', mouseUpHandler);
};
 const resizers = ele.querySelectorAll('.resizer');
 [].forEach.call(resizers, function (resizer) {
 resizer.addEventListener('mousedown', mouseDownHandler);
 });
});

 var PADDING = 60;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 document.addEventListener('DOMContentLoaded', function () {
 const ele = document.getElementById('chart5');
     let x = 0;
     let y = 0;
     let w = 0;
     let h = 0;
 const mouseDownHandler = function (e) {
     x = e.clientX;
     y = e.clientY;
 const styles = window.getComputedStyle(ele);
     w = parseInt(styles.width, 10);
     h = parseInt(styles.height, 10);
 document.addEventListener('mousemove', mouseMoveHandler);
 document.addEventListener('mouseup', mouseUpHandler);
 rect = elmnt.getBoundingClientRect();
 viewport.bottom = window.innerHeight - PADDING;
 viewport.left = PADDING;
 viewport.right = window.innerWidth - PADDING;
 viewport.top = PADDING;
};            
 const mouseMoveHandler = function (e) {
 const dx = e.clientX - x;
 const dy = e.clientY - y;
 ele.style.width = `${w + dx}px`;
 ele.style.height = `${h + dy}px`;
 var newLeft = elmnt.offsetLeft - pos1;
 var newTop = elmnt.offsetTop - pos2;
 if (newLeft < viewport.left
     || newTop < viewport.top
     || newLeft + rect.width > viewport.right
     || newTop + rect.height > viewport.bottom
) {
 } else {
 elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
 elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }
};
 const mouseUpHandler = function () {
 document.removeEventListener('mousemove', mouseMoveHandler);
 document.removeEventListener('mouseup', mouseUpHandler);
};
 const resizers = ele.querySelectorAll('.resizer');
 [].forEach.call(resizers, function (resizer) {
 resizer.addEventListener('mousedown', mouseDownHandler);
 });
});

 var PADDING = 60;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 document.addEventListener('DOMContentLoaded', function () {
 const ele = document.getElementById('chart6');
     let x = 0;
     let y = 0;
     let w = 0;
     let h = 0;
 const mouseDownHandler = function (e) {
     x = e.clientX;
     y = e.clientY;
 const styles = window.getComputedStyle(ele);
     w = parseInt(styles.width, 10);
     h = parseInt(styles.height, 10);
 document.addEventListener('mousemove', mouseMoveHandler);
 document.addEventListener('mouseup', mouseUpHandler);
 rect = elmnt.getBoundingClientRect();
 viewport.bottom = window.innerHeight - PADDING;
 viewport.left = PADDING;
 viewport.right = window.innerWidth - PADDING;
 viewport.top = PADDING;
};            
 const mouseMoveHandler = function (e) {
 const dx = e.clientX - x;
 const dy = e.clientY - y;
 ele.style.width = `${w + dx}px`;
 ele.style.height = `${h + dy}px`;
 var newLeft = elmnt.offsetLeft - pos1;
 var newTop = elmnt.offsetTop - pos2;
 if (newLeft < viewport.left
     || newTop < viewport.top
     || newLeft + rect.width > viewport.right
     || newTop + rect.height > viewport.bottom
) {
 } else {
 elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
 elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }
};
 const mouseUpHandler = function () {
 document.removeEventListener('mousemove', mouseMoveHandler);
 document.removeEventListener('mouseup', mouseUpHandler);
};
 const resizers = ele.querySelectorAll('.resizer');
 [].forEach.call(resizers, function (resizer) {
 resizer.addEventListener('mousedown', mouseDownHandler);
 });
});
