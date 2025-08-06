import "./App.css";
import consultorio1 from "./assets/images/consultorio1.jpg";
import consultorio2 from "./assets/images/consultorio2.jpg";
import consultorio3 from "./assets/images/consultorio3.jpg";
import instrumentos1 from "./assets/images/instrumentos1.jpg";
import instrumentos2 from "./assets/images/instrumentos2.jpg";
import instrumentos3 from "./assets/images/instrumentos3.jpg";
import instrumentos4 from "./assets/images/instrumentos4.jpg";
import pacienteImg from "./assets/images/paciente.jpg";

function App() {
	return (
		<div className="App">
			{/* Navbar */}
			<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
				<div className="container">
					<a className="navbar-brand fw-bold text-primary" href="#">
						<i className="fas fa-tooth me-2"></i>
						Dr. Muelitas
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<a className="nav-link" href="#inicio">
									Inicio
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#servicios">
									Servicios
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#nosotros">
									Nosotros
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contacto">
									Contacto
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section
				id="inicio"
				className="hero-section bg-primary text-white"
				style={{ marginTop: "76px" }}
			>
				<div className="container">
					<div className="row align-items-center min-vh-100">
						<div className="col-lg-6">
							<h1 className="display-4 fw-bold mb-4">
								Tu sonrisa es nuestra prioridad
							</h1>
							<p className="lead mb-4">
								Ofrecemos servicios odontológicos de calidad con
								tecnología de punta y un equipo profesional
								comprometido con tu salud bucal.
							</p>
							<div className="d-flex gap-3">
								<a
									href="#contacto"
									className="btn btn-light btn-lg"
								>
									Agendar Cita
								</a>
								<a
									href="#servicios"
									className="btn btn-outline-light btn-lg"
								>
									Ver Servicios
								</a>
							</div>
						</div>
						<div className="col-lg-6 text-center">
							<div className="position-relative">
								<img
									src={pacienteImg}
									alt="Paciente sonriendo"
									className="img-fluid rounded-circle shadow-lg"
									style={{
										width: "350px",
										height: "350px",
										objectFit: "cover",
									}}
								/>
								<div
									className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-circle"
									style={{ opacity: "0.1" }}
								></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Servicios Section */}
			<section id="servicios" className="py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center mb-5">
							<h2 className="display-5 fw-bold text-primary mb-3">
								Nuestros Servicios
							</h2>
							<p className="lead text-muted">
								Contamos con una amplia gama de servicios
								odontológicos
							</p>
						</div>
					</div>
					<div className="row g-4">
						<div className="col-md-4">
							<div className="card h-100 shadow-sm border-0">
								<div className="card-body text-center p-4">
									<div
										className="bg-primary text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
										style={{
											width: "80px",
											height: "80px",
										}}
									>
										<i
											className="fas fa-tooth"
											style={{ fontSize: "35px" }}
										></i>
									</div>
									<h5 className="card-title">
										Odontología General
									</h5>
									<p className="card-text text-muted">
										Limpiezas, empastes, extracciones y
										tratamientos preventivos para mantener
										tu salud bucal.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card h-100 shadow-sm border-0">
								<div className="card-body text-center p-4">
									<div
										className="bg-primary text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
										style={{
											width: "80px",
											height: "80px",
										}}
									>
										<i
											className="fas fa-smile"
											style={{ fontSize: "35px" }}
										></i>
									</div>
									<h5 className="card-title">Ortodoncia</h5>
									<p className="card-text text-muted">
										Brackets tradicionales e invisibles para
										corregir la posición de tus dientes.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card h-100 shadow-sm border-0">
								<div className="card-body text-center p-4">
									<div
										className="bg-primary text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
										style={{
											width: "80px",
											height: "80px",
										}}
									>
										<i
											className="fas fa-crown"
											style={{ fontSize: "35px" }}
										></i>
									</div>
									<h5 className="card-title">
										Estética Dental
									</h5>
									<p className="card-text text-muted">
										Blanqueamientos, carillas y coronas para
										mejorar la apariencia de tu sonrisa.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card h-100 shadow-sm border-0 position-relative overflow-hidden">
								<div
									className="position-absolute top-0 start-0 w-100 h-100"
									style={{
										backgroundImage: `url(${instrumentos3})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
										opacity: "0.1",
									}}
								></div>
								<div className="card-body text-center p-4 position-relative">
									<div
										className="bg-primary text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
										style={{
											width: "80px",
											height: "80px",
										}}
									>
										<i
											className="fas fa-user-md"
											style={{ fontSize: "35px" }}
										></i>
									</div>
									<h5 className="card-title">Cirugía Oral</h5>
									<p className="card-text text-muted">
										Extracciones complejas, implantes
										dentales y cirugías especializadas.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card h-100 shadow-sm border-0">
								<div className="card-body text-center p-4">
									<div
										className="bg-primary text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
										style={{
											width: "80px",
											height: "80px",
										}}
									>
										<i
											className="fas fa-child"
											style={{ fontSize: "35px" }}
										></i>
									</div>
									<h5 className="card-title">
										Odontopediatría
									</h5>
									<p className="card-text text-muted">
										Cuidado dental especializado para niños
										en un ambiente amigable y seguro.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card h-100 shadow-sm border-0 position-relative overflow-hidden">
								<div
									className="position-absolute top-0 start-0 w-100 h-100"
									style={{
										backgroundImage: `url(${instrumentos4})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
										opacity: "0.1",
									}}
								></div>
								<div className="card-body text-center p-4 position-relative">
									<div
										className="bg-primary text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
										style={{
											width: "80px",
											height: "80px",
										}}
									>
										<i
											className="fas fa-x-ray"
											style={{ fontSize: "35px" }}
										></i>
									</div>
									<h5 className="card-title">Radiología</h5>
									<p className="card-text text-muted">
										Diagnósticos precisos con tecnología de
										rayos X digital de última generación.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="py-5 bg-light">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center mb-5">
							<h2 className="display-5 fw-bold text-primary mb-3">
								Nuestras Instalaciones
							</h2>
							<p className="lead text-muted">
								Tecnología de vanguardia en un ambiente moderno
								y acogedor
							</p>
						</div>
					</div>
					<div className="row g-4">
						<div className="col-lg-3 col-md-6">
							<div className="card border-0 shadow-sm h-100">
								<img
									src={instrumentos1}
									className="card-img-top"
									alt="Equipos dentales modernos"
									style={{
										height: "200px",
										objectFit: "cover",
									}}
								/>
								<div className="card-body p-3">
									<h6 className="card-title text-center">
										Equipos Modernos
									</h6>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="card border-0 shadow-sm h-100">
								<img
									src={instrumentos2}
									className="card-img-top"
									alt="Instrumental especializado"
									style={{
										height: "200px",
										objectFit: "cover",
									}}
								/>
								<div className="card-body p-3">
									<h6 className="card-title text-center">
										Instrumental Especializado
									</h6>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="card border-0 shadow-sm h-100">
								<img
									src={consultorio2}
									className="card-img-top"
									alt="Consultorios cómodos"
									style={{
										height: "200px",
										objectFit: "cover",
									}}
								/>
								<div className="card-body p-3">
									<h6 className="card-title text-center">
										Consultorios Cómodos
									</h6>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="card border-0 shadow-sm h-100">
								<img
									src={consultorio3}
									className="card-img-top"
									alt="Ambiente relajante"
									style={{
										height: "200px",
										objectFit: "cover",
									}}
								/>
								<div className="card-body p-3">
									<h6 className="card-title text-center">
										Ambiente Relajante
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="nosotros" className="py-5 bg-light">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<h2 className="display-5 fw-bold text-primary mb-4">
								Sobre Nosotros
							</h2>
							<p className="lead mb-4">
								Con más de 15 años de experiencia, nuestro
								equipo de profesionales está comprometido con
								brindar la mejor atención odontológica.
							</p>
							<div className="row g-3">
								<div className="col-6">
									<div className="d-flex align-items-center">
										<div
											className="bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center"
											style={{
												width: "50px",
												height: "50px",
											}}
										>
											<i className="fas fa-check"></i>
										</div>
										<div>
											<h6 className="mb-0">
												Tecnología Avanzada
											</h6>
											<small className="text-muted">
												Equipos de última generación
											</small>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div className="d-flex align-items-center">
										<div
											className="bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center"
											style={{
												width: "50px",
												height: "50px",
											}}
										>
											<i className="fas fa-users"></i>
										</div>
										<div>
											<h6 className="mb-0">
												Equipo Experto
											</h6>
											<small className="text-muted">
												Profesionales certificados
											</small>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div className="d-flex align-items-center">
										<div
											className="bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center"
											style={{
												width: "50px",
												height: "50px",
											}}
										>
											<i className="fas fa-clock"></i>
										</div>
										<div>
											<h6 className="mb-0">
												Horarios Flexibles
											</h6>
											<small className="text-muted">
												Adaptados a tu agenda
											</small>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div className="d-flex align-items-center">
										<div
											className="bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center"
											style={{
												width: "50px",
												height: "50px",
											}}
										>
											<i className="fas fa-heart"></i>
										</div>
										<div>
											<h6 className="mb-0">
												Atención Personalizada
											</h6>
											<small className="text-muted">
												Cuidado individualizado
											</small>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 text-center">
							<div className="bg-white rounded shadow p-4">
								<img
									src={consultorio1}
									alt="Consultorio Odontológico Moderno"
									className="img-fluid rounded"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contacto" className="py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center mb-5">
							<h2 className="display-5 fw-bold text-primary mb-3">
								Contáctanos
							</h2>
							<p className="lead text-muted">
								Agenda tu cita o consulta con nosotros
							</p>
						</div>
					</div>
					<div className="row g-4">
						<div className="col-lg-8">
							<div className="card shadow-sm border-0 h-100">
								<div className="card-body p-4">
									<h5 className="card-title mb-4">
										Envíanos un mensaje
									</h5>
									<form>
										<div className="row g-3">
											<div className="col-md-6">
												<label className="form-label">
													Nombre
												</label>
												<input
													type="text"
													className="form-control"
													placeholder="Tu nombre"
												/>
											</div>
											<div className="col-md-6">
												<label className="form-label">
													Teléfono
												</label>
												<input
													type="tel"
													className="form-control"
													placeholder="Tu teléfono"
												/>
											</div>
											<div className="col-12">
												<label className="form-label">
													Email
												</label>
												<input
													type="email"
													className="form-control"
													placeholder="tu@email.com"
												/>
											</div>
											<div className="col-12">
												<label className="form-label">
													Mensaje
												</label>
												<textarea
													className="form-control"
													rows="4"
													placeholder="Describe tu consulta..."
												></textarea>
											</div>
											<div className="col-12">
												<button
													type="submit"
													className="btn btn-primary btn-lg"
												>
													Enviar Mensaje
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card shadow-sm border-0 h-100">
								<div className="card-body p-4">
									<h5 className="card-title mb-4">
										Información de Contacto
									</h5>
									<div className="d-flex align-items-start mb-3">
										<div
											className="bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center flex-shrink-0"
											style={{
												width: "40px",
												height: "40px",
											}}
										>
											<i className="fas fa-map-marker-alt"></i>
										</div>
										<div>
											<h6 className="mb-1">Dirección</h6>
											<p className="text-muted mb-0">
												Av. Principal 123
												<br />
												Ciudad, País
											</p>
										</div>
									</div>
									<div className="d-flex align-items-start mb-3">
										<div
											className="bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center flex-shrink-0"
											style={{
												width: "40px",
												height: "40px",
											}}
										>
											<i className="fas fa-phone"></i>
										</div>
										<div>
											<h6 className="mb-1">Teléfono</h6>
											<p className="text-muted mb-0">
												+1 234 567 8900
											</p>
										</div>
									</div>
									<div className="d-flex align-items-start mb-3">
										<div
											className="bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center flex-shrink-0"
											style={{
												width: "40px",
												height: "40px",
											}}
										>
											<i className="fas fa-envelope"></i>
										</div>
										<div>
											<h6 className="mb-1">Email</h6>
											<p className="text-muted mb-0">
												contacto@odontologia.com
											</p>
										</div>
									</div>
									<div className="d-flex align-items-start">
										<div
											className="bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center flex-shrink-0"
											style={{
												width: "40px",
												height: "40px",
											}}
										>
											<i className="fas fa-clock"></i>
										</div>
										<div>
											<h6 className="mb-1">Horarios</h6>
											<p className="text-muted mb-0">
												Lun - Vie: 8:00 - 18:00
												<br />
												Sáb: 9:00 - 14:00
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-dark text-white py-4">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-6">
							<p className="mb-0">
								&copy; 2025 Dr. Odontología. Todos los derechos
								reservados.
							</p>
						</div>
						<div className="col-md-6 text-md-end">
							<div className="d-flex justify-content-md-end gap-3">
								<a href="#" className="text-white">
									<i className="fab fa-facebook"></i>
								</a>
								<a href="#" className="text-white">
									<i className="fab fa-instagram"></i>
								</a>
								<a href="#" className="text-white">
									<i className="fab fa-whatsapp"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
