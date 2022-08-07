// life
var nLife = 3;

// feedback arrays
let correct_num = 0;
let incorrect_num = 0;
var arr_correct_feedback = ["תותח!", "תותחן!", "אש!", "א' ניצחונות!", "מורעלים!", "פגז!", "סמל לשלמות", "אלופים!", "רב אלופים!", "קודקוד!", "לוחמים!"];
var arr_incorrect_feedback = ["איזה לוזר!", 'דו"ח!', "חדלו!", 'ש"צצצצצ', "מחבוש!", "יא צעירים", "שוקיסטים", "יא חפשנים", "יא שבוזים", 'מסמ"רי שיער', 'ריח של בקו"ם', "טירונים", "תת-עלובים"];

// timer
let b_timer = true;

// setting game page
type_game = () => {
    // hide controls
    switch_class($("#controls"), "flex" ,"none");
    switch_class($(`#lesson-map-${nRoom}`), "flex" ,"none");
  
    if (matrix[nRoom][nPage].timer !== undefined) {
        // display timer
        switch_class($("#timer"), "none", "block");
        b_timer = true;
        // reset timeline
        $("#time-timeline").css({"object-position": "40% 0", "animation-duration" : matrix[nRoom][nPage].timer});
    }
    $(`#${matrix[nRoom][nPage].divName} .instructions`).html(matrix[nRoom][nPage].instructions);
}

endingGame = (condition) => {
    let comment;
    let heart_img;
    let delay = 2000;
    // the user wins/loses
    if (condition) {
        comment = "correct";
        heart_img= "happy";
    } else {
        comment = "incorrect";
        heart_img= "sad";
    }

    hidePage();
    checkpoint(condition);
    // hide back and prev
    switch_class($("#controls .control-button"), "visible", "hidden");
    $(".topic").css("pointer-events", "none");
    // display end-game general page
    $(`#ending-game`).css("display", "block");
    switch_class($("#spinning-flex"), "none", "flex");

    // hearts
    switch_class($(`#hearts-flex`), "none", "flex");
    // heart images- switch from happy to sad and the opposite
    if ($(`#heart-1 .heart`).attr("src") !== `assets/media/heart/heart1_${heart_img}.svg`) {
        for (let i = 1; i <= nLife ; i++) {
            $(`#heart-${i} .heart`).attr("src", `assets/media/heart/heart${i}_${heart_img}.svg`);
        }
    }

    if (!condition) {
        // animation of popping heart
        setTimeout(() => {
            $(`#heart-${nLife} .heart`).addClass("heart-animation");
        }, delay);
        setTimeout(cloud_effect, delay + 400);
        setTimeout(() => {
            $(`#heart-${nLife} .heart`).removeClass("heart-animation");
            switch_class($(`#heart-${nLife}`), "visible", "hidden");
            nLife--;
        }, delay+ 500);
    }

    // changing text in ending page
    if (eval(`matrix[nRoom][nPage].feedback.${comment}`) === "array") {
        // from the array of generic comments
        $(`#ending-game .ending-game-title`).text(eval(`arr_${comment}_feedback[${comment}_num]`));
    } else {
        // specific comments
        $(`#ending-game .ending-game-title`).text(eval(`matrix[nRoom][nPage].feedback.${comment}`));
    }
    // adding to the appropriate counter
    eval(`${comment}_num++`);

    // moving one step in lesson map
    switch_class($("#controls"),"none", "flex" );
    switch_class($(`#lesson-map-${nRoom}`), "none", "flex");  
    move_lessonMap(topic_distance);
    // removing game from the array
    matrix[nRoom].splice(nPage , 1);
    // shows next page
    setTimeout(() => {
        // hide end-game general page
        $(`#ending-game`).css("display", "none");
        switch_class($("#spinning-flex"), "flex", "none");
        // hide hearts
        switch_class($(`#hearts-flex`), "flex", "none");
        // show back and prev
        if (matrix[nRoom][nPage].type === "content") {
            switch_class($("#controls .control-button"),"hidden" ,"visible");
        }
        $(".topic").css("pointer-events", "auto");
        // end of game
        if (nLife === 0) {
            // this is the first life test for this room
            if (mat_questions_bank[nRoom - 1].length !== 6) {
                finish_story("life");
            }
            // user can't do 2 test life
            // user failed the room
            else {
                finish_story("finish");
            }
        } else {
            movePage();
        }
    }, delay + 2000);
}

// fog cloud hearts effect
cloud_effect = () => {
    switch_class($(`#heart-${nLife} .cloud`), "none", "block");
    setTimeout(() => {
      switch_class($(`#heart-${nLife} .cloud`), "block", "none");
    }, 50);
}

