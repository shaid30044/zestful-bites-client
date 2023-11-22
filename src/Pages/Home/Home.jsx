import { Helmet } from "react-helmet-async";
import Slider from "../../Components/Home/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Zestful Bites</title>
      </Helmet>

      <Slider />
    </div>
  );
};

export default Home;
