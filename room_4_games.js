r4p2_clicked_correct = (item) => {
    $(`#${matrix[nRoom][nPage].divName} .item`).css("pointer-events", "none");
    $("#switch").attr("src", "assets/media/exer15/exer15_switch_on.svg");
    $("#wind").animate({height: `28vh`}, 500, function() {
        if (b_timer) {
            V_X(true);
        }
    });
}

var counter_r4p5_items_order = 0;
var arr_r4p5_items_order = [4,2,1,6,8,3,7,5];
var arr_r4p5_items_locations = [
    {
        top: "17.3vw",
        left: "85.5vw"
    }, 
    {
        top: "6vw",
        left: "69vw"
    },     
    {
        top: "14vw",
        left: "69vw"
    },
    {
        top: "18vw",
        left: "30vw"
    },     
    {
        top: "6vw",
        left: "30vw"
    },
    {
        top: "6vw",
        left: "20.2vw"
    },     
    {
        top: "6vw",
        left: "10.6vw"
    },     
    {
        top: "6vw",
        left: "1vw"
    }  
];

r4p5_dropped_correct = (drag, drop) => {
    r2p8_dropped_correct(drag, drop);
}

let mat_r4p7 = [];
const width_r4p7 = 7;
const length_r4p7 = 15;
let r4p7_falling_order = [
    { 
        data_num: 1,
        velocity: "800"
    },
    { 
        data_num: 2,
        velocity: "1000"
    },
    { 
        data_num: 3,
        velocity: "1200"
    }
];
let r4p7_first_location = 1;
// specific locations of items in r4p7
// the shelves are aligned in doubles of five (first shelf is rows 0-4, second in 5-9, third 10-14)
r4p7_build_mat = () => {
    // colliding items
    // moxipen
    mat_r4p7[2][2] = "SAFETY_WALL";
    mat_r4p7[3][2] = "SAFETY_WALL";
    mat_r4p7[4][2] = "SAFETY_WALL";
    // ibufen
    mat_r4p7[4][4] = "SAFETY_WALL";
    // phenistil
    mat_r4p7[9][3] = "SAFETY_WALL";
    // leukoplast
    mat_r4p7[13][3] = "SAFETY_WALL";
    mat_r4p7[14][3] = "SAFETY_WALL";

    // empty
    mat_r4p7[14][1] = "SAFETY_WALL";
    mat_r4p7[14][2] = "SAFETY_WALL";

    // medicines places
    // gaza
    mat_r4p7[14][4] = `SQUARE_1`;
    mat_r4p7[14][5] = `SQUARE_1`;
}

r4p7_match_square = (falling_item) => {
    // the lower shelf is irelevant
    mat_r4p7.splice(mat_r4p7.length - 5, 5);
    console.log(mat_r4p7);
    // updating last current shelf
    switch (mat_r4p7.length) {
        case 10:
            mat_r4p7[9][1] = "SAFETY_WALL";
            mat_r4p7[9][2] = "SAFETY_WALL"; 
            // mopirosin
            mat_r4p7[9][4] = `SQUARE_2`;
            mat_r4p7[9][5] = `SQUARE_2`;

          break;
        case 5:
            mat_r4p7[4][1] = "SAFETY_WALL";
            mat_r4p7[4][5] = "SAFETY_WALL";
            // optalgin
            mat_r4p7[4][3] = `SQUARE_3`;   
          break;
    }
}

