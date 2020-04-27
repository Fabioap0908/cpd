import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {IonIcon} from '@ionic/react';
import { cloud, calendarOutline, cloudyOutline } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar >
        <IonIcon icon={cloudyOutline} id="color" class="posicao1"/>
        <IonIcon icon={calendarOutline} id="color"  class="posicao"/>
          <IonTitle id="color" class="position">CPD</IonTitle>
          
          
        </IonToolbar>
      </IonHeader >
      <IonContent id="color">
        <IonHeader collapse="condense">
          <IonToolbar id="color">
            <IonTitle size="large">CPD</IonTitle>
            
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Período de Alerta</IonCardSubtitle>
            <IonCardTitle>Outono</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Informações, época favorável; pragas/doenças recorrentes do período,etc.
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Período de Alerta</IonCardSubtitle>
            <IonCardTitle>Inverno</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Informações, época favorável; pragas/doenças recorrentes do período,etc.
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Período de Alerta</IonCardSubtitle>
            <IonCardTitle>Primavera</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Informações, época favorável; pragas/doenças recorrentes do período,etc.
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Período de Alerta</IonCardSubtitle>
            <IonCardTitle>Verão</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Informações, época favorável; pragas/doenças recorrentes do período,etc.
      </IonCardContent>
        </IonCard>
      </IonContent>
      
    </IonPage>
  );
  
};



export default Tab1;


