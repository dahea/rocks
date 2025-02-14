import * as React from "react"
import "../styles/main.scss"
import chilton from "../images/chilton.png"
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
    actionLabel: "Playing bass",
    nounLabel: "passion",
    locationIcon: chilton,
    locationLabel: "Chilton",
    url: "https://chilton444.bandcamp.com",
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
          <div key={link.url} className="row">
              <a href={link.url} target="_blank">
                <img src={link.locationIcon} alt={link.locationLabel} />
              </a>
              <span>{link.actionLabel} for {link.nounLabel}</span>
          </div>
        ))}
        <div className="row">
          <span className="emoji">&#128570;</span>
          Until it stops being fun and I move on.
        </div>
        <div className="byline"> - 다혜 / Da-Hea</div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>다혜 rocks</title>
