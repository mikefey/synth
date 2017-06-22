import React from 'react';
import PropTypes from 'prop-types';
import style from './ShowOptionsButton.scss';

const ShowOptionsButton = (props) => {
  const renderIcon = () => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
        <path style="text-indent:0;text-align:start;line-height:normal;text-transform:none;block-progression:tb;-inkscape-font-specification:Sans" d="M 16 2 C 14.35503 2 13 3.3550302 13 5 L 13 7 L 3 7 A 1.0001 1.0001 0 0 0 2.90625 7 A 1.001098 1.001098 0 0 0 3 9 L 13 9 L 13 11 C 13 12.64497 14.35503 14 16 14 L 18 14 C 19.64497 14 21 12.64497 21 11 L 21 5 C 21 3.3550302 19.64497 2 18 2 L 16 2 z M 16 4 L 18 4 C 18.56503 4 19 4.4349698 19 5 L 19 11 C 19 11.56503 18.56503 12 18 12 L 16 12 C 15.43497 12 15 11.56503 15 11 L 15 8.1875 A 1.0001 1.0001 0 0 0 15 7.78125 L 15 5 C 15 4.4349698 15.43497 4 16 4 z M 22 7 L 22 9 L 43 9 L 47 9 A 1.0001 1.0001 0 1 0 47 7 L 43 7 L 22 7 z M 34 19 C 32.35503 19 31 20.35503 31 22 L 31 24 L 3 24 A 1.0001 1.0001 0 0 0 2.90625 24 A 1.001098 1.001098 0 0 0 3 26 L 31 26 L 31 28 C 31 29.64497 32.35503 31 34 31 L 36 31 C 37.64497 31 39 29.64497 39 28 L 39 22 C 39 20.35503 37.64497 19 36 19 L 34 19 z M 34 21 L 36 21 C 36.56503 21 37 21.43497 37 22 L 37 28 C 37 28.56503 36.56503 29 36 29 L 34 29 C 33.43497 29 33 28.56503 33 28 L 33 25.1875 A 1.0001 1.0001 0 0 0 33 24.78125 L 33 22 C 33 21.43497 33.43497 21 34 21 z M 40 24 L 40 26 L 44 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 44 24 L 40 24 z M 13 36 C 11.35503 36 10 37.35503 10 39 L 10 41 L 3 41 A 1.0001 1.0001 0 0 0 2.90625 41 A 1.001098 1.001098 0 0 0 2.8125 41 A 1.0043849 1.0043849 0 0 0 3 43 L 10 43 L 10 45 C 10 46.64497 11.35503 48 13 48 L 15 48 C 16.64497 48 18 46.64497 18 45 L 18 39 C 18 37.35503 16.64497 36 15 36 L 13 36 z M 13 38 L 15 38 C 15.56503 38 16 38.43497 16 39 L 16 45 C 16 45.56503 15.56503 46 15 46 L 13 46 C 12.43497 46 12 45.56503 12 45 L 12 42.1875 A 1.0001 1.0001 0 0 0 12 41.78125 L 12 39 C 12 38.43497 12.43497 38 13 38 z M 19 41 L 19 43 L 40 43 L 47 43 A 1.0001 1.0001 0 1 0 47 41 L 40 41 L 19 41 z"/>
    </svg>`;
  };

  return (
    <div
      className={style.wrapper}
      onClick={props.clickHandler}
      dangerouslySetInnerHTML={{ __html: renderIcon() }}
    />
  );
};


/**
 * PropTypes
 * @prop {Function} clickHandler - The button click handler
 */
ShowOptionsButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ShowOptionsButton;
