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
    this.buildQuestions = this.buildQuestions.bind(this);
  }

  onChange(e) {
    this.props.setAnswer({
      [e.target.name]: parseInt(e.target.value, 10)
    });
  }

  buildQuestions(questions){
   return questions.map(qc =>
      <FormQuestion
        key={shortid.generate()}
        number={qc.questionNum}
        questionText={qc.questionText}
        type="radio"
        answers={qc.answers}
        onChange={this.onChange}/>);
  }

  render() {

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
        {this.buildQuestions(data.questions)}

        <div className="row form-answers">
          <div className="col-md-2 col-md-offset-6">
            <label className="office-label">For Office Use Only</label>
          </div>
          <div className="col-md-1">
            <input className="count" type="text" name="country" value="0" readonly/>
            <strong className="plus">+</strong>
          </div>
          <div className="col-md-1">
            <input className="count" type="text" name="country" value="0" readonly/>
            <strong className="plus">+</strong>
          </div>
          <div className="col-md-1">
            <input className="count" type="text" name="country" value="0" readonly/>
            <strong className="plus">+</strong>
          </div>
          <div className="col-md-1">
            <input className="count" type="text" name="country" value="0" readonly/>
          </div>
        </div>
        <div className="row total-answer">
          <div className="col-md-2 col-md-offset-9">
            <label className="office-label">= Total Score</label>
          </div>
          <div className="col-md-1">
            <input className="count" type="text" name="country" value="0" readonly/>
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
  console.log(state);
  return {
    state: state.phq9Answers
}
};

export default connect(mapStateToProps, {setAnswer})(Phq9Page);

