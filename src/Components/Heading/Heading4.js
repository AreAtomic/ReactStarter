import { Typography, Colors, Spacing } from '../../Styles'

const styles = {
  primary: {
    color: Colors.primary,
    padding: Spacing.padding.heading,
    ...Typography.h4,
  },
  secondary: {
    color: Colors.secondary,
    padding: Spacing.padding.heading,
    ...Typography.h4,
  },
  black: {
    color: Colors.black,
    padding: Spacing.padding.heading,
    ...Typography.h4,
  },
  white: {
    color: Colors.white,
    padding: Spacing.padding.heading,
    ...Typography.h4,
  },
}

const Heading4 = (props) => {
  return props.primary ? (
    <h4
      className={`${props.isCentered ? 'has-text-centered' : ''}`}
      style={styles.primary}
    >
      {props.title}
    </h4>
  ) : props.secondary ? (
    <h4
      className={`${props.isCentered ? 'has-text-centered' : ''}`}
      style={styles.secondary}
    >
      {props.title}
    </h4>
  ) : props.white ? (
    <h4
      className={`${props.isCentered ? 'has-text-centered' : ''}`}
      style={styles.white}
    >
      {props.title}
    </h4>
  ) : (
    <h4
      className={`${props.isCentered ? 'has-text-centered' : ''}`}
      style={styles.black}
    >
      {props.title}
    </h4>
  )
}

export default Heading4
