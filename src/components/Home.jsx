
import "./style.css"
import React from 'react';
import Op from './Oppenheimer.jpg'
import Bar from './barbie.jpeg'
import JW from './JW.jpeg'
import MI from './MI.webp'
import MK from './monkeyking.jpeg'



function Home() {

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <h1 className="logo">NetMovies</h1>
          </div>
          <div className="menu-container">
            <ul className="menu-list">
              <li className="menu-list-item">Home</li>
              <li className="menu-list-item">Movies</li>
              <li className="menu-list-item">Trends</li>
            </ul>
          </div>
          <div className="search">
            <input type="text" placeholder="Search Movies" />
            <div className="button-wrapper">
              <button className="button">Sign In</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content-container">
          <div className="featured-movie">
            <h1 className="featured-title">GODZILLA</h1>
            <p className="featured-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              illo dolor deserunt nam assumenda ipsa eligendi dolore, ipsum id
              fugiat quo enim impedit, laboriosam omnis minima voluptatibus
              incidunt. Accusamus, provident.
            </p>
            <button className="featured-button">STREAM NOW</button>
          </div>
          <div className="movie-list-container">
            <h1 className="movie-list-title">NEW RELEASES</h1>
            <div className="movie-list-wrapper">
              <div className="movie-list">
                <div className="movie-list-item">
                  <img className="movie-list-item-img" src={Op} alt="" />
                  <button className="watchButton">STREAM NOW</button>
                </div>
                <div className="movie-list-item">
                  <img className="movie-list-item-img" src={MI} alt="" />
                  <button className="watchButton">STREAM NOW</button>
                              </div>
                               <div className="movie-list-item">
                  <img className="movie-list-item-img" src={MK}  alt="" />
                  <button className="watchButton">STREAM NOW</button>
                </div>
                <div className="movie-list-item">
                  <img className="movie-list-item-img" src={Bar} alt="" />
                  <button className="watchButton">STREAM NOW</button>
                              </div>
                               <div className="movie-list-item">
                  <img className="movie-list-item-img" src={JW}  alt="" />
                  <button className="watchButton">STREAM NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* Closing div for "container" */}

      <div className="featured-movie2">
        <h1 className="featured-title">THE WITCHER</h1>
        <p className="featured-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto illo
          dolor deserunt nam assumenda ipsa eligendi dolore, ipsum id fugiat
          quo enim impedit, laboriosam omnis minima voluptatibus incidunt.
          Accusamus, provident.
        </p>
        <button className="featured-button">STREAM NOW</button>
      </div>
    </>
  );
}

export default Home;
