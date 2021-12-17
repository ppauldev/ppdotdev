import * as React from "react"

import TechTag from "../post/header/TechTag"

import "../../styles/footer.css"

const Footer: React.FC = (): React.ReactElement => {
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
            <TechTag key="mail" keyword="mail" />
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
