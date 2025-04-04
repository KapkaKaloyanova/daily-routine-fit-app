import { useState } from "react";
import { Routes, Route } from "react-router";

import { UserContext } from "./contexts/UserContext";

import Header from "./components/header/Header";
import Slider from "./components/home/Slider";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import About from "./components/about-page/About";
import Pricing from "./components/Pricing";
import ActivityCatalog from "./components/activity-catalog/ActivityCatalog";
import ActivityCreate from "./components/activity-create/ActivityCreate";
import ActivityEdit from "./components/activity-edit/ActivityEdit";
import WorkoutCatalog from "./components/activity-workout/WorkoutCatalog";
import WorkoutDetails from "./components/activity-workout/workout-details/WorkoutDetails";
import NutritionCatalog from "./components/activity-nutrition/NutritionCatalog";
import MeditationCatalog from "./components/activity-meditation/MeditationCatalog";
import NutritionDetails from "./components/activity-nutrition/nutrition-details/NutritionDetails";
import MeditationDetails from "./components/activity-meditation/meditation-details/MeditationDetails";
import CustomerReviewCreate from "./components/customer-review-create/CustomerReviewCreate";
import CustomerReviewShow from "./components/customer-review-show/CustomerReviewShow";
import NotFound from "./components/notFound/NotFound";

function App() {

const [authData,setAuthData] = useState({});

const userLoginHandler = (resultData) => {
  setAuthData(resultData);
};

const userLogoutHandler = () => {
  setAuthData({});
}

  return (
    <UserContext.Provider value={{...authData, userLoginHandler, userLogoutHandler}}>
    <>
      <Loader />
      <div className="full_bg">
        <Header />
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/activity" element={<ActivityCatalog />} />
          <Route path="/activity/create" element={<ActivityCreate />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />

          {/* Customer Reviews */}
          <Route path="/customer-review" element={<CustomerReviewShow />} />
          <Route path="/customers-review/create" element={<CustomerReviewCreate />} />

          {/* Catalogs */}
          <Route path="/activity/workout" element={<WorkoutCatalog />} />
          <Route path="/activity/meditation" element={<MeditationCatalog />} />
          <Route path="/activity/nutrition" element={<NutritionCatalog />} />

          {/* Details Pages */}
          <Route
            path="/activity/workout/:activityId/details"
            element={<WorkoutDetails />}
          />
          <Route
            path="/activity/nutrition/:activityId/details"
            element={<NutritionDetails />}
          />
          <Route
            path="/activity/meditation/:activityId/details"
            element={<MeditationDetails />}
          />

          {/* Edit Page */}
          <Route
            path="/activity/:category/:activityId/edit"
            element={<ActivityEdit />}
          />
          
          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
    </UserContext.Provider>
  );
}

export default App;
