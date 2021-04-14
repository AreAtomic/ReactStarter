import { Colors, Spacing } from '../../Styles'

const IconMedium = (props) => {
  const styles = {
    primary: {
      backgroundColor: Colors.primary,
      ...Spacing.button.square.medium,
    },
    secondary: {
      backgroundColor: Colors.secondary,
      color: Colors.primary,
      ...Spacing.button.square.medium,
    },
    white: {
      backgroundColor: Colors.grey,
      ...Spacing.button.square.medium,
    },
    black: {
      backgroundColor: Colors.black,
      ...Spacing.button.square.medium,
    },
  }
  return props.primary ? (
    <button style={styles.primary}>
      <img
        src={props.src}
        alt="Icon from Areatomic Librairie"
        style={Spacing.button.square.small}
      />
    </button>
  ) : props.secondary ? (
    <button style={styles.secondary}>
      <img
        src={props.src}
        alt="Icon from Areatomic Librairie"
        style={Spacing.button.square.small}
      />
    </button>
  ) : props.white ? (
    <button style={styles.white}>
      <img
        src={props.src}
        alt="Icon from Areatomic Librairie"
        style={Spacing.button.square.small}
      />
    </button>
  ) : (
    <button style={styles.black}>
      <img
        src={props.src}
        alt="Icon from Areatomic Librairie"
        style={Spacing.button.square.small}
      />
    </button>
  )
}

export default IconMedium
