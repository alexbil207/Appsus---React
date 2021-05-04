const { Link } = ReactRouterDOM;


export class Home extends React.Component {

    render() {
        return (
            <section className="home">
                <div className="hero container flex column align-center space-between">
                    <h2>Welcome to your digital workspace</h2>
                    <Link to="" className="btn btn-hero">Get Started</Link>
                </div>
            </section>
        )
    }
}