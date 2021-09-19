import * as React from "react"

import { LogoGithub, LogoLinkedin, Mail } from 'react-ionicons'

import "./footer.css"

const Footer: React.FC = (): React.ReactElement => {
  return (
    <footer>
      <div>
        <div>© 2021 Phillip Paul</div>
        <div id="footer-break">|</div>
        <div>
          <LogoGithub
            className={"social-icon"}
            color={'#00000'}
            height="22px"
            width="22px"
          />
          <LogoLinkedin
            className={"social-icon"}
            color={'#00000'}
            height="22px"
            width="22px"
          />
          <Mail
            className={"social-icon"}
            color={'#00000'}
            height="22px"
            width="22px"
          />
        </div>
        <div id="footer-break">|</div>
        <div>Imprint & Data protection</div>
      </div>
    </footer>
  )
}

export default Footer