// reveals "story-finish" div
finish_story = (type) => {
    // display finish-story general page
    $(`#finish-story`).css("display", "block");
    switch_class($("#spinning-flex"), "none", "flex");
    switch_class($("#controls .control-button"),"visible","hidden");

    $(".topic").css("pointer-events", "none");  
    switch (type) {
        case 'life':
            switch_class($("#finish-story .button-flex"), "none", "flex");
            switch_class($("#controls"),"none", "flex");
            switch_class($(`#lesson-map-${nRoom}`), "none", "flex");
          break;
        // ending game completely and refreshing room
        case 'finish':
            switch_class($("#finish-story .button-flex"), "flex", "none");
            switch_class($("#controls"), "flex" ,"none");
            // see the finish-story screen for 2.5 secondes
            setTimeout(() => {
                // hide finish-story general page
                $(`#finish-story`).css("display", "none");
                switch_class($("#spinning-flex"), "flex", "none");
                switch_class($("#controls .control-button"), "hidden", "visible");
                switch_class($(`#lesson-map-${nRoom}`), "flex", "none");
                $(".topic").css("pointer-events", "auto");
                restart();
            }, 2500);
          break;
    }
}

pop_restart_button = () => {
    $("#restart-button").on("click", function() {
        // hide finish-story general page
        $(`#finish-story`).css("display", "none");
        switch_class($("#spinning-flex"), "flex", "none");
        switch_class($("#controls .control-button"), "hidden", "visible");
        restart();
    });
}

pop_quiz_button = () => {
    $("#quiz-button").on("click", function() {
        matrix[nRoom].splice(nPage, 0, 
            {
            // question 1
            divName: ["q1"],
            functions: [`first_question()`, `switch_class($("#next-button"), "hidden", "visible")`, `switch_class($("#back-button"), "visible", "hidden")`],
            type: "quiz",
            questionType: "life"
            },                        
            {
            // question 2
            divName: ["q2"],
            functions: [`switch_class($("#back-button"), "hidden", "visible")`],
            type: "quiz",
            questionType: "life"
            },
            {
            // quest
            divName: ["q3"],
            functions: [`switch_class($("#next-button"), "visible", "hidden")`],
            type: "quiz",
            questionType: "life"
            }
        );
        $(`#finish-story`).css("display", "none");
        switch_class($("#spinning-flex"), "flex", "none");
        switch_class($("#controls .control-button"), "hidden", "visible");
        switch_class($("#controls"), "flex" ,"none");
        switch_class($(`#lesson-map-${nRoom}`), "flex", "none");
        $(".topic").css("pointer-events", "auto");  
        movePage();
    });
}

// called when the user loses the game
V_X = (condition) => {
    // hide timer
    switch_class($("#timer"), "block", "none");
    let v_x;
    let comment;
    let ahami;
    // if the user has won
    if (condition) {
        v_x = $("#v");
        comment = "correct";
        ahami = "happy";
    }
    // if the user lost
    else {
        v_x = $("#x");
        comment = "incorrect";
        ahami = "sad";
    }
    switch_class(v_x, "none", "block");
    $(`#${matrix[nRoom][nPage].divName} .instructions`).text(eval(`matrix[nRoom][nPage].instructions_feedback.${comment}`));
    $(`#${matrix[nRoom][nPage].divName} .ahami-head`).attr("src", `assets/media/2content/head_${ahami}.svg`);

    setTimeout(() => {
        switch_class(v_x, "block", "none");
        $(".item").css("pointer-events", "auto");
        endingGame(condition);
    }, 2000);
} 

// time out- the game is over
pop_timeEnds = () => {
    // event listener for ending timer animation
    document.querySelector("#time-timeline").addEventListener("animationend", () => {
        V_X(false);
        b_timer = false;
    });
}

// adding hover and down state to objects
// in order the function will work the items need to have the class "state"
pop_hover_down = () => {
    let src;
    $(`#${matrix[nRoom][nPage].divName} .state`).on({
        // hover state
        mouseenter: function () {
            src = $(this).attr("src");
            src= src.slice(0, -4);

            $(this).attr("src", `${src}_hover.svg`);
        },
        mouseleave: function () {
            $(this).attr("src", `${src}.svg`);
        },
        // down state
        mousedown: function () {
            $(this).attr("src", `${src}_down.svg`);
        }
    });
}

// general games

