import Sidebar from "../sidebar";
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
                <span className="text-gray-600 md:pr-3 text-sm my-auto">
                  Search for house{" "}
                </span>
              </div>
              <div className="md:py-2 justify-center text-center flex gap-2 pr-1">
                <span> | </span>
                <span className="text-gray-600 my-auto text-sm">location</span>
                <img
                  src={locationIcon}
                  className="location-icon w-4 h-4 text-center my-auto"
                  alt="Location icon"
                />
              </div>
            </div>
            <div className="flex flex-row">
              {/* create its own border */}
              <div className="py-2 mr-5 ml-2 justify-center text-center flex h-8 w-8 border rounded rounded-lg">
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
          <div className="my-auto h-[50vh] flex justify-center">
            <div className="w-1/2 mx-auto my-auto text-center">
              <div className="">
                <img
                  src={chatIcon}
                  className="chat-icon opacity-45 text-gray-600 mx-auto w-10 h-10 mt-1"
                  alt="Chat icon"
                />
              </div>
              <p>No chats</p>
              <span>You have not received or send anyone a message</span>

              <div className="mr-2 md:mr-4 px-auto pr-1 md:pr-5 bg-light-blue">
                <button className="md:px-4 md:py-2 mt-8 w-full border text-center flex gap-2 border-slate-200 text-slate-700">
                  <img
                    src={plusIcon}
                    className="chat-icon w-4 h-4 md:text-center mt-1 ml-1"
                    alt="Chat icon"
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
