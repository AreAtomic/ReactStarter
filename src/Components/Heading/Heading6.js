import { Typography, Colors, Spacing } from '../../Styles'

const styles = {
    primary: {
        color: Colors.primary,
        padding: Spacing.padding.heading,
        ...Typography.h6,
    },
    secondary: {
        color: Colors.secondary,
        padding: Spacing.padding.heading,
        ...Typography.h6,
    },
    black: {
        color: Colors.black,
        padding: Spacing.padding.heading,
        ...Typography.h6,
    },
    white: {
        color: Colors.white,
        padding: Spacing.padding.heading,
        ...Typography.h6,
    },
}

const Heading6 = (props) => {
    return props.primary ? (
        <h6
            className={`${props.isCentered ? 'has-text-centered' : ''}`}
            style={styles.primary}
        >
            {props.title}
        </h6>
    ) : props.secondary ? (
        <h6
            className={`${props.isCentered ? 'has-text-centered' : ''}`}
            style={styles.secondary}
        >
            {props.title}
        </h6>
    ) : props.white ? (
        <h6
            className={`${props.isCentered ? 'has-text-centered' : ''}`}
            style={styles.white}
        >
            {props.title}
        </h6>
    ) : (
        <h6
            className={`${props.isCentered ? 'has-text-centered' : ''}`}
            style={styles.black}
        >
            {props.title}
        </h6>
    )
}

export default Heading6
