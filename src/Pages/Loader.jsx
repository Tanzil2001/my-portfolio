import loader from '../assets/tech/96142-dots-loader.gif';

const Loader = () => {
  return (
    <div className="loader bg-white flex justify-center items-center h-screen">
      <div className="w-32">
        <img className="mx-auto" src={loader} alt="" />
      </div>
    </div>
  );
};

export default Loader;