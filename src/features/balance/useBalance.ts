import {create} from "zustand";
import {Balance, BalanceStore} from "./balanceTypes.ts";
import {LocalStorage} from "../../shared/functions/localStorage.ts";
import {BalanceApi} from "./balanceApi.ts";

const STORAGE_KEY = "balance_data";
const EXPIRATION_TIME = import.meta.env.VITE_LOCAL_STORAGE_EXPIRATION;

export const useBalance = create<BalanceStore>((set, get) => ({
    balance: undefined,
    trading_capital: undefined,
    on_hold: undefined,
    trading_capital_currency: undefined,

    requestData: async () => {
        const balance = await BalanceApi.getBalance();
        if (balance) {
            set(balance);
            LocalStorage.set(STORAGE_KEY, balance);
        } else {
            console.error("Не удалось получить данные о балансе.");
            alert("Не удалось получить данные о балансе. Попробуйте перезагрузить страницу.");
        }
    },
    initializeData: () => {
        const storedData = LocalStorage.get<{ timestamp: number; data: Balance }>(STORAGE_KEY);

        if (storedData) {
            const {timestamp, data} = storedData;
            const isExpired = Date.now() - timestamp > EXPIRATION_TIME;

            if (isExpired) {
                LocalStorage.remove(STORAGE_KEY);
                console.warn("Данные устарели и были удалены из localStorage.");
                get().requestData();
            } else {
                set(data);
            }
        }
    },
}))
