const { Link } = ReactRouterDOM;


export class Home extends React.Component {

    render() {
        return (
            <section className="home home-img">
                <div className="hero container flex column align-center space-between">
                    <h2>Welcome to your digital workspace</h2>
                    <Link to="/Mail" className="btn btn-hero">Get Started</Link>
                </div>
            </section>
        )
    }
}