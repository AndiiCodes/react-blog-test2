import {  BrowserRouter as Router ,Route,Routes } from 'react-router-dom';


import Blog from "./pages/blog"
import Homepage from "./pages/Homepage"
import Blgopost from "./pages/Blogpost"
import Erorr from "./pages/Erorr"
import Header from "./components/Header"
function App() {
  return (
    <>
      <Router>
      <Header />

        <Routes>
          <Route path='/react-blog-test2' element={<Homepage />}></Route>
          <Route path='/react-blog-test2/blog' element={<Blog />}></Route>
          <Route path='/react-blog-test2/blog/:slug' element={<Blgopost />}></Route>
          <Route path='*' element={<Erorr />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
