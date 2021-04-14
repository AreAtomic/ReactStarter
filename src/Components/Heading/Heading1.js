import { Typography, Colors, Spacing } from '../../Styles'

const styles = {
  primary: {
    color: Colors.primary,
    padding: Spacing.padding.heading,
    ...Typography.h1,
  },
  secondary: {
    color: Colors.secondary,
    padding: Spacing.padding.heading,
    ...Typography.h1,
  },
  black: {
    color: Colors.black,
    padding: Spacing.padding.heading,
    ...Typography.h1,
  },
  white: {
    color: Colors.white,
    padding: Spacing.padding.heading,
    ...Typography.h1,
  },
}

const Heading1 = (props) => {
  return props.primary ? (
    <h1
      className={`${props.isCentered ? 'has-text-centered' : ''}`}
      style={styles.primary}
    >
      {props.title}
    </h1>
  ) : props.secondary ? (
    <h1
      className={`${props.isCentered ? 'has-text-centered' : ''}`}
      style={styles.secondary}
    >
      {props.title}
    </h1>
  ) : props.white ? (
    <h1
      className={`${props.isCentered ? 'has-text-centered' : ''}`}
      style={styles.white}
    >
      {props.title}
    </h1>
  ) : (
    <h1
      className={`${props.isCentered ? 'has-text-centered' : ''}`}
      style={styles.black}
    >
      {props.title}
    </h1>
  )
}

export default Heading1
