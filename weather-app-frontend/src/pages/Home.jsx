import Card from '../components/Card';
import cardData from '../assets/data.json';

const Home = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 max-w-5xl mx-auto mt-10 mb-20">
      {cardData.map((data, index) => (
        <Card key={index} {...data}/>
      ))}
    </div>
  );
}

export default Home;