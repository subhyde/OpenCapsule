import { IonContent, IonPage, IonGrid, IonRow } from "@ionic/react";

import "./Home.css";
import React from "react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <div className="sign">
              <span className="fast-flicker">Open </span> Capsu
              <span className="flicker">l</span>e
            </div>
          </IonRow>
          <div className="container">
            <a href="">Sign Up</a>
            <br />
            <a href="">Login</a>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
