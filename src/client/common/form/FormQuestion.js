import React from 'react';
import classnames from 'classnames';

const buildAnswers = (number, answers, onChange) => {

  const builtAnswers = [];
  for (let index = 0; index <= answers.scale; index++) {
    const questionNumPrefix = `question${number}`;

    builtAnswers.push(
      <div key={`${questionNumPrefix}${index}`} className="col-md-1 form-radio" onChange={onChange}>
        <input key={`q${questionNumPrefix}${index}`} type="radio" name={questionNumPrefix} value={index}/> {index}
      </div>)
  }
  return builtAnswers;
};

const buildRadioInputGroup = (number, questionText, answers, onChange) => {
  return <div className="row form-question">
    <div className="col-md-8">
            <span>
              <strong>{number}.</strong> {questionText}
            </span>
    </div>

    {buildAnswers(number, answers, onChange)}
  </div>
};

const FormQuestion = ({number, questionText, type, answers, onChange}) => {

  if (type === 'radio') {
    return (buildRadioInputGroup(number, questionText, answers, onChange));
  }

};

FormQuestion.propTypes = {
  number: React.PropTypes.string.isRequired,
  questionText: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  answers: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
};

FormQuestion.defaultProps = {
  type: 'text'
};

export default FormQuestion;