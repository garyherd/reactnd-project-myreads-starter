import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

  static propTypes = {
    updateShelf: PropTypes.func.isRequired,
    //bookData: PropTypes.object.isRequired
    bookData: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array,
      imageLinks: PropTypes.object.isRequired
    })
  };

  handleOnChange = (event) => this.props.updateShelf(this.props.bookData, event.target.value);
  

  render() {

    const book = this.props.bookData;

    //Returns empty string if there's no URL provided in the data object
    const backgroundImgStr = book.imageLinks ? `url(${ this.props.bookData.imageLinks.thumbnail })` : '';

    const coverStyle = {
      width: 128,
      height: 193,
      backgroundImage: backgroundImgStr
    }
    
    // Return emppy string if there are no authors provides in data object
    const authors = book.authors ? book.authors.join() : '';

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={ coverStyle }></div>
          <div className="book-shelf-changer">
            <select value={ book.shelf } onChange={ this.handleOnChange }>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }


}

export default Book;