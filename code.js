// there are 4 options: 1, 2, 3, 4 (waiting room, therapy room, doctor's room and medicines room)
// the variable changes when clicking on one of the rooms buttons in the opening
// there are 4 arrays- one for each room 
var nRoom = 0;
var nPage = 0;

// waiting room
var Arr_1 = [
  {
    // opening game question- page 1
    divName: ["r1p1"],
    functions: [`switch_class($("#back-button"), "visible", "hidden")`, `pop_buttons($("#next-button"), 1)`, "pop_watch_room_button()", "pop_home_page_button()", "pop_restart_button()", "pop_quiz_button()", "pop_attach()", "pop_home_button()"],
    type: "content",
    topic: 1
  },
  {
    // page 2
    divName: ["r1p2"],
    functions: [`switch_class($("#back-button"), "hidden", "visible")`, `pop_buttons($("#back-button"), -1)`],
    type: "content",
    topic: 2,
    attach : [
      ["heart_bg", "heart1_happy"],
      ["heart1_sad"],
      ["heart1_sad", "heart_bg"],
      ["heart_bg", "heart1_happy"],
      ["heart_bg", "heart1_happy"],
      ["heart_bg", "heart1_happy"]
    ]
  },
  {
    // first game- page 3
    divName: ["r1p3"],
    functions: ["pop_timeEnds()", "pop_click()", "pop_hover_down()"],
    type: "game",
    timer: "10s",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "התבלבלתי ותליתי את כל השלטים מחוץ למרפאה!<br>לחצו על השלטים שאמורים להיות בפנים",
    instructions_feedback: {
      correct: "אתם שולטים על השלטים!",
      incorrect: "חבל שתליית השלטים תלוייה בכם..."
    }
  },
  {
    // page 4
    divName: ["r1p4"],
    functions: [],
    type: "content",
    topic: 3
  },
  {
    // page 5
    divName: ["r1p5"],
    functions: [],
    type: "content"
  },
  {
    // page 6
    divName: ["r1p6"],
    functions: [],
    type: "content"
  },
  {
    // second game- page 7
    divName: ["r1p7"],
    functions: ["pop_hover_down()", "pop_drag_drop()"],
    type: "game",
    timer: "60s",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "בבקשה עזרו לי לגרור את המודעה ללוח הנכון",
    instructions_feedback: {
      correct: "מזל שהמשימה הייתה תלוייה בכם",
      incorrect: "יא חסרי מודעות..."
    }
  },
  {
    // page 8
    divName: ["r1p8"],
    functions: [],
    type: "content",
    topic: 4
  },
  {
    // page 9
    divName: ["r1p9"],
    functions: [],
    type: "content"
  },
  {
    // third game- page 10
    divName: ["r1p10"],
    functions: ["pop_hover_down()", "pop_drag_drop()"],
    type: "game",
    timer: "60s",
    feedback: {
      correct: "שלב בוס!",
      incorrect: "שלב בוס!"
    },
    instructions: "עזרו לי ליצור אוגדן לחדר קבלה! גררו את הדפים הנחוצים לאוגדן ואת השאר לפח",
    instructions_feedback: {
      correct: "אוגדן של קפדן!",
      incorrect: "אוגדן של מפסידן..."
    }
  },
  {
    // question 1- page 11
    divName: ["q1"],
    functions: [`first_question()`, `switch_class($("#next-button"), "hidden", "visible")`, `switch_class($("#back-button"), "visible", "hidden")`],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 2- page 12
    divName: ["q2"],
    functions: [`switch_class($("#back-button"), "hidden", "visible")`],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 3- page 13
    divName: ["q3"],
    functions: [],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 4- page 14
    divName: ["q4"],
    functions: [],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 5- page 15
    divName: ["q5"],
    functions: [`switch_class($("#next-button"), "hidden", "visible")`],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 6- page 16
    divName: ["q6"],
    functions: [`switch_class($("#next-button"), "visible", "hidden")`],
    type: "quiz",
    questionType: "finish"
  }
];

