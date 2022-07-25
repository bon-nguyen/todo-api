import axiosClient from "./axiosClient";

const ColumnBoardApi = {
    getAll(params) {
        const url = '/column';
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/column/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = `/column`;
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/column/${data.id}`;
        return axiosClient.put(url, data);
    },

    remove(id) {
        const url = `/column/${id}`;
        return axiosClient.delete(url);
    }

}

export default ColumnBoardApi;