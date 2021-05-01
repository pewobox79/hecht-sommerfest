import './App.css';
import Menu from './components/Menu'
import Welcome from "./components/Welcome";
import CounterField from './components/CounterField'
import Footer from "./components/Footer";
import EventDetails from "./components/EventDetails";
import Feedback from "./components/Feedback";
import IntroSection from "./components/IntroSection";

function App() {


    return (
        <div>
            <Menu/>
            <IntroSection>
                <Welcome/>
                <CounterField/>
            </IntroSection>
            <EventDetails/>
            <Feedback/>
            <Footer/>
        </div>
    );
}

export default App;
