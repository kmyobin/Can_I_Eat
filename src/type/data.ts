export interface FoodMaterialData {
    PRDLST_REPORT_NO: string;
    PRMS_DT: string;
    LCNS_NO: string;
    PRDLST_NM: string;
    BSSH_NM: string;
    PRDLST_DCNM: string;
    RAWMTRL_NM: string;
}
export type FoodMaterialResponse = {
    data: {
        C002: {
            total_count: string;
            row: FoodMaterialData[];
            RESULT: {
                MSG: string;
                CODE: string;
            };
        };
    }
    status: number;
    statusText: string;
    headers: {
        'content-length': string;
        'content-type': string;
    };
    config: {
        transitional: {
            silentJSONParsing: boolean;
            forcedJSONParsing: boolean;
            clarifyTimeoutError: boolean;
        },
        adapter: string[];
        transformRequest: any[];
        transformResponse: any[];
        timeout: number;
        xsrfCookieName: string;
        xsrfHeaderName: string;
        maxContentLength: number;
        maxBodyLength: number;
        env: object;
        headers: {
            Accept: string;
        },
        method: string;
        url: string;
    };
    request: any;
}


export interface FoodImageResponse {
    data: {
        body: {
            items: FoodImageData[]
        }
    }
}

export interface FoodImageData {
    item: {
        nutrient: string;
        rawmtrl: string;
        prdlstNm: string;
        imgurl2: string;
        barcode: string;
        imgurl1: string;
        productGb: string;
        seller: string;
        prdkindstate: string;
        rnum: string;
        manufacture: string;
        prdkind: string;
        capacity: string;
        prdlstReportNo: string;
        allergy: string;
    }
}
export type SearchResult = {
    BSSH_NM : string;
    LCNS_NO : string;
    PRDLST_DCNM : string;
    PRDLST_NM : string;
    PRDLST_REPORT_NO : string;
    PRMS_DT : string;
    RAWMTRL_NM: string;
    IMG_URL: string;
};

export type rawMaterial = {
    rawMaterialName : string;
    isMatched: boolean;
}
