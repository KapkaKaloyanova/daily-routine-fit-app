import { Routes, Route } from "react-router";

import Header from "./components/header/Header";
import Slider from "./components/home/Slider";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import About from "./components/About";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Pricing from "./components/Pricing";
import ActivityCatalog from "./components/activity-catalog/ActivityCatalog";
import ActivityCreate from "./components/activity-create/ActivityCreate";
import WorkoutCatalog from "./components/activity-workout/WorkoutCatalog";
import WorkoutDetails from "./components/activity-workout/workout-details/WorkoutDetails";
import NutritionCatalog from "./components/activity-nutrition/NutritionCatalog";
import NutritionDetails from "./components/activity-nutrition/nutrition-details/NutritionDetails";
import MeditationCatalog from "./components/activity-meditation/MeditationCatalog";
import CustomerReview from "./components/customer-review/CustomerReview";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <>
      <Loader />
      <div className="full_bg">
        <Header />
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/activity" element={<ActivityCatalog />} />
          <Route path="/activity/create" element={<ActivityCreate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/customers" element={<CustomerReview />} />
          <Route path="/activity/workout" element={<WorkoutCatalog />} />
          <Route
            path="/activity/workout/:activityId/details"
            element={<WorkoutDetails />}
          />
          <Route path="/activity/nutrition" element={<NutritionCatalog />} />
          <Route
            path="/activity/nutrition/details"
            element={<NutritionDetails />}
          />
          <Route path="/activity/meditation" element={<MeditationCatalog />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
