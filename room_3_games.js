let exer_12_click_count = 0;
let exer_13_input;


const EXER_12_WIN_COUNT = 5;
const EXER_13_CORRECT_NAME = "עוז צהבי";
// the parameter is the clicked correct item
r3p2_clicked_correct = (item) => {
    // send for win
    if (b_timer) {
        V_X(true);
    }
}

// the parameter is the clicked correct item
r3p4_clicked_correct = (item) => {
    // save clicked item
    let clicked_item = item[0].classList[0];
    // make sure its the first time its clicked
    if($(`#r3p4 .items .${clicked_item}`)[0].classList[3] === "transparent") {
        // make item opic and add to count
        switch_class($(`#r3p4 .items .${clicked_item}`), "transparent", "opic");
        exer_12_click_count++;
        // if chair change background
        if(clicked_item === "chair") {
            $(`#r3p4`).css("background-image", `url("assets/media/exer12/exer12_bg_chair.svg")`);  
        }
    }
    // check for win
    if(exer_12_click_count === EXER_12_WIN_COUNT && b_timer) {
        V_X(true);
    }
}

// the parameter is the clicked correct item
pop_r3p9_input = () => {
    $(`#r3p9 .doctor-name`).on("input", () => {
        exer_13_input = $(`.doctor-name`).val();
        if(exer_13_input === EXER_13_CORRECT_NAME && b_timer) {
            V_X(true);
        }
    })
}

// the parameter is the clicked correct item
r3p12_dropped_correct = (item) => {
    // send for win
    if (b_timer) {
        V_X(true);
    }
}

// adding hover and down state to objects
// in order the function will work the items need to have the class "state"
pop_down = () => {
    let src;
    $(`#${matrix[nRoom][nPage].divName} .down`).on({
        // down state
        mousedown: function () {
            // only add one down
            if (!$(this).attr("src").includes(`_down`)) {
                src = $(this).attr("src");
                src= src.slice(0, -4);
                $(this).attr("src", `${src}_down.svg`);
            }
        },
        mouseleave: function () {
            // make sure the src is saved
            if ($(this).attr("src").includes(`_down`)) {
                $(this).attr("src", `${src}.svg`);
            }
        },
    });
}

restart_3 = () => {
    // r3p4
    let clicked_item = $(`#r3p4 .items .item`);
    for(let i = 0; i < clicked_item.length; i++) {
        if(clicked_item[i].classList[3] === "opic") {
            // make item transparent and add to count
            switch_class($(clicked_item[i]), "opic", "transparent");
            // if chair change background
            if(clicked_item[i].classList[0] === "chair") {
                $(`#r3p4`).css("background-image", `url("assets/media/exer12/exer12_bg_empty.svg")`);  
            }
        }
    }
    exer_12_click_count = 0;

    // r3p9
    $(`#r3p9 .doctor-name`).val("");
    
    // r3p12
    let arr_forms = $(`#r3p12 .form`);
    for(let i = 0; i < arr_forms.length; i++) {
        $(arr_forms[i]).css("top", "60vh");
        $(arr_forms[i]).css("left", "73.5vw");
    }
    for (let i = 1; i <= $(`.carousel`).length; i++) {
        window[`r3p12_carousel_count_${i}`] = 0;
    }
}