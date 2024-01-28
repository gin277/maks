/* eslint-disable @typescript-eslint/no-explicit-any */
import { MockDataType } from "../mockData";
import { apiClient } from "./axiosConfig";

class CamsService {

    async getCams() {
        return apiClient.get<MockDataType[]>(`/cams`).then((res) => res.data || [])
    }
}

export default new CamsService();