import React from "react"
import containerStyles from "./Container.modules.css"

export default function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>
}
