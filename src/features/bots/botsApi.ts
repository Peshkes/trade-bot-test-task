import {Bot} from "./botsTypes.ts";
import {request} from "../../shared/functions/request.ts";

export class BotsApi{
    static async getBots() {
        return request<Bot[]>('/bots');
    }
}
