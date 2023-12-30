import BlogComponent from "./components/BlogComponent.jsx"
import Carous from "./components/Carous.jsx"
import Carousel3 from "./components/Carousel3.jsx"
import FoodBloggerDetails from "./components/FoodBloggerDetails.jsx"
import Header from "./components/Header.jsx"
import Preview from "./components/Preview.jsx"
import Footer from './components/Footer.jsx'
import { Video } from "./components/VideoPage/Video.jsx"
import { LoadVideo } from "./components/VideoPage/LoadVideo.jsx"
function App() {
  return (
    <div className="m-0">
        <Header/>
        <BlogComponent/>
        <Carous/>
        <Carousel3/>
        <FoodBloggerDetails/>
        <Preview/>
        <Footer/>
        {/* videos */}
        <Video/>
        <LoadVideo/>
    </div>
  )
}

export default App
