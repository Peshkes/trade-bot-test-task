export type LocalStorageData<T> = {
    timestamp: number
    data: T
}

const EXPIRATION_TIME = import.meta.env.VITE_LOCAL_STORAGE_EXPIRATION;

export class LocalStorage {
    static get<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        if (!item) return null;

        try {
            const parsed = JSON.parse(item) as LocalStorageData<T>;
            const isExpired = Date.now() - parsed.timestamp > EXPIRATION_TIME;
            if (isExpired) {
                LocalStorage.remove(key);
                console.warn("Данные устарели и были удалены из localStorage.");
                return null;
            } else {
                return parsed.data;
            }
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
