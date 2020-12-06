const questions = [
    {
      name: "1.  What does HTML stand for?",
      a_1: "A. Hyperlinks and Text markup language",
      a_2: "B. Home tool markup language",
      a_3: "C. Hyper text markup language",
      a_4: "D. None of these",
      correct: "C"
    },
    {
      name: "2. Who is making the Web standards?",
      a_1: "A. Microsoft",
      a_2: "B. The world wide web consortium",
      a_3: "C. Google",
      a_4: "D. Mozila",
      correct: "C"
    },
    {
      name: "3. What is the correct HTML element for inserting a line break?",
      a_1: "A. <break>",
      a_2: "B. <Ib>",
      a_3: "C. <br>",
      a_4: "D. None of the above",
      correct: "A"
    },
    {
      name: "4. What language defines the behavior of a web page?",
      a_1: "A. HTML",
      a_2: "B. CSS",
      a_3: "C. XML",
      a_4: "D. Java Script",
      correct: "D"
    },
    {
      name: "5. What is the correct HTML for adding a background color?",
      a_1: "A. <body bg=yellow>",
      a_2: "B. <body style=backgound-color:yellow>",
      a_3: "C. <background>yellow</background>",
      a_4: "D. none of these ",
      correct: "D"
    },
    {
      name: "6. Which character is used to indicate an end tag?",
      a_1: "A. ^",
      a_2: "B. >",
      a_3: "C. /",
      a_4: "D. <",
      correct: "C"
    },
    {
      name: "7. Which of these elements are all <table> elements?",
      a_1: "A. <thead><body><tr>",
      a_2: "B. <table><head><tfoot>",
      a_3: "C. <table><tr><td>",
      a_4: "D. <table><tr><td>",
      correct: "A"
    },
    {
      name: "8. How can you make a numbered list?",
      a_1: "A. <ul>",
      a_2: "B. <list> ",
      a_3: "C. <ol>",
      a_4: "D. <dl>",
      correct: "B"
    },
  ]
  
  const quizText = document.querySelector('.quiz_text');
  
  const a_text = document.querySelector('.a_text');
  const b_text = document.querySelector('.b_text');
  const c_text = document.querySelector('.c_text');
  const d_text = document.querySelector('.d_text');
  
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const radioEls = document.querySelectorAll(`input[type="radio"]`);
  const correctAnswer = document.querySelector('.correct_answer');
  const labelEls = document.querySelectorAll('label');
  
  let currentQuiz = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    const currentQuizDate = questions[currentQuiz];
  
    quizText.innerHTML = currentQuizDate["name"];
    a_text.innerHTML = currentQuizDate["a_1"];
    b_text.innerHTML = currentQuizDate["a_2"];
    c_text.innerHTML = currentQuizDate["a_3"];
    d_text.innerHTML = currentQuizDate["a_4"];
  }
  
  
  
  nextBtn.addEventListener('click', () => {
    //每次点击跳转到下一题时，清空选中
    radioEls.forEach((radioEl) => {
      radioEl.checked = false;
    })
    correctAnswer.innerHTML = "Check Answer";
    correctAnswer.style.backgroundColor = "#000";
  
    currentQuiz++;
    if (currentQuiz < questions.length) {
      loadQuiz();
    } else {
      alert("Quiz finished!!");
    }
  })
  
  prevBtn.addEventListener('click', () => {
    correctAnswer.innerHTML = "Check Answer";
    correctAnswer.style.backgroundColor = "#000";
  
    currentQuiz--;
    if (currentQuiz >= 0) {
      loadQuiz();
    } else {
      currentQuiz++;
      alert("This is the first quiz");
    }
  })
  
  correctAnswer.addEventListener('click', (e) => {
    e.target.innerHTML = `Correct Answer: ${questions[currentQuiz].correct}`;
    e.target.style.backgroundColor = " rgb(57, 219, 65)";
  })