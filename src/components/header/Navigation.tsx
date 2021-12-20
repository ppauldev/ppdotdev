import * as React from "react"

import Logo from "./Logo"

import "./navigation.css"

const navigationItems: string[][] = Object.entries({
  // attributeValue: textValue //
  bookscoffee: "Books + Coffee",
  cleancode: "Clean code",
  protocols: "Protocols",
  research: "Research",
  testing: "Testing",
})

interface INavigation {
  postType: string,
  setPostType: (args: string) => void,
}

interface ICategoryBar {
  activeElement: string,
  setPostType: (args: string) => void,
}

const Navigation: React.FC<INavigation> = ({ postType, setPostType }): React.ReactElement => {
  const [activeElement, setActiveElement] = React.useState("research")

  React.useEffect(() => {
    setPostType("research")
  }, [])

  React.useEffect(() => {
    setActiveElement(postType)
  }, [postType])

  return (
    <header>
      <Logo />
      <CategoryBar activeElement={activeElement} setPostType={setPostType} />
    </header>
  )
}

const CategoryBar: React.FC<ICategoryBar> = ({ activeElement, setPostType }): React.ReactElement => {
  const handleSelectPostType: React.MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => {
    const value: string | null = (event.target as HTMLElement).getAttribute("value")!

    setPostType(value)
  }

  const listElements: JSX.Element[] = navigationItems.map((item: string[]) => {
    const [attributeValue, textValue]: string[] = item

    return (
      <li
        key={attributeValue}
        id={attributeValue === "bookscoffee" ? "special" : ""}
        className={activeElement === attributeValue ? "active" : ""}
        onClick={handleSelectPostType}
        value={attributeValue}
      >
        {attributeValue !== "bookscoffee" ? textValue : "📚 ☕"}
      </li>
    )
  })

  return (
    <nav>
      <ul>
        {listElements}
      </ul>
    </nav>
  )
}

export default Navigation
