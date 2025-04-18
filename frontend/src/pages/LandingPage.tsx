
import { Link } from 'react-router-dom';
import bgimg from '../assets/bg.jpg';
import newlogo from "../assets/newLogo.svg";
import logo from "../assets/logo.svg";



export const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* <Appbar /> */}
      <Header/>
      <div
        className=" relative flex items-center justify-center h-[90vh] bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${bgimg})`,  
        }}
      >

        
           {/* <div className="absolute inset-0 bg-black opacity-5"></div> */}

        
            <div className='m-4 flex-col  items-center relative'>
                <div className="lg:mt-24 mt-10 font-AlluraRegular leading-[90px] text-black text-[110px] md:text-[120px] lg:text-[170px] lg:leading-[150px] font-extrabold  px-4">
                Connect with the Modern World
                </div>
                <div className='p-4 text-black justify-center md:justify-center  items-center font-baskervvilleRegular lg:text-4xl text-3xl font-extrabold'>
                Insights, stories, and ideas for everyone
                </div>
                 
                <Link to={"/signup"}>
                
                  
                    <button type="button" className="ml-4 mt-6 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 n-500 ">Get started</button>
                    

                </Link>
            </div>

            

      </div>


    </div>
  );
};


const Header = () => {
  return (
  <div className=" fixed z-50 shadow-whit bg-[#ffff] border-b border-gray-900 flex justify-between px-8 py-2 h-auto w-full ">
            
                <div className="flex justify-center ">
                   
                    <img className="w-9" src={newlogo} alt="Medium" />
                    <img className="p-1 w-36" src={logo} alt="Medium" />
                    {/* <div className="mt-2  text-3xl font-bold" > Medium</div> */}
                </div>
           

            <div className='mt-1 flex'>
                <Link to={"/signin"}>
                    <button
                        type="button"
                        className="sm:flex md:inline-block mr-8 text-black  border border-gray-800  font-semibold focus:outline-none hover:bg-gray-200 focus:ring-4 rounded-xl text-sm lg:px-7 lg:py-2.5 px-4 py-2 text-center me-2 mb-2"
                    >
                        Sign In
                    </button>
                </Link>
                <Link to={"/signup"}>
                <button type="button" className="hidden lg:flex text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-1 n-500 ">
                  Get started
                    </button>
                </Link>
            </div>

            
        </div>
        
    );
}
