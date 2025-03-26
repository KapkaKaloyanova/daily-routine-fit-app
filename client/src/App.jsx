import {Routes, Route} from 'react-router';

import Header from './components/header/Header';
import Slider from './components/home/Slider';
import Login from './components/login/Login';
import Register from './components/register/Register';
import About from './components/About';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Pricing from './components/Pricing';
import ActivityCatalog from './components/activity-catalog/ActivityCatalog';
import ActivityCreate from './components/activity-create/ActivityCreate';
import CustomerReview from './components/customer-review/CustomerReview';
import Exercise from './components/activity-exercise/Exercise';
import Nutrition from './components/activity-nutrition/Nutrition';
import ExerciseDetails from './components/activity-exercise/exercise-details/ExerciseDetails';
import NutritionDetails from './components/activity-nutrition/nutrition-details/NutritionDetails';
import Meditation from './components/activity-meditation/Meditation';

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
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/customers" element={<CustomerReview />} />
      <Route path="/activity/exercise" element={<Exercise />} />
      <Route path="/activity/exercise/details" element={<ExerciseDetails />} />
      <Route path="/activity/nutrition" element={<Nutrition />} />
      <Route path="/activity/nutrition/details" element={<NutritionDetails />} />
      <Route path="/activity/meditation" element={<Meditation />} />
      

    </Routes>
  </div>
    <Footer />
    </>
  );
}

export default App;
