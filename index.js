const monthFormElem = document.getElementById('month-form');
const monthElem = document.getElementById('month');
const warningFeedbackElem = document.getElementById('warning-feedback');

const links = {
  "Q1": "https://forms.gle/7qUsMiVVAtLuugHy6",
  "Q2": "https://forms.gle/KoZNhJRtr9r269DE7",
  "Q3": "https://forms.gle/h8JziBwXAyaX4nmP7",
  "Q4": "https://forms.gle/qDXpVTYHGDtqgCs8A"
};

const months = {
    "styczeń": "Q1",
    "luty": "Q1",
    "marzec": "Q1",
    "kwiecień": "Q2",
    "maj": "Q2",
    "czerwiec": "Q2",
    "lipiec": "Q3",
    "sierpień": "Q3",
    "wrzesień": "Q3",
    "październik": "Q4",
    "listopad": "Q4",
    "grudzień": "Q4"
};

function redirectToSurvey () {
  if(monthElem.value) {
    warningFeedbackElem.style.display='none';
    const codeLink = months[monthElem.value];
    const formLink = links[codeLink];
    if (formLink) {
      window.location.href = formLink;
    };
  } else {
    warningFeedbackElem.style.display='block';
  };
};

monthFormElem.addEventListener('submit', (e) => {
  e.preventDefault();
  redirectToSurvey();
});

monthElem.addEventListener('change', () => {
  warningFeedbackElem.style.display='none';
});