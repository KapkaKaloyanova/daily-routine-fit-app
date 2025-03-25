const baseUrl = ' http://localhost:3030/jsonstore/activity';

export default {
    async create(activityData) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(activityData)
        });
        const result = await response.json();

        return result;
    }
}