var arr_r4p11_files_order = [
    {
        top: "14vw",
        left: "81vw",
        transform: "rotate(2deg)",
        used: false
    },
    {
        top: "14vw",
        left: "52vw",
        transform: "rotate(-3deg)",
        used: false
    },
    {
        top: "12vw",
        left: "24vw",
        transform: "rotate(-13deg)",
        used: false
    },
    {
        top: "23vw",
        left: "35vw",
        transform: "rotate(1deg)",
        used: false
    },
    {
        top: "33vw",
        left: "18vw",
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
// the parameter is the clicked correct item
r4p11_clicked_correct = (item) => {
    item.animate({opacity: `0`}, 200, function() {
        switch_class(item, "visible", "hidden");
        if (($(`#${matrix[nRoom][nPage].divName} .hidden`).length === 1) && b_timer) {
            $(`#${matrix[nRoom][nPage].divName} .item`).css("pointer-events", "none");
            V_X(true);
        }
    });
}

r4p14_check_carousel = () => {
    $(document).off("keypress");
    //$("input").checkboxradio("disable");
    // if the user inserted all true
   if ($(`#r4p14 .carousel-item.correct.visible`).length === 4 && $("#r4p14 input.correct").prop("checked") && b_timer) {
        V_X(true);
   } else {
        V_X(false);
   }
}

r4p17_dropped_correct = (drag, drop) => {
    // disable item dragging
    drag.draggable("option", "disabled", true);
    drag.animate({top: "74.5vh", left: "50.7vmax"}, 200);
    drag.addClass("key-animation");
    if (b_timer) {
        V_X(true);
    }
}

// activates the slider
// works only on items with class "slider"
// r4p19
pop_r4p19_slider = () => {
    $(`#${matrix[nRoom][nPage].divName} .slider`).slider({
        orientation: "vertical",
        min: -4,
        max: 14,
        value: -4,
        step: 0.1,
        disabled: true
    });
}

let slider_value = -4;
let slider_action = "add"
let setTimeout_slider;
r4p19_slider_move = () => {
    if (slider_action === "add") {
        slider_value += 0.1;
        if (slider_value >= $(`#${matrix[nRoom][nPage].divName} .slider`).slider( "option", "max")) {
            slider_action = "substract";
        }
    } else if (slider_action === "substract") {
        slider_value -= 0.1;
        if (slider_value <= $(`#${matrix[nRoom][nPage].divName} .slider`).slider( "option", "min")) {
            slider_action = "add";
        }
    }
    $(`#${matrix[nRoom][nPage].divName} .slider`).slider("value", slider_value);
    setTimeout_slider = setTimeout(r4p19_slider_move, 0.5)
}

// function called when clicking enter
r4p19_check_slider = () => {
    $(document).off("keypress");
    clearTimeout(setTimeout_slider);
    // if the user dragged the anchore between 09:00-12:00 or 13:00-15:00
    if (((2 <= $(`#${matrix[nRoom][nPage].divName} .slider`).slider("value")) && ($(`#${matrix[nRoom][nPage].divName} .slider`).slider("value" <= 8))) && b_timer) {
        V_X(true);
    } else {
        V_X(false);
    }
}

restart_4 = () => {
    // r4p2
    $("#wind").css("height", "0vh");
    $("#switch").attr("src", "assets/media/exer15/exer15_switch_off.svg");

    // r4p5
    restart_item("r4p5");
    // items return to original location
    $("#r4p5 .item").css({top: "61vh", left: "46.1vw"});

    // r4p7
    // restore array
    matrix[4][6].functions.unshift(`pop_build_mat()`);
    switch_class($(`#r4p7 .item`), "block", "none");
    $(`#r4p7 .item`).css("top", "-3vw");
    r4p7_falling_order = [
        { 
            data_num: 1,
            velocity: "800"
        },
        { 
            data_num: 2,
            velocity: "1000"
        },
        { 
            data_num: 3,
            velocity: "1200"
        }
    ];

    // r4p11
    // show file
    switch_class($(`#r4p11 .correct`), "hidden", "visible");
    $(`#r4p11 .correct`).css("opacity", "1");

    // // r4p14
    // for (let i = 1; i <= $(`.carousel`).length; i++) {
    //    window[`r4p14_carousel_count_${i}`] = 0;
    // }
    // r4p17
    $("#key").css({top: "73.6vh", left: "93vmax", transform: "rotate3d(0, 0 ,1, 263deg)"});
    $("#key").removeClass("key-animation");
}

