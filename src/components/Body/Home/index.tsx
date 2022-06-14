import "./style.css"

const Home = () => {
    return (
        <section id="home">
            <div className="layout-home">
                <div className="home-box">
                    <div className="describe">
                        <p>Olá, eu sou</p>
                        <h1>Jerlysson Miranda</h1>
                        <p>Full Stack developer</p>
                    </div>
                    <div className="img-home">
                        <img src="./src/assets/imgs/img.png" alt="img do dev" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home