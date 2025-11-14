import React from "react";
import { IonContent } from "@ionic/react";
import { Droplets, History, Clock, TrendingUp } from "lucide-react";
import { WaterEntry } from "../services/storageService";

interface HistoryScreenProps {
  totalWater: number;
  waterHistory: WaterEntry[];
}

const HistoryScreen: React.FC<HistoryScreenProps> = ({
  totalWater,
  waterHistory,
}) => {
  const dailyGoal = 2000;
  const progress = Math.min((totalWater / dailyGoal) * 100, 100);

  return (
    <IonContent className="ion-padding">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* History Header */}
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <History className="w-7 h-7 text-blue-500" />
              Lịch sử hôm nay
            </h2>
            <div className="bg-blue-500 text-white rounded-full px-4 py-2 text-sm font-semibold">
              {waterHistory.length} lần
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-sm text-gray-600 mb-1">Tổng cộng</div>
              <div className="text-2xl font-bold text-blue-600">
                {totalWater} ml
              </div>
            </div>
            <div className="bg-cyan-50 rounded-xl p-4">
              <div className="text-sm text-gray-600 mb-1">Trung bình</div>
              <div className="text-2xl font-bold text-cyan-600">
                {waterHistory.length > 0
                  ? Math.round(totalWater / waterHistory.length)
                  : 0}{" "}
                ml
              </div>
            </div>
          </div>
        </div>

        {/* History List */}
        <div className="space-y-3">
          {waterHistory.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
              <Droplets className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Chưa có lịch sử</p>
              <p className="text-gray-400 text-sm mt-2">
                Hãy bắt đầu uống nước!
              </p>
            </div>
          ) : (
            waterHistory.map((entry, index) => (
              <div
                key={entry.id}
                className="bg-white rounded-2xl p-5 shadow-md flex items-center gap-4"
              >
                <div className="bg-blue-100 rounded-full p-3">
                  <Droplets className="w-6 h-6 text-blue-500" />
                </div>

                <div className="flex-1">
                  <div className="text-2xl font-bold text-gray-800">
                    +{entry.amount} ml
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {entry.time}
                  </div>
                </div>

                <div className="text-right">
                  <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    #{waterHistory.length - index}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {waterHistory.length > 0 && (
          <div className="bg-blue-500 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Thống kê</h3>
            </div>
            <p className="text-white/90">
              Bạn đã uống nước {waterHistory.length} lần hôm nay với tổng lượng{" "}
              {totalWater}ml.
              {progress >= 100
                ? " 🎉 Tuyệt vời! Bạn đã hoàn thành mục tiêu!"
                : " Hãy tiếp tục nỗ lực!"}
            </p>
          </div>
        )}
      </div>
    </IonContent>
  );
};

export default HistoryScreen;