// called to add to each item event listener to click_identify
// in order the function will work the items need to have the class "item"
// r1p3 r2p11 r2p16 r3p2 r3p4
pop_click = () => {
    // add event listener for each item
    $(`#${matrix[nRoom][nPage].divName} .item`).on("click", (event) => {
        click_identify($(event.target));
    }); 
}

// game of clicking on items (clicking on wrong item is disqulification)
// the parameter is the clicked item
// r1p3 r2p11 r2p16 r3p2 r3p4
click_identify = (item) => {
    // if the user clicked correct item
    if ((item).hasClass("correct")) {
        window[matrix[nRoom][nPage].divName + "_clicked_correct"](item);
    }
    // if the user clicked incorrect item, the game is over
    else {
        V_X(false);
        $(`#${matrix[nRoom][nPage].divName} .item`).css("pointer-events", "none");
    }
}


// called to add to drop and drag
// in order the function will work the items need to have the class "drag" and "drop"
//r1p7 r1p10 r2p8
pop_drag_drop = () => {
    $(`#${matrix[nRoom][nPage].divName} .drag`).draggable({
        revert:"invalid",
        revertDuration: 200,
        containment: "window",
        drag: function(event, ui) {
            if (matrix[nRoom][nPage].divName.includes("r4p17")) {
                $("#key").css("transform", "rotate3d(0, 1 ,0, 0deg)");
            }
        }
    }).css("position", "absolute");

    for (let i = 1; i <= $(`#${matrix[nRoom][nPage].divName} .drop`).length; i++) {
        $(`#${matrix[nRoom][nPage].divName} .drop-${i}`).droppable({
            tolerance: "intersect",
            drop: function(event, ui) {
                //dropped correct
                if (ui.draggable.hasClass(`drag-${i}`)) {
                    window[matrix[nRoom][nPage].divName + "_dropped_correct"](ui.draggable, $(this));
                }
                //dropped incorrect
                else {
                    V_X(false);
                }
            }
        });
    }
}

// r1p7 r2p8 r2p16
restart_item = (page) => {
    window[`counter_${page}_items_order`] = 0;
    window[`arr_${page}_items_order`] = [];
        // new items order
        for (let i = 0; i < $(`#${page} .item`).length ; i++) {
            let random = Math.floor(Math.random() * $(`#${page} .item`).length) + 1;
            while (window[`arr_${page}_items_order`].includes(random)) {
                random = Math.floor(Math.random() * $(`#${page} .item`).length) + 1;
            }
            window[`arr_${page}_items_order`][i] = random;
        }
        // items dissappear accept from the first
        for (let i = 1; i <= $(`#${page} .item`).length ; i++) {
            // hide all except from the first item
            if (i !== window[`arr_${page}_items_order`][0]) {
                switch_class($(`#${page} .item.data-num-${i}`), "block", "none");
            } else {
                switch_class($(`#${page} .item.data-num-${i}`), "none", "block");
            }
        }
}

// r1p10 r2p13 r4p11
restart_trash_drag = (page) => {
    // not including r4p11 because it is not drag
    if ($(`#${page} .item`).hasClass("drag")) {
        window[`counter_${page}_folder`] = 0;
        window[`counter_${page}_trash`] = 0;
        $(`#${page} .drag`).css({width: "10.5vw"});
        switch_class($(`#${page} .drag-1`), "none", "block");
    }

    // new files order
    for (let i = 0; i < eval(`arr_${page}_files_order`).length ; i++) {
        eval(`arr_${page}_files_order`)[i].used = false;
    }
    for (let i = 0; i < eval(`arr_${page}_files_order`).length ; i++) {
        let random = Math.floor(Math.random() * eval(`arr_${page}_files_order`).length);
        while (eval(`arr_${page}_files_order`)[random].used) {
            random = Math.floor(Math.random() * eval(`arr_${page}_files_order`).length);
        }
        $(`#${page} .file.data-num-${i + 1}`).css({top: eval(`arr_${page}_files_order`)[random].top, left: eval(`arr_${page}_files_order`)[random].left, transform: eval(`arr_${page}_files_order`)[random].transform});
        eval(`arr_${page}_files_order`)[random].used = true;
    }
}

// check = what u want to check' for example slider
enter = (check) => {
    $(document).keypress(function(e){
        // if the user clicked enter
        if (e.which === 13) {
            // calling slider function for specific page
            eval(matrix[nRoom][nPage].divName + "_check_" + check + "()");
        }
    });
}

