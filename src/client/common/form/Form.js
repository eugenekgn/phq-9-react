import React, {Component} from 'react'
import FormHeader from './FormHeader';
import FormQuestion from './FormQuestion';


class Form extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const {header} = this.props.formData;

    return (
      <form>
        <FormHeader header={header}/>
        {/*{questions}*/}
      </form>
    )
  }
}

FormQuestion.propTypes = {
  formData: React.PropTypes.object.isRequired,
};

export default Form;