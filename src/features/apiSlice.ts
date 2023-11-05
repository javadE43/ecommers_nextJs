import { apiSlice } from "../store/apiStore";

interface Income {
  start?: number;
  end?: number;
  status?: string;
  lastDate?: number;
}

interface Return {
  data: [{ todayIncome: number; percent: number }];
  message: string;
}

const contentAll = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getContentAll: build.query<Return, Income>({
      query: () => ({ url: `/lan` }),
    }),
  }),
});
