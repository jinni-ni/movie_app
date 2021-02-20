import React from "react";
import PropTypes from "prop-types";

function Food(props) {
  return (
    <div>
      <h1>I like {props.name}</h1>
      <h4>{props.rating}/5.0</h4>
      <img src={props.picture} alt={props.name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimch",
    image:
      "https://steemitimages.com/DQmUCKzQx9R5UTHwm91PwyUv236V1SJeJXFaN8C5sJW4GEM/2c77e779b5a5caa8d129a105a34e677a093927.jpg",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://img.insight.co.kr/static/2018/10/01/700/m728y0d37vzj15905uw5.jpg",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://pbs.twimg.com/media/CehYjohWEAAIV5U.jpg",
    rating: 3.2,
  },
  {
    id: 4,
    name: "Doncasu",
    image: "http://cfile227.uf.daum.net/image/267BEF39526FD2712E5819",
    rating: 2.7,
  },
  {
    id: 5,
    name: "Kimbab",
    image: "https://i.ytimg.com/vi/jjO7GLgvnck/maxresdefault.jpg",
    rating: 3.7,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
