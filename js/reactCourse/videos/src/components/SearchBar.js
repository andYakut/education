import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onChangeInput = event => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text" vlaue={this.state.term} onChange={this.onChangeInput} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;