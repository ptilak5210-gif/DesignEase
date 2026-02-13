import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { setFontList } from "./redux/editorReducer.jsx";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const DashBoard = lazy(() => import("./pages/DashBoard.jsx"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));


const DEFAULT_FONTS = [
  {
    family: "Roboto",
    files: {
      regular: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.ttf"
    }
  },
  {
    family: "Poppins",
    files: {
      regular: "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJA.ttf"
    }
  },
  {
    family: "Open Sans",
    files: {
      regular: "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4n.ttf"
    }
  },
  {
    family: "Lato",
    files: {
      regular: "https://fonts.gstatic.com/s/lato/v25/S6uyw4BMUTPHvxk.ttf"
    }
  },
  {
    family: "Montserrat",
    files: {
      regular: "https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-.ttf"
    }
  }
];

function App() {
  const dispatch = useDispatch();
  const { fontList } = useSelector((state) => state?.editor ?? {});

  useEffect(() => {
    if (fontList?.length) return;

    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${import.meta.env.VITE_GOOGLE_FONTS_KEY}&sort=popularity`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch fonts');
        return res.json();
      })
      .then((data) => {
        dispatch(setFontList(data?.items || []));
      })
      .catch((err) => {
        console.warn("Failed to fetch Google Fonts, using default fonts.", err);
        dispatch(setFontList(DEFAULT_FONTS));
      })
  }, [dispatch, fontList]);

  return (
    <Router>
      <Suspense fallback={<><Spin fullscreen /></>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<><DashBoard /></>} />
          <Route path="/login" element={<><Login /></>} />
          <Route path="/signup" element={<><Signup /></>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;