// therapy room
var Arr_2 = [
  {
    // opening game question- page 1
    divName: ["r2p1"],
    functions: [`switch_class($("#back-button"), "visible", "hidden")`],
    type: "content",
    topic: 1
  },
  {
    // first game- page 2
    divName: ["r2p2"],
    functions: ["pop_r2p2_slider()", `enter("slider")`],
    type: "game",
    timer: "10s",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "גדי חייל בסדיר, תור (למקרה לא דחוף) הוא רוצה להסדיר.<br>גררו את הסמן כדי לבחור את הזמן, והקישו על ENTER כדי שהתור יוזמן.",
    instructions_feedback: {
      correct: "חבל על הזמן!",
      incorrect: "חבל על הזמן..."
    }
  },
  {
    // page 3
    divName: ["r2p3"],
    functions: [`switch_class($("#back-button"), "hidden", "visible")`],
    type: "content",
    topic: 2
  },
  {
    // second game- page 4
    divName: ["r2p4"],
    functions: [`pop_build_mat()`, `falling_items(21)`],
    type: "game",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "שלטו באמצעות החצים במקלדת<br>לאיזה פח הפסולת אמורה לרדת",
    instructions_feedback: {
      correct: "אתם חדים כמו מחט!",
      incorrect: "עבודה פח..."
    }
  },
  {
    // page 5
    divName: ["r2p5"],
    functions: [],
    type: "content",
    topic: 3
  },
  {
    // page 6
    divName: ["r2p6"],
    functions: [],
    type: "content",
    topic: 4
  },
  {
    // page 7
    divName: ["r2p7"],
    functions: [],
    type: "content",
    topic: 5
  },
  {
    // third game- page 8
    divName: ["r2p8"],
    functions: ["pop_hover_down()", "pop_drag_drop()"],
    type: "game",
    timer: "60s",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "בבקשה עזרו לי לגרור את השלט למקום הנכון",
    instructions_feedback: {
      correct: "הכל מוכן למסדר המפקד!",
      incorrect: "מזל שאין מסדר היום..."
    }
  },
  {
    // page 9
    divName: ["r2p9"],
    functions: [],
    type: "content",
    topic: 6
  },
  {
    // page 10
    divName: ["r2p10"],
    functions: [],
    type: "content",
    topic: 7
  },
  {
    // forth game- page 11
    divName: ["r2p11"],
    functions: ["pop_click()"],
    type: "game",
    timer: "5s",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "לחצו על נורית החיווי כדי להפעיל אותה!",
    instructions_feedback: {
      correct: "אתם זוהרים כמו נורה!",
      incorrect: "כנראה שאתם שייכים ל-dark side"
    }
  },
  {
    // page 12
    divName: ["r2p12"],
    functions: [],
    type: "content",
    topic: 8
  },
  {
    // fifth game- page 13
    divName: ["r2p13"],
    functions: ["pop_hover_down()", "pop_drag_drop()"],
    type: "game",
    timer: "60s",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "עזרו לי ליצור אוגדן לעמדת המעבדה! גררו את הדפים הנחוצים לאוגדן ואת השאר לפח",
    instructions_feedback: {
      correct: "אוגדן של קפדן!",
      incorrect: "אוגדן של מפסידן..."
    }
  },
  {
    // page 14
    divName: ["r2p14"],
    functions: [],
    type: "content",
    topic: 9
  },
  {
    // page 15
    divName: ["r2p15"],
    functions: [],
    type: "content",
    topic: 10
  },
  {
    // page 17
    divName: ["r2p16"],
    functions: [],
    type: "content",
    topic: 11
  },
  {
    // seventh game- page 18
    divName: ["r2p17"],
    functions: ["pop_click()"],
    type: "game",
    timer: "7s",
    feedback: {
      correct: "שלב בוס!",
      incorrect: "שלב בוס!"
    },
    instructions: "איזו תרופה משולטת נכון?",
    instructions_feedback: {
      correct: "אתם שולטים על השלטים!",
      incorrect: "אל תילחצו שלא לחצתם נכון :)"
    }
  },
  {
    // question 1- page 19
    divName: ["q1"],
    functions: [`first_question()`, `switch_class($("#next-button"), "hidden", "visible")`, `switch_class($("#back-button"), "visible", "hidden")`],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 2- page 20
    divName: ["q2"],
    functions: [`switch_class($("#back-button"), "hidden", "visible")`],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 3- page 21
    divName: ["q3"],
    functions: [],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 4- page 22
    divName: ["q4"],
    functions: [],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 5- page 23
    divName: ["q5"],
    functions: [`switch_class($("#next-button"), "hidden", "visible")`],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 6- page 24
    divName: ["q6"],
    functions: [`switch_class($("#next-button"), "visible", "hidden")`],
    type: "quiz",
    questionType: "finish"
  }
];

