import React from "react"
import Modal from "../netlify-ui/src/components/ui/Modal"
import Button from "../netlify-ui/src/components/ui/Button"

export const Login = ({ isAuthed, onLogin }) => {
  return (
    <Modal show={!isAuthed} noLayout hideOnSave={false} onHide={() => {}}>
      <Button
        primary
        style={{ margin: "0 auto", display: "block" }}
        onClick={onLogin}
      >
        Login with Netlify
      </Button>
    </Modal>
  )
}
