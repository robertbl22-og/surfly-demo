/* global Surfly */
import React, { useEffect, useState } from "react"
import { Button } from "antd"
import logo from "./logo.svg"
import "./App.css"

const initCfg = {
  widget_key: "0237ad51dae843cc8ca12af5cfa829ae",
}
const settings = {
  leader_redirect_url: "https://robertbl22-og.github.io/surfly-demo/",
  follower_redirect_url: "https://robertbl22-og.github.io/surfly-demo/",
  url: "https://robertbl22-og.github.io/surfly-demo/",
  "pattern": ".*renew\\.txdmv\\.gov.*",
  "redirect": "https://renew.txdmv.gov/Renew/registrationrenewal/jsp/txdot_reg_ren_enter_vehicle_info.jsp"
}

function App() {
  const [cobrowser, setCobrowser] = useState({ session: null, isSessionStarted: false })

  useEffect(() => {
    Surfly.init(initCfg, function(initResult) {
      if (initResult.success) {
        console.log("Surfly initResult.success!")
        // API calls can now be made!
        if (Surfly.isInsideSession) {
          console.log("Surfly Surfly.isInsideSession:")
          setCobrowser({ ...cobrowser, isSessionStarted: true })
        } else {
          // Surfly.button(); // Default Surfly button
          const session = Surfly.session(settings)
          setCobrowser({ ...cobrowser, session })
          session.on("session_started", () => {
            console.log("Surfly 'session_started'!")
            setCobrowser({ ...cobrowser, isSessionStarted: true })
          })
        }
      } else {
        console.warn("Surfly was unable to initialize properly.")
      }
    })
  }, [])

  const handleStartSessionClick = () => {
    // Surfly.session(settings).startLeader()
    if (cobrowser && cobrowser.session) {
      cobrowser.session.startLeader(null, {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "+123123123123"
      })
    }
  }

  const handleOpenSiteClick = () => {
    document.location =
      "https://renew.txdmv.gov/Renew/registrationrenewal/jsp/txdot_reg_ren_enter_vehicle_info.jsp"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Let&rsquo;s start your renewal...</p>
        {cobrowser.isSessionStarted ? (
          <Button type="primary" size="large" icon="arrow-right" onClick={handleOpenSiteClick}>
            Renew Registration Now
          </Button>
        ) : (
          <Button type="primary" size="large" icon="api" onClick={handleStartSessionClick}>
            Connect to a Live Assistant
          </Button>
        )}
      </header>
    </div>
  )
}

export default App
