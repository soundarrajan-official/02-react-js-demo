import {useState} from "react";

const content = [
    [
        "React is extremely Popular",
        "It makes building complex and interactive UIs a breeze",
        "Its powerful and flexible",
        "It has a very active and versatile ecosystem"
    ],
    [
        "Components, JSX and Props",
        "State",
        "Hooks (e.g. useEffect())",
        "Dynamic Rendering"
    ],
    [
        "Official web page (react.dev)",
        "Next.js (Fullstack Framework)",
        "React Native (build native mobile apps with React"
    ],
    [
        "Vanilla Javascript requires imperative programming",
        "Imperative Programming: You define all the steps needed",
        "React on the other hand embraces Declarative Programming",
        "Declarative Programming: With React You define the goal and react figure outs how to do it"
    ]
]

function App() {
    let [activeIndexOfListContent, setActiveIndexOfListContent] = useState(0);

    return (
        <div className="App">
            <header>
                <img src="react-logo-xs.png" alt="react-js-logo"/>
                <div>
                    <h1>React Js</h1>
                    <p>i.e. using the React library for rendering UI</p>
                </div>
            </header>
            <div id="tabs">
                <menu>
                    <button
                        id="btn-react-js"
                        className={activeIndexOfListContent === 0 ? "active" : ""}
                        onClick={() => setActiveIndexOfListContent(0)}
                    >
                        Why React Js?
                    </button>
                    <button
                        id="btn-core-features"
                        className={activeIndexOfListContent === 1 ? "active" : ""}
                        onClick={() => setActiveIndexOfListContent(1)}
                    >
                        Core Features
                    </button>
                    <button
                        id="btn-related-resources"
                        className={activeIndexOfListContent === 2 ? "active" : ""}
                        onClick={() => setActiveIndexOfListContent(2)}
                    >
                        Related Resources
                    </button>
                    <button
                        id="btn-vanilla-javascript-vs-react-js"
                        className={activeIndexOfListContent === 3 ? "active" : ""}
                        onClick={() => setActiveIndexOfListContent(3)}
                    >
                        Vanilla Javascript Vs React Js
                    </button>
                </menu>
                <div id="tab-content">
                    <ul>
                        {content[activeIndexOfListContent]
                            .map(content => <li key={content}>{content}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
