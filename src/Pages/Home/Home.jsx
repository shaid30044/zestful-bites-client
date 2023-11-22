import { Helmet } from "react-helmet-async";
import Slider from "../../Components/Home/Slider";
import ItemSlides from "../../Components/Home/ItemSlides";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Zestful Bites</title>
      </Helmet>

      <Slider />
      <ItemSlides />
    </div>
  );
};

export default Home;
