import { Heading, Button, Icon } from '../Components'

import cadies from '../assets/shopping-cart 1.svg'
import user from '../assets/user 1.svg'
import arrow from '../assets/left-arrow 1.svg'

const Home = () => {
  return (
    <div className="container pt-2">
      <Heading.Heading1
        title="Areatomic - React JS Template"
        primary
        isCentered
      />
      <Heading.Heading2 title="Titres" primary isCentered />
      <div className="columns">
        <div className="column">
          <Heading.Heading1 title="Heading1" primary isCentered />
          <Heading.Heading2 title="Heading2" primary isCentered />
          <Heading.Heading3 title="Heading3" primary isCentered />
          <Heading.Heading4 title="Heading4" primary isCentered />
          <Heading.Heading5 title="Heading5" primary isCentered />
          <Heading.Heading6 title="Heading6" primary isCentered />
        </div>
        <div className="column">
          <Heading.Heading1 title="Heading1" secondary isCentered />
          <Heading.Heading2 title="Heading2" secondary isCentered />
          <Heading.Heading3 title="Heading3" secondary isCentered />
          <Heading.Heading4 title="Heading4" secondary isCentered />
          <Heading.Heading5 title="Heading5" secondary isCentered />
          <Heading.Heading6 title="Heading6" secondary isCentered />
        </div>
      </div>
      <Heading.Heading2 title="Boutons" primary isCentered />
      <div className="container">
        <div className="columns">
          <div className="column is-flex is-flex-direction-column">
            <Button.ButtonLarge title="Bouton primaire" primary />
            <Button.ButtonLarge title="Bouton secondaire" secondary />
            <Button.ButtonLarge title="Bouton noir" black />
            <Button.ButtonLarge title="Bouton blanc" white />
          </div>
          <div className="column is-flex is-flex-direction-column">
            <Button.ButtonMedium title="Bouton primaire" primary />
            <Button.ButtonMedium title="Bouton secondaire" secondary />
            <Button.ButtonMedium title="Bouton noir" black />
            <Button.ButtonMedium title="Bouton blanc" white />
          </div>
          <div className="column is-flex is-flex-direction-column">
            <Button.ButtonSmall title="Bouton primaire" primary />
            <Button.ButtonSmall title="Bouton secondaire" secondary />
            <Button.ButtonSmall title="Bouton noir" black />
            <Button.ButtonSmall title="Bouton blanc" white />
          </div>
        </div>
      </div>
      <Heading.Heading2 title="Icônes" primary isCentered />
      <div className="columns">
        <div className="column is-flex is-flex-direction-column">
          <Icon.IconLarge src={cadies} primary />
          <Icon.IconLarge src={cadies} secondary />
          <Icon.IconLarge src={cadies} white />
          <Icon.IconLarge src={cadies} black />
        </div>
        <div className="column is-flex is-flex-direction-column">
          <Icon.IconMedium src={cadies} primary />
          <Icon.IconMedium src={cadies} secondary />
          <Icon.IconMedium src={cadies} white />
          <Icon.IconMedium src={cadies} black />
        </div>
        <div className="column is-flex is-flex-direction-column">
          <Icon.IconSmall src={user} primary />
          <Icon.IconSmall src={arrow} secondary />
        </div>
      </div>
    </div>
  )
}

export default Home
