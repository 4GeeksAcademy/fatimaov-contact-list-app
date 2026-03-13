// Import necessary components and functions from react-router-dom.
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import AddNewContact from "./pages/AddNewContact";
import EditContact from "./pages/EditContact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/add-new-contact" element={<AddNewContact />} />
      <Route path="/edit-contact/:id" element={<EditContact />} />
    </>
  )
);