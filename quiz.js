// bank of questions
var arr_questions_bank_1 = [
    {
        question: "מה חייב להימצא בחדר המתנה?",
        correct_answer: `ספסלים, פחים, לוח מודעות, שילוט המורה על "איסור עישון" ואמצעי הגנה מפגעי מזג האוויר.`,
        wrong_answer: [`מזגן, פחים, טלוויזיה, שילוט המורה על "איסור עישון" ואמצעי הגנה מפגעי מזג האוויר.` ,`מזגן, ספסלים, פחים, טלוויזיה בה מוצגים נהלי הרפואה ביחידה ואמצעי הגנה מפגעי מזג האוויר.` ,`ספסלים, פחים, טלוויזיה, שילוט המורה על "איסור עישון" ואמצעי הגנה מפגעי מזג האוויר.`]
    },
    {
        question: "מה <span class=`bold gray`>לא</span> נדרש בחדר המתנה?",
        correct_answer: `מקור מים לרווית המטופלים`,
        wrong_answer: [`שיהיה נקי ומסודר`,`שילוט האוסר על עישון`,`לוחות מודעות`]
    },
    {
        question: "אילו שלטים צריך לתלות מחוץ למבנה המרפאה?",
        correct_answer: `כל התשובות נכונות`,
        wrong_answer: [`שעות פעילות המרפאה`,`נוהל קבלת חולים למרפאה`,`דרכי השגת הצוות הרפואי מחוץ לשעות הפעילות ובעת חירום`]
    },
    {
        question: "מה אינו חלק מתכולת לוחות המודעות בחדר ההמתנה?",
        correct_answer: `הוראות קרפ"ר`,
        wrong_answer: [`רפואת מומחים`,`רפואת נשים`,`הנחיות רפואה כלליות`]
    },
    {
        question: "איזה נושא <span class=`bold gray`>לא</span> נכלל בלוח הנחיות רפואת נשים?",
        correct_answer: `נוהל קבלת אמצעי מניעה`,
        wrong_answer: [`נוהל בדיקת חיילת`,`רשימת רופאות נשים`,`נוהל פניה למהו"ת`]
    }, 
    {
        question: "איזה נושא <span class=`bold gray`>לא</span> נכלל בלוח הנחיות רפואה כלליות?",
        correct_answer: `נוהל בדיקת חייל מעודכן`,
        wrong_answer: [`נוהל פנייה לוועדה רפואית`,`נוהל פנייה של משרתי קבע לרפואת מומחים`,`דרכי תקשורת עם מרכז מידע וזימון תורים`]
    },
    {
        question: "איזה נוהל <span class=`bold gray`>לא</span> שייך ללוח רפואת מומחים?",
        correct_answer: `שעות פעילות המרפאה`,
        wrong_answer: [`נוהל הפניית חייל בחובה לרפואת מומחים`,`נוהל הפניית חייל בחובה/בקבע לקב"ן`,`רשימת מרפאות מומחים ודרכי השגתם`]
    },
    {
        question: "מה אפשר לתלות בלוח רפואה מונעת ובריאות הצבא?",
        correct_answer: `מידע על תזונה נכונה בשגרה`,
        wrong_answer: [`נוהל ביקורת תברואה יומית`,`רשימת מרפאות מומחים צבאיות ואזרחיות`,`הוראות קרפ"ר רלוונטיות`]
    },
    {
        question: "כיצד לוחות המידע הרפואי יכולים להיות מונגשים למטופלים?",
        correct_answer: `תלויים במרפאה או מוקרנים על מסך רץ בטלוויזיה`,
        wrong_answer: [`תלויים ברחבי המרפאה או מודפסים בעלונים שנמצאים בחדר קבלה`,`תלויים על גבי דלתות חדרי הרופאים`,`תלויים במרפאה בלבד`]
    }          
];
var arr_questions_bank_2 = [{
    question: "מה חייב להימצא בחדר המתנה?",
    correct_answer: `ספסלים, פחים, לוח מודעות, שילוט המורה על "איסור עישון" ואמצעי הגנה מפגעי מזג האוויר.`,
    wrong_answer: [`מזגן, פחים, טלוויזיה, שילוט המורה על "איסור עישון" ואמצעי הגנה מפגעי מזג האוויר.` ,`מזגן, ספסלים, פחים, טלוויזיה בה מוצגים נהלי הרפואה ביחידה ואמצעי הגנה מפגעי מזג האוויר.` ,`ספסלים, פחים, טלוויזיה, שילוט המורה על "איסור עישון" ואמצעי הגנה מפגעי מזג האוויר.`]
},
{
    question: "מי הכי חנפנית במדור?",
    correct_answer: `מרי`,
    wrong_answer: [`יובל`,`ניצן`,`עינב`]
},
{
    question: "אני אמרתי את זה?",
    correct_answer: `כי היום אני לא מרגישה שאני עשה כלום`,
    wrong_answer: [`כלום בכלל`,`אני נשבע שאני לא עושה כלום`,`אני רוצה רק לשכב במיטה`]
},
{
    question: "מי הכי פז''מ עולם",
    correct_answer: `אליסה וגרגמל`,
    wrong_answer: [`אופק`,`דורין`,`טלי`]
},
{
    question: "מי אכל גלידה",
    correct_answer: `טלי`,
    wrong_answer: [`דורית`,`שחף`,`מרב`]
}, 
{
    question: "חללהכג",
    correct_answer: `עכעכע`,
    wrong_answer: [`דורית`,`עככגדגכדגכד`,`מרב`]
},
{
    question: "שלומי",
    correct_answer: `אוגר`,
    wrong_answer: [`לוויתן`,`חתולים`,`דולפין`]
},
{
    question: "קטן",
    correct_answer: `חמוד`,
    wrong_answer: [`מרב`,`גדול`,`שמנמן`]
},
{
    question: "מי הכי טוב?",
    correct_answer: `נועה קילה`,
    wrong_answer: [`ניצן סלומון`,`בריטני ספירס`,`מרגי`]
}];
var arr_questions_bank_3 = [{
    question: "מה חייב להימצא בחדר המתנה?",
    correct_answer: `ספסלים, פחים, לוח מודעות, שילוט המורה על "איסור עישון" ואמצעי הגנה מפגעי מזג האוויר.`,
    wrong_answer: [`מזגן, פחים, טלוויזיה, שילוט המורה על "איסור עישון" ואמצעי הגנה מפגעי מזג האוויר.` ,`מזגן, ספסלים, פחים, טלוויזיה בה מוצגים נהלי הרפואה ביחידה ואמצעי הגנה מפגעי מזג האוויר.` ,`ספסלים, פחים, טלוויזיה, שילוט המורה על "איסור עישון" ואמצעי הגנה מפגעי מזג האוויר.`]
},
{
    question: "מי הכי חנפנית במדור?",
    correct_answer: `מרי`,
    wrong_answer: [`יובל`,`ניצן`,`עינב`]
},
{
    question: "אני אמרתי את זה?",
    correct_answer: `כי היום אני לא מרגישה שאני עשה כלום`,
    wrong_answer: [`כלום בכלל`,`אני נשבע שאני לא עושה כלום`,`אני רוצה רק לשכב במיטה`]
},
{
    question: "מי הכי פז''מ עולם",
    correct_answer: `אליסה וגרגמל`,
    wrong_answer: [`אופק`,`דורין`,`טלי`]
},
{
    question: "מי אכל גלידה",
    correct_answer: `טלי`,
    wrong_answer: [`דורית`,`שחף`,`מרב`]
}, 
{
    question: "חללהכג",
    correct_answer: `עכעכע`,
    wrong_answer: [`דורית`,`עככגדגכדגכד`,`מרב`]
},
{
    question: "שלומי",
    correct_answer: `אוגר`,
    wrong_answer: [`לוויתן`,`חתולים`,`דולפין`]
},
{
    question: "קטן",
    correct_answer: `חמוד`,
    wrong_answer: [`מרב`,`גדול`,`שמנמן`]
},
{
    question: "מי הכי טוב?",
    correct_answer: `נועה קילה`,
    wrong_answer: [`ניצן סלומון`,`בריטני ספירס`,`מרגי`]
}];
var arr_questions_bank_4 = [{
    question: "מה חייב להימצא בחדר המתנה?",
    correct_answer: `ספסלים, פחים, לוח מודעות, שילוט המורה על "איסור עישון" ואמצעי הגנה מפגעי מזג האוויר.`,
    wrong_answer: [`מזגן, פחים, טלוויזיה, שילוט המורה על "איסור עישון" ואמצעי הגנה מפגעי מזג האוויר.` ,`מזגן, ספסלים, פחים, טלוויזיה בה מוצגים נהלי הרפואה ביחידה ואמצעי הגנה מפגעי מזג האוויר.` ,`ספסלים, פחים, טלוויזיה, שילוט המורה על "איסור עישון" ואמצעי הגנה מפגעי מזג האוויר.`]
},
{
    question: "מי הכי חנפנית במדור?",
    correct_answer: `מרי`,
    wrong_answer: [`יובל`,`ניצן`,`עינב`]
},
{
    question: "אני אמרתי את זה?",
    correct_answer: `כי היום אני לא מרגישה שאני עשה כלום`,
    wrong_answer: [`כלום בכלל`,`אני נשבע שאני לא עושה כלום`,`אני רוצה רק לשכב במיטה`]
},
{
    question: "מי הכי פז''מ עולם",
    correct_answer: `אליסה וגרגמל`,
    wrong_answer: [`אופק`,`דורין`,`טלי`]
},
{
    question: "מי אכל גלידה",
    correct_answer: `טלי`,
    wrong_answer: [`דורית`,`שחף`,`מרב`]
}, 
{
    question: "חללהכג",
    correct_answer: `עכעכע`,
    wrong_answer: [`דורית`,`עככגדגכדגכד`,`מרב`]
},
{
    question: "שלומי",
    correct_answer: `אוגר`,
    wrong_answer: [`לוויתן`,`חתולים`,`דולפין`]
},
{
    question: "קטן",
    correct_answer: `חמוד`,
    wrong_answer: [`מרב`,`גדול`,`שמנמן`]
},
{
    question: "מי הכי טוב?",
    correct_answer: `נועה קילה`,
    wrong_answer: [`ניצן סלומון`,`בריטני ספירס`,`מרגי`]
}];
var mat_questions_bank = [copy(arr_questions_bank_1), copy(arr_questions_bank_2), copy(arr_questions_bank_3), copy(arr_questions_bank_4)];

