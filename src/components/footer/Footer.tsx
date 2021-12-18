import * as React from "react"

import TechTag from "../post/header/TechTag"

import "./footer.css"

interface IFooter {
  setPostType: (args: string) => void,
}

const Footer: React.FC<IFooter> = ({ setPostType }): React.ReactElement => {
  const viewEmailForm = (event) => {
    event.preventDefault();
    console.log("view email form: ", event.target)
    setPostType("email")
  }

  return (
    <footer>
      <div>
        <div className="footer-item-wrapper author">
          <p>© 2021 Phillip Paul</p>
        </div>
        <div id="footer-break">|</div>
        <div className="footer-item-wrapper">
          <p>contact:</p>
          <div className="tech-tags">
            <TechTag key="github" keyword="github" />
            <TechTag key="linkedin" keyword="linkedin" />
            <div id="link-mail-form" onClick={viewEmailForm}>
              <TechTag key="mail" keyword="mail" />
            </div>
          </div>
        </div>
        <div id="footer-break">|</div>
        <div className="footer-item-wrapper">
          <p>powered by:</p>
          <div className="tech-tags">
            <TechTag key="react" keyword="react" />
            <TechTag key="typescript" keyword="typescript" />
            <TechTag key="gatsby" keyword="gatsby" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
