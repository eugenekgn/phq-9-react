import React, {Component} from 'react';
import classnames from 'classnames';

class FormHeader extends Component {
  render() {
    const {header} = this.props;
    return (
      <div>{header.text}</div>
    );
  }
}

FormHeader.defaultProps = {
  header: 'text'
};


export default FormHeader;