var question_bank;
let question_counter = 1;
const finish_question_num = 6;
const life_question_num = 3;
const ANSWER_NUM = 4;
var correct_question_counter = 0;
var incorrect_question_counter = 0;
var question_num = 0;
let start_quiz = true;

var arr_marks = [];

first_question = () => {
    // hide controls
    switch_class($(`#lesson-map-${nRoom}`), "visible", "hidden");
    switch_class($(`#lesson-map-${nRoom}`), "none", "flex");
    switch_class($(`#topic-counter`), "visible", "hidden");
    switch_class($(`#watch-room-button`), "visible", "hidden"); 
    switch_class($(`#controls .home-page-button`), "visible", "hidden"); 
    switch_class($("#controls"),"none", "flex");
    // set variables
    // number of questions in a set- 3 for life or 6 for test
    question_num = eval(`${matrix[nRoom][nPage].questionType}_question_num`);
    // the questions array of the current room
    question_bank = mat_questions_bank[nRoom - 1];
    // add function that will pop after one time but will be executed again after restart
    //if (question_bank.length === window[`arr_questions_bank_${nRoom}`].length) {

    // pop_insert_question will be called only once per set of questions
    // if variable checks if this is the first time first_question is called for this set of questions
    if (start_quiz) {
        for (let i = 0; i < question_num; i++) {
            // the function first_question has been called once for this set
            if (i === 0) {
                start_quiz = false;
            }
            matrix[nRoom][nPage + i].functions.push("pop_insert_question()");
        }
    }
    // display text in left-bottom corner
    if (matrix[nRoom][nPage].questionType === "life") {
        $(".quiz-type").html(`בוחן עבור <img class="text-heart" src="assets/media/heart/heart1_happy.svg">`);
    } else if (matrix[nRoom][nPage].questionType === "finish") {
        $(".quiz-type").html(`בוחן סיום חדר`);
    }
}

