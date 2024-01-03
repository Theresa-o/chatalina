import homeIcon from '/assets/home.svg'
import chatIcon from '/assets/chatmessage.svg'
import logoutIcon from '/assets/logout.svg'
import searchIcon from '/assets/search.svg'
import locationIcon from '/assets/location.svg'
import notificationIcon from '/assets/notificationbell.svg'
import userIcon from '/assets/user.svg'
import caretdownIcon from '/assets/caretdown.svg'
import plusIcon from '/assets/plus.svg'

const Layout = () => {
  return (
    <section>
        <div className="m-0 p-0 flex h-screen">
            <div className="flex-shrink-0 w-1/5 bg-light-blue">
                 <div className='mt-6 pt-6 ml-4'>
                        <div className='flex flex-row gap-2 justify-center'>
                            <img src={homeIcon} className="home-icon text-white" alt="Home icon" />
                            <p className='mt-2 mr-4 text-sm md:text-base lg:text-lg text-white'>Home</p>
                        </div>
                        {/* space between */}
                    <div className='space-y-48'>
                        <div className="mr-2 md:mr-4 px-auto w-full pr-1 md:pr-5 ">
                            <button className="md:px-4 md:py-2 mt-8 w-full opacity-45 border text-center flex gap-2 border-slate-200 text-slate-700">
                                <img src={chatIcon} className="chat-icon w-4 h-4 md:text-center mt-1 ml-1" alt="Chat icon" />
                                <span className="text-white text-xs md:text-base">Messages</span>
                            </button>
                        </div>
                        <div className="md:mr-4 px-auto bg-white rounded-lg">
                            <button className="md:px-4 md:py-2 md:mt-40 w-full border justify-center text-center flex gap-2 border-slate-200 rounded-lg text-slate-700">
                                <img src={logoutIcon} className="logout-icon w-4 h-4 text-center mt-1" alt="Logout icon" />
                                <span className="text-red-600">Log out</span>
                            </button>
                        </div>
                    </div>
                 </div>
            </div>

        <div className="flex-grow">
            <div className='flex justify-between px-1 md:px-6 py-4'>
                <div className="border flex flex-row border-slate-200 rounded-lg text-slate-700">
                    <div className="md:py-2 py-1 px-3 justify-center text-center flex md:gap-2 ">
                        <img src={searchIcon} className="search-icon w-4 h-4 text-center mt-1" alt="Search icon" />
                        <span className="text-gray-600 md:pr-3 text-sm md:text-base lg:text-lg">Search for house </span>
                    </div>
                    <div className="md:py-2 justify-center text-center flex gap-2 pr-3">
                        <span> | </span>
                        <span className="text-gray-600 pl-3">location</span>
                        <img src={locationIcon} className="location-icon w-4 h-4 text-center mt-1" alt="Location icon" />
                    </div>
                </div>
                <div className="flex flex-row">
                    {/* create its own border */}
                    <div className="py-2 mr-5 ml-2 justify-center text-center flex h-8 w-8 border rounded rounded-lg">
                        <img src={notificationIcon} className="search-icon h-4 w-4 justify-center" alt="Search icon" />
                    </div>
                    <div className="pl-2 pt-2 justify-center text-center flex gap-2 border border-slate-100 rounded-lg">
                        <img src={userIcon} className="user-icon w-6 h-6 text-center mt-1 rounded-full justify-center" alt="Iser icon" />
                        <span className="text-gray-600 justify-center text-sm md:text-base lg:text-lg">John Doe</span>
                        <img src={caretdownIcon} className="caret-down-icon w-3 h-3 text-center justify-center" alt="Caret down icon" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center h-screen overflow-y-hidden'>
                <div className='overflow-y-hidden'>
                    <div className='bg-light-blue opacity-95'>
                        <img src={chatIcon} className="chat-icon opacity-45 text-gray-600 w-10 h-10 mt-1 ml-1" alt="Chat icon" />
                    </div>
                    <p>No chats</p>
                    <span>You have not received or send anyone a message</span>

                    <div className="mr-2 md:mr-4 px-auto pr-1 md:pr-5 bg-light-blue">
                        <button className="md:px-4 md:py-2 mt-8 w-full border text-center flex gap-2 border-slate-200 text-slate-700">
                            <img src={plusIcon} className="chat-icon w-4 h-4 md:text-center mt-1 ml-1" alt="Chat icon" />
                            <span className="text-white text-xs md:text-base">Add a person</span>
                        </button>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </section>
  )
}

export default Layout