// doctor's room
var Arr_3 = [  
  {
    // room 3 page 1
    divName: ["r3p1"],
    functions: [`switch_class($("#back-button"), "visible", "hidden")`],
    type: "content",
    topic: 1
  },
  {
    // room 3 page 2
    divName: ["r3p2"],
    functions: [`pop_click()`],
    type: "game",
    timer: "7s",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "הרופא שכח לקחת את החותמת הביתה... תוכלו למצוא אותה?",
    instructions_feedback: {
      correct: "תחתמו קבע!",
      incorrect: "אתם מבולבלים... תחתמו חופש!"
    }
  },
  {
    // room 3 page 3
    divName: ["r3p3"],
    functions: [`switch_class($("#back-button"), "hidden", "visible")`],
    type: "content",
    topic: 2
  },
  {
    // room 3 page 4
    divName: ["r3p4"],
    functions: [`pop_click()`],
    type: "game",
    timer: "20s",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "מצא את ההבדלים בין החדרים!",
    instructions_feedback: {
      correct: "ראייה 6-6! יכולתם להיות צלפים!",
      incorrect: "מזל שאנחנו בחדר רופא תקבעו תור לרופא עיניים!"
    }
  },
  {
    // room 3 page 5
    divName: ["r3p5"],
    functions: [],
    type: "content",
    topic: 3
  },
  {
    // room 3 page 6
    divName: ["r3p6"],
    functions: [],
    type: "content",
    topic: 4
  },
  {
    // room 3 page 7
    divName: ["r3p7"],
    functions: [],
    type: "content",
  },
  {
    // room 3 page 8
    divName: ["r3p8"],
    functions: [],
    type: "content",
    topic: 5
  },
  {
    // room 3 page 9
    divName: ["r3p9"],
    functions: [`pop_r3p9_input()`],
    type: "game",
    timer: "10s",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: `רשמו את השם המלא של הד"ר על השלט של הדלת!`,
    instructions_feedback: {
      correct: "אתה כוכב כמו עוז זהבי",
      incorrect: "חבל על הזמן..."
    }
  },
  {
    // room 3 page 10
    divName: ["r3p10"],
    functions: [],
    type: "content",
    topic: 6
  },
  {
    // room 3 page 11
    divName: ["r3p11"],
    functions: [],
    type: "content",
  },
  {
    // room 3 page 12
    divName: ["r3p12"],
    functions: [`pop_drag_drop()`, `pop_hover_down()`, `pop_carousel()`, `$(".arrows").on("click", pop_carousel)`, `pop_down()`],
    type: "game",
    timer: "30s",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "איזה טופס חסר? עברו בין הטפסים וגררו את הנכון למקום!",
    instructions_feedback: {
      correct: "אתם טיפוס מוצלח!",
      incorrect: "אין לכם טפיסה מהירה אה..."
    }
  },
  {
    // room 3 page 13
    divName: ["r3p13"],
    functions: [],
    type: "content",
    topic: 7
  },
  {
    // question 1- page 13
    divName: ["q1"],
    functions: [`first_question()`, `switch_class($("#next-button"), "hidden", "visible")`, `switch_class($("#back-button"), "visible", "hidden")`],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 2- page 14
    divName: ["q2"],
    functions: [`switch_class($("#back-button"), "hidden", "visible")`],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 3- page 15
    divName: ["q3"],
    functions: [],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 4- page 16
    divName: ["q4"],
    functions: [],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 5- page 17
    divName: ["q5"],
    functions: [`switch_class($("#next-button"), "hidden", "visible")`],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 6- page 18
    divName: ["q6"],
    functions: [`switch_class($("#next-button"), "visible", "hidden")`],
    type: "quiz",
    questionType: "finish"
  }
];