type_quiz = () => {
    $(`#${matrix[nRoom][nPage].divName} .question-counter`).text(`${question_counter}/${question_num}`);
}

// insert question from the question bank
  pop_insert_question = () => {
    // clean new answers from classes from the previous questions set
    $(`#${matrix[nRoom][nPage].divName} .answer.correct`).removeClass("correct");
    $(`#${matrix[nRoom][nPage].divName} .answer`).on("click", check_answer);
    // take random question from bank
    // random question from array
    let question_number = Math.floor(Math.random() * question_bank.length);
    // number between 1-4
    let correct_answer = Math.floor(Math.random() * ANSWER_NUM) + 1;
    // insert question
    $(`#${matrix[nRoom][nPage].divName} .questions`).html(question_bank[question_number].question);
    // fill answers
    for (let i = 1; i <= ANSWER_NUM; i++) {
        if (i === correct_answer) {
            $(`#${matrix[nRoom][nPage].divName} .answer.data-num-${i}`).text(question_bank[question_number].correct_answer);
            $(`#${matrix[nRoom][nPage].divName} .answer.data-num-${i}`).addClass("correct");
        } else {
            let wrong_answer = Math.floor(Math.random() * (question_bank[question_number].wrong_answer.length));
            $(`#${matrix[nRoom][nPage].divName} .answer.data-num-${i}`).text(question_bank[question_number].wrong_answer[wrong_answer]);
            mat_questions_bank[nRoom - 1][question_number].wrong_answer.splice(wrong_answer, 1);
        }
    }
    // question won't repeat
    question_bank.splice(question_number, 1);
  }

