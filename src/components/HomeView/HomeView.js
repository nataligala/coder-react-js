
import "./HomeView.css";
import logoBabel from "../../assets/img_navbar/logo-babel.png";
import bannerServices from "../../assets/img_banner/subs_banner.jpg"
import { Container } from "react-bootstrap";

export const HomeView = () => {
    return (
        <Container>
            <hr/>
            <section className="homeView">
                <div className="homeView__container" id="intro">
                    <h1 className="homeView__title">Flores <img className="homeView_logo" src={logoBabel} alt="logo babel"/> Babel</h1>
                    <p className="homeView__text">Con más de 20 años de experiencia, tenemos las mejores propuestas florales para hacer tus ideas realidad.</p>
                </div>
            </section>

            <section className="homeServices"style={{ backgroundImage: `url(${bannerServices})` }}>
                <div class="services__container">
                    <div class="services__item">
                        <i class="far fa-clock services__icon"></i>
                        <span class="services__title">Entregas en el día.</span>
                    </div>
                    <div class="services__item">
                        <i class="fas fa-truck services__icon"></i>
                        <span class="services__title">Delivery sin cargo <br/>dentro de CABA.</span>
                    </div>
                    <div class="services__item">
                        <i class="fas fa-hand-holding-heart services__icon"></i> 
                        <span class="services__title">Hecho con amor.</span>
                    </div>
                    <div class="services__item">
                        <i class="fas fa-seedling services__icon"></i> 
                        <span class="services__title">Flores frescas siempre.</span>
                    </div>
                </div> 
            </section>
         
        </Container>
    )
}
