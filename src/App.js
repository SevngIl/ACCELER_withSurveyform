import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Vision from "./components/Vision";
import TeamInfo from "./components/TeamInfo";
import Contact from "./components/Contact";
import "./App.css";
import Checkbox from "./components/survey/Checkbox";
import RadioButton from "./components/survey/RadioButton";
import QuestionForm from "./components/survey/QuestionForm";
import ShortForm from "./components/survey/ShortForm";
import AddingOption from "./components/survey/AddingOption";
import SurveyForm from "./components/survey/SurveyForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vision" element={<Vision />} />
          <Route path="teaminfo" element={<TeamInfo />} />
          <Route path="contact" element={<Contact />} />
          <Route path="surveyform" element={<SurveyForm></SurveyForm>}/>
          <Route path="checkbox" element={<Checkbox/>}> </Route>
          <Route path="radiobutton" element={<RadioButton/>}/>
          <Route path="questionform" element={<QuestionForm/>}/>
          <Route path="shortform" element={<ShortForm/>}/>
          <Route path="addingoption" element={<AddingOption/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
