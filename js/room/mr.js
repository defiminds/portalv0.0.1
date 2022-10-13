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
 const ele = document.getElementById('chartd1');
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
 const ele = document.getElementById('chartmk1');
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
 const ele = document.getElementById('chartXAUBTC1');
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
 const ele = document.getElementById('chartSP500');
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
 const ele = document.getElementById('chartwhale1');
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
 var PADDING = 4;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 dragElement(document.getElementById(("chart1")));
 function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
 document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
 elmnt.onmousedown = dragMouseDown;
}
 function dragMouseDown(e) {
     e = e || window.event;
     pos3 = e.clientX;
     pos4 = e.clientY;
 rect = elmnt.getBoundingClientRect();
     viewport.bottom = window.innerHeight - PADDING;
     viewport.left = PADDING;
     viewport.right = window.innerWidth - PADDING;
     viewport.top = PADDING;   
 document.onmouseup = closeDragElement;
 document.onmousemove = elementDrag;
}
 function elementDrag(e) {
     e = e || window.event;
     pos1 = pos3 - e.clientX;
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
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
}
 function closeDragElement() {
 document.onmouseup = null;
 document.onmousemove = null;
 }
}
 var PADDING = 60;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 document.addEventListener('DOMContentLoaded', function () {
 const ele = document.getElementById('chartnews1');
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
 const ele = document.getElementById('chartfeargreed');
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

 var PADDING = 4;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 dragElement(document.getElementById(("chartd1")));
 function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
 document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
 elmnt.onmousedown = dragMouseDown;
}
 function dragMouseDown(e) {
     e = e || window.event;
     pos3 = e.clientX;
     pos4 = e.clientY;
 rect = elmnt.getBoundingClientRect();
     viewport.bottom = window.innerHeight - PADDING;
     viewport.left = PADDING;
     viewport.right = window.innerWidth - PADDING;
     viewport.top = PADDING;   
 document.onmouseup = closeDragElement;
 document.onmousemove = elementDrag;
}
 function elementDrag(e) {
     e = e || window.event;
     pos1 = pos3 - e.clientX;
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
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
}
 function closeDragElement() {
 document.onmouseup = null;
 document.onmousemove = null;
 }
}
 var PADDING = 4;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 dragElement(document.getElementById(("chartmk1")));
 function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
 document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
 elmnt.onmousedown = dragMouseDown;
}
 function dragMouseDown(e) {
     e = e || window.event;
     pos3 = e.clientX;
     pos4 = e.clientY;
 rect = elmnt.getBoundingClientRect();
     viewport.bottom = window.innerHeight - PADDING;
     viewport.left = PADDING;
     viewport.right = window.innerWidth - PADDING;
     viewport.top = PADDING;   
 document.onmouseup = closeDragElement;
 document.onmousemove = elementDrag;
}
 function elementDrag(e) {
     e = e || window.event;
     pos1 = pos3 - e.clientX;
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
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
}
 function closeDragElement() {
 document.onmouseup = null;
 document.onmousemove = null;
 }
}
 var PADDING = 4;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 dragElement(document.getElementById(("chartXAUBTC1")));
 function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
 document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
 elmnt.onmousedown = dragMouseDown;
}
 function dragMouseDown(e) {
     e = e || window.event;
     pos3 = e.clientX;
     pos4 = e.clientY;
 rect = elmnt.getBoundingClientRect();
     viewport.bottom = window.innerHeight - PADDING;
     viewport.left = PADDING;
     viewport.right = window.innerWidth - PADDING;
     viewport.top = PADDING;   
 document.onmouseup = closeDragElement;
 document.onmousemove = elementDrag;
}
 function elementDrag(e) {
     e = e || window.event;
     pos1 = pos3 - e.clientX;
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
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
}
 function closeDragElement() {
 document.onmouseup = null;
 document.onmousemove = null;
 }
}
 var PADDING = 4;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 dragElement(document.getElementById(("chartSP500")));
 function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
 document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
 elmnt.onmousedown = dragMouseDown;
}
 function dragMouseDown(e) {
     e = e || window.event;
     pos3 = e.clientX;
     pos4 = e.clientY;
 rect = elmnt.getBoundingClientRect();
     viewport.bottom = window.innerHeight - PADDING;
     viewport.left = PADDING;
     viewport.right = window.innerWidth - PADDING;
     viewport.top = PADDING;   
 document.onmouseup = closeDragElement;
 document.onmousemove = elementDrag;
}
 function elementDrag(e) {
     e = e || window.event;
     pos1 = pos3 - e.clientX;
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
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
}
 function closeDragElement() {
 document.onmouseup = null;
 document.onmousemove = null;
 }
}
 var PADDING = 4;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 dragElement(document.getElementById(("chartwhale1")));
 function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
 document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
 elmnt.onmousedown = dragMouseDown;
}
 function dragMouseDown(e) {
     e = e || window.event;
     pos3 = e.clientX;
     pos4 = e.clientY;
 rect = elmnt.getBoundingClientRect();
     viewport.bottom = window.innerHeight - PADDING;
     viewport.left = PADDING;
     viewport.right = window.innerWidth - PADDING;
     viewport.top = PADDING;   
 document.onmouseup = closeDragElement;
 document.onmousemove = elementDrag;
}
 function elementDrag(e) {
     e = e || window.event;
     pos1 = pos3 - e.clientX;
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
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
}
 function closeDragElement() {
 document.onmouseup = null;
 document.onmousemove = null;
 }
}
 var PADDING = 4;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 dragElement(document.getElementById(("chartnews1")));
 function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
 document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
 elmnt.onmousedown = dragMouseDown;
}
 function dragMouseDown(e) {
     e = e || window.event;
     pos3 = e.clientX;
     pos4 = e.clientY;
 rect = elmnt.getBoundingClientRect();
     viewport.bottom = window.innerHeight - PADDING;
     viewport.left = PADDING;
     viewport.right = window.innerWidth - PADDING;
     viewport.top = PADDING;   
 document.onmouseup = closeDragElement;
 document.onmousemove = elementDrag;
}
 function elementDrag(e) {
     e = e || window.event;
     pos1 = pos3 - e.clientX;
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
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
}
 function closeDragElement() {
 document.onmouseup = null;
 document.onmousemove = null;
 }
}
 var PADDING = 4;
 var rect;
 var viewport = {
     bottom: 0,
     left: 0,
     right: 0,
     top: 0
}
 dragElement(document.getElementById(("chartfeargreed")));
 function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
 document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
 elmnt.onmousedown = dragMouseDown;
}
 function dragMouseDown(e) {
     e = e || window.event;
     pos3 = e.clientX;
     pos4 = e.clientY;
 rect = elmnt.getBoundingClientRect();
     viewport.bottom = window.innerHeight - PADDING;
     viewport.left = PADDING;
     viewport.right = window.innerWidth - PADDING;
     viewport.top = PADDING;   
 document.onmouseup = closeDragElement;
 document.onmousemove = elementDrag;
}
 function elementDrag(e) {
     e = e || window.event;
     pos1 = pos3 - e.clientX;
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
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
}
 function closeDragElement() {
 document.onmouseup = null;
 document.onmousemove = null;
 }
}
