import React, { useState, useEffect } from "react";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import { water, time } from "ionicons/icons";

import MainScreen from "./components/MainScreen";
import HistoryScreen from "./components/HistoryScreen";
import { StorageService, WaterEntry } from "./services/storageService";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./App.css";

setupIonicReact();

const App: React.FC = () => {
  const [totalWater, setTotalWater] = useState(0);
  const [waterHistory, setWaterHistory] = useState<WaterEntry[]>([]);
  const [dailyGoal] = useState(2000);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Kiểm tra và reset nếu là ngày mới
      await StorageService.checkAndResetIfNewDay();

      // Load dữ liệu
      const total = await StorageService.getTotal();
      const history = await StorageService.getHistory();

      setTotalWater(total);
      setWaterHistory(history);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const handleAddWater = async (amount: number) => {
    const newTotal = totalWater + amount;
    const newEntry: WaterEntry = {
      id: Date.now(),
      amount,
      timestamp: new Date().toISOString(),
      time: new Date().toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const newHistory = [newEntry, ...waterHistory];

    setTotalWater(newTotal);
    setWaterHistory(newHistory);

    // Lưu vào storage
    try {
      await StorageService.setTotal(newTotal);
      await StorageService.setHistory(newHistory);
      await StorageService.setDate(new Date().toDateString());
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleReset = async () => {
    const confirmed = window.confirm("Bạn có chắc muốn đặt lại dữ liệu?");
    if (confirmed) {
      setTotalWater(0);
      setWaterHistory([]);

      try {
        await StorageService.resetAll();
      } catch (error) {
        console.error("Error resetting data:", error);
      }
    }
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/main">
              <MainScreen
                totalWater={totalWater}
                dailyGoal={dailyGoal}
                onAddWater={handleAddWater}
                onReset={handleReset}
              />
            </Route>
            <Route exact path="/history">
              <HistoryScreen
                totalWater={totalWater}
                waterHistory={waterHistory}
              />
            </Route>
            <Route exact path="/">
              <Redirect to="/main" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="main" href="/main">
              <IonIcon icon={water} />
              <IonLabel>Trang chủ</IonLabel>
            </IonTabButton>
            <IonTabButton tab="history" href="/history">
              <IonIcon icon={time} />
              <IonLabel>Lịch sử</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
