import React from "react";

const Images = ({ items, loading }) => {
  if (loading) {
    return (
      <div className='loader'>
        <i className='fa fa-spinner' aria-hidden='true'></i>
      </div>
    );
  }
  if (items != null) {
    return (
      <div className='images'>
        {items.map((item) => (
          <img key={item.id} src={item.urls.thumb} alt='nope' />
        ))}
      </div>
    );
  } else {
    return (
      <div className='loader'>
        <p>No Results</p>
      </div>
    );
  }
};

export default Images;