// check if the user clicks the right answer
  check_answer = (event) => {
    switch_class($(`#${matrix[nRoom][nPage].divName} .correct`), "normal", "right");
    $(`#${matrix[nRoom][nPage].divName} .answer`).off("click");
    // right
    if ($(event.currentTarget).hasClass("correct")) {
        correct_question_counter++;
    }
    // wrong
    else {
        switch_class($(event.currentTarget), "normal", "wrong");
        incorrect_question_counter++;
    }
    // if the quiz is over
    if ((correct_question_counter + incorrect_question_counter) === question_num) {
        // wait before moving page 
        // the user can see his last answer for a second
        setTimeout(() => {
            check_quiz();
        }, 1000);
    }
  }
// check if the user passed the test
  check_quiz = () => {
    switch_class($(`#lesson-map-${nRoom}`), "hidden", "visible");
    switch_class($(`#topic-counter`), "hidden", "visible");
    switch_class($(`#watch-room-button`), "hidden", "visible");
    switch_class($(`#controls .home-page-button`), "hidden", "visible"); 
    switch_class($("#next-button"), "hidden", "visible");
    switch_class($("#controls"), "flex" ,"none"); 
    // user finished quiz
    // user can start new test
    start_quiz = true;
    // user passed the test
    if (correct_question_counter > (question_num/2)) {
        hidePage();
        switch_class($("#spinning-flex"), "none", "flex");
        // user passed life test
        // adding life and showing animation
        if (matrix[nRoom][nPage].questionType === "life") {
            nLife++;
            // display end-game general page
            $(`#ending-game`).css("display", "block");
            // hearts
            switch_class($(`#hearts-flex`), "none", "flex");
            // heart images- switch to happy
            for (let i = 1; i <= nLife ; i++) {
                $(`#heart-${i} .heart`).attr("src", `assets/media/heart/heart${i}_happy.svg`);
            }
            // animation of popping heart
            setTimeout(() => {
                switch_class($(`#heart-1`), "hidden", "visible");
                $(`#heart-1 .heart`).addClass("heart-show-animation");
            }, 2000);
            setTimeout(cloud_effect, 2400);
            setTimeout(() => {
                $(`#heart-1 .heart`).removeClass("heart-show-animation");
            }, 2500);

            // text
            $(`#ending-game .ending-game-title`).text("סיימתם!");
            setTimeout(() => {
                // hide end-game general page
                $(`#ending-game`).css("display", "none");
                switch_class($("#spinning-flex"), "flex", "none");
                // hide hearts
                switch_class($(`#hearts-flex`), "flex", "none");
                // erase 3 questions
                matrix[nRoom].splice((nPage - (question_num-1)), question_num);
                nPage = nPage - (question_num-1);
                movePage();
            }, 4000);
        }
        // user passed room's final test
        // going back to home page to open new room
        else if (matrix[nRoom][nPage].questionType === "finish") {
            // display end-room general page
            $("#spinning-bg").attr("src", "assets/media/room_finish/round_finish_bg.svg");
            $(`#ending-room`).css("display", "block");
            $(`#room-item`).attr("src", `assets/media/room_finish/finish_room_${nRoom}.svg`);
            // keeping in the array the room's mark
            let mark = Math.round((100/question_num) * correct_question_counter);
            arr_marks.push(mark);
            $(`#ending-room .ending-room-title`).text(`ציון: ${mark}`);
            setTimeout(() => {
                // hide end-room general page
                $("#spinning-bg").attr("src", "assets/media/heart/round_lights.svg");
                $(`#ending-room`).css("display", "none");
                switch_class($("#spinning-flex"), "flex", "none");
                // opening new room
                if (arr_marks.length < 4) {
                    pop_room_buttons($(`#room-button-${nRoom + 1}`));
                
                    // moving room
                    hidePage();
                    // erase 6 questions
                    matrix[nRoom].splice((nPage - (question_num-1)), question_num);

                    matrix[nRoom].forEach((page) => { 
                        if (page === matrix[nRoom][matrix[nRoom].length - 1]) {
                            // hiding the next button of the last page of the finished room
                            page.functions.push(`switch_class($("#next-button"), "visible", "hidden")`);
                        } else if ((page === matrix[nRoom][matrix[nRoom].length - 2])) {
                            page.functions.push(`switch_class($("#next-button"), "hidden", "visible")`);
                        }
                        // showing back button when clicking topic 
                        if ((page.topic !== undefined) && (page.topic !== 1)) {
                            page.functions.push(`switch_class($("#back-button"), "hidden", "visible")`);
                        }
                    });
                    homePage();
                // the user finished the whole game
                } else {
                    // erase 6 questions
                    matrix[nRoom].splice((nPage - (question_num-1)), question_num);

                    matrix[nRoom].forEach((page) => { 
                        if (page === matrix[nRoom][matrix[nRoom].length - 1]) {
                            // hiding the next button of the last page of the finished room
                            page.functions.push(`switch_class($("#next-button"), "visible", "hidden")`);
                        } else if ((page === matrix[nRoom][matrix[nRoom].length - 2])) {
                            page.functions.push(`switch_class($("#next-button"), "hidden", "visible")`);
                        }
                        // showing back button when clicking topic 
                        if ((page.topic !== undefined) && (page.topic !== 1)) {
                            page.functions.push(`switch_class($("#back-button"), "hidden", "visible")`);
                        }
                    });

                    the_end();
                }
            }, 2500);
        }
    } 

    // user didn't pass the test
    // restart room
    else {
        finish_story("finish");
    }

    // reset for new questions
    question_counter = 1;
    correct_question_counter = 0;
    incorrect_question_counter = 0;
    // remove classes from answers so the won't appear in new questions
    switch_class($(`.answer.right`), "right", "normal");
    switch_class($(`.answer.wrong`), "wrong", "normal");
  }

