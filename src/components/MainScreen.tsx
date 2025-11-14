import React from "react";
import { IonContent, IonButton } from "@ionic/react";
import { Droplets, Plus, Calendar } from "lucide-react";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

interface MainScreenProps {
  totalWater: number;
  dailyGoal: number;
  onAddWater: (amount: number) => void;
  onReset: () => void;
}

const MainScreen: React.FC<MainScreenProps> = ({
  totalWater,
  dailyGoal,
  onAddWater,
  onReset,
}) => {
  const progress = Math.min((totalWater / dailyGoal) * 100, 100);
  const glassesCount = Math.floor(totalWater / 250);

  const handleAddWater = async (amount: number) => {
    // Rung nhẹ khi bấm nút
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
    } catch (error) {
      console.log("Haptics not available");
    }
    onAddWater(amount);
  };

  return (
    <IonContent className="ion-padding">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">
            Water Tracker
          </h1>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date().toLocaleDateString("vi-VN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Main Water Display */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          {/* Progress Circle */}
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-48">
              <svg className="w-48 h-48 transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="#3b82f6"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 88}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 88 * (1 - progress / 100)
                  }`}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 0.5s" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Droplets className="w-12 h-12 text-blue-500 mb-2" />
                <div className="text-4xl font-bold text-gray-800">
                  {totalWater}
                </div>
                <div className="text-sm text-gray-500">ml</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {Math.round(progress)}%
              </div>
              <div className="text-sm text-gray-600">Mục tiêu</div>
            </div>
            <div className="bg-teal-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-teal-600">
                {glassesCount}
              </div>
              <div className="text-sm text-gray-600">Ly (250ml)</div>
            </div>
          </div>

          {/* Goal Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Tiến độ hôm nay</span>
              <span>
                {totalWater} / {dailyGoal} ml
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Quick Add Buttons */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <Plus className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">Thêm nhanh</h2>
          </div>

          <IonButton
            expand="block"
            className="water-button water-button-100"
            onClick={() => handleAddWater(100)}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <Droplets className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-2xl font-bold">+100 ml</div>
                  <div className="text-sm">Nửa cốc</div>
                </div>
              </div>
              <Plus className="w-8 h-8" />
            </div>
          </IonButton>

          <IonButton
            expand="block"
            className="water-button water-button-200"
            onClick={() => handleAddWater(200)}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <Droplets className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-2xl font-bold">+200 ml</div>
                  <div className="text-sm">Một cốc nhỏ</div>
                </div>
              </div>
              <Plus className="w-8 h-8" />
            </div>
          </IonButton>

          <IonButton
            expand="block"
            className="water-button water-button-300"
            onClick={() => handleAddWater(300)}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <Droplets className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-2xl font-bold">+300 ml</div>
                  <div className="text-sm">Một chai lớn</div>
                </div>
              </div>
              <Plus className="w-8 h-8" />
            </div>
          </IonButton>
        </div>

        {/* Reset Button */}
        <IonButton
          expand="block"
          fill="outline"
          color="danger"
          onClick={onReset}
        >
          Đặt lại dữ liệu
        </IonButton>
      </div>
    </IonContent>
  );
};

export default MainScreen;
