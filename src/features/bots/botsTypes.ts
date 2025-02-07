export const Interval = {
    "24h": '24h',
    "7d": '7d',
    "30d": '30d',
    "60d": '60d',
    "90d": '90d',
    "all_time": 'all_time'
} as const;

export type Interval = keyof typeof Interval;

export const BotNames = {
    "orange_bot": 'attack',
    "white_bot": 'balance',
    "green_bot": 'defence',
    "red_bot": 'attack',
    "blue_bot": 'balance',
    "yellow_bot": 'defence'
} as const;

export type BotNames = keyof typeof BotNames;

export type Bot = {
    name: BotNames;
    cost: number;
} & {
    [key in Interval]: number;
};

export type BotStore = {
    selectedBot: BotNames,
    selectedInterval: Interval,
    botsData: Bot[] | undefined,
    initializeData: () => void
    requestData: () => Promise<void>
    setSelectedBot: (newBot: BotNames) => void
    setInterval: (newInterval: Interval) => void
};
