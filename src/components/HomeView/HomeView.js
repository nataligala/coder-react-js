
import "./HomeView.css";
import logoBabel from "../../assets/img_navbar/logo-babel.png";

export const HomeView = () => {
    return (
        <section className="homeView">
            <div className="homeView__container" id="intro">
                <h1 className="homeView__title">Flores <img className="homeView_logo" src={logoBabel} alt="logo babel"/> Babel</h1>
                <p className="homeView__text">Con más de 20 años de experiencia, tenemos las mejores propuestas florales para hacer tus ideas realidad.</p>
            </div>
        </section>
    )
}
