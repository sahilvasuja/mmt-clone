import { FaBeer } from "react-icons/fa";
const Dashboard = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <div className="h-screen w-1/6 bg-slate-100 flex flex-col ">
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <i class="fa-solid fa-user-plus"></i>
          {/* <h1 className="pl-4">☸︎</h1> */}
          <h2 className="text-gray-900 pl-6 font-bold ">Login/Sign-up now</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">👜</h1>
          <h2 className="text-gray-900 pl-6 font-bold">View/Manage Trips</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">🎁</h1>
          <h2 className="text-gray-900 pl-6 font-bold">Gift Cards</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">💳</h1>
          <h2 className="text-gray-900 pl-6 font-bold">My Wallet</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">📀</h1>
          <h2 className="text-gray-900 pl-6 font-bold">Settings</h2>
          <h2>
            <FaBeer className="text-red-500" />
          </h2>
          <h1 className="pl-32">🇮🇳</h1>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">💽</h1>
          <h2 className="text-gray-900 pl-6 font-bold">Travel Offers</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3 ">
          <h1 className="pl-4">🛩</h1>
          <h2 className="text-gray-900 pl-6 font-bold ">Flights</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4"> 🏬</h1>
          <h2 className="text-gray-900 pl-6 font-bold">Hotels</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">🚅</h1>
          <h2 className="text-gray-900 pl-6 font-bold">Trains</h2>
        </div>
        <div className="flex flex-row h-14 border-solid border-2 text-center pt-3">
          <h1 className="pl-4">🏬</h1>
          <h2 className="text-gray-900 pl-6 font-bold">Holiday Packages</h2>
        </div>
        <div className="flex flex-col my-5 h-36 mx-5 justify-evenly">
          <h3 className="text-blue-600">User Agreement</h3>
          <h3 className="text-blue-600">Privacy Policy</h3>
          <h3 className="text-blue-600">Terms of Service</h3>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
