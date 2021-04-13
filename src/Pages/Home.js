import { Heading } from '../Components'

const Home = () => {
    return (
        <div className="container">
            <Heading.Heading1 title="Heading1" primary isCentered />
            <Heading.Heading2 title="Heading2" primary isCentered />
            <Heading.Heading3 title="Heading3" primary isCentered />
            <Heading.Heading4 title="Heading4" primary isCentered />
            <Heading.Heading5 title="Heading5" primary isCentered />
            <Heading.Heading6 title="Heading6" primary isCentered />
        </div>
    )
}

export default Home
