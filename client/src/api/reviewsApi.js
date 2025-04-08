import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/reviews';

// export default {
//      create(email, activityId, review) {
//        return  request.post(baseUrl, { email, activityId, review });
//     }
// };

export const useReviews = (activityId) => {
    const { request } = useAuth();
    const [ reviews, setReviews ] = useState([]);

    useEffect( () => {
        const searchParams = new URLSearchParams({
            where: 'activityId="${activityId}"',
        });

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setReviews)
    }, [ activityId ]); 

    return {
        reviews,
    }
};

export const useCreateReview = () => {

}