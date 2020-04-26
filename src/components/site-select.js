import React, { useState, useEffect } from "react"

import Select from "../netlify-ui/src/components/ui/Select"
import * as apiClient from "../utils/client"

/**
 * @param {{ query: string, apiToken: string }} opts
 */
function loadSites({ query, apiToken }) {
  apiClient.defaults.headers = {
    Authorization: `Bearer ${apiToken}`,
  }
  return apiClient.listSites({
    name: query,
  })
}

/**
 * @param {{ apiToken?: string }} props
 */
export const SiteSelect = ({ apiToken }) => {
  const [value, setValue] = useState([])
  const [query, setQuery] = useState("")
  const [options, setOptions] = useState([])

  useEffect(() => {
    if (!apiToken) {
      return
    }
    loadSites({ query, apiToken }).then(sites => {
      setOptions(sites.map(s => s.name))
    })
  }, [query, apiToken])

  return (
    <Select
      backspaceRemoves
      labelKey="name"
      multi
      noResultsText={"No results found"}
      options={options}
      onChange={setValue}
      onInputChange={setQuery}
      placeholder={"Search for the site across teams"}
      value={value}
      valueKey="id"
    />
  )
}
