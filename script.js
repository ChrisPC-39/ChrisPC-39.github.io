$(document).ready(function () {
    //Initialize page 
    var isLoaded = false;

    if(!isLoaded) {
        $(document.getElementById("brush")).css("background-color", "#ddd");
        $(document.getElementById("road")).css("background-color", "#ddd");
        isLoaded = true;
    }


    // // Change button highlight
    // $('.buildingType').click(function(e){
    //     $('.buildingType').css("background-color", "#f5f5f5");
    //     $(this).css("background-color", "#ddd");
    // });
    
    // $('.iconButton').click(function(e){
    //     $('.iconButton').css("background-color", "#f5f5f5");
    //     $(this).css("background-color", "#ddd");
    // });

    // Handle action buttons "clear" and "undo"
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius) {
        this.beginPath();

        this.moveTo(x + radius, y);
        this.arcTo(x + width, y, x + width, y + height, radius);
        this.arcTo(x + width, y + height, x, y + height, radius);
        this.arcTo(x, y + height, x, y, radius);
        this.arcTo(x, y, x + width, y, radius);

        this.closePath();

        return this;
    }

    $(document.getElementById("clear")).click(function(e) {
        context.fillStyle = "#f4f5f4";

        context.roundRect(0, 0, canvas.width, canvas.height, 25);
        context.fill();

        undo_frames = [];
    });

    $(document.getElementById("undo")).click(function(e) {
        if(undo_frames.length - 1 <= 0) {
            document.getElementById("clear").click();
        } else {
            undo_frames.pop();
            context.putImageData(undo_frames[undo_frames.length - 1], 0, 0);
        }
    });


    // Change cursor icon based on button pressed
    $(document.getElementById("brush")).click(function(e) {
        draw_color = previous_color;
        isFilling = false;
        draw_width = "5";

        $('.iconButton').css("background-color", "#f5f5f5");
        $(this).css("background-color", "#ddd");
        $('.paintArea').css({cursor: 'url(assets/32_brush.png), auto'});
    });

    $(document.getElementById("fill")).click(function(e) {
        isFilling = true;
        draw_width = "5";

        $('.iconButton').css("background-color", "#f5f5f5");
        $(this).css("background-color", "#ddd");
        $('.paintArea').css({cursor: 'url(assets/32_fill.png), auto'});
    });
    
    $(document.getElementById("eraser")).click(function(e) {
        draw_color = "#f5f5f5";
        isFilling = false;
        draw_width = "10";

        $('.iconButton').css("background-color", "#f5f5f5");
        $(this).css("background-color", "#ddd");
        $('.paintArea').css({cursor: 'url(assets/32_eraser.png), auto'});
    });


    // Change brush color based on selected building type and highlight
    $(document.getElementById("road")).click(function(e) {
        draw_color = "grey";
        previous_color = "grey";

        $('.buildingType').css("background-color", "#f5f5f5");
        $(this).css("background-color", "lightgrey");
    });

    $(document.getElementById("house")).click(function(e) {
        draw_color = "green";
        previous_color = "green";

        $('.buildingType').css("background-color", "#f5f5f5");
        $(this).css("background-color", "lightgreen");
    });

    $(document.getElementById("store")).click(function(e) {
        draw_color = "blue";
        previous_color = "blue";
        
        $('.buildingType').css("background-color", "#f5f5f5");
        $(this).css("background-color", "lightblue");
    });

    $(document.getElementById("office")).click(function(e) {
        draw_color = "yellow";
        previous_color = "yellow";

        $('.buildingType').css("background-color", "#f5f5f5");
        $(this).css("background-color", "lightyellow");
    });


    // Canvas declaration
    const canvas = document.getElementById("canvas");

    canvas.width = $(".paintArea").width();
    canvas.height = $(".paintArea").height();

    let context = canvas.getContext("2d");

    let draw_color = "grey";
    let previous_color = "grey";
    let draw_width = "5";
    let isFilling = false;
    let isDrawing = false;
    let undo_frames = [];

    canvas.addEventListener("mousedown", start, false);
    canvas.addEventListener("mousemove", draw, false);

    canvas.addEventListener("mouseup", stop, false);
    canvas.addEventListener("mouseout", stop, false);

    function start(event) {
        isDrawing = true;
        context.beginPath();
        context.moveTo(event.clientX - 100, event.clientY - 100);

        event.preventDefault();
    }

    function draw(event) {
        if(isDrawing) {
            context.lineTo(event.clientX - 100, event.clientY - 100);

            context.strokeStyle = draw_color;
            context.lineWidth = draw_width;
            context.lineCap = "round";
            context.lineJoin = "round";

            context.stroke();
        }

        event.preventDefault();
    }

    function stop(event) {
        if(isDrawing) {
            context.stroke();
            context.closePath();

            isDrawing = false;
        }

        event.preventDefault();

        if(event.type != "mouseout") {
            undo_frames.push(context.getImageData(0, 0, canvas.width, canvas.height));
            undo_index += 1;
        }
    }
});
