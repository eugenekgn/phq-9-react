export default {
  header: {
    text: 'Patient Heath Questionnaire-9 ',
    subText: '(PHQ-9)',
    options: {
      allCaps: true
    }
  },
  questionInstructions: {
    text: 'Over the <i>last 2 weeks</i>',
    answers: [
      {text: 'Not at all'},
      {text: 'Several Days'},
      {text: 'More than half days'},
      {text: 'Nearly every dat'},
    ]
  },
  questions: [
    {
      questionNum: 1,
      questionText: 'Little interest or pleasure in doing things',
      type: 'radio',
      answers: {
        scale: 3
      }
    },
    {
      questionNum: 2,
      questionText: 'Feeling down, depressed, or hopeless',
      type: 'radio',
      answers: {
        scale: 3
      }
    },
    {
      questionNum: 3,
      questionText: 'Trouble falling or staying asleep, or sleeping too much',
      type: 'radio',
      answers: {
        scale: 3
      }
    }, {
      questionNum: 4,
      questionText: 'Feeling tired or having little energy ',
      type: 'radio',
      answers: {
        scale: 3
      }
    }, {
      questionNum: 5,
      questionText: 'Poor appetite or overeating',
      type: 'radio',
      answers: {
        scale: 3
      }
    }, {
      questionNum: 6,
      questionText: ' Feeling bad about yourself — or that you are a failure or\n' +
      'have let yourself or your family down ',
      type: 'radio',
      answers: {
        scale: 3
      }
    }, {
      questionNum: 7,
      questionText: ' Trouble concentrating on things, such as reading the\n' +
      'newspaper or watching television',
      type: 'radio',
      answers: {
        scale: 3
      }
    }, {
      questionNum: 8,
      questionText: ' Moving or speaking so slowly that other people could have\n' +
      'noticed? Or the opposite — being so fidgety or restless\n' +
      'that you have been moving around a lot more than usual ',
      type: 'radio',
      answers: {
        scale: 3
      }
    }, {
      questionNum: 9,
      questionText: 'Thoughts that you would be better off dead or of hurting\n' +
      'yourself in some way',
      type: 'radio',
      answers: {
        scale: 3
      }
    }

  ]
};