// medicines room
var Arr_4 = [
  {
    // page 1
    divName: ["r4p1"],
    functions: [`switch_class($("#back-button"), "visible", "hidden")`],
    type: "content",
    topic: 1
  },
  {
    // first game- page 2
    divName: ["r4p2"],
    functions: [`pop_click()`],
    type: "game",
    timer: "5s",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "תעשו טובה תדליקו מזגן",
    instructions_feedback: {
      correct: "חיממתם לי את הלב",
      incorrect: "אתם לא מדליקים"
    }
  },
  {
    // page 3
    divName: ["r4p3"],
    functions: [`switch_class($("#back-button"), "hidden", "visible")`],
    type: "content",
    topic: 2
  },
  {
    // page 4
    divName: ["r4p4"],
    functions: [],
    type: "content",
    topic: 3
  },
  {
    // second game- page 5
    divName: ["r4p5"],
    functions: ["pop_hover_down()", "pop_drag_drop()"],
    type: "game",
    timer: "60s",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "גררו למקום כל שלט- אך האם לארון או לדלת?",
    instructions_feedback: {
      correct: "הכל מוכן למסדר המפקד!",
      incorrect: "מזל שאין מסדר היום..."
    }
  },
  {
    // page 6
    divName: ["r4p6"],
    functions: [],
    type: "content",
    topic: 4
  },
  {
    // third game- page 7
    divName: ["r4p7"],
    functions: [`pop_build_mat()`, `falling_items(11)`],
    type: "game",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "התרופות נופלות! כוונו אותן ימינה ושמאלה לפי הסוגים שלהן באמצעות המקלדת",
    instructions_feedback: {
      correct: "אתם יודעים לכוון!",
      incorrect: "אתם לא יודעים לכוון..."
    }
  },
  {
    // page 8
    divName: ["r4p8"],
    functions: [],
    type: "content",
    topic: 5
  },
  {
    // page 9
    divName: ["r4p9"],
    functions: [],
    type: "content",
    topic: 6
  },
  {
    // page 10
    divName: ["r4p10"],
    functions: [],
    type: "content"
  },
  {
    // forth game- page 11
    divName: ["r4p11"],
    functions: ["pop_click()", "pop_hover_down()"],
    type: "game",
    timer: "10s",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "לחצו על הטופס שלא אמור להיות בחדר תרופות!",
    instructions_feedback: {
      correct: "אתם שולטים על השלטים!",
      incorrect: "חבל שתליית השלטים תלוייה בכם..."
    }
  },
  {
    // page 12
    divName: ["r4p12"],
    functions: [],
    type: "content",
    topic: 7
  },
  {
    // page 13
    divName: ["r4p13"],
    functions: [],
    type: "content",
    topic: 8
  },
  {
    // fifth game- page 14
    divName: ["r4p14"],
    functions: [`pop_hover_down()`, `pop_carousel()`, `enter("carousel")`],
    type: "game",
    timer: "60s",
    feedback: {
      correct: "array",
      incorrect: "פגי תוקף"
    },
    instructions: "מלאו את הטבלה לפני שפג זמנכם, והקישו ENTER כדי לבדוק את עצמכם",
    instructions_feedback: {
      correct: "תיקפתם את הטבלה!",
      incorrect: "פג הזמן!"
    }
  },
  {
    // page 15
    divName: ["r4p15"],
    functions: [],
    type: "content",
    topic: 9
  },
  {
    // page 15
    divName: ["r4p16"],
    functions: [],
    type: "content",
    topic: 10
  },
  {
    // sixth game- page 17
    divName: ["r4p17"],
    functions: ["pop_drag_drop()"],
    type: "game",
    timer: "7s",
    feedback: {
      correct: "שני ארונות",
      incorrect: "array"
    },
    instructions: "תנעל ת'ארון",
    instructions_feedback: {
      correct: "זה המפתח להצלחה!",
      incorrect: "אתם לא נעולים על זה..."
    }
  },
  {
    // page 18
    divName: ["r4p18"],
    functions: [],
    type: "content",
    topic: 11
  },
  {
    // seventh game- page 19
    divName: ["r4p19"],
    functions: ["pop_r4p19_slider()", `enter("slider")`, "r4p19_slider_move()"],
    type: "game",
    timer: "7s",
    feedback: {
      correct: "array",
      incorrect: "array"
    },
    instructions: "המקרר השתגע!<br>הקישו ENTER כאשר המדחום מגיע לטמפרטורה הנכונה",
    instructions_feedback: {
      correct: "חיממתם לי את הלב",
      incorrect: "חמומי מוח"
    }
  },
  {
    // page 20
    divName: ["r4p20"],
    functions: [],
    type: "content",
    topic: 12
  },
  {
    // page 21
    divName: ["r4p21"],
    functions: [],
    type: "content",
    topic: 13
  }, 
  {
    // question 1- page 22
    divName: ["q1"],
    functions: [`first_question()`, `switch_class($("#next-button"), "hidden", "visible")`, `switch_class($("#back-button"), "visible", "hidden")`],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 2- page 23
    divName: ["q2"],
    functions: [`switch_class($("#back-button"), "hidden", "visible")`],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 3- page 24
    divName: ["q3"],
    functions: [],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 4- page 25
    divName: ["q4"],
    functions: [],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 5- page 26
    divName: ["q5"],
    functions: [`switch_class($("#next-button"), "hidden", "visible")`],
    type: "quiz",
    questionType: "finish"
  },
  {
    // question 6- page 27
    divName: ["q6"],
    functions: [`switch_class($("#next-button"), "visible", "hidden")`],
    type: "quiz",
    questionType: "finish"
  }
];

