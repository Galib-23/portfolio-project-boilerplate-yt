import meowImg from '../assets/meowlogo.png';

const Banner = () => {
  return (
    <div className="min-h-screen bg-orange-50 w-full flex justify-center items-center">
      <div className="flex w-full justify-between items-center max-w-5xl">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold uppercase">
            Hello, I am <br /> <span className="text-orange-400">Meow</span> The
            Dev
          </h2>
          <p>
            A curious coder who loves building cool <br /> stuff with clean code
            and a sprinkle of cat-titude{" "}
          </p>
          <button className="px-4 py-2 bg-orange-400 rounded-md text-sm border border-transparent hover:border-orange-400 hover:text-orange-400 hover:bg-transparent cursor-pointer transition shadow-sm hover:shadow-md">View CV</button>
        </div>
      </div>
      <img src={meowImg} alt="" className='h-96 border-y-4 rounded-2xl p-2 border-orange-400'/>
    </div>
  );
};

export default Banner;
