import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// import "./assets/asset/css/bootstrap/bootstrap-grid.css";
// import "./assets/asset/css/bootstrap/bootstrap-reboot.css";
// import "./assets/asset/css/bootstrap/bootstrap.css";
import "./assets/asset/css/main.css";

import Header from "./components/header";
import Footer from "./components/footer";
import IndexPage from "./components/IndexPage";
import Contact from "./components/contact";
import Academy from "./components/academy";
import Gallery from "./components/gallery";
import News from "./components/news";
import Facilities from "./components/facilities";
import OurTeam from "./components/our-team";
import PageFaq from "./components/page-faq";
import PageRegister from "./components/page-register";
import Partners from "./components/partner";
import Players from "./components/players";
import SingleNews from "./components/single-news";
import SinglePlayer from "./components/single-player";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/academy">
          <Academy />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/facilities">
          <Facilities />
        </Route>
        <Route path="/our-team">
          <OurTeam />
        </Route>
        <Route path="/page-faq">
          <PageFaq />
        </Route>
        <Route path="/page-register">
          <PageRegister />
        </Route>
        <Route path="/partner">
          <Partners />
        </Route>
        <Route path="/players">
          <Players />
        </Route>
        <Route path="/single-news">
          <SingleNews />
        </Route>
        <Route path="/single-player">
          <SinglePlayer />
        </Route>
        <Route exact path="/">
          <IndexPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