var matrix = [[
  {
    // opening- page 0
    divName: ["opening"], // the last div contains the speech bubble
    functions: ['pop_room_buttons($("#room-button-1"))', 'pop_buttons($("#about-button"), 1)', "pop_calculateStrokeTextCSS(16)"] // array of functions that are needed to the page. If the functions contain the word "pop", it will happen only once and will be popped out of the array afterwards
  },
  {
    // about- page 1
    divName: ["about"],
    functions: ['pop_buttons($("#back-about-button"), -1)']
  }
], Arr_1.slice(), Arr_2.slice(), Arr_3.slice(), Arr_4.slice()];

// lesson map
// what topic is the user currently learning
var topic_counter = 1;
// the distance between each circle in the lesson map (for the head movement)- different for each room 
var topic_distance = 4;

$(function() {
  // calls the opening page
  movePage();
});

function movePage() {
  // appearance
  // shows current divs
  for (let i = 0; i < matrix[nRoom][nPage].divName.length; i++) {
    $("#" + matrix[nRoom][nPage].divName[i]).css("display", "block");
  }
 
  // functions
  // calls the functions of the page
  if (matrix[nRoom][nPage].functions.length > 0) {
    let nFunction = 0;
    while (nFunction < matrix[nRoom][nPage].functions.length) {
      eval(matrix[nRoom][nPage].functions[nFunction]);
      // functions that contains the word "pop" will accur only once
      if (matrix[nRoom][nPage].functions[nFunction].includes("pop")) {
        matrix[nRoom][nPage].functions.splice(nFunction , 1);
        // since the function happens only once there is no need in adding nFunction +1
      } else {
        nFunction++;
      }
    }
  }

  if (matrix[nRoom][nPage].type !== undefined) {
    // identify type
    eval(`type_${matrix[nRoom][nPage].type}()`);
  }
}

