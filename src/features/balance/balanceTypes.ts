export type Balance = {
    trading_capital: number
    trading_capital_currency: string
    balance: number
    on_hold: number
}

export type BalanceStore = {
    initializeData: () => void
    requestData: () => Promise<void>
} & Partial<Balance>;
