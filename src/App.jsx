// Original Component

import "./App.css"; //special css code
import CourseList from "./components/CourseList"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <CourseList />
      <Footer/>
    </div>
  );
}
export default App; // default export (just once)

// export const userName = "erfan"; // named export
// export const userEmail = "user@gmail.com"; // named export

