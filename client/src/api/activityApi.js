import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/activity';

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
    const { request } = useAuth();

    const create = (activityData) => 
        request.post(baseUrl, activityData);

        return {
            create,
        }
};

export const useEditActivity = () => {
    const { request } = useAuth();

    const edit = (activityId, activityData) => 
        request.put(`${baseUrl}/${activityId}`, {...activityData, _id: activityId});

        return {
            edit,
        }
};

export const useDeleteActivity = () => {
    const { request } = useAuth();

    const deleteActivity = (activityId) => 
        request.delete(`${baseUrl}/${activityId}`);
    
    return {
        deleteActivity,
    }


};