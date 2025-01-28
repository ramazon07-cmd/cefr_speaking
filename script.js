const examParts = [
  {
    level: "A1 - Beginner",
    duration: "5-7 minutes",
    description: "Basic interaction using simple phrases and expressions",
    parts: [
      {
        title: "Part 1: Introduction & Interview",
        duration: "2-3 minutes",
        description: "Simple personal questions",
        sampleQuestions: [
          "What is your name?",
          "Where are you from?",
          "Do you work or study?",
          "What time do you wake up?"
        ]
      },
      {
        title: "Part 2: Short Description",
        duration: "1-2 minutes",
        description: "Describe a simple topic (30 seconds preparation)",
        sampleQuestions: [
          "Describe your family.",
          "Talk about your home.",
          "Describe your daily routine.",
          "Talk about your favorite food."
        ]
      },
      {
        title: "Part 3: Simple Exchange",
        duration: "2 minutes",
        description: "Basic follow-up questions about Part 2 topic",
        sampleQuestions: [
          "Do you like spending time with your family?",
          "What do you eat for breakfast?",
          "What time do you go to bed?",
          "Do you like cooking?"
        ]
      }
    ]
  },
  {
    level: "A2 - Elementary",
    duration: "7-10 minutes",
    description: "Simple exchanges about familiar topics and daily routines",
    parts: [
      {
        title: "Part 1: Introduction & Interview",
        duration: "3-4 minutes",
        description: "Questions about familiar topics",
        sampleQuestions: [
          "What do you usually do on weekends?",
          "Tell me about your friends.",
          "What kind of food do you like?",
          "Do you prefer summer or winter?"
        ]
      },
      {
        title: "Part 2: Topic Description",
        duration: "2-3 minutes",
        description: "Describe a familiar topic (45 seconds preparation)",
        sampleQuestions: [
          "Describe your best friend.",
          "Talk about your favorite hobby.",
          "Describe your neighborhood.",
          "Talk about a typical day in your life."
        ]
      },
      {
        title: "Part 3: Basic Discussion",
        duration: "2-3 minutes",
        description: "Simple discussion about Part 2 topic",
        sampleQuestions: [
          "Why do you like this hobby?",
          "How often do you do this activity?",
          "Would you recommend this to others?",
          "What other activities do you enjoy?"
        ]
      }
    ]
  },
  {
    level: "B1 - Intermediate",
    duration: "10-12 minutes",
    description: "Express opinions on familiar subjects and explain experiences",
    parts: [
      {
        title: "Part 1: Introduction & Interview",
        duration: "3-4 minutes",
        description: "Questions about experiences and preferences",
        sampleQuestions: [
          "What kind of movies do you enjoy and why?",
          "Tell me about your last vacation.",
          "What do you like about your job/studies?",
          "How do you prefer to learn new things?"
        ]
      },
      {
        title: "Part 2: Extended Description",
        duration: "3-4 minutes",
        description: "Describe a topic in detail (1 minute preparation)",
        sampleQuestions: [
          "Describe a memorable journey you have taken.",
          "Talk about an interesting person you know.",
          "Describe a place you like to visit.",
          "Talk about a skill you would like to learn."
        ]
      },
      {
        title: "Part 3: Topic Discussion",
        duration: "4 minutes",
        description: "Discussion related to Part 2 topic",
        sampleQuestions: [
          "Why do people enjoy traveling?",
          "What makes someone interesting?",
          "How do people choose their hobbies?",
          "What's the best way to learn new skills?"
        ]
      }
    ]
  },
  {
    level: "B2 - Upper Intermediate",
    duration: "12-15 minutes",
    description: "Discuss complex topics and express viewpoints clearly",
    parts: [
      {
        title: "Part 1: Introduction & Interview",
        duration: "4-5 minutes",
        description: "Questions about abstract topics and opinions",
        sampleQuestions: [
          "How has technology changed education?",
          "What are your views on social media?",
          "How do you think work will change in the future?",
          "What environmental issues concern you most?",
          "Can you tell me about a book or movie that left a lasting impression on you?",
          "How do you usually spend your weekends?"
        ]
      },
      {
        title: "Part 2: Detailed Presentation",
        duration: "4-5 minutes",
        description: "Present a complex topic (1 minute preparation)",
        sampleQuestions: [
          "Describe a significant change in your society.",
          "Talk about an achievement you're proud of.",
          "Describe a technological innovation.",
          "Talk about a social issue you care about.",
          "Talk about a place you’ve visited that you found interesting.",
          "Talk about a goal you want to achieve in the next five years."
        ]
      },
      {
        title: "Part 3: In-depth Discussion",
        duration: "4-5 minutes",
        description: "Complex discussion about Part 2 topic",
        sampleQuestions: [
          "How does social change affect different generations?",
          "What role does technology play in modern life?",
          "How can society address environmental challenges?",
          "What factors influence career choices today?",
          "What are the benefits and drawbacks of living in a fast-paced world?",
          "Do you think it’s important to have hobbies? Why or why not?"
        ]
      }
    ]
  },
  {
    level: "C1 - Advanced",
    duration: "15-18 minutes",
    description: "Express ideas fluently and spontaneously on complex topics",
    parts: [
      {
        title: "Part 1: Introduction & Interview",
        duration: "5-6 minutes",
        description: "Complex personal and abstract topics",
        sampleQuestions: [
          "How has globalization affected your field of work?",
          "What cultural changes have you observed in your lifetime?",
          "How do economic policies impact daily life?",
          "What role should technology play in education?"
        ]
      },
      {
        title: "Part 2: Analytical Presentation",
        duration: "5-6 minutes",
        description: "Analyze a complex topic (1 minute preparation)",
        sampleQuestions: [
          "Analyze a major change in your professional field.",
          "Discuss the impact of a significant historical event.",
          "Evaluate the role of media in modern society.",
          "Examine the future of urban development."
        ]
      },
      {
        title: "Part 3: Critical Discussion",
        duration: "5-6 minutes",
        description: "In-depth analysis of Part 2 topic",
        sampleQuestions: [
          "How do societal values influence development?",
          "What factors drive technological innovation?",
          "How can communities balance growth and sustainability?",
          "What role should government play in social change?"
        ]
      }
    ]
  },
  {
    level: "C2 - Mastery",
    duration: "18-20 minutes",
    description: "Express complex ideas with precision, fluency, and nuanced meaning",
    parts: [
      {
        title: "Part 1: Introduction & Interview",
        duration: "6-7 minutes",
        description: "Sophisticated academic and professional discourse",
        sampleQuestions: [
          "How do paradigm shifts occur in your field?",
          "What philosophical principles guide your work?",
          "How do you evaluate competing theoretical frameworks?",
          "What methodological approaches do you prefer?"
        ]
      },
      {
        title: "Part 2: Expert Presentation",
        duration: "6-7 minutes",
        description: "Present an expert analysis (1 minute preparation)",
        sampleQuestions: [
          "Analyze the intersection of technology and ethics.",
          "Evaluate a significant development in your field.",
          "Examine the future of global governance.",
          "Discuss the evolution of social institutions."
        ]
      },
      {
        title: "Part 3: Theoretical Discussion",
        duration: "6 minutes",
        description: "Advanced theoretical discussion of Part 2 topic",
        sampleQuestions: [
          "How do theoretical frameworks shape understanding?",
          "What paradigms influence policy development?",
          "How do systems adapt to complex change?",
          "What role do institutions play in social evolution?"
        ]
      }
    ]
  }
];

