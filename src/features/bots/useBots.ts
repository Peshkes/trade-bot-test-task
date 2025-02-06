import {Bot, BotNames, BotStore, Interval} from "./botsTypes.ts";
import {create} from "zustand";
import {LocalStorage} from "../../shared/functions/localStorage.ts";
import {BotsApi} from "./botsApi.ts";

const STORAGE_KEY = "bots_data";

export const useBots = create<BotStore>((set, get) => ({
        selectedBot: 'orange_bot',
        selectedInterval: Interval["24h"],
        botsData: undefined,

        setInterval: (newInterval: Interval) => {
            if (newInterval === get().selectedInterval) return;
            set((state) => ({ ...state, selectedInterval: newInterval }));
        },

        setSelectedBot: (newBot: BotNames) => {
            if (newBot === get().selectedBot) return;
            set((state) => ({ ...state, selectedBot: newBot }));
        },

        initializeData: () => {
            const data = LocalStorage.get<Bot[]>(STORAGE_KEY);
            if (data) set((state) => ({ ...state, botsData: data }));
            else get().requestData();
        },

        requestData: async () => {
            const bots = await BotsApi.getBots();
            if (bots) {
                set((state) => ({ ...state, botsData: bots }));
                LocalStorage.set(STORAGE_KEY, bots);
            } else {
                console.error("Не удалось получить данные о балансе.");
                alert("Не удалось получить данные о балансе. Попробуйте перезагрузить страницу.");
            }
        }
    }
))
