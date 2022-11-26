import React from 'react';
import {
	img1, img3, img2, quotes,
} from '../../assets/img';
import arnau from '../../assets/img/Arnau-cumple-26.png';
import Button from '../../components/button/Button';
import '../home/Home.css';

const Home = () => {
	return (
		<>
			<section className="home-titles-section">
				<div className="home-titles">
					<h1 className="home-title-content">
					Tarjetas desplegables
						<span className="home-title-span">tridimensionales</span>
					</h1>
					<h2 className="home-subtitle">
					Las tarjetas cobran vida y movimiento cada vez que las abres.
					</h2>
					<Button>Quiero mi tarjeta</Button>
				</div>
				<img className="home-forefront-image" alt="arnau" src={arnau} />
			</section>
			{/* ---------------------- CATEGORIES SECTION ------------------------------- */}
			
			<section className="home-categories-section">
				<h3 className="home-section-title">Categorías</h3>
				<div className="home-cards-container">
					<article className="card-container">
						<div className="categories-card-image-container">
							<img className="categories-card-image" src={img1}/>
						</div>
						<h4 className="categories-card-title">Amor</h4>
						<p className="categories-card-subtitle">Regala dulzura</p>
					</article>
					<article className="card-container">
						<div className="categories-card-image-container">
							<img className="categories-card-image" src={img3}/>
						</div>
						<h4 className="categories-card-title">Ciudades</h4>
						<p className="categories-card-subtitle">Monumentos destacados de Europa</p>
					</article>
					<article className="card-container">
						<div className="categories-card-image-container">
							<img className="categories-card-image" src={img2}/>
						</div>
						<h4 className="categories-card-title">Amistad</h4>
						<p className="categories-card-subtitle">Disfrutar y compartir</p>
					</article>
				</div>
			</section>

			{/* ---------------------- COMMENTS SECTION ------------------------------- */}

			<section className="home-commentaries-section">
				<h3 className="home-section-title">Comentarios</h3>
				<div className="home-cards-container home-comments-container">
					<article className="card-container comment-card-container main-comment">
						<img className="main-comment-image" src={quotes} />
						<p className="comment-card-text">Quería hacer un regalo especial, algo que sea realmente personalizado e irrepetible y 
						encontré en Instagram estas tarjetas pop up muy originales. Mi amigo quedó sorprendido al verse dentro de una tarjeta 
						troquelada con movimiento. Todos muy contentos con el resultado final.</p>
						<p className="comment-card-text comment-author">Txellsy Foster</p>
					</article>
					<article className="card-container comment-card-container default-comment">
						<p className="comment-card-text">Siempre he sido muy fan de los libros de mi infancia hechos con ingeniería del papel. Mis padres
						los guardaban como verdaderos tesoros, para que no los rompamos. Esa fragilidad y toque de magia me ha marcado y por eso he
						vuelto a revivir esos momentos con estas tarjetas personalizadas. </p>
						<p className="comment-card-text comment-author">Pau Virgili</p>
					</article>
					<article className="card-container comment-card-container default-comment">
						<p className="comment-card-text">Buscaba algo diferente para mi marca personal, y tras buscar mucho por diferentes 
						redes sociales encontré Casa de Chaupi y contacté inmediatamente por Pinterest. Estoy muy contenta con la tarjeta
						que da vida a mi proyecto familiar, hasta ilusiona ver como el pop up se adapta a mi campaña de marketing.</p>
						<p className="comment-card-text comment-author">Cecilia Muzzopapa</p>
					</article>
				</div>
			</section>
		</>
	);
};

export default Home;