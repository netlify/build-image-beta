import React, { useEffect, useState } from "react"
import querystring from "querystring"

import Layout from "../components/layout"
import { SiteSelect } from "../components/site-select"
import { FeatureList } from "../components/feature-list"

import "../netlify-ui/src/stylesheets/2.0/imports/utilities.css"
import { Login } from "../components/login"

const { history, location } = window

function csrfToken() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8 // eslint-disable-line
    return v.toString(16)
  })
}

function parseHash(hash) {
  if (!hash) return {}
  const result = querystring.decode(hash.replace(/^#/, ""))
  return result
}

const LOCAL_STORAGE_TOKEN_KEY = "nf-auth-token"

const useAuthState = () => {
  const [token, setToken] = useState("")
  useEffect(() => {
    const response = parseHash(window.location.hash)
    /* Clear hash */
    document.location.hash = ""
    history.pushState(
      "",
      document.title,
      `${location.pathname}${location.search}`
    )

    if (response.token) {
      /* Protect against csrf (cross site request forgery https://bit.ly/1V1AvZD) */
      if (!localStorage.getItem(response.csrf)) {
        alert("Token invalid. Please try to login again")
        return
      }

      /* Clean up csrfToken */
      localStorage.removeItem(response.csrf)

      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, atob(response.token))
      setToken(atob(response.token))
      return
    }

    const restoredToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
    if (!!restoredToken) {
      setToken(restoredToken)
    }
  }, [setToken])
  return token
}

function handleAuth(e) {
  e.preventDefault()
  const state = csrfToken()
  /* Set csrf token */
  localStorage.setItem(state, "true")
  /* Do redirect */
  const redirectTo = `${location.origin}${location.pathname}`
  location.href = `/.netlify/functions/auth-start?url=${redirectTo}&csrf=${state}`
}

const IndexPage = () => {
  const token = useAuthState()

  return (
    <Layout>
      <Login onLogin={handleAuth} isAuthed={!!token} />
      <SiteSelect apiToken={token} />
      <FeatureList enabled={!!token} />
    </Layout>
  )
}

export default IndexPage
