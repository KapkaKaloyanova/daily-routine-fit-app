import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/activity';

export default {
    async getAll() {
        const result = await request.get(baseUrl);

        const activities = Object.values(result);

        return activities;

    },
     getOne(activityId) {
        return  request.get(`${baseUrl}/${activityId}`);

    },

    create(activityData) {
        return request.post(baseUrl, activityData)
    },

    edit(activityId, activityData ) {
        return request.put(`${baseUrl}/${activityData.category}/${activityId}`, {...activityData, _id: activityId});

    },
    
    delete(activityId) {
        return request.delete(`${baseUrl}/${activityId}`)
    }

}