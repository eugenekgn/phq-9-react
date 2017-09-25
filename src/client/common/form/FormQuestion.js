import React from 'react';
import classnames from 'classnames';


const FormQuestion = ({field, value, label, error, type, onChange}) => {

};

FormQuestion.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

FormQuestion.defaultProps = {
  type: 'text'
};

export default FormQuestion;