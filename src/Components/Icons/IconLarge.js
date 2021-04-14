import { Colors, Spacing } from '../../Styles'

const IconLarge = (props) => {
  const styles = {
    primary: {
      backgroundColor: Colors.primary,
      ...Spacing.button.square.large,
    },
    secondary: {
      backgroundColor: Colors.secondary,
      ...Spacing.button.square.large,
    },
    white: {
      backgroundColor: Colors.grey,
      ...Spacing.button.square.large,
    },
    black: {
      backgroundColor: Colors.black,
      ...Spacing.button.square.large,
    },
  }
  return props.primary ? (
    <button style={styles.primary}>
      <img src={props.src} alt="Icon from Areatomic Librairie" style={Spacing.button.square.image}/>
    </button>
  ) : props.secondary ? (
    <button style={styles.secondary}>
      <img src={props.src} alt="Icon from Areatomic Librairie" style={Spacing.button.square.image}/>
    </button>
  ) : props.white ? (
    <button style={styles.white}>
      <img src={props.src} alt="Icon from Areatomic Librairie" style={Spacing.button.square.image}/>
    </button>
  ) : (
    <button style={styles.black}>
      <img src={props.src} alt="Icon from Areatomic Librairie" style={Spacing.button.square.image}/>
    </button>
  )
}

export default IconLarge
