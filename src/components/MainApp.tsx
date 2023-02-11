import React from 'react'
import TopBar from './TopBar'
import './MainApp.css'
export default function MainApp() {
  return (
    <div className='mainPage'>
      {/* <TopBar/> */}
      <header className="App-header">
        {/* <img src={" https://play-lh.googleusercontent.com/rxQcfqUHKPpokclJ51AxIaat6XlBWELoV6RGMO8fdRbGwKyJo00RDSsti94ASKPdSjs"} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='about'>
        Welcome to a TypeScript / React / Webpack site
      </div>
    </div>
  )
}
