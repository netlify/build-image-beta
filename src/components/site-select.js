import React, { useState, useEffect } from "react"

import Select from "../netlify-ui/src/components/ui/Select"
import * as apiClient from "../utils/client"

/**
 * @param {{ query: string, apiToken: string }} opts
 */
async function loadSites({ query, apiToken }) {
  apiClient.defaults.headers = {
    Authorization: `Bearer ${apiToken}`,
  }
  try {
    const sites = await apiClient.listSites({
      name: query,
      filter: "all",
    })
    return sites
  } catch (e) {
    console.error(e)
    return []
  }
}

/**
 * @param {{ apiToken?: string }} props
 */
export const SiteSelect = ({ apiToken }) => {
  const [value, setValue] = useState(null)
  const [query, setQuery] = useState("")
  const [options, setOptions] = useState([])

  useEffect(() => {
    if (!apiToken) {
      return
    }
    loadSites({ query, apiToken }).then(sites => {
      setOptions(sites)
    })
  }, [query, apiToken])

  useEffect(() => console.log(value), [value])

  return (
    <Select
      backspaceRemoves
      labelKey="name"
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
