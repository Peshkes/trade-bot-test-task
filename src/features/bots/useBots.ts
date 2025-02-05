import {Bot, BotNames, BotStore, Interval} from "./botsTypes.ts";
import {create} from "zustand";
import {LocalStorage} from "../../shared/functions/localStorage.ts";
import {BotsApi} from "./botsApi.ts";

const STORAGE_KEY = "bots_data";
const EXPIRATION_TIME = import.meta.env.VITE_LOCAL_STORAGE_EXPIRATION;

export const useBots = create<BotStore>((set, get) => ({
        selectedBot: 'orange_bot',
        selectedInterval: Interval["24h"],
        botsData: undefined,

        setInterval: (newInterval: Interval) => {
            if (newInterval === get().selectedInterval) return;

            set({selectedInterval: newInterval})
        },

        setSelectedBot: (newBot: BotNames) => {
            if (newBot === get().selectedBot) return;

            set({selectedBot: newBot})
        },

        initializeData: () => {
            const storedData = LocalStorage.get<Bot[]>(STORAGE_KEY);
            if (storedData) {
                const {timestamp, data} = storedData;
                const isExpired = Date.now() - timestamp > EXPIRATION_TIME;
                if (isExpired) {
                    LocalStorage.remove(STORAGE_KEY + ":" + get().selectedBot + ":" + get().selectedInterval);
                    console.warn("Данные устарели и были удалены из localStorage.");
                    get().requestData();
                } else {
                    set({botsData: data});
                }
            }
        },

        requestData: async () => {
            const bots = await BotsApi.getBots();
            if (bots) {
                set({botsData: bots});
                LocalStorage.set(STORAGE_KEY, bots);
            } else {
                console.error("Не удалось получить данные о балансе.");
                alert("Не удалось получить данные о балансе. Попробуйте перезагрузить страницу.");
            }
        }
    }
))
