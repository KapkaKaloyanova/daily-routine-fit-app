import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/reviews';

export default {
    async getAll(activityId) {

            const reviews = await request.get(baseUrl);
    
            // TODO: filter when migrate to collections
            // Client filtering (don't do this)
            const activityReviews = Object.values(reviews).filter(review => review.activityId === activityId);
    
            return activityReviews;

   },
    
     create(email, activityId, review) {

       return  request.post(baseUrl, { email, activityId, review });

    }

    
};