function hidePage() {
    // hides last divs
    for (let i = 0; i < matrix[nRoom][nPage].divName.length; i++) {
      $("#" + matrix[nRoom][nPage].divName[i]).css("display", "none");
    }
    // changing checkpoint in lesson map
    // if the topic changes whem moving page (there are pages with the same topic)
    // after a game the topic is equal to the content topic and there is no need to change
    // if (matrix[nRoom][nPage].topic !== undefined) {
    // }
}

// function that adds events listeners to room buttons that displays the chosen room- called only one time for each button
function pop_room_buttons(button) {
  // changing button appearance
  switch_class(button, "enabled", "abled");
  button.on("click", function() {
    // hides last divs
    hidePage();
    // changes room counter
    nRoom = Number(button.attr("id").slice(-1)); 
    // display room
    $(`#room-${nRoom}`).css("display", "block");
    setTimeout(toggle_room, 2000); 
    // shows next page
    setTimeout(movePage, 2000); 
    check_room(); 
  });
}

// function that adds events listeners to buttons that affects the page's display- called only one time for each button
function pop_buttons(button, number) {
  button.on("click", function() {
    hidePage();
    if ((matrix[nRoom][nPage].type !== undefined) && (matrix[nRoom][nPage].type !== "quiz")) {
      if ($(`#lesson-map-${nRoom} .topic-${topic_counter}`).css("background-image").includes("normal")) {
        checkpoint(true);
        }
    } else if (matrix[nRoom][nPage].type === "quiz") {
      question_counter = question_counter + eval(number);
    }
    // changes page counter
    // if the button is prev/next/about (ect), the number is added to page counter
    if (button.hasClass("move")) {
      nPage = nPage + eval(number);
      // lessom map movememt (ahami head)
        // if the topic changes whem moving page (there are pages with the same topic)
        // after a game the topic is equal to the content topic and there is no need to change
        if ((matrix[nRoom][nPage].topic !== undefined) && (topic_counter !== matrix[nRoom][nPage].topic)) {
          move_lessonMap(topic_distance * number);
        }
    }
    // if the button is part of the lesson map, page counter is compared to the number 
    else if (button.hasClass("topic")) {
      nPage = eval(number);
      // lessom map movememt (ahami head)
        move_lessonMap(topic_distance * (matrix[nRoom][nPage].topic - topic_counter));
    }
    // shows next page
    movePage();    
  });
}

// function that is called every time going in to new room to start from stratch
check_room = () => {
  // hearts
  nLife = 3;
  for (let i = 1; i <= nLife ; i++) {
    switch_class($(`#heart-${i}`), "hidden", "visible");
    $(`#heart-${i} .heart`).attr("src", `assets/media/heart/heart${i}_happy.svg`);
  }
  // lesson map
  topic_counter = 1;
  switch (nRoom) {
    case 1:
      topic_distance = 14.8;  
      break;
    case 2:
      topic_distance = 5.38;  
      break;
    case 3:
      topic_distance = 8.5;  
      break;
    case 4:
      topic_distance = 4.6;  
      break;
    default:
      topic_distance = 4; 
  }
  $("#topic-counter").css("right", "-63.5vw");
  // comments array
  correct_num = 0;
  incorrect_num = 0;
}


