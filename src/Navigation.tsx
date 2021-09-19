import * as React from "react"

import Emoji from "react-emoji-render";

import "./navigation.css"

const navigationItems: string[][] = Object.entries({
  // attributeValue: textValue //
  bookscoffee: "+",
  cleancode: "Clean code",
  protocols: "Protocols",
  research: "Research",
  testing: "Testing",
})

interface INavigation {
  setPostType: (args: string) => void,
}

const Navigation: React.FC<INavigation> = ({ setPostType }): React.ReactElement => {
  const [activeElement, setActiveElement] = React.useState("research")

  React.useEffect(() => {
    setPostType("research")
  }, [])

  const handleSelectPostType: React.MouseEventHandler = (e: React.MouseEvent<HTMLElement>) => {
    const value: string | null = (e.target as HTMLElement).getAttribute("value")!

    setPostType(value)
    setActiveElement(value)
  }

  const listElements = navigationItems.map((item: string[]) => {
    const [attributeValue, textValue] = item
    return (
      <li
        key={attributeValue}
        id={attributeValue === "bookscoffee" ? "special" : ""}
        className={activeElement === attributeValue ? "active" : ""}
        onClick={handleSelectPostType}
        value={attributeValue}
      >
        {attributeValue !== "bookscoffee" ? textValue : <Emoji text=":books: :coffee:" />}
      </li>
    )
  })

  return (
    <header>
      <div id="logo-wrapper">
        <div id="logo" />
      </div>
      <nav>
        <ul>
          {listElements}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