// builds a matrix contains information about game objects' location and movement
// r2p4 r4p7
pop_build_mat = () => {
    let width = eval(`width_${matrix[nRoom][nPage].divName}`);
    let length= eval(`length_${matrix[nRoom][nPage].divName}`);
    let mat = eval(`mat_${matrix[nRoom][nPage].divName}`);
    // create empty arrays
    for (let i = 0; i <= length - 1; i++) {
        mat[i] = [];
    }
    // fill the arrays
    for (let i = 0; i < length - 1; i++) {
        // left wall
        mat[i][0] = "SAFETY_WALL";
        for (let j = 1; j < width - 1; j++) {
            // middle
            mat[i][j] = "EMPTY";
        }
        // right wall
        mat[i][width - 1] = "SAFETY_WALL";
    }
    // fill the floor with safety wall
    for (let i = 0; i <= width - 1; i++) {
        mat[length - 1][i] = "SAFETY_WALL"
    }
    eval(`${matrix[nRoom][nPage].divName}_build_mat()`);
}

let x_position = 3;
let y_position = 0;
let falling_item;

// generic function for games with falling items controled by keyboard's arrows
falling_items = (distance) => {
    //let data_num = eval(`${matrix[nRoom][nPage].divName}_falling_order`)[0].data_num;
    //falling_item = $(`#${matrix[nRoom][nPage].divName} .item.data-num-${eval(`${matrix[nRoom][nPage].divName}_falling_order`)[0].data_num}`);
    setTimeout(show_keyboard, 1000, keyboard_blinks);
    setTimeout(function() {
        falling_items_keyboard(distance);
        falling_items_down(distance);
    } ,3000);
    
}

// moving down
falling_items_down = (distance) => {
    let falling_item = $(`#${matrix[nRoom][nPage].divName} .item.data-num-${eval(`${matrix[nRoom][nPage].divName}_falling_order`)[0].data_num}`);
    falling_item.css("left", `${eval(`${matrix[nRoom][nPage].divName}_first_location`) + (x_position - 1) * (distance)}vw`);
    switch_class(falling_item, "none", "block");
    // the item is not collapsing the floor
    if (eval(`mat_${matrix[nRoom][nPage].divName}`)[y_position + 1][x_position] !== "SAFETY_WALL") {
        // if the item collapsing a square
        if (eval(`mat_${matrix[nRoom][nPage].divName}`)[y_position + 1][x_position].includes(`SQUARE`)) {
            // if the square matches the item
            if (eval(`mat_${matrix[nRoom][nPage].divName}`)[y_position + 1][x_position] === `SQUARE_${eval(`${matrix[nRoom][nPage].divName}_falling_order`)[0].data_num}`) {
                eval(`mat_${matrix[nRoom][nPage].divName}`)[y_position][x_position] = "EMPTY";
                falling_item.animate({top: `+=3vw`}, eval(`${matrix[nRoom][nPage].divName}_falling_order`)[0].velocity);
                eval(`${matrix[nRoom][nPage].divName}_match_square(falling_item)`);
                // remove item from the array
                eval(`${matrix[nRoom][nPage].divName}_falling_order`).shift();
                // finish game
                if (eval(`${matrix[nRoom][nPage].divName}_falling_order`).length === 0) {
                    V_X(true);
                    $(document).off("keydown");
                    x_position = 3;
                    y_position = 0;
                } 
                // reveal another item
                else {
                    // random number between 1-4
                    if (matrix[nRoom][nPage].divName.includes("r2p4")) {
                        x_position = Math.floor(Math.random() * (eval(`width_${matrix[nRoom][nPage].divName}`)-2)) + 1;
                    } else if (matrix[nRoom][nPage].divName.includes("r4p7")) {
                        x_position = 3; 
                    }  
                    y_position = 0;
                    setTimeout(falling_items_down, `${matrix[nRoom][nPage].divName}_falling_order`[0].velocity, distance);
                }
            } 
            // wrong square
            else {
                eval(`mat_${matrix[nRoom][nPage].divName}`)[y_position][x_position] = "EMPTY";
                V_X(false);
                x_position = 3;
                y_position = 0;
            }
        }
        // move the item down
        else {
            eval(`mat_${matrix[nRoom][nPage].divName}`)[y_position][x_position] = "EMPTY";
            y_position += 1;
            eval(`mat_${matrix[nRoom][nPage].divName}`)[y_position][x_position] = `ITEM-${eval(`${matrix[nRoom][nPage].divName}_falling_order`)[0].data_num}`;
            falling_item.animate({top: `+=3vw`}, 100);
            setTimeout(falling_items_down, eval(`${matrix[nRoom][nPage].divName}_falling_order`)[0].velocity, distance);
        }
    }
    // the item collapsed the floor
    else {
        V_X(false);
        x_position = 3;
        y_position = 0;
    }
}

