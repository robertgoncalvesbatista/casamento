import api from "../config/api";
import { Response } from "../types";

export interface Gift {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  link: string;
  reserved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

class GiftService {
  async index(config?: Axios.AxiosXHRConfigBase<unknown> | undefined) {
    const response = await api.get<Response<Gift[]>>("/gift", config);
    return response.data;
  }

  async create(
    data: Record<string, string | number | boolean | null>,
    config?: Axios.AxiosXHRConfigBase<unknown> | undefined
  ) {
    const response = await api.post<Response<Gift>>("/gift", data, config);
    return response;
  }

  async read(id: string | number) {
    const response = await api.get<Response<Gift>>(`/gift/${id}`);
    return response.data;
  }

  async update(
    data: Record<string, string | number | boolean | null>,
    config?: Axios.AxiosXHRConfigBase<unknown> | undefined
  ) {
    const response = await api.put<Response<Gift>>("/gift", data, config);
    return response.data;
  }

  async delete(id: string | number) {
    const response = await api.delete<Response<{ message: string }>>(
      `/gift/${id}`
    );
    return response.data;
  }
}

export default new GiftService();
