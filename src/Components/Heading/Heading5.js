import { Typography, Colors, Spacing } from '../../Styles'

const styles = {
  primary: {
    color: Colors.primary,
    padding: Spacing.padding.heading,
    ...Typography.h5,
  },
  secondary: {
    color: Colors.secondary,
    padding: Spacing.padding.heading,
    ...Typography.h5,
  },
  black: {
    color: Colors.black,
    padding: Spacing.padding.heading,
    ...Typography.h5,
  },
  white: {
    color: Colors.white,
    padding: Spacing.padding.heading,
    ...Typography.h5,
  },
}

const Heading5 = (props) => {
  return props.primary ? (
    <h5
      className={`${props.isCentered ? 'has-text-centered' : ''}`}
      style={styles.primary}
    >
      {props.title}
    </h5>
  ) : props.secondary ? (
    <h5
      className={`${props.isCentered ? 'has-text-centered' : ''}`}
      style={styles.secondary}
    >
      {props.title}
    </h5>
  ) : props.white ? (
    <h5
      className={`${props.isCentered ? 'has-text-centered' : ''}`}
      style={styles.white}
    >
      {props.title}
    </h5>
  ) : (
    <h5
      className={`${props.isCentered ? 'has-text-centered' : ''}`}
      style={styles.black}
    >
      {props.title}
    </h5>
  )
}

export default Heading5
