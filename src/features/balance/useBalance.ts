import {create} from "zustand";
import {Balance, BalanceStore} from "./balanceTypes.ts";
import {LocalStorage} from "../../shared/functions/localStorage.ts";
import {BalanceApi} from "./balanceApi.ts";

const STORAGE_KEY = "balance_data";

export const useBalance = create<BalanceStore>((set, get) => ({
    balance: undefined,
    trading_capital: undefined,
    on_hold: undefined,
    trading_capital_currency: undefined,

    requestData: async () => {
        const balance = await BalanceApi.getBalance();
        if (balance) {
            set((state) => ({ ...state, ...balance }));
            LocalStorage.set(STORAGE_KEY, balance);
        } else {
            console.error("Не удалось получить данные о балансе.");
            alert("Не удалось получить данные о балансе. Попробуйте перезагрузить страницу.");
        }
    },
    initializeData: () => {
        const data = LocalStorage.get<Balance>(STORAGE_KEY);
        if (data) set((state) => ({ ...state, ...data }));
        else get().requestData();
    },
}))
