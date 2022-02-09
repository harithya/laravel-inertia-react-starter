import { BASE_URL } from "./constants";

export const route = {
    url: (url?: string) => BASE_URL + url,
    current: window.location.pathname,
    query: (url: string, params: {
        [key: string]: string | number | boolean
    }) => {
        let query = ``;
        Object.entries(params).map((value: any, i: number) => {
            if (value[1].length > 1) {
                const q = (query.length == 0) ? '?' : '&';
                query += q + `${value[0]}=${value[1]}`;
            }
        })
        return url + query;
    },
    getQuery: () => {
        console.log(location);
    }
}