// State
let activePartIndex = 0;
let activeLevelIndex = 0;
let currentQuestionIndex = 0;
let isTimerRunning = false;
let seconds = 0;
let timerInterval;

// DOM Elements
const partsNav = document.getElementById('parts-nav');
const partTitle = document.getElementById('part-title');
const partDescription = document.getElementById('part-description');
const currentQuestion = document.getElementById('current-question');
const timerDisplay = document.getElementById('timer');
const toggleTimerBtn = document.getElementById('toggle-timer');
const timerText = document.getElementById('timer-text');
const resetTimerBtn = document.getElementById('reset-timer');
const nextQuestionBtn = document.getElementById('next-question');
const subPartsNav = document.getElementById('sub-parts-nav');

// Initialize parts navigation
function initializePartsNav() {
  examParts.forEach((part, index) => {
    const button = document.createElement('button');
    button.className = `part-button ${index === activeLevelIndex ? 'active' : ''}`;
    button.innerHTML = `
      <div class="part-button-title">${part.level}</div>
      <div class="part-button-duration">${part.duration}</div>
    `;
    button.addEventListener('click', () => setActiveLevel(index));
    partsNav.appendChild(button);
  });
  updateSubPartsNav();
}

// Set active level
function setActiveLevel(index) {
  activeLevelIndex = index;
  activePartIndex = 0;
  currentQuestionIndex = 0;
  updateUI();
  updateSubPartsNav();
  
  // Update navigation buttons
  const buttons = partsNav.querySelectorAll('.part-button');
  buttons.forEach((button, i) => {
    button.className = `part-button ${i === index ? 'active' : ''}`;
  });
}

