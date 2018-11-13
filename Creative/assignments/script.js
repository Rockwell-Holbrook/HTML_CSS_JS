 function show_coords(event)
    {
        var x=event.clientX;
        var y=event.clientY;
        alert("X coords: " + x + ", Y coords: " + y);
    }
        
window.onload = function() {
    alert("External JavaScript File Has Loaded...");
}

