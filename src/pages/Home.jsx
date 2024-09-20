import { Link } from "react-router-dom";
import animal from "../assets/bear.jpg"
import bird from "../assets/bird.jpg"
import insect from "../assets/insect.jpg"
import fish from "../assets/fish.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <Link to="/animals" className="category-link">
        <img
          // src="https://source.unsplash.com/800x800/?mammal+reptile"
          src={animal}
          alt="animal"
        />
        <div className="category-title">Animals</div>
      </Link>
      <Link to="/birds" className="category-link">
        <img 
        // src="https://source.unsplash.com/800x800/?bird" alt="bird" 
        src={bird}
        />
        <div className="category-title">Birds</div>
      </Link>
      <Link to="/insects" className="category-link">
        <img 
        // src="https://source.unsplash.com/800x800/?insect" alt="insect"
        src={insect}
        />
        <div className="category-title">Insects</div>
      </Link>
      <Link to="/fishes" className="category-link">
        <img 
        // src="https://source.unsplash.com/800x800/?fish" alt="fish" 
        src={fish}
        />
        <div className="category-title">Fish</div>
      </Link>
    </div>
  );
};

export default Home;
