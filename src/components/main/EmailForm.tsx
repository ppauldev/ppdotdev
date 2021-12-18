import * as React from "react"

const EmailForm: React.FC = (): React.ReactElement => {
  return (
    <main>
      <section>
        <form method="post" action="https://go.phillippaul.dev/mail">
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Message
            <input type="text" name="message" />
          </label>
          <input type="submit" value="send" />
        </form>
      </section>
    </main>
  )
}

export default EmailForm
