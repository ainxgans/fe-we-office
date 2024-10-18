import './App.css'
import Browse from "./pages/Browse.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CityDetails from "./pages/CityDetails.tsx";
import Details from "./pages/Details.tsx";
import BookOffice from "./pages/BookOffice.tsx";
import SuccessBooking from "./pages/SuccessBooking.tsx";
import CheckBooking from "./pages/CheckBooking.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Browse/>} />
          <Route path="/office/:slug" element={<Details/>} />
          <Route path="/office/:slug/book" element={<BookOffice/>} />
          <Route path="/city/:slug" element={<CityDetails/>} />
          <Route path="/success-booking" element={<SuccessBooking/>} />
          <Route path="/check-booking" element={<CheckBooking/>} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
