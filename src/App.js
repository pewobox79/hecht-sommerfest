import './App.css';
import Menu from './components/Menu'
import Welcome from "./components/Welcome";
import CounterField from './components/CounterField'
import Footer from "./components/Footer";
import {IntroSection} from "./styled";
import EventDetails from "./components/EventDetails";
import Feedback from "./components/Feedback";

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
