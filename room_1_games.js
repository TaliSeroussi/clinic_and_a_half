// the parameter is the clicked correct item
r1p3_clicked_correct = (item) => {
    item.animate({opacity: `0`}, 200, function() {
        switch_class(item, "visible", "hidden");
        if (($(`#${matrix[nRoom][nPage].divName} .hidden`).length === 2) && b_timer) {
            $(`#${matrix[nRoom][nPage].divName} .item`).css("pointer-events", "none");
            V_X(true);
        }
    });
}

var counter_r1p7_items_order = 0;
var arr_r1p7_items_order = [1,8,7,6,2,4,5,3];
r1p7_dropped_correct = (drag, drop) => {
    var $this = drop;
    // disable item dragging
    drag.draggable("option", "disabled", true);
    // vertical position
    if (drop.hasClass("empty")) {
        drag.position({
            my: "top bottom",
            at: "top center",
            of: $this,
            using: function(pos) {
                $(this).animate(pos, 200, "linear");
            }
        });
        drop.removeClass("empty");
    } else {
        drag.position({
            my: "top top",
            at: "top center",
            of: $this,
            using: function(pos) {
                $(this).animate(pos, 200, "linear");
            }
        });
    }
    counter_r1p7_items_order++;
    if (counter_r1p7_items_order < arr_r1p7_items_order.length) {
        //new item appear
        switch_class($(`#${matrix[nRoom][nPage].divName} .drag.data-num-${arr_r1p7_items_order[counter_r1p7_items_order]}`), "none", "block");
    } else if (b_timer) {
        V_X(true);
    }
}

var counter_r1p10_folder = 0;
var counter_r1p10_trash = 0;
var arr_r1p10_files_order = [
    {
        top: "14vw",
        left: "81vw",
        transform: "rotate(2deg)",
        used: false
    },
    {
        top: "16vw",
        left: "70vw",
        transform: "rotate(-3deg)",
        used: false
    },
    {
        top: "12vw",
        left: "57vw",
        transform: "rotate(1deg)",
        used: false
    },
    {
        top: "31vw",
        left: "77vw",
        transform: "rotate(8deg)",
        used: false
    },
    {
        top: "33vw",
        left: "60vw",
        transform: "rotate(5deg)",
        used: false
    },
    {
        top: "27vw",
        left: "48vw",
        transform: "rotate(-6deg)",
        used: false
    }
]

r1p10_dropped_correct = (drag, drop) => {
    // disable item dragging
    drag.draggable("option", "disabled", true);
    // vertical position
    if (drop.hasClass("folder")) {
        window[`counter_${matrix[nRoom][nPage].divName}_folder`]++;
        drag.animate({width: `5vw`}, 100, function() {
            switch_class(drag, "block", "none");
        });
    } else if (drop.hasClass("trash")) {
        window[`counter_${matrix[nRoom][nPage].divName}_trash`]++;
        drag.attr("src", `assets/media/exer3/pieceofshit${eval(`counter_${matrix[nRoom][nPage].divName}_trash`)}.svg`);
        drag.css("width", "7vw");
    }
    // winning
    if (b_timer && (eval(`counter_${matrix[nRoom][nPage].divName}_folder`) === $(`#${matrix[nRoom][nPage].divName} .drag-1`).length) && ((eval(`counter_${matrix[nRoom][nPage].divName}_trash`) === $(`#${matrix[nRoom][nPage].divName} .drag-2`).length))) {
        V_X(true);
    } 
}


restart_1 = () => {
    // r1p3
    switch_class($("#r1p3 .item"), "hidden", "visible");
    $("#r1p3 .item").css("opacity", "1");

    // r1p7
    $("#r1p7 .board").addClass("empty");
    restart_item("r1p7");
    // items return to original location
    $("#r1p7 .item").css({top: "36vw", left: "42.5vw"});

    // r1p10
    restart_trash_drag("r1p10");
    $("#r1p10 .data-num-2.drag-2").attr("src", `assets/media/exer3/exer3_bikurofe.svg`);
    $("#r1p10 .data-num-6.drag-2").attr("src", `assets/media/exer3/exer3_kabala.svg`);
}
