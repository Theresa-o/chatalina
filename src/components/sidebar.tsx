import homeIcon from "/assets/home.svg";
import chatIcon from "/assets/chatmessage.svg";
import logoutIcon from "/assets/logout.svg";

const Sidebar = () => {
  return (
    <section className="w-[25%]">
      <div className="w-full bg-light-blue m-0 p-0 h-[100vh] relative">
        <div className="pt-6 ml-4">
          <div className="flex flex-row gap-2 justify-center">
            <img
              src={homeIcon}
              className="home-icon text-white"
              alt="Home icon"
            />
            <p className="mt-5 mr-4 text-sm md:text-base lg:text-lg text-white">
              Home
            </p>
          </div>
          {/* space between */}
          <div className="">
            <div className="md:mx-2 pr-4 w-full md:pr-7">
              <button className="md:px-4 md:py-2 mt-8 bg-[#FFFFFF1A] w-full border text-center flex gap-2">
                <img
                  src={chatIcon}
                  className="hidden md:block chat-icon w-4 h-4 md:text-center mt-1 ml-1"
                  alt="Chat icon"
                />
                <span className="py-auto mx-auto md:mx-0 text-white text-xs md:text-base">
                  Messages
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 w-full md:mx-2 pr-4 pl-4 md:pl-0 w-full md:pr-7">
          <button className="md:px-4 md:py-2 md:mt-40 w-full border justify-center text-center flex gap-2 rounded-lg bg-[#FFEBEB]">
            <img
              src={logoutIcon}
              className="hidden md:block logout-icon w-4 h-4 text-center mt-1 ml-1"
              alt="Logout icon"
            />
            <span className="text-red-600">Log out</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;