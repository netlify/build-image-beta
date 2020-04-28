import ReactModal from "react-modal-original"

const original = ReactModal.setAppElement
ReactModal.setAppElement = () => {
  return original("#___gatsby")
}

export default ReactModal
