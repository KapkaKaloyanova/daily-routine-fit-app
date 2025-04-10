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
    const [activity, setActivity] = useState(null);

    useEffect( () => {
        if (activityId && (!activity || activity._id !== activityId)){
            request.get(`${baseUrl}/${activityId}`)
                .then(setActivity);
        }
    }, [activityId, activity])

    return {
        activity,
    };
};

export const useLatestActivity = ({category}) => {
    const PAGE_SIZE = 2;
    const [latestActivities, setLatestActivities] = useState([]);

    useEffect( () => {
        const searchParams = new URLSearchParams({
            where: `category="${category}"`,
            sortBy: '_createdOn desc',
            pageSize: PAGE_SIZE,
        });
        
        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(data => {
                // const filteredData = category
                // ? data.filter(activity => activity.category === category)
                // : data;
                // setLatestActivities(filteredData.slice(0, PAGE_SIZE));
                setLatestActivities(data || []);
            });
    }, [category]);
    return {
        latestActivities,
    }

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


