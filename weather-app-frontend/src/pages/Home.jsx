import CLOUD_FULL from '../assets/cloud-full.png';
import Card from '../components/Card';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className='flex flex-col'>
        {/* background top section */}
        <div className="background-top absolute top-0 left-0 w-full">
            <img src={CLOUD_FULL} alt="full cloud image" className='-translate-y-1/3' />
        </div>
        {/* background bottom section */}
        <div className="background-bottom">
          <Header/>
          <div className="flex gap-10 mx-auto">
            <Card/>
          </div>
        </div>
    </div>
  );
}

export default Home;