import {request} from "../../shared/functions/request.ts";
import {Balance} from "./balanceTypes.ts";

export class BalanceApi {
    static async getBalance() {
        return request<Balance>('/balance');
    }
}
