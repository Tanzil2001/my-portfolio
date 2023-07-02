import loader from '../assets/tech/96142-dots-loader.gif';

const Loader = () => {
  return (
    <div className="loader bg-[#2a2c39] flex justify-center items-center h-screen">
      <div className="w-32">
        <img className="mx-auto rounded-full shadow-xl shadow-blue-600" src={loader} alt="" />
      </div>
    </div>
  );
};

export default Loader;