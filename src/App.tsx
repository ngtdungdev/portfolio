import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Skill from "./components/Skill.tsx";
import Work from "./components/Work.tsx";
import Review from "./components/Review.tsx";

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Skill/>
                <Work/>
                <Review/>
            </main>
        </>
    )
}
export default App;