// distance = (num)vw
// moving left/right
falling_items_keyboard = (distance) => {
    $(document).keydown(function(e) {
        if ((e.which === 37 || e.which === 39) && (eval(`mat_${matrix[nRoom][nPage].divName}`)[y_position][x_position + e.which - 38] !== "SAFETY_WALL")){
            eval(`mat_${matrix[nRoom][nPage].divName}`)[y_position][x_position] = "EMPTY";
            x_position += e.which - 38;
            $(`#${matrix[nRoom][nPage].divName} .item.data-num-${eval(`${matrix[nRoom][nPage].divName}_falling_order`)[0].data_num}`).animate({left: `+=${(distance) * (e.which - 38)}vw`}, 100);
            eval(`mat_${matrix[nRoom][nPage].divName}`)[y_position][x_position] = `ITEM-${eval(`${matrix[nRoom][nPage].divName}_falling_order`)[0].data_num}`;
        }
    });
}

// shows blinking keyboard to help the user understand the instructions
const keyboard_blinks = 4;
show_keyboard = (keyboard_blink) => {
    if (keyboard_blink === 0) {
        switch_class($("#keyboard"), "block", "none");
    } else {
        if (keyboard_blink === keyboard_blinks) {
            switch_class($("#keyboard"), "none", "block");
        } else if (keyboard_blink % 2 === 0) {
            $("#keyboard").attr("src", "assets/media/exer5/keyboard_normal.svg");
        } else if (keyboard_blink % 2 !== 0) {
            $("#keyboard").attr("src", "assets/media/exer5/keyboard_blink.svg");
        }
        setTimeout(show_keyboard, 400, keyboard_blink - 1);
    }
}

// // item must have class carousel-item
// // arrows must have class arrow-left and arrow-right
// let carousel_count;
// let carousel_current_item;
// carousel = (event) => {
//     let arr_carousel_items = $(`#${matrix[nRoom][nPage].divName} .carousel-item`);
//     if(!event){ // first time in the function
//         carousel_count = 0;
//         $(`.arrows`).on("click", carousel);
//     } else { // come from arrows 
//         // check which arrow and adjust count
//         if($(event.target).hasClass("arrow-right")) {
//             carousel_count--;
//             if (Number(carousel_count) === -1) {
//                 carousel_count = arr_carousel_items.length - 1;
//             }
//         } else if($(event.target).hasClass("arrow-left")) {
//             carousel_count++;
//             if (Number(carousel_count) === arr_carousel_items.length) {
//                 carousel_count = 0;
//             }
//         }
//     }
//     switch_class($(carousel_current_item), "visible", "hidden"); // hide privious element
//     carousel_current_item = arr_carousel_items[carousel_count]; // save current element
//     switch_class($(carousel_current_item), "hidden", "visible"); // show current element
// }

// item must have class carousel-item
// arrows must have class arrow-left and arrow-right
let carousel_num;
let carousel_count;
pop_carousel = (event) => {
    if(!event){ // first time in the function
        for (let i = 1; i <= $(`.carousel`).length; i++) {
           window[`${matrix[nRoom][nPage].divName}_carousel_count_${i}`] = 0;
        }
    } else { // come from arrows 
        // check which arrow and adjust count
        // carousel number (there are 4)
        carousel_num = $(event.target).parent().prop('id').slice(-1);
        // easy to read
        carousel_count = window[`${matrix[nRoom][nPage].divName}_carousel_count_${carousel_num}`];
        // hide prev item
        switch_class($($(`#${matrix[nRoom][nPage].divName} #carousel-${carousel_num} .carousel-item`)[carousel_count]), "visible", "hidden");
        if($(event.target).hasClass("arrow-right")) {
            carousel_count--;
            if (carousel_count === -1) {
                carousel_count = $(`#${matrix[nRoom][nPage].divName} #carousel-${carousel_num} .carousel-item`).length - 1;
            }
        } else if($(event.target).hasClass("arrow-left")) {
            carousel_count++;
            if (carousel_count === $(`#${matrix[nRoom][nPage].divName} #carousel-${carousel_num} .carousel-item`).length) {
                carousel_count = 0;
            }
        }
        switch_class($($(`#${matrix[nRoom][nPage].divName} #carousel-${carousel_num} .carousel-item`)[carousel_count]), "hidden", "visible");
        // update
        window[`${matrix[nRoom][nPage].divName}_carousel_count_${carousel_num}`] = carousel_count;
    }
}
