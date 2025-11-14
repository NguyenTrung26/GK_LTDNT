import { Preferences } from "@capacitor/preferences";

export interface WaterEntry {
  id: number;
  amount: number;
  timestamp: string;
  time: string;
}

export class StorageService {
  private static KEYS = {
    TOTAL: "water_total",
    HISTORY: "water_history",
    DATE: "water_date",
  };

  // Lấy tổng lượng nước
  static async getTotal(): Promise<number> {
    const { value } = await Preferences.get({ key: this.KEYS.TOTAL });
    return value ? parseInt(value) : 0;
  }

  // Lưu tổng lượng nước
  static async setTotal(total: number): Promise<void> {
    await Preferences.set({
      key: this.KEYS.TOTAL,
      value: total.toString(),
    });
  }

  // Lấy lịch sử
  static async getHistory(): Promise<WaterEntry[]> {
    const { value } = await Preferences.get({ key: this.KEYS.HISTORY });
    return value ? JSON.parse(value) : [];
  }

  // Lưu lịch sử
  static async setHistory(history: WaterEntry[]): Promise<void> {
    await Preferences.set({
      key: this.KEYS.HISTORY,
      value: JSON.stringify(history),
    });
  }

  // Lấy ngày đã lưu
  static async getDate(): Promise<string | null> {
    const { value } = await Preferences.get({ key: this.KEYS.DATE });
    return value;
  }

  // Lưu ngày hiện tại
  static async setDate(date: string): Promise<void> {
    await Preferences.set({
      key: this.KEYS.DATE,
      value: date,
    });
  }

  // Reset tất cả dữ liệu
  static async resetAll(): Promise<void> {
    await Preferences.set({ key: this.KEYS.TOTAL, value: "0" });
    await Preferences.set({
      key: this.KEYS.HISTORY,
      value: JSON.stringify([]),
    });
    await Preferences.set({
      key: this.KEYS.DATE,
      value: new Date().toDateString(),
    });
  }

  // Kiểm tra và reset nếu là ngày mới
  static async checkAndResetIfNewDay(): Promise<boolean> {
    const savedDate = await this.getDate();
    const today = new Date().toDateString();

    if (savedDate !== today) {
      await this.resetAll();
      return true; // Đã reset
    }
    return false; // Không reset
  }
}
