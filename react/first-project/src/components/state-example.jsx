import { useEffect } from "react";

function StateExample(props){


    useEffect(() => {
        console.log("Component loaded for the first time");
        console.log("Fetching data from the server using new data: ", props.newData)
        return(() => {
            console.log("State component is unloading: ")
        })
    },[])

    useEffect(() => {
        console.log("Value of new data is updated: ", props.newData)
        console.log("Fetching data from the server using new data: ", props.newData)

    },[props.newData])

    return(
        <div className="text-6xl">
        <p>State example with number data {props.data}</p>
        <p>State example with number state new data {props.newData}</p>
        </div>
    )
}

export default StateExample;