import React from "react";
import ProfileCard from "./ProfileCard"
import AlexaImages from  './images/alexa.png'
import CortanaImages from  './images/cortana.png'
import SiriImages from  './images/siri.png'
function App (){
    return(
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard title="alexa" handle="@alexa99" imgSrc={AlexaImages}/>
            <ProfileCard title="cortana" handle="@cortana32" imgSrc={CortanaImages}/>
            <ProfileCard title="siri" handle="@siri01" imgSrc={SiriImages}/>
        </div>
    );
};
export default App;