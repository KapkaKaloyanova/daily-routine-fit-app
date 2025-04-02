const request = async (method, url, data, options = {}) => {
    // let options = {};

    if (method !== 'GET') {
        options.method = method;
    }

    // const authData = JSON.parse(localStorage.getItem('auth'));

    // if (authData.accessToken) {
    //     options = {
    //         ...options,
    //         headers: {
    //             'X-Authorization': authData.accessToken,
    //             ...options.headers,
    //         },
    //     }
    // }

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(data),
        }
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const result = await response.json();

        return result;
    } catch (error) {
        console.error("Request failed:", error);
        throw new Error("Network request failed");
    }
};
export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
    request
}
