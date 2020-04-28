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
    return sites.reduce((result, site) => {
      result[site.id] = site
      return result
    }, {})
  } catch (e) {
    console.error(e)
    return {}
  }
}

/**
 * @param {{ apiToken?: string, value: Object, setValue: (val: Object) => void }} props
 */
export const SiteSelect = ({ apiToken, value, setValue }) => {
  const [query, setQuery] = useState("")
  const [options, setOptions] = useState({})

  useEffect(() => {
    if (!apiToken) {
      return
    }
    loadSites({ query, apiToken }).then(sites => {
      setOptions(sites)
    })
  }, [query, apiToken])

  useEffect(() => {
    if (!value || options[value.id] === value) {
      return
    }
    setOptions({
      ...options,
      [value.id]: value,
    })
  }, [value])

  return (
    <Select
      backspaceRemoves
      labelKey="name"
      noResultsText={"No results found"}
      options={Object.values(options)}
      onChange={setValue}
      onInputChange={setQuery}
      placeholder={"Search for the site across teams"}
      value={value}
      valueKey="id"
    />
  )
}
