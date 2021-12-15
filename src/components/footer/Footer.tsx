import * as React from "react"

import { LogoGithub, LogoLinkedin, Mail } from "react-ionicons"

import "../../styles/footer.css"

const Footer: React.FC = (): React.ReactElement => {
  return (
    <footer>
      <div>
        <div>© 2021 Phillip Paul</div>
        <div id="footer-break">|</div>
        <div>
          <LogoGithub
            color="#00000"
            height="22px"
            width="22px"
          />
          <LogoLinkedin
            color="#00000"
            height="22px"
            width="22px"
          />
          <Mail
            color="#00000"
            height="22px"
            width="22px"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
