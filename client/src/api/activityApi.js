import { useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/data/activity';

export default {
    async getAll() {
        const result = await request.get(baseUrl);

        const activities = Object.values(result);

        return activities;

    },
     getOne(activityId) {
        return  request.get(`${baseUrl}/${activityId}`);

    },


    edit(activityId, activityData ) {
        return request.put(`${baseUrl}/${activityId}`, {...activityData, _id: activityId});

    },
    
    delete(activityId) {
        return request.delete(`${baseUrl}/${activityId}`)
    }

}

export const useCreateActivity = () => {
    const {accessToken} = useContext(UserContext);

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    };

    const create = (activityData) => 
        request.post(baseUrl, activityData, options);
        
        return {
            create,
        }
    }
