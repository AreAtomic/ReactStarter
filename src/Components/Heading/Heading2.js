import { Typography, Colors, Spacing } from '../../Styles'

const styles = {
    primary: {
        color: Colors.primary,
        padding: Spacing.padding.heading,
        ...Typography.h2,
    },
    secondary: {
        color: Colors.secondary,
        padding: Spacing.padding.heading,
        ...Typography.h2,
    },
    black: {
        color: Colors.black,
        padding: Spacing.padding.heading,
        ...Typography.h2,
    },
    white: {
        color: Colors.white,
        padding: Spacing.padding.heading,
        ...Typography.h2,
    },
}

const Heading2 = (props) => {
    return props.primary ? (
        <h2
            className={`${props.isCentered ? 'has-text-centered' : ''}`}
            style={styles.primary}
        >
            {props.title}
        </h2>
    ) : props.secondary ? (
        <h2
            className={`${props.isCentered ? 'has-text-centered' : ''}`}
            style={styles.secondary}
        >
            {props.title}
        </h2>
    ) : props.white ? (
        <h2
            className={`${props.isCentered ? 'has-text-centered' : ''}`}
            style={styles.white}
        >
            {props.title}
        </h2>
    ) : (
        <h2
            className={`${props.isCentered ? 'has-text-centered' : ''}`}
            style={styles.black}
        >
            {props.title}
        </h2>
    )
}

export default Heading2
