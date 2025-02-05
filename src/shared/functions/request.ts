const BASE_URL = import.meta.env.VITE_SERVER_URL;

export async function request<R>(url: string, options?: RequestInit): Promise<R | null> {
    try {
        const response = await fetch(BASE_URL + url, options);
        if (!response.ok) throw new Error(`Ошибка с сервера: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        return null;
    }
}
