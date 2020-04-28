import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Button from "../netlify-ui/src/components/ui/Button"
import IconSuccess from "../netlify-ui/src/images/inline/icon-success.svg"

/**
 * @param {{
 *   name: string,
 *   pullRequest?: string,
 *   enabled: boolean,
 *   active: boolean,
 *   onActivate: () => void
 * }} props
 */
const Feature = ({ name, pullRequest, enabled, active, onActivate }) => {
  return (
    <li>
      <div className="inline">
        <div>
          <h4>{name}</h4>
          <div className="meta">
            <a href={pullRequest}>{pullRequest}</a>
          </div>
        </div>
        {active ? (
          <span className="fit">
            <strong>Active</strong>
            <IconSuccess className="icon-success" width="16" height="16" />
          </span>
        ) : (
          <Button
            primary
            className="fit subdued"
            onClick={onActivate}
            disabled={!enabled}
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
 * @param {{ enabled: boolean, onActivate: (imageTag: string) => void }} props
 */
export const FeatureList = ({ onActivate, enabled }) => {
  const { allBuildImagesYaml } = useStaticQuery(query)
  return (
    <ul className="table-body card__premium">
      <Feature
        name={"Default Image (Ubuntu Xenial 16.04)"}
        active={false}
        enabled={enabled}
        onActivate={() => onActivate("xenial")}
        key={"xenial"}
      />
      {allBuildImagesYaml.edges.map(
        ({ node: { name, pull_request, image_tag } }) => (
          <Feature
            key={image_tag}
            name={name}
            pullRequest={pull_request}
            active={false}
            enabled={enabled}
            onActivate={() => onActivate(image_tag)}
          />
        )
      )}
    </ul>
  )
}
