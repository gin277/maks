/* eslint-disable @typescript-eslint/no-explicit-any */
import { MockDataType } from "../mockData";
import { apiClient } from "./axiosConfig";

class SmartHouseService {

    async getSmartHouse() {
        return apiClient.get<MockDataType[]>(`/smarhouse`).then((res) => res.data || [])
    }
}

export default new SmartHouseService();