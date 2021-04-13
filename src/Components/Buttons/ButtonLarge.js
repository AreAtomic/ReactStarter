import { Colors, Spacing, Shadow } from '../../Styles'

const styles = {
    primary: {
        backgroundColor: Colors.primary,
        color: Colors.white,
        filter: Shadow.dropshadow.primary,
        ...Spacing.button.large,
        ':hover': {
            filter: Shadow.dropshadow.hover,
        },
    },
    secondary: {
        backgroundColor: Colors.secondary,
        color: Colors.primary,
        filter: Shadow.dropshadow.secondary,
        ...Spacing.button.large,
        ':hover': {
            filter: Shadow.dropshadow.hover,
        },
    },
    white: {
        backgroundColor: Colors.white,
        color: Colors.primary,
        filter: Shadow.dropshadow.primary,
        ...Spacing.button.large,
        border: `1px solid ${Colors.primary}`,
        ':hover': {
            filter: Shadow.dropshadow.hover,
        },
    },
    black: {
        backgroundColor: Colors.black,
        color: Colors.white,
        filter: Shadow.dropshadow.primary,
        ...Spacing.button.large,
        ':hover': {
            filter: Shadow.dropshadow.hover,
        },
    },
}

const ButtonLarge = (props) => {
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

export default ButtonLarge
