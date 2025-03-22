const baseUrl = ' http://localhost:3030/jsonstore/services';

export default {
    async create(serviceData) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(serviceData)
        });
        const result = await response.json();

        return result;
    }
}