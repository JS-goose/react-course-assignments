import React, { Component } from 'react';

class Input extends Component {
  render() {
    let warning = null;
    

    if (this.props.length <= 5) {
      warning = (<p>Your word length is too short</p>)
    } else if (this.props.length > 5) {
      warning = (<p>Your word length is long enough</p>)
    }
    return (
      <div>
        {warning}
      </div>
    );
  }
}

export default Input;
