import { Spacing } from '../../Styles'

const IconMedium = (props) => {
  const styles = {
    small: {
      ...Spacing.button.square.small,
    },
  }
  return (
    <img
      src={props.src}
      alt="Icon from Areatomic Librairie"
      style={styles.small}
    />
  )
}

export default IconMedium
