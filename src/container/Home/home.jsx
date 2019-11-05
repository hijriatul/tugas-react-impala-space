import React from "react";
import ImpalaSpace from "../../component/impala";
import Tabb from "../../component/tabb";
import Cards from "../../component/card";
import Navigation from "../../component/navigation";

function Home(){
    return(
        <div className="App">
            <ImpalaSpace />
            <Tabb />
            <Cards />
            <Navigation />
        </div>
    )
}

export default Home;