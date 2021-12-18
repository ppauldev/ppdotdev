import * as React from "react"

import "./email_form.css"

const EmailForm: React.FC = (): React.ReactElement => {
  return (
    <main>
      <div id="email-section">
        <div id="email-form-wrapper">
          <form method="post" action="https://go.phillippaul.dev/mail">
            <div className="top-contact-area">
              <h3>Contact</h3>
            </div>
            <div className="middle-contact-area">
              <div className="email-area">
                <p>Email</p>
                <input type="email" name="email" placeholder="Your email" required />
              </div>
              <div className="name-area">
                <p>Name</p>
                <input type="text" name="name" placeholder="Your name" required />
              </div>
            </div>
            <div className="topic-area">
              <p>Topic</p>
              <select required>
                <option value="" disabled selected>Please select ..</option>
                <option value="general-question">General question</option>
                <option value="content">Content request</option>
                <option value="project">Project inquiry</option>
                <option value="bug">Found a bug!</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="message-area">
              <p>Message</p>
              <input type="text" name="message" required />
            </div>
            <div className="button-area">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default EmailForm
