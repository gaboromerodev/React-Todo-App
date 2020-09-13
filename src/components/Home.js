import React from "react"
import "./home.css"

function Home() {
    return (
        <div className="home">
            <div className="home__intro">
                <h1>Todo App [React JS]</h1>
                <subtitle>By Gabriel Adrián Romero</subtitle>
                <p><strong>Concepts covered:</strong> React Reusable Components, React State,  React Lifecycle Methods,
                    React Router, Props, Conditional Render, Styling, Deployment.</p>
            </div>

            <div className="home__project">
                <input type="checkbox"/>
                <p>Placeholder text here</p>

                <input type="checkbox"/>
                <p>Placeholder text here</p>

                <input type="checkbox"/>
                <p>Placeholder goes here</p>

                <input type="checkbox"/>
                <p>Placeholder goes here</p>
            </div>
        </div>
    )
}

export default Home
