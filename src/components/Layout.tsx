import Sidebar from "./Sidebar";

// import icons
import chatIcon from "/assets/chatmessage.svg";
import searchIcon from "/assets/search.svg";
import locationIcon from "/assets/location.svg";
import notificationIcon from "/assets/notificationbell.svg";
import userIcon from "/assets/user.svg";
import caretdownIcon from "/assets/caretdown.svg";
import plusIcon from "/assets/plus.svg";

const Layout = () => {
  return (
    <section>
      <div className="m-0 p-0 flex">
        <Sidebar />
        <div className="w-[70%]">
          <div className="flex justify-between px-1 md:px-6 py-4">
            <div className="border flex flex-row border-slate-200 rounded-lg text-slate-700">
              <div className="md:py-2 py-1 px-3 justify-center text-center flex md:gap-2 ">
                <img
                  src={searchIcon}
                  className="search-icon w-4 h-4 text-center my-auto"
                  alt="Search icon"
                />
                <span className="hidden md:block text-gray-600 md:pr-3 text-sm my-auto">
                  Search for house{" "}
                </span>
              </div>
              <div className="md:py-2 justify-center text-center flex gap-2 pr-1">
                <span> | </span>
                <span className="hidden md:block text-gray-600 my-auto text-sm">
                  location
                </span>
                <img
                  src={locationIcon}
                  className="location-icon w-4 h-4 text-center my-auto"
                  alt="Location icon"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="py-2 md:py-3 md:mb-3  mr-5 ml-2 justify-center text-center flex h-8 w-8 border rounded rounded-lg">
                <img
                  src={notificationIcon}
                  className="search-icon h-4 w-4 justify-center"
                  alt="Search icon"
                />
              </div>
              <div className="p-1 justify-center text-center flex gap-2 border border-slate-100 rounded-lg">
                <img
                  src={userIcon}
                  className="user-icon my-auto w-6 h-6 text-center rounded-full justify-center"
                  alt="User icon"
                />
                <span className="text-gray-600 my-auto justify-center text-sm">
                  John Doe
                </span>
                <img
                  src={caretdownIcon}
                  className="caret-down-icon w-3 my-auto h-3"
                  alt="Caret down icon"
                />
              </div>
            </div>
          </div>
          <div className="my-auto h-[65vh] flex justify-center">
            <div className="w-1/2 mx-auto my-auto text-center">
              <div className="">
                <img
                  src={chatIcon}
                  className="chat-icon opacity-45 text-gray-600 mx-auto w-10 h-10 mt-1"
                  alt="Chat icon"
                />
              </div>
              <p>No chats</p>
              <p className="break-words">
                You have not received or send anyone a
                <br /> message
              </p>

              <div className="md:w-[60%] py-4 mx-auto">
                <button className="py-4 w-full border justify-center text-center flex gap-2 rounded-lg  bg-light-blue">
                  <img
                    src={plusIcon}
                    className="Add-icon w-4 h-4 mt-1 ml-1"
                    alt="Add icon"
                  />
                  <span className="text-white text-xs md:text-base">
                    Add a person
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
