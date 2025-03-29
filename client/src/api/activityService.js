import request from "../utils/request";

const baseUrl = ' http://localhost:3030/jsonstore/activity';

export default {
    async getAll(){
        const result= await request.get(baseUrl);

        const activities = Object.values(result);

        return activities;

    },

    create(activityData) {
        return request.post(baseUrl, activityData)
    },

}