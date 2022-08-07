// activates the slider
// works only on items with class "slider"
// r2p2
pop_r2p2_slider = () => {
    $(`#${matrix[nRoom][nPage].divName} .slider`).slider({
        min: 8,
        max: 17,
        value: 13,
        step: 0.2,
    });
}

// function called when clicking enter
r2p2_check_slider = () => {
    $(document).off("keypress");
    $(`#${matrix[nRoom][nPage].divName} .slider`).slider("disable");
    let hour = $(`#${matrix[nRoom][nPage].divName} .slider`).slider( "value");
    // if the user dragged the anchore between 09:00-12:00 or 13:00-15:00
    if (((9 < hour) && (hour < 12)) || ((13 < hour) && (hour < 15)) && b_timer) {
        V_X(true);
    } else {
        V_X(false);
    }
}

let mat_r2p4 = [];
const width_r2p4 = 6;
const length_r2p4 = 16;
let r2p4_falling_order = [
    { 
        data_num: 3,
        velocity: "500"
    },
    { 
        data_num: 2,
        velocity: "400"
    },
    { 
        data_num: 4,
        velocity: "300"
    },
    { 
        data_num: 1,
        velocity: "200"
    }
];
let r2p4_first_location = 18.5;
// specific locations of items in r2p4
r2p4_build_mat = () => {
    for (let j = 1; j < width_r2p4 - 1; j++) {
        mat_r2p4[length_r2p4 - 2][j] = `SQUARE_${j}`;
    }
    console.log(mat_r2p4);
}

r2p4_match_square = (falling_item) => {
    falling_item.addClass("heart-animation");
    switch_class(falling_item, "block", "none");
}

var counter_r2p8_items_order = 0;
var arr_r2p8_items_order = [1,3,2];
var arr_r2p8_items_locations = [
    {
        top: "14vw",
        left: "75vw"
    }, 
    {
        top: "15vw",
        left: "40vw"
    },     
    {
        top: "44vw",
        left: "30vw"
    } 
];
r2p8_dropped_correct = (drag, drop) => {
    // disable item dragging
    drag.draggable("option", "disabled", true);
    // changing item location
    $(`#${matrix[nRoom][nPage].divName} .drag.data-num-${eval(`arr_${matrix[nRoom][nPage].divName}_items_order`)[eval(`counter_${matrix[nRoom][nPage].divName}_items_order`)]}`).animate({top: eval(`arr_${matrix[nRoom][nPage].divName}_items_locations`)[eval(`arr_${matrix[nRoom][nPage].divName}_items_order`)[eval(`counter_${matrix[nRoom][nPage].divName}_items_order`)] - 1].top, left: eval(`arr_${matrix[nRoom][nPage].divName}_items_locations`)[eval(`arr_${matrix[nRoom][nPage].divName}_items_order`)[eval(`counter_${matrix[nRoom][nPage].divName}_items_order`)] - 1].left}, 200);
    window[`counter_${matrix[nRoom][nPage].divName}_items_order`]++;
    if (eval(`counter_${matrix[nRoom][nPage].divName}_items_order`) < eval(`arr_${matrix[nRoom][nPage].divName}_items_order`).length) {
        // new item appear
        switch_class($(`#${matrix[nRoom][nPage].divName} .drag.data-num-${eval(`arr_${matrix[nRoom][nPage].divName}_items_order`)[eval(`counter_${matrix[nRoom][nPage].divName}_items_order`)]}`), "none", "block");
    } else if (b_timer) {
        V_X(true);
    }
}

// the parameter is the clicked correct item
r2p11_clicked_correct = (item) => {
    $(`#${matrix[nRoom][nPage].divName} .item`).css("pointer-events", "none");
    // blink effect
    for (let i = 0; i < 14; i++) {
        setTimeout(() => {
            if (item.attr("src").includes("light_on")) {
                item.attr("src", "assets/media/exer7/exer07_light_off.svg");
            } else {
                item.attr("src", "assets/media/exer7/exer07_light_on.svg");
            };
          }, i * 200);
    }
    setTimeout(() => {
        if (b_timer) {
            V_X(true);
        }
    }, 1000);
}

