import CLOUD_FULL from '../assets/cloud-full.png';
import Card from '../components/Card';
import Footer from '../components/Footer';
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
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 max-w-5xl mx-auto mt-10 mb-20">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <Footer/>
        </div>
    </div>
  );
}

export default Home;