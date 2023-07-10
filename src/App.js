import 'bulma/css/bulma.css'
import React from "react";
import ProfileCard from "./ProfileCard"
import AlexaImages from  './images/alexa.png'
import CortanaImages from  './images/cortana.png'
import SiriImages from  './images/siri.png'
function App (){
    return(
        <div>
            <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">
                    Personal Digital Assistants
                </p>
            </div>
        </section>
            <div className="container">
                <div className="section">
            <div className="columns">
                <div className="column is-3">
                    <ProfileCard
                        title="alexa"
                        handle="@alexa99"
                        imgSrc={AlexaImages}
                        description="Alexa was created by Amazon and helps you buy things"
                    />
                </div>
                <div className="column is-3">
                    <ProfileCard
                        title="cortana"
                        handle="@cortana32"
                        imgSrc={CortanaImages}
                        description="Cortana was made by Microsoft. who know what it does?"
                    />
                </div>
                <div className="column is-3">
                    <ProfileCard
                        title="siri"
                        handle="@siri01"
                        imgSrc={SiriImages}
                        description="Siri was made by Apple and is being phased out"
                    />
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};
export default App;