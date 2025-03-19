import { useState } from 'react';
import Article from './article'
import { CarouselDemo } from './slider';
import StateExample from './state-example';
import { Button } from './ui/button';
function MainContent(){
    const [newData,setNewData]=useState(96);
    const [displayExample, setDisplayExample]=useState(true);
    let someData=96;
    // setInterval(() => {
    //     console.log("One second has passed");
    // },999);

    return(
        <section>
            <button
            onClick={() => {
                setDisplayExample(!displayExample)
            }}
            >Display example</button>
            <button
            onClick={() => {
                // console.log("Old value of Data is: ", someData)
                // console.log("Old value of NewData is: ", newData)
                someData+=1;
                setNewData(newData+1);
                // console.log("New value of Data is: ", someData)
                // console.log("New value of NewData is: ", newData)
            }}
            >Change data with +1</button>
            {/* {article-list} */}
            {/* <CarouselDemo /> */}
            {
            displayExample && <StateExample data={someData} newData={newData} />
              
            }
            <Article />
            {/* {news-sidebar} */}
        </section>
    )
}

export default MainContent;