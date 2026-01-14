import api from "../config/api";
import { Response } from "../types";

interface Guest {
  id: number;
  name: string;
  email: string;
  telephone: string;
  confirmed: boolean;
  giftId: number | null;
  createdAt: Date;
  updatedAt: Date;
}

class GuestService {
  async index(config?: Axios.AxiosXHRConfigBase<unknown> | undefined) {
    const response = await api.get<Response<Guest[]>>("/guest", config);
    return response.data;
  }

  async create(
    data: Record<string, string | number | boolean | null>,
    config?: Axios.AxiosXHRConfigBase<unknown> | undefined
  ) {
    const response = await api.post<Response<Guest>>("/guest", data, config);
    return response.data;
  }

  async read(id: string | number) {
    const response = await api.get<Response<Guest>>(`/guest/${id}`);
    return response.data;
  }

  async update(
    data: Record<string, string | number | boolean | null>,
    config?: Axios.AxiosXHRConfigBase<unknown> | undefined
  ) {
    const response = await api.put<Response<Guest>>("/guest", data, config);
    return response.data;
  }

  async delete(id: string | number) {
    const response = await api.delete<Response<{ message: string }>>(
      `/guest/${id}`
    );
    return response.data;
  }
}

export default new GuestService();
