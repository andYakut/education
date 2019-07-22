import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../..//actions';
import StreamForm from './StreamForm';

class StreamCreater extends Component {
  onSubmitForm = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmitForm} />
      </div>
    )
  }
}

export default connect(null, { createStream })(StreamCreater);