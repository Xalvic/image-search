import React, { useState, useEffect } from "react";
import Images from "../components/images";
// import Pagination from "../components/Pagination";

//pexels = 563492ad6f91700001000001168dabfa7f044c308c99253ed1cc1ec9

const Home = () => {
  const [search, setSearch] = useState("Nature");
  const [totalPages, setTotalPages] = useState("");
  const [pages, setPages] = useState(0);
  const [incre, setIncre] = useState(10);
  const [decre, setDecre] = useState(0);
  const [orientation, setOrientation] = useState("");
  const [color, setColor] = useState("");
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [orishow, setOrishow] = useState(false);
  const [colorshow, setColorshow] = useState(false);

  function handle(event) {
    setSearch(event.target.value);
  }
  function handlePage(event) {
    setPages(event.target.innerText);
  }

  useEffect(() => {
    async function getPics() {
      setLoading(true);
      try {
        const data = await fetch(
          `https://api.unsplash.com/search/photos?page=${pages}&query=${search}${orientation}${color}&client_id=9uYM1aJn8GtEssmu7DpzHFEZpLO_ERgX1DwsNYX9pSw`
        );
        const urls = await data.json();
        console.log(urls.results);
        setItems(urls.results);
        setLoading(false);
        setTotalPages(urls.total_pages);
      } catch (error) {
        console.log(error);
      }
      //   setOrientation("");
      //   setColor("");
    }
    // setTimeout(() => {
    getPics();
    // }, 3000);
    // return () => clearTimeout();
  }, [search, pages, orientation, color]);
  //   console.log(items);
  //   console.log(search);
  console.log(totalPages);

  const ori = () => {
    setOrishow(!orishow);
  };
  const colo = () => {
    setColorshow(!colorshow);
  };

  const sliced = [...new Array(totalPages).keys()].slice(decre, incre);
  return (
    <div className='Home'>
      <div className='main-field'>
        <input
          type='text'
          name='search-field'
          id='search-field'
          placeholder='Search for images'
          value={search}
          onChange={handle}
        />

        <div className='filter'>
          <div className='ori'>
            <div className='orientation-select' onClick={ori}>
              <p>Select Orientation </p> <i className='fa fa-sort-down'></i>
            </div>
            <ul className={orishow ? "list" : "none"}>
              <li
                className='orientation'
                onClick={() => setOrientation("&orientation=landscape")}
              >
                <i className='fa fa-image'></i> <p>Landscape</p>
              </li>
              <li
                className='orientation'
                onClick={() => setOrientation("&orientation=portrait")}
              >
                <i className='fa fa-portrait'></i> <p>&nbsp;Portrait</p>
              </li>
              <li
                className='orientation'
                onClick={() => setOrientation("&orientation=squarish")}
              >
                <i className='far fa-square'></i> <p>Squarish</p>
              </li>
            </ul>
          </div>
          <div className='colo'>
            <div className='color-select' onClick={colo}>
              <p>Select Colors </p> <i className='fa fa-sort-down'></i>
            </div>
            <ul className={colorshow ? "list" : "none"}>
              <li
                className='colors'
                onClick={() => setColor("&color=black_and_white")}
              >
                Black & White
              </li>
              <li
                className='colors'
                onClick={() => setColor("&color=black")}
              ></li>
              <li
                className='colors'
                onClick={() => setColor("&color=white")}
              ></li>
              <li
                className='colors'
                onClick={() => setColor("&color=yellow")}
              ></li>
              <li
                className='colors'
                onClick={() => setColor("&color=orange")}
              ></li>
              <li
                className='colors'
                onClick={() => setColor("&color=red")}
              ></li>
              <li
                className='colors'
                onClick={() => setColor("&color=purple")}
              ></li>
              <li
                className='colors'
                onClick={() => setColor("&color=magenta")}
              ></li>
              <li
                className='colors'
                onClick={() => setColor("&color=magenta")}
              ></li>
              <li
                className='colors'
                onClick={() => setColor("&color=teal")}
              ></li>
              <li
                className='colors'
                onClick={() => setColor("&color=blue")}
              ></li>
            </ul>
          </div>
        </div>
      </div>

      <Images items={items} loading={loading} />
      <div className='pagination'>
        {sliced.map((pageNumber) => (
          <p onClick={handlePage}>{pageNumber + 1}</p>
        ))}
      </div>
      {totalPages > 10 && (
        <div className='page-buttons'>
          <button
            onClick={() => {
              if (decre !== 0 && incre !== 10) {
                setIncre(incre - 10);
                setDecre(decre - 10);
                setPages(pages - 10);
              }
            }}
          >
            Prev Section
          </button>
          <button
            onClick={() => {
              if (incre < totalPages) {
                setIncre(incre + 10);
                setDecre(decre + 10);
                setPages(pages + 11);
              }
            }}
          >
            Next Section
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
