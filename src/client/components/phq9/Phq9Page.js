import React, {Component} from 'react'
import FormHeader from '../../common/form/FormHeader';
import {connect} from 'react-redux';
import FormQuestion from "../../common/form/FormQuestion";
import {setAnswer} from '../../actions/phq9';
import data from './data';
import shortid from 'shortid';

class Phq9Page extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
  }

  onChange(e) {
    this.props.setAnswer({
      [e.target.name]: parseInt(e.target.value, 10)
    });
  }

  renderQuestions(questions, selectedItems = {}) {
    return questions.map(qc =>
      <FormQuestion
        key={shortid.generate()}
        number={qc.questionNum}
        questionText={qc.questionText}
        type="radio"
        answers={qc.answers}
        selectedItem={selectedItems[`question${qc.questionNum}`]}
        onChange={this.onChange}/>);
  }


  countTotal(answers) {
    const nameMap = ['zeroCount', 'oneCount', 'twoCount', 'threeCount'];

    return Object
      .values(answers)
      .reduce((accum, curr) => {
        if (curr > 0) {
          const sumPer = accum[nameMap[curr]] + curr;
          accum[nameMap[curr]] = sumPer;
          accum.total = accum.total + sumPer;
        }
        return accum;
      }, {oneCount: 0, twoCount: 0, threeCount: 0, total: 0});
  }

  render() {
    const {oneCount, twoCount, threeCount, total} = this.countTotal(this.props.answers);
    return (

      <div className="container">
        <FormHeader header={data.header}/>
        <div className="row form-sub-header">
          <div className="col-md-8">
            <strong>Over the <u>last 2 weeks</u>, how often have you been bothered <br/>
              by any of the following problems?</strong>
            <br/>
            <i>(Use “✔” to indicate your answer)</i>
          </div>
          <div className="col-md-1">Not at all</div>
          <div className="col-md-1">Several Days</div>
          <div className="col-md-1">More than half the days</div>
          <div className="col-md-1">Nearly every day</div>
        </div>
        {this.renderQuestions(data.questions, this.props.answers)}

        <div className="row form-answers">
          <div className="col-md-2 col-md-offset-6">
            <label className="office-label">For Office Use Only</label>
          </div>
          <div className="col-md-1">
            <input className="count" type="text" name="country" value="0" readOnly/>
            <strong className="plus">+</strong>
          </div>
          <div className="col-md-1">
            <input className="count" type="text" name="country" value={oneCount} readOnly/>
            <strong className="plus">+</strong>
          </div>
          <div className="col-md-1">
            <input className="count" type="text" name="country" value={twoCount} readOnly/>
            <strong className="plus">+</strong>
          </div>
          <div className="col-md-1">
            <input className="count" type="text" name="country" value={threeCount} readOnly/>
          </div>
        </div>
        <div className="row total-answer">
          <div className="col-md-2 col-md-offset-9">
            <label className="office-label">= Total Score</label>
          </div>
          <div className="col-md-1">
            <input className="count" type="text" name="country" value={total} readOnly/>
          </div>
        </div>

        <div className="row last-question">
          <p>If you checked off <u>any</u> problems, how <u>difficult</u> have these problems made it for you to
            do
            your
            work, take care of things at home, or get along with other people?
          </p>
          <label className="checkbox-inline"><input className="diff-input" type="radio" value=""/>Not difficult at
            all</label>
          <label className="checkbox-inline"><input className="diff-input" type="radio" value=""/>Somewhat
            difficult</label>
          <label className="checkbox-inline"><input className="diff-input" type="radio" value=""/>Very difficult</label>
          <label className="checkbox-inline"><input className="diff-input" type="radio" value=""/>Extreme
            difficult</label>
        </div>
        <footer>
          Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke and colleagues, with an educational
          grant from
          Pfizer Inc. No permission required to reproduce, translate, display or distribute.
        </footer>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    answers: state.phq9Answers
  }
};

export default connect(mapStateToProps, {setAnswer})(Phq9Page);

