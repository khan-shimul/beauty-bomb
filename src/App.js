import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login/Login';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import SkinTreatment from './compo/IndexView/Services/SkinTreatment/SkinTreatment';
import Massage from './compo/IndexView/Services/Massage/Massage';
import Body from './compo/IndexView/Services/Body/Body';
import Aroma from './compo/IndexView/Services/Aroma/Aroma';
import ServiceDetails from './compo/IndexView/Services/ServiceDetails/ServiceDetails';
AOS.init();

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} >
              {/* Nested Routes */}
              <Route path='/' element={<SkinTreatment />}></Route>
              <Route path='/skin' element={<SkinTreatment />}></Route>
              <Route path='/message' element={<Massage />}></Route>
              <Route path='/body' element={<Body />}></Route>
              <Route path='/aroma' element={<Aroma />}></Route>
            </Route>
            <Route path="/home" element={<Home />} >
              <Route path='/home' element={<SkinTreatment />}></Route>
            </Route>
            {/* Service Details */}
            <Route path="/service/:id" element={<PrivateRoute><ServiceDetails /></PrivateRoute>} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
