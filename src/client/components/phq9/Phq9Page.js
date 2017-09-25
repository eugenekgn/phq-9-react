import React, {Component} from 'react'
import Form from '../../common/form/Form';
import {connect} from 'react-redux';

const phqData = {
  header: {
    text: 'Patient Heath Questionnaire-9 (PHQ-9)',
    options: {
      textCaps: true
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
      questionText: 'Little interest or pleasure in doing things',
      type: 'radio',
      answers: {
        scale: 3
      }
    },
    {
      questionNum: 2,
      questionText: 'Little interest or pleasure in doing things',
      type: 'radio',
      answers: {
        scale: 3
      }
    }, {
      questionNum: 3,
      questionText: 'Little interest or pleasure in doing things',
      type: 'radio',
      answers: {
        scale: 3
      }
    }, {
      questionNum: 4,
      questionText: 'Little interest or pleasure in doing things',
      type: 'radio',
      answers: {
        scale: 3
      }
    }, {
      questionNum: 5,
      questionText: 'Little interest or pleasure in doing things',
      type: 'radio',
      answers: {
        scale: 3
      }
    }, {
      questionNum: 6,
      questionText: 'Little interest or pleasure in doing things',
      type: 'radio',
      answers: {
        scale: 3
      }
    }, {
      questionNum: 7,
      questionText: 'Little interest or pleasure in doing things',
      type: 'radio',
      answers: {
        scale: 3
      }
    }, {
      questionNum: 8,
      questionText: 'Little interest or pleasure in doing things',
      type: 'radio',
      answers: {
        scale: 3
      }
    }, {
      questionNum: 9,
      questionText: 'Little interest or pleasure in doing things',
      type: 'radio',
      answers: {
        scale: 3
      }
    },
  ]
};

class Phq9Page extends Component {
  render() {
    return (
      <div className="container">
        <Form formData={phqData}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.userAnswers
  }
};

export default connect(mapStateToProps, {})(Phq9Page);

