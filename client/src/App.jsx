import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssessmentListPage from "./pages/AssessmentListPage";
import DrivingHomePage from "./pages/DrivingHomePage";
import Home from "./pages/Home";
import QuizListPage from "./pages/QuizListPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import SchoolProgram from "./pages/SchoolProgram";

const App = () => {
  return (<BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<Signin/>} />
        <Route path='/sign-up' element={<Signup/>} />
        <Route path='/quiz' element={<QuizListPage/>} />
        <Route path='/assessment' element={<AssessmentListPage/>} />
        <Route path='/driving' element={<DrivingHomePage/>} />
        <Route path='/school' element={<SchoolProgram/>} />
      </Routes>
      
    </BrowserRouter>)
}

export default App;