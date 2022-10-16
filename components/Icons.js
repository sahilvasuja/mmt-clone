

import Bigmobile from './Bigmobile';
const Icons = ({label,Icon,text}) => {
    // console.log(text);
  return (
    <>
        <div className="flex flex-col gap-3 justify-center items-center -mt-9 flex-1">
          
          <Icon  className= {`  sm:text-2xl rounded-full text-lg p-2 w-12 h-12  sm:w-14 sm:h-14 text-center ${text}` } />
          <p className="text-black sm:text-lg text-sm font-medium"> {label}</p>

        
      </div>
        

        {/* <div className="flex flex-col justify-around items-center">
         
            <div className="text-sky-400">
              <Font className="" />
            </div>
            <div>{label1}</div>
          </div> */}
    </>
  )
}

export default Icons