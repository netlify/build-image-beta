import React from "react"

import Layout from "../components/layout"
import { SiteSelect } from "../components/site-select"
import { FeatureList } from "../components/feature-list"

import "../netlify-ui/src/stylesheets/2.0/imports/utilities.css"

const IndexPage = () => (
  <Layout>
    <SiteSelect />
    <FeatureList />
  </Layout>
)

export default IndexPage