// colors checkpoint if needed
checkpoint = (condition) => {
  let curr_checkpoint = $(`#lesson-map-${nRoom} .topic-${topic_counter}`);
  // if the checkpoint haven't been changed
  // if (curr_checkpoint.css("background-image").includes("normal")) {
    // if this is a content page or the user succeded in a game
    if (condition) {
      curr_checkpoint.css("background-image", `url("assets/media/2content/checkpoint_right.svg")`);
      // changing ahami little head to happy
      if ($("#topic-counter").attr("src") === "assets/media/2content/head_sad.svg") {
        $("#topic-counter").attr("src", "assets/media/2content/head_happy.svg")
      }
    }
    // the user lost the game
    else {
      curr_checkpoint.css("background-image", `url("assets/media/2content/checkpoint_wrong.svg")`);
      // changing ahami little head to sad
      if ($("#topic-counter").attr("src") === "assets/media/2content/head_happy.svg") {
        $("#topic-counter").attr("src", "assets/media/2content/head_sad.svg")
      }
    }
    // the checkpoint is clickable
    if (!curr_checkpoint.hasClass("button")) {
      pop_buttons(curr_checkpoint, nPage);
      curr_checkpoint.addClass("button");
    }
}

// moves ahami lesson map head- after moving topic and after every game
move_lessonMap = (distance) => {
  // change lesson map head place
  $("#topic-counter").animate({right: `+=${distance}vw`}, 1000);
  // update topic counter
  if (matrix[nRoom][nPage].type === "game") {
    topic_counter++;
  } else {
    topic_counter = matrix[nRoom][nPage].topic;
  }
}

// display/hides room image (every room start and with the room button)
toggle_room = ()  => {
  let room_div = $(`#room-${nRoom}`);
  // display the room
  if (room_div.css("display") === "none") {
    room_div.css("display","block");
    room_div.animate({opacity: `1`}, 500);
  }
  // hide the room
  else {
    room_div.animate({opacity: `0`}, 500, function() {
    room_div.css("display","none");
    });
  }
}

// when clicking on attach sign
pop_attach = ()  => {
  $(".attach").on("click", function() {
    // darken page
    $("#black-div").css("display", "block");
    if (!$(this).hasClass("visited")) {
      $(this).addClass("visited");
    }
    // display files
    for (let j = 0; j < matrix[nRoom][nPage].attach[$(this).attr("class").split(/\s+/)[2].slice(-1) - 1].length; j++) {
      $("#scroll-div").append(`<img class="attach-file" src="assets/media/files/${matrix[nRoom][nPage].divName[0]}/${matrix[nRoom][nPage].attach[$(this).attr("class").split(/\s+/)[2].slice(-1) - 1][j]}.svg">`);
    }

    if ($(`#${matrix[nRoom][nPage].divName} .attach.visited`).length === matrix[nRoom][nPage].attach.length) {
      switch_class($("#next-button"), "hidden", "visible");
    }
  });

  $("#scroll-back-button").on("click", function() {
     $("#black-div").css("display", "none");
     $("#scroll-div").html("");
  });
}

// setting content page
type_content = () => {
  // display controls
  switch_class($("#controls"), "none", "flex");
  switch_class($(`#lesson-map-${nRoom}`), "none", "flex");
  
  if (matrix[nRoom][nPage].attach !== undefined) {
    // if the user havent visited the room yet
    // the next button is blocked until whole the attached buttons are clicked
    if ($(`#${matrix[nRoom][nPage].divName} .attach.visited`).length !== matrix[nRoom][nPage].attach.length) {
      switch_class($("#next-button"), "visible", "hidden");
    }
  } else if (matrix[nRoom][nPage] !== matrix[nRoom][matrix[nRoom].length - 1]) {
     switch_class($("#next-button"), "hidden", "visible");
  }
}

pop_home_page_button = () => {
  $("#controls .home-page-button").on("click", function() {
    hidePage();
    homePage();
  });
}

// before using this function there is need to call hidePage()
// sends the user to home page
homePage = () => {
  // hide previous lesson map
  switch_class($(`#lesson-map-${nRoom}`), "flex", "none");
  nRoom = 0;
  nPage = 0;
  movePage();
  switch_class($("#controls"), "flex", "none");
  // ahami head happy
  if ($("#topic-counter").attr("src") === "assets/media/2content/head_sad.svg") {
    $("#topic-counter").attr("src", "assets/media/2content/head_happy.svg")
  }
}

