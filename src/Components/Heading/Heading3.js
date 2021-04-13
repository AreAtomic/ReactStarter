import { Typography, Colors, Spacing } from '../../Styles'

const styles = {
    primary: {
        color: Colors.primary,
        padding: Spacing.padding.heading,
        ...Typography.h3,
    },
    secondary: {
        color: Colors.secondary,
        padding: Spacing.padding.heading,
        ...Typography.h3,
    },
    black: {
        color: Colors.black,
        padding: Spacing.padding.heading,
        ...Typography.h3,
    },
    white: {
        color: Colors.white,
        padding: Spacing.padding.heading,
        ...Typography.h3,
    },
}

const Heading3 = (props) => {
    return props.primary ? (
        <h3
            className={`${props.isCentered ? 'has-text-centered' : ''}`}
            style={styles.primary}
        >
            {props.title}
        </h3>
    ) : props.secondary ? (
        <h3
            className={`${props.isCentered ? 'has-text-centered' : ''}`}
            style={styles.secondary}
        >
            {props.title}
        </h3>
    ) : props.white ? (
        <h3
            className={`${props.isCentered ? 'has-text-centered' : ''}`}
            style={styles.white}
        >
            {props.title}
        </h3>
    ) : (
        <h3
            className={`${props.isCentered ? 'has-text-centered' : ''}`}
            style={styles.black}
        >
            {props.title}
        </h3>
    )
}

export default Heading3
