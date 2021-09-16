import * as React from "react"
import "./navigation.css"

const navigationItems: Array<string[]> = Object.entries({
  //attributeValue: textValue//
  "research": "Research",
  "cleancode": "Clean code",
  "testing": "Testing",
  "protocols": "Protocols",
  "bookscoffee": "Books+Coffee",
})

interface NavigationProps {
  setPostType: (args: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ setPostType }): React.ReactElement => {
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
    return (<li className={activeElement === attributeValue ? "active" : ""} onClick={handleSelectPostType} value={attributeValue}>{textValue}</li>)
  })

  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul>
          {listElements}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
