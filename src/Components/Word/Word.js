import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ text }) => {
  return (
    <div>
      { text }
    </div>
  )
}

Word.propTypes = {
  text: PropTypes.string
}

export default Word;