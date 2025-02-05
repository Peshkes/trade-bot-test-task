export type LocalStorageData<T> = {
    timestamp: number
    data: T
}

export class LocalStorage {
    static get<T>(key: string): LocalStorageData<T> | null {
        const item = localStorage.getItem(key);
        if (!item) return null;

        try {
            const parsed = JSON.parse(item);
            return parsed?.data ?? null;
        } catch (error) {
            console.error("Ошибка парсинга localStorage:", error);
            return null;
        }
    }

    static set<T>(key: string, value: T) {
        const item: LocalStorageData<T> = {timestamp: Date.now(), data: value};
        localStorage.setItem(key, JSON.stringify(item));
    }

    static remove(key: string) {
        localStorage.removeItem(key);
    }
}
