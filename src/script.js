var areas = {
    a: null,
    b: null,
    c: null
};
document.querySelectorAll('.item').forEach(function (item) {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});
document.querySelectorAll('.area').forEach(function (area) {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});
document.querySelector('.neutralArea')
    .addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea')
    .addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea')
    .addEventListener('drop', dropNeutral);
// FUNCTIONS ITEM
function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}
function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}
// FUNCTIONS AREA
function dragOver(e) {
    if (e.currentTarget.querySelector('.item') === null) {
        e.preventDefault(); // PREVENT THE AREA TO REJECT THE DROP
        e.currentTarget.classList.add('hover');
    }
}
function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}
function drop(e) {
    e.currentTarget.classList.remove('hover');
    if (e.currentTarget.querySelector('.item') === null) {
        var dragItem = document.querySelector('.item.dragging');
        e.currentTarget.appendChild(dragItem);
        updateAreas();
    }
}
function dragOverNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}
function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover');
}
function dropNeutral(e) {
    e.currentTarget.classList.remove('hover');
    var dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas();
}
// Logic Functions
function updateAreas() {
    document.querySelectorAll('.area').forEach(function (area) {
        var name = area.getAttribute('data-name');
        if (area.querySelector('.item') !== null) {
            areas[name] = area.querySelector('.item').innerHTML;
        }
        else {
            areas[name] = null;
        }
    });
    if (areas.a === '1' &&
        areas.b === '2' &&
        areas.c === '3') {
        document.querySelector('.areas').classList.add('correct');
    }
    else {
        document.querySelector('.areas').classList.remove('correct');
    }
}
