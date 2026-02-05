'use client'

import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { LanzatuFooter } from '@/components/lanzatu-footer'
import { LanzatuNavbar } from '@/components/lanzatu-navbar'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Custom Icons
function ArrowRightIcon({ className }: { className?: string }) {
	return (
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
			<path d="M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			<path d="M11 5L16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

function DiamondIcon({ className }: { className?: string }) {
	return (
		<svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className={className}>
			<path d="M4 0L8 4L4 8L0 4L4 0Z" />
		</svg>
	)
}

function CheckIcon({ className }: { className?: string }) {
	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
			<path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

// Animation variants
const fadeUp = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2
		}
	}
}

function Hero() {
	return (
		<section className="relative overflow-hidden pb-24 pt-12 sm:pb-32 sm:pt-20">
			{/* Decorative elements */}
			<div className="absolute inset-0 pattern-deco opacity-30" />
			<div className="absolute -right-32 top-1/4 size-96 rounded-full bg-[#C9A962]/5 blur-3xl" />
			<div className="absolute -left-32 bottom-1/4 size-96 rounded-full bg-[#C17F59]/5 blur-3xl" />

			{/* Rotating decorative element */}
			<div className="absolute right-10 top-32 hidden animate-rotate-slow opacity-20 lg:block">
				<svg width="120" height="120" viewBox="0 0 120 120" fill="none">
					<path d="M60 0L120 60L60 120L0 60L60 0Z" stroke="#C9A962" strokeWidth="0.5" />
					<path d="M60 20L100 60L60 100L20 60L60 20Z" stroke="#C9A962" strokeWidth="0.5" />
					<path d="M60 40L80 60L60 80L40 60L60 40Z" stroke="#C9A962" strokeWidth="0.5" />
				</svg>
			</div>

			<Container>
				<div className="relative mx-auto max-w-4xl text-center">
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
						className="mb-8 inline-flex items-center gap-3"
					>
						<span className="h-px w-8 bg-[#C9A962]" />
						<span className="text-sm font-medium uppercase tracking-[0.2em] text-[#857C71]">
							Para fundadores con visión
						</span>
						<span className="h-px w-8 bg-[#C9A962]" />
					</motion.div>

					{/* Main headline */}
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
						className="font-serif text-4xl leading-[1.1] tracking-tight text-[#1A1714] sm:text-5xl md:text-6xl lg:text-7xl"
					>
						Tu idea merece existir.
						<br />
						<span className="text-gradient-gold">Nosotros la construimos.</span>
					</motion.h1>

					{/* Subheadline */}
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#635B52] sm:text-xl"
					>
						En 3 semanas transformamos tu concepto en un producto real que puedes mostrar a inversores y vender a tus primeros clientes.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
						className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
					>
						<Link
							href="https://wa.me/56993289547?text=Hola%20👋%20Quiero%20saber%20más%20sobre%20cómo%20lanzar%20mi%20producto"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-gold group inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold"
						>
							Hablemos de tu idea
							<ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
						</Link>
						<Link
							href="#proceso"
							className="btn-outline group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium"
						>
							Ver cómo funciona
						</Link>
					</motion.div>

					{/* Trust indicators */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[#857C71]"
					>
						<div className="flex items-center gap-2">
							<DiamondIcon className="text-[#C9A962]" />
							<span>Código de calidad</span>
						</div>
						<div className="flex items-center gap-2">
							<DiamondIcon className="text-[#C9A962]" />
							<span>Listo en 3 semanas</span>
						</div>
						<div className="flex items-center gap-2">
							<DiamondIcon className="text-[#C9A962]" />
							<span>100% tuyo</span>
						</div>
						<div className="flex items-center gap-2">
							<DiamondIcon className="text-[#C9A962]" />
							<span>Precio fijo</span>
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	)
}

function Problem() {
	const problems = [
		{
			emoji: '💸',
			title: 'Agencias',
			pain: '$15,000+ USD',
			description: '3-6 meses de espera y al final dependes de ellos para cada cambio.',
		},
		{
			emoji: '🎲',
			title: 'Freelancers',
			pain: 'Riesgo alto',
			description: 'Semanas buscando, comunicación difícil, nunca sabes si el código sirve.',
		},
		{
			emoji: '⏳',
			title: 'Aprender a programar',
			pain: '6-12 meses',
			description: 'Solo para lo básico. Tu competencia ya estará vendiendo.',
		},
	]

	return (
		<section className="relative bg-[#1A1714] py-24 sm:py-32">
			{/* Decorative top line */}
			<div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />

			<Container>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={staggerContainer}
					className="mx-auto max-w-4xl"
				>
					<motion.div variants={fadeUp} className="text-center">
						<h2 className="font-serif text-3xl text-[#FBF8F1] sm:text-4xl lg:text-5xl">
							Construir tu primer producto
							<br />
							<span className="italic text-[#C9A962]">no debería ser tan difícil</span>
						</h2>
					</motion.div>

					<div className="mt-16 grid gap-6 sm:grid-cols-3">
						{problems.map((problem) => (
							<motion.div
								key={problem.title}
								variants={fadeUp}
								className="group relative overflow-hidden rounded-2xl border border-[#3D372F] bg-[#2D2822]/50 p-8 transition-all duration-300 hover:border-[#C9A962]/30"
							>
								{/* Subtle glow on hover */}
								<div className="absolute inset-0 bg-gradient-to-b from-[#C9A962]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

								<div className="relative">
									<span className="text-3xl">{problem.emoji}</span>
									<p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-[#857C71]">
										{problem.title}
									</p>
									<p className="mt-2 font-serif text-2xl text-[#C9A962]">
										{problem.pain}
									</p>
									<p className="mt-3 text-sm leading-relaxed text-[#A69E93]">
										{problem.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</Container>
		</section>
	)
}

function Process() {
	const steps = [
		{
			number: '01',
			title: 'Documento de diseño',
			duration: '2 días',
			description: 'Creamos juntos la especificación detallada de tu producto. Es el "prompt" que guía todo el desarrollo.',
		},
		{
			number: '02',
			title: 'Desarrollo',
			duration: '3 semanas',
			description: 'Construimos mientras tú vendes. Cada semana te mostramos el avance. Sin sorpresas.',
		},
		{
			number: '03',
			title: 'Lanzamiento',
			duration: 'Día final',
			description: 'Tu producto online, funcionando, con tu dominio. El código es 100% tuyo para siempre.',
		},
	]

	return (
		<section id="proceso" className="relative scroll-mt-16 py-24 sm:py-32">
			{/* Pattern background */}
			<div className="absolute inset-0 pattern-dots" />

			<Container>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={staggerContainer}
					className="mx-auto max-w-5xl"
				>
					{/* Section header */}
					<motion.div variants={fadeUp} className="text-center">
						<span className="text-sm font-medium uppercase tracking-[0.2em] text-[#C9A962]">
							El proceso
						</span>
						<h2 className="mt-4 font-serif text-3xl text-[#1A1714] sm:text-4xl lg:text-5xl">
							De idea a producto en <span className="italic">3 pasos</span>
						</h2>
					</motion.div>

					{/* Steps */}
					<div className="mt-20 space-y-0">
						{steps.map((step, index) => (
							<motion.div
								key={step.number}
								variants={fadeUp}
								className="group relative"
							>
								{/* Connection line */}
								{index < steps.length - 1 && (
									<div className="absolute bottom-0 left-8 top-24 w-px bg-gradient-to-b from-[#C9A962]/50 to-[#C9A962]/10 sm:left-12" />
								)}

								<div className="relative flex gap-6 py-8 sm:gap-10">
									{/* Number */}
									<div className="relative flex size-16 shrink-0 items-center justify-center sm:size-24">
										<div className="absolute inset-0 rounded-full border border-[#C9A962]/20 transition-all duration-300 group-hover:border-[#C9A962]/50 group-hover:shadow-[0_0_30px_rgba(201,169,98,0.15)]" />
										<span className="font-serif text-2xl text-[#C9A962] sm:text-3xl">
											{step.number}
										</span>
									</div>

									{/* Content */}
									<div className="flex-1 pt-2 sm:pt-5">
										<div className="flex flex-wrap items-baseline gap-3">
											<h3 className="font-serif text-xl text-[#1A1714] sm:text-2xl">
												{step.title}
											</h3>
											<span className="rounded-full bg-[#C9A962]/10 px-3 py-1 text-xs font-medium text-[#C9A962]">
												{step.duration}
											</span>
										</div>
										<p className="mt-3 max-w-lg text-base leading-relaxed text-[#635B52]">
											{step.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</Container>
		</section>
	)
}

function Deliverables() {
	const items = [
		{
			title: 'Autenticación',
			description: 'Login con Google, email, redes sociales. Sesiones seguras y recuperación de contraseña.',
		},
		{
			title: 'Base de datos',
			description: 'PostgreSQL lista para producción. Esquemas, migraciones y backups automáticos.',
		},
		{
			title: 'Email transaccional',
			description: 'Notificaciones, emails de bienvenida y recuperación. Todo configurado.',
		},
		{
			title: 'SEO optimizado',
			description: 'Metadatos, sitemap automático y estructura lista para Google.',
		},
		{
			title: 'Sistema de diseño',
			description: 'Componentes reutilizables, tema personalizable y modo oscuro.',
		},
	]

	return (
		<section id="entregables" className="relative scroll-mt-16 overflow-hidden bg-[#F5F0E6] py-24 sm:py-32">
			{/* Decorative geometric element */}
			<div className="absolute -right-24 top-1/2 -translate-y-1/2 opacity-10">
				<svg width="400" height="400" viewBox="0 0 400 400" fill="none">
					<path d="M200 0L400 200L200 400L0 200L200 0Z" stroke="#1A1714" strokeWidth="1" />
					<path d="M200 50L350 200L200 350L50 200L200 50Z" stroke="#1A1714" strokeWidth="1" />
					<path d="M200 100L300 200L200 300L100 200L200 100Z" stroke="#1A1714" strokeWidth="1" />
				</svg>
			</div>

			<Container>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={staggerContainer}
					className="relative mx-auto max-w-5xl"
				>
					{/* Section header */}
					<motion.div variants={fadeUp} className="max-w-2xl">
						<span className="text-sm font-medium uppercase tracking-[0.2em] text-[#C9A962]">
							Qué incluye
						</span>
						<h2 className="mt-4 font-serif text-3xl text-[#1A1714] sm:text-4xl lg:text-5xl">
							Todo lo esencial para <span className="italic">lanzar</span>
						</h2>
						<p className="mt-6 text-lg leading-relaxed text-[#635B52]">
							No empezamos de cero. Nuestro kit incluye todo lo que un MVP necesita, listo para personalizar.
						</p>
					</motion.div>

					{/* Deliverables grid */}
					<div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{items.map((item) => (
							<motion.div
								key={item.title}
								variants={fadeUp}
								className="card-elevated group relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
							>
								{/* Gold accent corner */}
								<div className="absolute -right-4 -top-4 size-12 rotate-45 bg-gradient-to-br from-[#C9A962]/20 to-transparent transition-all duration-300 group-hover:from-[#C9A962]/40" />

								<h3 className="font-serif text-lg text-[#1A1714]">
									{item.title}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-[#635B52]">
									{item.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</Container>
		</section>
	)
}

function Craftsmanship() {
	const principles = [
		{
			title: 'Desarrolladores, no ensambladores',
			description: 'Cada línea de código es escrita con intención. Diseñamos arquitecturas pensadas para tu negocio específico.',
		},
		{
			title: 'Calidad que se nota',
			description: 'Código limpio, bien documentado y fácil de mantener. Tu futuro equipo técnico nos lo agradecerá.',
		},
		{
			title: 'IA como herramienta',
			description: 'Usamos inteligencia artificial para potenciar nuestro trabajo, no para reemplazarlo. La IA acelera, pero el criterio es nuestro.',
		},
		{
			title: 'Ingeniería, no improvisación',
			description: 'Nada de "vibe coding". Tests, revisiones de código y estándares profesionales en cada proyecto.',
		},
	]

	return (
		<section className="relative py-24 sm:py-32">
			<Container>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={staggerContainer}
					className="mx-auto max-w-5xl"
				>
					{/* Section header */}
					<motion.div variants={fadeUp} className="text-center">
						<span className="text-sm font-medium uppercase tracking-[0.2em] text-[#C9A962]">
							Nuestra filosofía
						</span>
						<h2 className="mt-4 font-serif text-3xl text-[#1A1714] sm:text-4xl lg:text-5xl">
							Software hecho con <span className="italic">atención al detalle</span>
						</h2>
						<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#635B52]">
							En un mundo de soluciones rápidas y código desechable, nosotros construimos productos que duran.
						</p>
					</motion.div>

					{/* Principles grid */}
					<div className="mt-16 grid gap-8 sm:grid-cols-2">
						{principles.map((principle, index) => (
							<motion.div
								key={principle.title}
								variants={fadeUp}
								className="group relative"
							>
								<div className="flex gap-5">
									{/* Number indicator */}
									<div className="relative flex size-10 shrink-0 items-center justify-center">
										<div className="absolute inset-0 rounded-full border border-[#1A1714]/10 transition-colors duration-300 group-hover:border-[#C9A962]" />
										<span className="text-sm font-medium text-[#857C71] transition-colors duration-300 group-hover:text-[#C9A962]">
											{String(index + 1).padStart(2, '0')}
										</span>
									</div>

									{/* Content */}
									<div>
										<h3 className="font-serif text-xl text-[#1A1714]">
											{principle.title}
										</h3>
										<p className="mt-2 text-base leading-relaxed text-[#635B52]">
											{principle.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</Container>
		</section>
	)
}

function Pricing() {
	const plans = [
		{
			name: 'Starter',
			description: 'Para validar tu idea rápido',
			price: '$1,200',
			features: [
				'Llamada de descubrimiento (30 min)',
				'2-3 funcionalidades core',
				'Diseño limpio y funcional',
				'Tu producto online',
				'Código 100% tuyo',
				'1 ronda de ajustes',
			],
			cta: 'Empezar simple',
			highlighted: false,
		},
		{
			name: 'Profesional',
			description: 'El más popular',
			price: '$2,000',
			includesPrevious: 'Starter',
			features: [
				'4-5 funcionalidades core',
				'Diseño profesional y pulido',
				'Tu dominio personalizado',
				'Documentación para tu equipo',
				'Updates semanales',
				'2 rondas de ajustes',
				'Integración WhatsApp Business',
			],
			cta: 'Elegir Profesional',
			highlighted: true,
		},
		{
			name: 'Enterprise',
			description: 'Para escalar sin límites',
			price: '$3,500',
			includesPrevious: 'Profesional',
			features: [
				'Llamada extendida (60 min)',
				'6-8 funcionalidades core',
				'Diseño premium personalizado',
				'3 rondas de ajustes',
				'1 mes de soporte incluido',
				'App móvil (iOS y Android)',
				'Workflows de AI integrados',
			],
			cta: 'Ir por todo',
			highlighted: false,
		},
	]

	return (
		<section id="precio" className="relative scroll-mt-16 bg-[#1A1714] py-24 sm:py-32">
			{/* Decorative elements */}
			<div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />
			<div className="absolute inset-0 pattern-lines opacity-50" />

			<Container>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={staggerContainer}
					className="relative mx-auto max-w-5xl"
				>
					{/* Section header */}
					<motion.div variants={fadeUp} className="text-center">
						<span className="text-sm font-medium uppercase tracking-[0.2em] text-[#C9A962]">
							Inversión
						</span>
						<h2 className="mt-4 font-serif text-3xl text-[#FBF8F1] sm:text-4xl lg:text-5xl">
							Precio fijo. <span className="italic text-[#C9A962]">Sin sorpresas.</span>
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg text-[#A69E93]">
							Pago en 2 partes: 50% al aprobar el diseño, 50% a la entrega.
						</p>
					</motion.div>

					{/* Pricing cards */}
					<div className="mt-16 grid gap-6 lg:grid-cols-3">
						{plans.map((plan) => (
							<motion.div
								key={plan.name}
								variants={fadeUp}
								className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 ${
									plan.highlighted
										? 'border-2 border-[#C9A962] bg-[#2D2822]'
										: 'border border-[#3D372F] bg-[#2D2822]/50 hover:border-[#C9A962]/30'
								}`}
							>
								{/* Highlighted badge */}
								{plan.highlighted && (
									<div className="absolute -right-12 top-6 rotate-45 bg-[#C9A962] px-12 py-1 text-xs font-semibold text-[#1A1714]">
										Popular
									</div>
								)}

								{/* Plan header */}
								<div className="text-center">
									<p className="text-xs font-medium uppercase tracking-[0.15em] text-[#857C71]">
										{plan.name}
									</p>
									<p className="mt-1 text-sm text-[#A69E93]">{plan.description}</p>
									<div className="mt-6 flex items-baseline justify-center gap-1">
										<span className={`font-serif text-5xl ${plan.highlighted ? 'text-[#C9A962]' : 'text-[#FBF8F1]'}`}>
											{plan.price}
										</span>
										<span className="text-sm text-[#857C71]">USD</span>
									</div>
								</div>

								{/* Features */}
								<div className="mt-8">
									{plan.includesPrevious && (
										<div className="mb-4 rounded-lg bg-[#C9A962]/10 px-4 py-2 text-center text-sm text-[#C9A962]">
											Todo lo del plan {plan.includesPrevious} +
										</div>
									)}
									<ul className="space-y-3">
										{plan.features.map((feature) => (
											<li key={feature} className="flex items-start gap-3">
												<CheckIcon className="mt-0.5 size-4 shrink-0 text-[#C9A962]" />
												<span className="text-sm text-[#A69E93]">{feature}</span>
											</li>
										))}
									</ul>
								</div>

								{/* CTA */}
								<div className="mt-8">
									<Link
										href="#contacto"
										className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${
											plan.highlighted
												? 'btn-gold'
												: 'border border-[#3D372F] text-[#FBF8F1] hover:border-[#C9A962] hover:text-[#C9A962]'
										}`}
									>
										{plan.cta}
										<ArrowRightIcon className="size-4" />
									</Link>
								</div>
							</motion.div>
						))}
					</div>

					{/* Support add-on */}
					<motion.div
						variants={fadeUp}
						className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[#3D372F] bg-[#2D2822]/50 p-6"
					>
						<div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
							<div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/30">
								<DiamondIcon className="text-[#C9A962]" />
							</div>
							<div>
								<p className="font-serif text-lg text-[#FBF8F1]">
									Soporte continuo <span className="text-[#C9A962]">$200-300/mes</span>
								</p>
								<p className="mt-1 text-sm text-[#A69E93]">
									Hosting, monitoreo y pequeños ajustes. Tú solo vendes.
								</p>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</Container>
		</section>
	)
}

function FAQ() {
	const faqs = [
		{
			question: 'No sé nada de tecnología. ¿Esto es para mí?',
			answer:
				'Sí. De hecho, es exactamente para ti. En nuestra llamada hablamos de tu negocio: qué problema resuelves, quiénes son tus clientes, cómo quieres ganar dinero. Nosotros nos encargamos de traducir eso a tecnología. Nunca vas a escuchar jerga técnica.',
		},
		{
			question: '¿Cómo sé que van a entregar?',
			answer:
				'Pagas en 2 partes: 50% al aprobar el documento de diseño, 50% a la entrega. Cada semana te mostramos el avance. Si en cualquier momento no estás conforme, lo hablamos y ajustamos. Tu dinero está protegido porque solo pagas por avances reales.',
		},
		{
			question: '¿Y si necesito cambios después?',
			answer:
				'El código es tuyo. Puedes contratar cualquier desarrollador para mejorarlo. O podemos seguir trabajando juntos. Muchos clientes continúan con el soporte mensual para pequeños ajustes y nuevas funciones.',
		},
		{
			question: '¿Por qué son más baratos que una agencia?',
			answer:
				'No tenemos oficinas, no tenemos 20 empleados, no tenemos gerentes de proyecto. Somos un equipo de desarrolladores senior que trabaja directo contigo. Sin intermediarios, sin overhead. Tú pagas por código, no por estructura corporativa.',
		},
		{
			question: '¿Qué pasa si mi idea cambia mientras construimos?',
			answer:
				'Es normal. Por eso empezamos con las 3-5 funciones más importantes y tienes 2 rondas de ajustes incluidas. Si necesitas un cambio grande a mitad de camino, lo conversamos y vemos cómo adaptarnos.',
		},
		{
			question: '¿Usan IA para escribir el código?',
			answer:
				'Usamos IA como herramienta, no como reemplazo. La inteligencia artificial nos ayuda a ser más productivos, pero cada decisión de arquitectura, cada patrón de diseño y cada línea de código pasa por revisión humana. No hacemos "vibe coding" — hacemos ingeniería de software con criterio.',
		},
		{
			question: '¿Cómo logran entregar en solo 3 semanas?',
			answer:
				'Tenemos un kit base probado con autenticación, pagos, dashboards y todas las piezas comunes ya resueltas. No empezamos de cero — empezamos con una base sólida y nos enfocamos en construir lo que hace único a tu producto.',
		},
	]

	return (
		<section id="faq" className="relative scroll-mt-16 py-24 sm:py-32">
			<div className="absolute inset-0 pattern-deco opacity-20" />

			<Container>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={staggerContainer}
					className="relative mx-auto max-w-3xl"
				>
					{/* Section header */}
					<motion.div variants={fadeUp} className="text-center">
						<span className="text-sm font-medium uppercase tracking-[0.2em] text-[#C9A962]">
							Preguntas frecuentes
						</span>
						<h2 className="mt-4 font-serif text-3xl text-[#1A1714] sm:text-4xl lg:text-5xl">
							Lo que otros fundadores <span className="italic">preguntan</span>
						</h2>
					</motion.div>

					{/* FAQ Accordion */}
					<motion.div variants={fadeUp} className="mt-16">
						<FAQAccordion items={faqs} />
					</motion.div>
				</motion.div>
			</Container>
		</section>
	)
}

function Contact() {
	return (
		<section id="contacto" className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32">
			{/* Background decoration */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C9A962]/5 to-transparent" />
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				<div className="size-[600px] rounded-full border border-[#C9A962]/10" />
				<div className="absolute inset-8 rounded-full border border-[#C9A962]/10" />
				<div className="absolute inset-16 rounded-full border border-[#C9A962]/10" />
			</div>

			<Container>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={staggerContainer}
					className="relative mx-auto max-w-2xl text-center"
				>
					<motion.h2
						variants={fadeUp}
						className="font-serif text-4xl text-[#1A1714] sm:text-5xl lg:text-6xl"
					>
						¿Listo para <span className="italic text-[#C9A962]">lanzar</span>?
					</motion.h2>

					<motion.p variants={fadeUp} className="mt-6 text-lg text-[#635B52]">
						Escríbenos directo. Sin formularios eternos, sin esperas.
					</motion.p>

					<motion.div
						variants={fadeUp}
						className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
					>
						<Link
							href="https://wa.me/56993289547?text=Hola%20👋%20Quiero%20saber%20más%20sobre%20cómo%20lanzar%20mi%20producto"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-gold group inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold"
						>
							Escríbenos por WhatsApp
							<ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
						</Link>
						<Link
							href="https://calendly.com"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-outline group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium"
						>
							Agendar reunión
						</Link>
					</motion.div>

					<motion.p variants={fadeUp} className="mt-10 text-sm text-[#857C71]">
						¿Prefieres email?{' '}
						<a
							href="mailto:seba@modoautomatico.app"
							className="font-medium text-[#C9A962] underline underline-offset-4 transition-colors hover:text-[#D4B872]"
						>
							seba@modoautomatico.app
						</a>
					</motion.p>
				</motion.div>
			</Container>
		</section>
	)
}

export default function Home() {
	return (
		<div className="relative bg-[#FBF8F1]">
			{/* Grain texture overlay */}
			<div className="grain-overlay pointer-events-none fixed inset-0 z-50" />

			<div className="relative">
				<Container>
					<LanzatuNavbar />
				</Container>
				<Hero />
			</div>
			<main>
				<Problem />
				<Process />
				<Deliverables />
				<Craftsmanship />
				<Pricing />
				<FAQ />
				<Contact />
			</main>
			<LanzatuFooter />
		</div>
	)
}
