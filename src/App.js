import './App.css';
import MainHeader from './components/MainHeader'
import Welcome from "./components/Welcome";
import CounterField from './components/CounterField'
import Footer from "./components/Footer";
import EventDetails from "./components/EventDetails";
import Feedback from "./components/Feedback";
import IntroSection from "./components/IntroSection";
import ImgSection from "./components/ImgSection";

function App() {


    return (
        <>
            <MainHeader/>
            <IntroSection>
                <Welcome/>
                <CounterField/>
            </IntroSection>
            <EventDetails/>
            <Feedback/>
            <ImgSection/>
            <Footer/>
        </>
    )
}

export default App;
