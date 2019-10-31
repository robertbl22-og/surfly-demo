/* global Surfly */
import React, { useEffect, useState } from "react"
import { Button, Row, Col, Layout, Typography } from "antd"
import logo from "./tx-carreg-logo.svg"
import bgBanner from "./bg-banner.png"
import "./App.css"

const { Header, Content, Footer } = Layout
const { Title, Text } = Typography

const initCfg = {
  widget_key: "0237ad51dae843cc8ca12af5cfa829ae",
}
const settings = {
  leader_redirect_url: "https://robertbl22-og.github.io/surfly-demo/",
  follower_redirect_url: "https://robertbl22-og.github.io/surfly-demo/",
  url: "https://robertbl22-og.github.io/surfly-demo/",
  whitelist: [
    {
      pattern: ".*renew\\.txdmv\\.gov.*",
      redirect:
        "https://renew.txdmv.gov/Renew/registrationrenewal/jsp/txdot_reg_ren_enter_vehicle_info.jsp",
    },
  ],
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
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+123123123123",
      })
    }
  }

  const handleOpenSiteClick = () => {
    document.location =
      "https://renew.txdmv.gov/Renew/registrationrenewal/jsp/txdot_reg_ren_enter_vehicle_info.jsp"
  }

  return (
    <Layout>
      <Header style={{ backgroundColor: "white", height: "82px" }}>
        <img src={logo} alt="logo" style={{ padding: "10px 0" }} />
      </Header>
      <Content>
        <div style={{ position: "relative", minHeight: "500px" }}>
          <div className="App-header" style={{ backgroundImage: `url(${bgBanner})` }}>
            &nbsp;
          </div>
          <div>
            <Row gutter={24}>
              <Col offset={2} span={10} style={{ marginTop: "48px" }}>
                <Title style={{ color: "white", fontSize: "36pt" }}>Texas Car Registration</Title>
                <Title level={4} style={{ color: "white" }}>
                  <ul>
                    <li>Don't waste time waiting in line at the DMV</li>
                    <li>Avoid finding and printing forms</li>
                    <li>Skip the fines for expired registrations</li>
                  </ul>
                </Title>
              </Col>
              <Col
                offset={2}
                span={8}
                style={{
                  backgroundColor: "white",
                  padding: "24px",
                  marginTop: "48px",
                  minHeight: "350px",
                  textAlign: "center",
                }}>
                <Title level={3} style={{ marginBottom: "48px" }}>
                  Let&rsquo;s start your renewal...
                </Title>
                <Button
                  type="primary"
                  size="large"
                  icon="api"
                  style={{ marginBottom: "10px", opacity: cobrowser.isSessionStarted ? 0.5 : 1.0 }}
                  onClick={handleStartSessionClick}
                  disabled={cobrowser.isSessionStarted}
                  block>
                  Connect to a Live Assistant
                </Button>
                <br />
                {!cobrowser.isSessionStarted ? null : (
                  <Button
                    type="primary"
                    size="large"
                    icon="arrow-right"
                    onClick={handleOpenSiteClick}
                    block>
                    Renew Registration Now
                  </Button>
                )}
              </Col>
            </Row>
          </div>
        </div>
        <Row gutter={24} style={{ marginTop: "48px" }}>
          <Col offset={1} span={23}>
            <Title level={2}>Duis aute irure dolor in reprehenderit</Title>
          </Col>
        </Row>
        <Row gutter={24} style={{ marginBottom: "48px" }}>
          <Col offset={1} span={11}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Col>
          <Col span={11}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <Text type="secondary">
          <a href="https://www.google.com">Blocked URL</a>&nbsp;&nbsp;|&nbsp;&nbsp;About
          Us&nbsp;&nbsp;|&nbsp;&nbsp;Privacy Policy
        </Text>
      </Footer>
    </Layout>
  )
}

export default App
