import * as React from "react"
import "../styles/main.scss"
import typecode from "../images/typecode.png"
import wmac from "../images/wmac.png"

const links = [
  {
    actionLabel: "Making websites",
    nounLabel: "money",
    locationIcon: typecode,
    locationLabel: "Type/Code",
    url: "https://www.typecode.com",
  },
  {
    actionLabel: "Training in martial arts",
    nounLabel: "balance",
    locationIcon: wmac,
    locationLabel: "World Martial Arts Center",
    url: "https://www.happykicks.com",
  },
]

const IndexPage = () => {
  return (
    <main>
      <div className="grid">
          <div className="row">
            <span className="emoji">&#128075;</span>
            Hi there, you can find me
          </div>
        {links.map(link => (
              <a href={link.url} target="_blank" key={link.url} className="row">
                <img src={link.locationIcon} alt={link.locationLabel} />
              <span>{link.actionLabel} for {link.nounLabel}</span>
              </a>
        ))}
        <div className="row">
          <span className="emoji">&#128570;</span>
          So long as it is fun.
        </div>
        <div className="byline"> - 다혜 / Da-Hea</div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>다혜 rocks</title>
