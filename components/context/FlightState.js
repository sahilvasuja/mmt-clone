import flightcontext from "./flightcontext";
const FlightState=(props)=>{
    const state={
        "name": "sahil",
        "from": "jaipur"
    }
    return(
        <flightcontext.Provider value={state}>{props.children}</flightcontext.Provider>
    )
}
export default FlightState;