import { Routes, Route } from "react-router";

import UserProvider from "./providers/UserProvider";

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
import NotFound from "./components/notFound/NotFound";
import AuthGuard from "./components/guards/AuthGuard";
import GuestGuard from "./components/guards/GuestGuard";
import ReviewShow from "./components/review-show/ReviewShow";
import ReviewCreate from "./components/review-create/ReviewCreate";

function App() {
  return (
    <UserProvider>
      <div className="page-wrapper">
        <Loader />
        <div className="full_bg">
          <Header />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Slider />} />
              <Route path="/activity" element={<ActivityCatalog />} />
              <Route element={<AuthGuard />} >
                  <Route path="/activity/create" element={<ActivityCreate />} />
                  <Route path="/activity/:category/:activityId/edit" element={<ActivityEdit />} />
                  <Route path="/logout" element={<Logout />} />
              
              </Route>

              {/* Auth Routes */}
              <Route element={<GuestGuard />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
              </Route>
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />

              {/* Customer Reviews */}
              <Route path="/review" element={<ReviewShow />} />
              {/* <Route
                path="/review/create"
                element={<ReviewCreate />}
              /> */}

              {/* Catalogs */}
              <Route path="/activity/workout" element={<WorkoutCatalog />} />
              <Route
                path="/activity/meditation"
                element={<MeditationCatalog />}
              />
              <Route
                path="/activity/nutrition"
                element={<NutritionCatalog />}
              />

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

              {/* Fallback Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
