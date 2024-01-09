var quiz = {
  categories: {
     biology: [
       {
      q: "What is the function of red blood cells in the human body?",
      o: ["Transport of oxygen", "Digestion of food", "Immune response", "Nerve signal transmission"],
      a: 0,
    },
    {
      q: "Which organ in the human body produces insulin?",
      o: ["Liver", "Pancreas", "Kidney", "Stomach"],
      a: 1,
    },
    {
      q: "What is the process by which plants make their own food using sunlight?",
      o: ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"],
      a: 1,
    },
    {
      q: "What is the primary function of the mitochondria in a cell?",
      o: ["Protein synthesis", "Energy production", "Cell division", "Waste elimination"],
      a: 1,
    },
    {
      q: "Which of the following is NOT a component of the human nervous system?",
      o: ["Brain", "Spinal cord", "Liver", "Peripheral nerves"],
      a: 2,
    },
    {
      q: "What is the role of DNA in genetics?",
      o: ["Energy production", "Cell structure", "Genetic information storage", "Blood clotting"],
      a: 2,
    },
    {
      q: "Which gas do plants absorb from the atmosphere during photosynthesis?",
      o: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      a: 1,
    },
    {
      q: "In the human body, what is the function of white blood cells?",
      o: ["Transport of oxygen", "Clotting of blood", "Fighting infections", "Digesting food"],
      a: 2,
    },
    {
      q: "What is the smallest unit of life that can carry out all the functions of a living organism?",
      o: ["Atom", "Molecule", "Cell", "Organ"],
      a: 2,
    },
    {
      q: "Which of the following is a hormone produced by the thyroid gland?",
      o: ["Insulin", "Testosterone", "Estrogen", "Thyroxine"],
      a: 3,
    },
      // ... Add other biology questions
    ],
    physics: [
       {
      q: "What is the SI unit of electric current?",
      o: ["Watt", "Volt", "Ampere", "Ohm"],
      a: 2,
    },
    {
      q: "What is the speed of light in a vacuum?",
      o: ["300,000 m/s", "299,792,458 m/s", "200,000 m/s", "400,000 m/s"],
      a: 1,
    },
    {
      q: "What is Newton's second law of motion?",
      o: ["An object at rest stays at rest", "Force equals mass times acceleration", "For every action, there is an equal and opposite reaction", "Objects in motion tend to stay in motion"],
      a: 1,
    },
    {
      q: "What is the law of conservation of energy?",
      o: ["Energy cannot be created or destroyed, only transferred or converted", "Energy is always increasing in a closed system", "Energy can be created from nothing", "Energy can be destroyed at will"],
      a: 0,
    },
    {
      q: "What is the formula for calculating work done?",
      o: ["W = F x d", "W = m x a", "W = P x V", "W = E x t"],
      a: 0,
    },
    {
      q: "What is the unit of measurement for frequency?",
      o: ["Hertz", "Watt", "Joule", "Ampere"],
      a: 0,
    },
    {
      q: "What is the law of universal gravitation?",
      o: ["Objects in motion tend to stay in motion", "Energy cannot be created or destroyed", "The force of gravity is directly proportional to the mass of the objects and inversely proportional to the square of the distance between them", "For every action, there is an equal and opposite reaction"],
      a: 2,
    },
    {
      q: "What is the formula for calculating kinetic energy?",
      o: ["KE = 1/2 * m * v^2", "KE = m * g * h", "KE = F * d", "KE = P / A"],
      a: 0,
    },
	{
    q: "What is the relationship between pressure, volume, and temperature of a gas in an ideal gas law?",
    o: ["Boyle's Law", "Charles's Law", "Avogadro's Law", "Gay-Lussac's Law"],
    a: 0,
    },
    {
    q: "What is the unit of measurement for electric charge?",
    o: ["Coulomb", "Volt", "Ampere", "Ohm"],
    a: 0,
    },
  ],
    geography: [
      {
      q: "What is the capital of Australia?",
      o: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
      a: 3,
    },
    {
      q: "Which river is the longest in the world?",
      o: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      a: 0,
    },
    {
      q: "What is the largest desert in the world?",
      o: ["Sahara", "Arabian", "Gobi", "Antarctica"],
      a: 0,
    },
    {
      q: "Which country is known as the Land of the Rising Sun?",
      o: ["China", "South Korea", "Japan", "Vietnam"],
      a: 2,
    },
    {
      q: "What is the smallest continent by land area?",
      o: ["Asia", "Africa", "North America", "Australia"],
      a: 3,
    },
    {
      q: "Which ocean is the deepest in the world?",
      o: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      a: 3,
    },
    {
      q: "What is the largest country by land area?",
      o: ["China", "India", "Russia", "United States"],
      a: 2,
    },
    {
      q: "What is the highest mountain in the world?",
      o: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley"],
      a: 1,
    },
	{
    q: "What is the longest river in Europe?",
    o: ["Thames", "Danube", "Volga", "Seine"],
    a: 2,
    },
    {
    q: "Which country is known as the Land of Fire and Ice due to its volcanic activity and glaciers?",
    o: ["Canada", "Iceland", "New Zealand", "Chile"],
    a: 1,
    }
    ],
    },
	
 hWrap: null,
  hQn: null,
  hAns: null,
  selectedCategory: null,
  now: 0,
  score: 0,
  startTime: null,
  endTime: null,
  timer: null, // Timer variable

  init: function () {
    quiz.hWrap = document.getElementById("quizWrap");
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);
    quiz.createCategorySelectionInterface();
  },

  createCategorySelectionInterface: function () {
    var categorySelector = document.createElement("div");
    categorySelector.id = "categorySelector";
    categorySelector.innerHTML = `
      <label for="category">Select a category:</label>
      <select id="category">
        <option value="biology">Biology</option>
        <option value="physics">Physics</option>
        <option value="geography">Geography</option>
      </select>
      <button id="startQuiz">Start Quiz</button>
    `;
    quiz.hWrap.appendChild(categorySelector);
    document.getElementById("startQuiz").addEventListener("click", function () {
      quiz.selectedCategory = document.getElementById("category").value;
      quiz.reset();
      quiz.startTimer();
    });
  },

  startTimer: function () {
    quiz.startTime = new Date().getTime();
    quiz.timer = setTimeout(function () {
      quiz.finish();
    }, 60000); // 1 minute timer
  },

  draw: function () {
    var categoryQuestions = quiz.categories[quiz.selectedCategory];
    if (!categoryQuestions) return;

    if (quiz.now < categoryQuestions.length) {
      quiz.hQn.innerHTML = categoryQuestions[quiz.now].q;
      quiz.hAns.innerHTML = "";
      for (var i in categoryQuestions[quiz.now].o) {
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.id = "quizo" + i;
        quiz.hAns.appendChild(radio);
        var label = document.createElement("label");
        label.innerHTML = categoryQuestions[quiz.now].o[i];
        label.setAttribute("for", "quizo" + i);
        label.dataset.idx = i;
        label.addEventListener("click", function () {
          quiz.select(this);
        });
        quiz.hAns.appendChild(label);
      }
    } else {
      quiz.endTime = new Date().getTime();
      var elapsedTimeInSeconds = (quiz.endTime - quiz.startTime) / 1000;
      quiz.hQn.innerHTML = `Time's up! You answered ${quiz.score} of ${categoryQuestions.length} correctly in ${elapsedTimeInSeconds} seconds.`;
      quiz.hAns.innerHTML = "";
    }
  },

  select: function (option) {
    var all = quiz.hAns.getElementsByTagName("label");
    for (var label of all) {
      label.removeEventListener("click", quiz.select);
    }

    var categoryQuestions = quiz.categories[quiz.selectedCategory];
    if (!categoryQuestions) return;

    var currentQuestion = categoryQuestions[quiz.now];
    var correct = option.dataset.idx == currentQuestion.a;
    if (correct) {
      quiz.score++;
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
      quiz.hAns.querySelector(`label[data-idx="${currentQuestion.a}"]`).classList.add("correct");
    }

    quiz.now++;
    setTimeout(function () {
      quiz.draw();
    }, 1000);
  },

  reset: function () {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
  },

  finish: function () {
    quiz.endTime = new Date().getTime();
    var elapsedTimeInSeconds = (quiz.endTime - quiz.startTime) / 1000;
    quiz.hQn.innerHTML = `Time's up! You answered ${quiz.score} of ${quiz.categories[quiz.selectedCategory].length} correctly in ${elapsedTimeInSeconds} seconds.`;
    quiz.hAns.innerHTML = "";
  },
};

window.addEventListener("load", quiz.init);