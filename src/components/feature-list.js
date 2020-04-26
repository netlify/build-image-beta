import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Button from "../netlify-ui/src/components/ui/Button"
import IconSuccess from "../netlify-ui/src/images/inline/icon-success.svg"

/**
 * @param {{
 *   name: string,
 *   pullRequest?: string,
 *   enabled: boolean,
 *   hasAuth: boolean,
 *   onActivate: () => void
 * }} props
 */
const Feature = ({ name, pullRequest, enabled, hasAuth, onActivate }) => {
  return (
    <li>
      <div className="inline">
        <div>
          <h4>{name}</h4>
          <div className="meta">
            <a href={pullRequest}>{pullRequest}</a>
          </div>
        </div>
        {enabled ? (
          <span className="fit">
            <strong>Active</strong>
            <IconSuccess className="icon-success" width="16" height="16" />
          </span>
        ) : (
          <Button
            primary
            className="fit subdued"
            onClick={onActivate}
            disabled={!hasAuth}
          >
            Activate
          </Button>
        )}
      </div>
    </li>
  )
}

const query = graphql`
  query BuildImages {
    allBuildImagesYaml {
      edges {
        node {
          name
          pull_request
          image_tag
        }
      }
    }
  }
`

/**
 * @param {{ apiToken: string, onActivate: (imageTag: string) => void }} props
 */
export const FeatureList = ({ onActivate, apiToken }) => {
  const { allBuildImagesYaml } = useStaticQuery(query)
  return (
    <ul className="table-body card__premium">
      <Feature
        name={"Default Image (Xenial)"}
        enabled={false}
        hasAuth={!!apiToken}
        onActivate={() => onActivate("xenial")}
      />
      {allBuildImagesYaml.edges.map(
        ({ node: { name, pull_request, image_tag } }) => (
          <Feature
            name={name}
            pullRequest={pull_request}
            enabled={false}
            hasAuth={!!apiToken}
            onActivate={() => onActivate(image_tag)}
          />
        )
      )}
    </ul>
  )
}
