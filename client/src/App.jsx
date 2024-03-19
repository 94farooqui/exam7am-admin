import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssessmentListPage from "./pages/AssessmentListPage";
import DrivingHomePage from "./pages/DrivingHomePage";
import Home from "./pages/Home";
import QuizListPage from "./pages/QuizListPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import SchoolProgram from "./pages/SchoolProgram";
import DrivingCountry from "./pages/DrivingCountry";
import NewAssessmentCategory from "./pages/NewAssessmentCategory";
import AssessmentQuestionsList from "./pages/AssessmentQuestionsList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/quiz" element={<QuizListPage />} />
          <Route path="/assessment" element={<AssessmentListPage />}>
          </Route>
          <Route path="/assessment/:id" element={<AssessmentQuestionsList />} />
          <Route path="/assessment/new" element={<NewAssessmentCategory />} />
          <Route path="/driving" element={<DrivingHomePage />} />
          <Route path="/driving/:country" element={<DrivingCountry />} />
          <Route path="/school" element={<SchoolProgram />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