var counter_r2p13_folder = 0;
var counter_r2p13_trash = 0;
var arr_r2p13_files_order = [
    {
        top: "15vw",
        left: "83vw",
        transform: "rotate(3deg)",
        used: false
    },
    {
        top: "17vw",
        left: "75vw",
        transform: "rotate(-0.5deg)",
        used: false
    },
    {
        top: "11vw",
        left: "56vw",
        transform: "rotate(3.5deg)",
        used: false
    },
    {
        top: "28vw",
        left: "77vw",
        transform: "rotate(8.5deg)",
        used: false
    },
    {
        top: "33vw",
        left: "63vw",
        transform: "rotate(2deg)",
        used: false
    },
    {
        top: "28vw",
        left: "50vw",
        transform: "rotate(-6deg)",
        used: false
    }
]

// exactly the same exercise
r2p13_dropped_correct = (drag, drop) => {
    r1p10_dropped_correct(drag, drop);
}


// var counter_r2p16_items_order = 0;
// var arr_r2p16_items_order = [1,4,5,6,2,3];
// // exactly the same exercise
// r2p16_clicked_correct = (item) => {
//     $(item).stop();
//     item.animate({opacity: `0`}, 200, function() {
//         switch_class(item, "block", "none");
//         counter_r2p16_items_order++;
//         drop_item($(`#r2p16 .data-num-${arr_r2p16_items_order[counter_r2p16_items_order]}`));
//         if (($(`#${matrix[nRoom][nPage].divName} .none`).length === 3)) {
//             $(`#${matrix[nRoom][nPage].divName} .item`).css("pointer-events", "none");
//             V_X(true);
//         }
//     });
// }

r2p17_clicked_correct = (item) => {
    if (b_timer) {
        V_X(true);
    }
}

// falling animation
drop_item = (item) => {
    switch_class(item, "none", "block");
    $(item).css("right", `${Math.floor(Math.random() * 60) + 20}vw`);
    $(item).animate({right: `+=${Math.floor(Math.random() * 50)}vw`, top: "105vw"}, 5000, function() {
        if($(item).hasClass("correct")) {
            V_X(false);
        } 
        // else {
        //     counter_r2p16_items_order++;
        //     drop_item($(`#r2p16 .data-num-${arr_r2p16_items_order[counter_r2p16_items_order]}`));
        // }
    });
}

restart_2 = () => {
    // r2p2
    $(`#r2p2 .slider`).slider( "value", 13);

    // r2p4
    switch_class($(`#r2p4 .item`), "block", "none");
    $(`#r2p4 .item`).css("top", "-3vw");
    r2p4_falling_order = [
        { 
            data_num: undefined,
            velocity: "500"
        },
        { 
            data_num: undefined,
            velocity: "400"
        },
        { 
            data_num: undefined,
            velocity: "300"
        },
        { 
            data_num: undefined,
            velocity: "200"
        }
    ];
    for (let i = 0; i < $(`#r2p4 .item`).length; i++) {
        let random = Math.floor(Math.random() * $(`#r2p4 .item`).length) + 1;
        for (let j = 0; j < i; j++) {
            while (r2p4_falling_order[j].data_num === random) {
                random = Math.floor(Math.random() * $(`#r2p4 .item`).length) + 1;
                j = 0;
            }
        }
        r2p4_falling_order[i].data_num = random;
    }
    //$("#r2p4 .item").removeClass("heart-animation");

    // r2p8
    restart_item("r2p8");
    // items return to original location
    $("#r2p8 .item").css({top: "32vw", left: "86vw"});

    // r2p13
    restart_trash_drag("r2p13");
    $("#r2p13 .data-num-3.drag-2").attr("src", `assets/media/exer3/exer3_bikurofe.svg`);

    // r2p16
    // switch_class($("#r2p16 .item"), "hidden", "visible");
    // $("#r2p16 .item").css("opacity", "1");
    // restart_item("r2p16");
}

