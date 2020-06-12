import React from "react";

const Images = ({ items, loading }) => {
  if (loading) {
    return <h1>Loading ...</h1>;
  }
  if (items !== "") {
    return (
      <div className='images'>
        {items.map((item) => (
          <img key={item.id} src={item.urls.thumb} alt='nope' />
        ))}
      </div>
    );
  } else {
    return (
      <div className='Loader'>
        <p>Please Wait</p>
      </div>
    );
  }
};

export default Images;