// Update sub-parts navigation
function updateSubPartsNav() {
  subPartsNav.innerHTML = '';
  examParts[activeLevelIndex].parts.forEach((part, index) => {
    const button = document.createElement('button');
    button.className = `sub-part-button ${index === activePartIndex ? 'active' : ''}`;
    button.innerHTML = `
      <div class="sub-part-button-title">${part.title}</div>
      <div class="sub-part-button-duration">${part.duration}</div>
    `;
    button.addEventListener('click', () => setActivePart(index));
    subPartsNav.appendChild(button);
  });
}

// Set active part
function setActivePart(index) {
  activePartIndex = index;
  currentQuestionIndex = 0;
  updateUI();
  
  // Update sub-parts navigation buttons
  const buttons = subPartsNav.querySelectorAll('.sub-part-button');
  buttons.forEach((button, i) => {
    button.className = `sub-part-button ${i === index ? 'active' : ''}`;
  });
}

// Update UI
function updateUI() {
  const currentLevel = examParts[activeLevelIndex];
  const currentPart = currentLevel.parts[activePartIndex];
  partTitle.textContent = currentPart.title;
  partDescription.textContent = currentPart.description;
  currentQuestion.textContent = currentPart.sampleQuestions[currentQuestionIndex];
}

// Timer functions
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function toggleTimer() {
  isTimerRunning = !isTimerRunning;
  
  if (isTimerRunning) {
    timerInterval = setInterval(() => {
      seconds++;
      timerDisplay.textContent = formatTime(seconds);
    }, 1000);
    toggleTimerBtn.className = 'button running';
    timerText.textContent = 'Pause';
  } else {
    clearInterval(timerInterval);
    toggleTimerBtn.className = 'button';
    timerText.textContent = 'Start';
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  seconds = 0;
  timerDisplay.textContent = formatTime(seconds);
  toggleTimerBtn.className = 'button';
  timerText.textContent = 'Start';
}

function nextQuestion() {
  const currentPart = examParts[activeLevelIndex].parts[activePartIndex];
  currentQuestionIndex = (currentQuestionIndex + 1) % currentPart.sampleQuestions.length;
  updateUI();
}

// Event listeners
toggleTimerBtn.addEventListener('click', toggleTimer);
resetTimerBtn.addEventListener('click', resetTimer);
nextQuestionBtn.addEventListener('click', nextQuestion);

// Initialize
initializePartsNav();
updateUI();

let mediaRecorder;
let audioChunks = [];
const startButton = document.getElementById('start-recording');
const stopButton = document.getElementById('stop-recording');
const playButton = document.getElementById('play-recording');
const audioPlayer = document.getElementById('audio-player');

startButton.addEventListener('click', async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (event) => {
    audioChunks.push(event.data);
  };

  mediaRecorder.onstop = () => {
    const audioBlob = new Blob(audioChunks, { type: 'audio/mpeg' });
    audioChunks = [];
    const audioUrl = URL.createObjectURL(audioBlob);
    audioPlayer.src = audioUrl;
    audioPlayer.style.display = 'block';
    playButton.disabled = false;
  };

  mediaRecorder.start();
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
  mediaRecorder.stop();
  startButton.disabled = false;
  stopButton.disabled = true;
});

playButton.addEventListener('click', () => {
  audioPlayer.play();
});