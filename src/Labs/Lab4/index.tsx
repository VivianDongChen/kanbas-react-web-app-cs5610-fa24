import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
        }
    return(
        <div>
            <h2>Lab4</h2>
            <ClickEvent /> 
            <PassingDataOnEvent/> 
            <PassingFunctions theFunction={sayHello}/>
            <EventObject/>
            <Counter/>
        </div>
        
    )
}
