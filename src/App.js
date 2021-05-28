import './App.css';
import MainHeader from './components/MainHeader'
import Welcome from "./components/Welcome";
import CounterField from './components/CounterField'
import Footer from "./components/Footer";
import EventDetails from "./components/EventDetails";
import Feedback from "./components/Feedback";
import IntroSection from "./components/IntroSection";
import ImgSection from "./components/ImgSection";
import CovidSection from "./components/CovidSection";

function App() {


    return (
        <>
            <MainHeader/>
            <IntroSection>
                <Welcome/>
                <CounterField/>
            </IntroSection>
            <EventDetails/>
            <CovidSection/>
            <Feedback/>
            <ImgSection/>
            <Footer/>
        </>
    )
}

export default App;
