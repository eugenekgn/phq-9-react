import React, {Component} from 'react';
import classnames from 'classnames';

class FormHeader extends Component {
  render() {
    const {header} = this.props;
    return (
      <div className="page-header">
        <h1 className={classnames({'text-uppercase': header.options.allCaps})}>{header.text}
          <br/>
          {header.subText}
        </h1>
      </div>
    );
  }
}

FormHeader.defaultProps = {
  header: 'text'
};


export default FormHeader;