pop_watch_room_button = () => {
  $("#watch-room-button").on("click", function() {
    toggle_room();
    // display back button (when entering new room there is no back button, therefore it is in separated tag in HTML)
    setTimeout(switch_class, 500, $("#back-room-button"), "none", "block");
    switch_class($("#controls"), "flex", "none"); 
  });
  $("#back-room-button").on("click", function() {
    toggle_room();
    switch_class($("#back-room-button"), "block", "none");
    setTimeout(switch_class, 500, $("#controls"), "none", "flex");
  });
}

// function that switches classes
switch_class = (object, prevClass, currClass) => {
  if (object.hasClass(prevClass)) {
    object.removeClass(prevClass);
    object.addClass(currClass);
  }
}	

restart = () => {
  // can't reset matrix after resetting nRoom and nPage
  // can't reset matrix before resetting nRoom and nPage because it messes the page's order
  // let nPrevRoom = nRoom;
  hidePage();
  // return games and questions to matrix
  matrix.splice(nRoom, 1, window[`Arr_${nRoom}`].slice());
  // return questions to questions' matrix
  mat_questions_bank.splice(nRoom - 1, 1, copy(window[`arr_questions_bank_${nRoom}`]));
  // specific games
  eval(`restart_${nRoom}()`);
  // lesson map
  $(`#lesson-map-${nRoom} .topic`).css("background-image", "url('assets/media/2content/checkpoint_normal.svg')");
  $(`.ahami-head, #topic-counter`).attr("src", `assets/media/2content/head_happy.svg`);

  // home page
  //nRoom = 0 nPage = 0
  homePage();

  // games general
  $(`.item`).css("pointer-events", "auto");
  // $(`.drag`).draggable({
  //   revert:"invalid",
  //   revertDuration: 200,
  //   containment: "window",
  //   drag: function(event, ui) {}
  // }).css("position", "absolute");

  // $(`.drag`).forEach((drag) => {
  //   if ($(drag).is('.ui-draggable')) {
  //     $(drag).draggable("option", "disabled", false);
  //   }
  // });

  $(`.drag`).each(function(index, drag) {
    if ($(drag).is('.ui-draggable')) {
      $(drag).draggable("option", "disabled", false);
    }
  });

  $(`.slider`).each(function(index, slider) {
    if (typeof $(slider).slider() !== "undefined") {
      $(slider).slider("enable");
    }
  });

  $(document).off();
}

pop_home_button = () => {
  $("#home-button").on("click", function() {
    $("#ending-lomda").css("display", "none");
    switch_class($("#spinning-flex"), "flex", "none");
  });
}

// the user finished all rooms
// display games
the_end = () => {
  homePage();
  $("#ending-lomda").css("display", "block");
  switch_class($("#spinning-flex"), "none", "flex");
  let final_grade = 0;
  for (let i = 1; i <= arr_marks.length; i++) {
    $(`#grade-${i}`).html(String(arr_marks[i - 1]));
    final_grade += arr_marks[i - 1];
  }
  final_grade = final_grade/arr_marks.length;
  $("#total-score").html(String(final_grade));
  $(`#grade-print`).html(`ציון: ${String(final_grade)}`);
}

// text css opening
function pop_calculateStrokeTextCSS(steps) {
  var css = "";
  for (var i = 0; i < steps; i++) {
    var angle = (i * 2 * Math.PI) / steps;
    var cos = Math.round(10000 * Math.cos(angle)) / 10000;
    var sin = Math.round(10000 * Math.sin(angle)) / 10000;
    css +=
      "calc(var(--stroke-width) * " +
      cos +
      ") calc(var(--stroke-width) * " +
      sin +
      ") 0 var(--stroke-color),";
  }
  return css;
}

function copy(o) {
  var output, v, key;
  output = Array.isArray(o) ? [] : {};
  for (key in o) {
      v = o[key];
      output[key] = (typeof v === "object") ? copy(v) : v;
  }
  return output;
}