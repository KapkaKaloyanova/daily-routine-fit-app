import { useContext, useEffect, useState } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/data/activity';

export default {
    edit(activityId, activityData ) {
        return request.put(`${baseUrl}/${activityId}`, {...activityData, _id: activityId});

    },
    
    delete(activityId) {
        return request.delete(`${baseUrl}/${activityId}`)
    }

}

export const useActivities = (category) => {
    const [activities, setActivities] = useState([]);

    useEffect( () => {
        request.get(baseUrl)
            .then(data => {
                setActivities(category 
                    ? data.filter(activity => activity.category === category)
                    : data);
            });
    }, [category]);
    return {
        activities,
    }
}

export const useOneActivity = (activityId) => {
    const [activity, setActivity] = useState({});

    useEffect( () => {
        request.get(` ${baseUrl}/${activityId}`)
            .then(setActivity);
    }, [activityId])

    return {
        activity,
    };
};

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
