import { Colors, Spacing, Shadow } from '../../Styles'
import './Bouton.css'

const ButtonSmall = (props) => {
  const styles = {
    primary: {
      backgroundColor: Colors.primary,
      color: Colors.white,
      filter: Shadow.dropshadow.primary,
      ...Spacing.button.small,
    },
    secondary: {
      backgroundColor: Colors.secondary,
      color: Colors.primary,
      filter: Shadow.dropshadow.secondary,
      ...Spacing.button.small,
    },
    white: {
      backgroundColor: Colors.white,
      color: Colors.primary,
      filter: Shadow.dropshadow.primary,
      ...Spacing.button.small,
      border: `1px solid ${Colors.primary}`,
    },
    black: {
      backgroundColor: Colors.black,
      color: Colors.white,
      filter: Shadow.dropshadow.primary,
      ...Spacing.button.small,
    },
  }
  return props.primary ? (
    <button style={styles.primary}>{props.title}</button>
  ) : props.secondary ? (
    <button style={styles.secondary}>{props.title}</button>
  ) : props.white ? (
    <button style={styles.white}>{props.title}</button>
  ) : (
    <button style={styles.black}>{props.title}</button>
  )
}

export default ButtonSmall
