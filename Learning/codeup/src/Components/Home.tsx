import { For, createSignal } from "solid-js";
import Navbar from "./Navbar";

function Home() {
    // Retrieve tech list from local storage
    const storedTechList = JSON.parse(localStorage.getItem('Techs') || '[]') as string[];

    // Create a signal for the tech list
    const [techList, setTechList] = createSignal<string[]>(storedTechList);

    // Function to handle button click
    const handleButtonClick = (techName: string) => {
        // Handle the click event, for example, navigate to a dynamic page
        console.log(`Button clicked for tech: ${techName}`);
    };

    return (
        <div>
            <Navbar />

            {/* Display tech buttons */}
            <For each={techList()} fallback={<div>Loading...</div>}>
                {(tech, index) => (
                    <div>
                        <button onClick={() => handleButtonClick(tech)}>
                            {tech}
                        </button>
                    </div>

                )}
            </For>

        </div>
    );
}

export default Home;
