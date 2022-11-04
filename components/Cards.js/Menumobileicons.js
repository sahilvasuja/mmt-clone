import { useRouter } from "next/router";
const Menumobileicons = ({ label, Icon, text }) => {
  const router=useRouter();
  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center -mt-9 flex-1" onClick={()=>{
        if(label=="Flights"){
          router.push("/flightui")
        }
      }}>
        <Icon
          className={`  sm:text-2xl rounded-full text-lg p-2 w-12 h-12  sm:w-14 sm:h-14 text-center ${text}`}
        />
        <p className="text-black sm:text-lg text-sm font-medium"> {label}</p>
      </div>
    </>
  );
};

export default Menumobileicons;
