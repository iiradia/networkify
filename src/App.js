import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp.tsx'
import SignIn from './components/SignIn.tsx'
import Dashboard from './student_dash/Dashboard.tsx'
import MentorDashboard from './mentor_dash/MentorDashboard.tsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp/>} />
          <Route exact path="/signin" element={<SignIn/>} />
          <Route exact path="/student" element={<Dashboard />} />
          <Route exact path="/mentor" element={<MentorDashboard />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
