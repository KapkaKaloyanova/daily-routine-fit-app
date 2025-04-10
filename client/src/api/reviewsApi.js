import { useEffect, useReducer, useState } from "react";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/comments';


function reviewsReducer(state, action) {
    switch (action.type) {
        case 'ADD_REVIEW':
            return [...state, action.payload]
        case 'GET_ALL':
            return action.payload;
        default:
            return state;
    }
};

export const useReviews = (activityId) => {
    const { request } = useAuth();
    // const [ reviews, setReviews ] = useState([]);
    const [reviews, dispatch] = useReducer(reviewsReducer, [])

    useEffect( () => {
        const searchParams = new URLSearchParams({
            where: `activityId="${activityId}"`,
            load: `author=_ownerId:users`,
        });

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(result => dispatch({type: 'GET_ALL', payload: result}))
    }, [ activityId, request ]); 

    return {
        reviews, 
        addReview: (reviewData) => dispatch({type:'ADD_REVIEW', payload: reviewData}),
    }
};

export const useCreateReview = () => {
    const { request } = useAuth();

    const create = (activityId, review) => { 
        const reviewData = {
            activityId,
            review,
        }
        return request.post( baseUrl, reviewData )
    }

    return {
        create, 
    }
}