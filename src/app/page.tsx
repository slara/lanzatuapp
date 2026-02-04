import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { GlobeBackground } from '@/components/globe-background'
import { LanzatuFooter } from '@/components/lanzatu-footer'
import { LanzatuNavbar } from '@/components/lanzatu-navbar'
import {
	ArrowRight,
	Bot,
	Calendar,
	Check,
	Cloud,
	Code,
	Database,
	FileText,
	Gem,
	Globe,
	Hammer,
	Key,
	Lock,
	Mail,
	MessageCircle,
	Palette,
	Search,
	Shield,
	Smartphone,
	Sparkles,
	Wrench,
	Zap,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'lanzatu.app - De idea a producto en 3 semanas',
	description:
		'Tienes la idea. Nosotros la construimos. MVP profesional en 3 semanas para fundadores no técnicos. Sin agencias. Sin freelancers. Sin dolores de cabeza.',
}

function Hero() {
	return (
		<section className="relative overflow-hidden bg-[#0a0a0f]" style={{ minHeight: '700px' }}>
			<div className="absolute inset-0 grid-pattern opacity-50" />
			<div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />
			<div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/10 blur-[100px]" />
			<GlobeBackground />
			<Container>
				<div className="relative z-10 max-w-2xl pb-20 pt-20 sm:pb-32 sm:pt-28 lg:pt-36">
					<div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-sm">
						<span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
						<span className="text-sm font-medium text-cyan-300">
							Para fundadores con ideas por construir
						</span>
					</div>
					<h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
						Deja de buscar desarrolladores.{' '}
						<span className="text-gradient-cyber">Lanza tu producto.</span>
					</h1>
					<p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
						Tienes una idea y quieres validarla con un MVP. En 3 semanas la convertimos en un producto real que puedes mostrar a inversionistas y vender a tus primeros clientes.
					</p>
					<div className="mt-10 flex flex-col gap-4 sm:flex-row">
						<Link
							href="https://wa.me/56993289547?text=Hola%20👋%20Quiero%20saber%20más%20sobre%20cómo%20lanzar%20mi%20producto"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-base font-medium text-white transition-all hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]"
						>
							<MessageCircle className="size-5" />
							Escríbenos por WhatsApp
							<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
						</Link>
						<Link
							href="#contacto"
							className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-white/10"
						>
							<Calendar className="size-4" />
							Agendar reunión
						</Link>
					</div>
				</div>
			</Container>
		</section>
	)
}

function TrustBadges() {
	return (
		<section className="border-y border-white/5 bg-[#0a0a0f] py-8">
			<Container>
				<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-gray-400">
					<div className="flex items-center gap-2">
						<Gem className="size-4 text-cyan-400" />
						<span>Código de calidad</span>
					</div>
					<div className="flex items-center gap-2">
						<Zap className="size-4 text-cyan-400" />
						<span>Listo en 3 semanas</span>
					</div>
					<div className="flex items-center gap-2">
						<Lock className="size-4 text-cyan-400" />
						<span>El código es tuyo</span>
					</div>
					<div className="flex items-center gap-2">
						<Shield className="size-4 text-cyan-400" />
						<span>Precio fijo, sin sorpresas</span>
					</div>
					<div className="flex items-center gap-2">
						<Sparkles className="size-4 text-cyan-400" />
						<span>Potenciado con IA</span>
					</div>
				</div>
			</Container>
		</section>
	)
}

function Problem() {
	return (
		<section className="relative bg-[#0f0f18] py-16 sm:py-24">
			<div className="absolute inset-0 grid-pattern opacity-30" />
			<Container>
				<div className="relative mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
						Construir tu primer producto no debería ser tan difícil
					</h2>
					<div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
						<div className="group rounded-2xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-sm transition-all hover:border-red-500/30 hover:bg-red-500/10">
							<div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-red-500/10">
								<span className="text-lg">💸</span>
							</div>
							<p className="font-medium text-white">Contratar una agencia</p>
							<p className="mt-2 text-sm text-gray-400">
								$15,000+ USD, 3-6 meses, y al final dependes de ellos para cada cambio.
							</p>
						</div>
						<div className="group rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6 backdrop-blur-sm transition-all hover:border-orange-500/30 hover:bg-orange-500/10">
							<div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-orange-500/10">
								<span className="text-lg">🎲</span>
							</div>
							<p className="font-medium text-white">Buscar freelancers</p>
							<p className="mt-2 text-sm text-gray-400">
								Semanas buscando, comunicación difícil, y nunca sabes si el código sirve.
							</p>
						</div>
						<div className="group rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 backdrop-blur-sm transition-all hover:border-amber-500/30 hover:bg-amber-500/10">
							<div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-amber-500/10">
								<span className="text-lg">⏳</span>
							</div>
							<p className="font-medium text-white">Aprender a programar</p>
							<p className="mt-2 text-sm text-gray-400">
								6-12 meses solo para lo básico. Tu competencia ya estará vendiendo.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

function Craftsmanship() {
	const principles = [
		{
			icon: Hammer,
			title: 'Desarrolladores, no ensambladores',
			description:
				'Cada línea de código es escrita con intención. No copiamos y pegamos soluciones genéricas. Diseñamos arquitecturas pensadas para tu negocio específico.',
			gradient: 'from-cyan-500 to-blue-500',
		},
		{
			icon: Gem,
			title: 'Calidad que se nota',
			description:
				'Código limpio, bien documentado y fácil de mantener. Tu futuro equipo técnico nos lo agradecerá. No dejamos deuda técnica escondida.',
			gradient: 'from-purple-500 to-pink-500',
		},
		{
			icon: Sparkles,
			title: 'IA como herramienta, no como atajo',
			description:
				'Usamos inteligencia artificial para potenciar nuestro trabajo, no para reemplazarlo. La IA acelera, pero el criterio y la experiencia son nuestros.',
			gradient: 'from-blue-500 to-purple-500',
		},
		{
			icon: Wrench,
			title: 'Ingeniería, no improvisación',
			description:
				'Nada de "vibe coding". Cada decisión técnica tiene fundamento. Tests, revisiones de código y estándares profesionales en cada proyecto.',
			gradient: 'from-pink-500 to-cyan-500',
		},
	]

	return (
		<section className="relative bg-[#0a0a0f] py-16 sm:py-24">
			<div className="absolute inset-0 grid-pattern opacity-30" />
			<div className="absolute left-1/2 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
			<Container>
				<div className="relative mx-auto max-w-2xl text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5">
						<span className="text-sm font-medium text-purple-300">
							Nuestra filosofía
						</span>
					</div>
					<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
						Software hecho con{' '}
						<span className="text-gradient-cyber">atención al detalle</span>
					</h2>
					<p className="mt-4 text-lg text-gray-400">
						En un mundo de soluciones rápidas y código desechable, nosotros construimos productos que duran. Combinamos experiencia humana con tecnología de punta.
					</p>
				</div>
				<div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
					{principles.map((principle) => (
						<div
							key={principle.title}
							className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
						>
							<div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${principle.gradient} opacity-5 blur-3xl transition-opacity duration-300 group-hover:opacity-10`} />
							<div className="relative flex items-start gap-4">
								<div className={`flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${principle.gradient} shadow-lg`}>
									<principle.icon className="size-6 text-white" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-white">
										{principle.title}
									</h3>
									<p className="mt-2 text-base leading-relaxed text-gray-400">
										{principle.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

function Process() {
	const steps = [
		{
			number: '01',
			title: 'Creamos tu documento de diseño',
			description:
				'En 2 días generamos un documento de diseño colaborativo: la especificación detallada de tu producto. Es el "prompt" que guía todo el desarrollo.',
			icon: FileText,
		},
		{
			number: '02',
			title: 'Construimos mientras tú vendes',
			description:
				'Durante 3 semanas desarrollamos tu producto. Cada semana te mostramos el avance. Tú te enfocas en conseguir tus primeros clientes.',
			icon: Code,
		},
		{
			number: '03',
			title: 'Lanzamos y te entregamos todo',
			description:
				'Tu producto online, funcionando, con tu dominio. El código es 100% tuyo. Cuando contrates un CTO, puede continuar sin problemas.',
			icon: Cloud,
		},
	]

	return (
		<section id="proceso" className="relative scroll-mt-16 bg-[#0f0f18] py-16 sm:py-24">
			<div className="absolute inset-0 grid-pattern opacity-30" />
			<div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
			<Container>
				<div className="relative mx-auto max-w-2xl text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5">
						<span className="text-sm font-medium text-cyan-300">
							Así de simple
						</span>
					</div>
					<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
						De idea a producto en <span className="text-gradient-cyber">3 pasos</span>
					</h2>
				</div>
				<div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:gap-6 lg:grid-cols-3">
					{/* Connection line for desktop */}
					<div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 lg:block" />
					{steps.map((step, index) => (
						<div key={step.number} className="group relative">
							<div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/20 hover:bg-white/[0.04]">
								<div className="flex items-center gap-4">
									<div className="relative flex size-14 shrink-0 items-center justify-center">
										<div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 opacity-20" />
										<div className="relative flex size-12 items-center justify-center rounded-full border border-cyan-500/30 bg-[#0a0a0f]">
											<step.icon className="size-5 text-cyan-400" />
										</div>
									</div>
									<span className="font-mono text-2xl font-bold text-gradient-cyber">
										{step.number}
									</span>
								</div>
								<h3 className="mt-5 text-lg font-semibold text-white">
									{step.title}
								</h3>
								<p className="mt-2 text-base leading-relaxed text-gray-400">
									{step.description}
								</p>
							</div>
							{/* Arrow connector for mobile */}
							{index < steps.length - 1 && (
								<div className="flex justify-center py-4 lg:hidden">
									<ArrowRight className="size-5 text-cyan-500/50" />
								</div>
							)}
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

function Deliverables() {
	const items = [
		{
			title: 'Correo',
			description:
				'Notificaciones transaccionales, emails de bienvenida y recuperación de contraseña. Todo configurado y listo para enviar.',
			icon: Mail,
		},
		{
			title: 'Acceso',
			description:
				'Autenticación segura con Google, email y redes sociales. Sesiones, tokens y protección de rutas incluidos.',
			icon: Key,
		},
		{
			title: 'Base de datos',
			description:
				'Base de datos PostgreSQL lista para producción. Esquemas, migraciones y backups automáticos configurados.',
			icon: Database,
		},
		{
			title: 'SEO',
			description:
				'Metadatos optimizados, sitemap automático y estructura lista para posicionar en Google desde el día uno.',
			icon: Search,
		},
		{
			title: 'Estilos',
			description:
				'Sistema de diseño coherente con Tailwind CSS. Componentes reutilizables, tema personalizable y modo oscuro.',
			icon: Palette,
		},
	]

	return (
		<section id="entregables" className="relative scroll-mt-16 bg-[#0a0a0f] py-16 sm:py-24">
			<div className="absolute inset-0 grid-pattern opacity-30" />
			<Container>
				<div className="relative mx-auto max-w-2xl text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5">
						<span className="text-sm font-medium text-cyan-300">
							Qué incluye cada MVP
						</span>
					</div>
					<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
						Todo lo que necesitas para <span className="text-gradient-cyber">lanzar</span>
					</h2>
					<p className="mt-4 text-lg text-gray-400">
						No empezamos de cero. Nuestro kit incluye todo lo esencial, listo para personalizar.
					</p>
				</div>
				<div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
					{items.map((item) => (
						<div
							key={item.title}
							className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/20 hover:bg-white/[0.04]"
						>
							<div className="relative flex size-12 items-center justify-center">
								<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 opacity-80" />
								<item.icon className="relative size-6 text-white" />
							</div>
							<h3 className="mt-4 text-lg font-semibold text-white">
								{item.title}
							</h3>
							<p className="mt-2 text-sm leading-relaxed text-gray-400">
								{item.description}
							</p>
							<div className="absolute -bottom-10 -right-10 size-32 rounded-full bg-cyan-500 opacity-5 blur-3xl transition-all duration-300 group-hover:opacity-10" />
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

interface PlanFeature {
	text: string
	icon: React.ComponentType<{ className?: string }>
	highlight?: boolean
}

interface Plan {
	name: string
	description: string
	price: string
	includesPrevious: boolean
	previousPlan?: string
	features: PlanFeature[]
	cta: string
	highlighted: boolean
}

function Pricing() {
	const plans: Plan[] = [
		{
			name: 'Starter',
			description: 'Para validar tu idea rápido',
			price: '$1,200',
			includesPrevious: false,
			features: [
				{ text: 'Llamada de descubrimiento (30 min)', icon: Calendar },
				{ text: '2-3 funcionalidades core', icon: Code },
				{ text: 'Diseño limpio y funcional', icon: Globe },
				{ text: 'Tu producto online', icon: Cloud },
				{ text: 'El código es 100% tuyo', icon: Lock },
				{ text: '1 ronda de ajustes', icon: Check },
			],
			cta: 'Empezar simple',
			highlighted: false,
		},
		{
			name: 'Profesional',
			description: 'El más popular para lanzar',
			price: '$2,000',
			includesPrevious: true,
			previousPlan: 'Starter',
			features: [
				{ text: '4-5 funcionalidades core', icon: Code },
				{ text: 'Diseño profesional y pulido', icon: Globe },
				{ text: 'Tu dominio personalizado', icon: Cloud },
				{ text: 'Documentación para tu equipo', icon: FileText },
				{ text: 'Updates semanales', icon: Zap },
				{ text: '2 rondas de ajustes', icon: Check },
				{ text: 'Integración con WhatsApp Business', icon: MessageCircle, highlight: true },
			],
			cta: 'Elegir Profesional',
			highlighted: true,
		},
		{
			name: 'Enterprise',
			description: 'Para escalar sin límites',
			price: '$3,500',
			includesPrevious: true,
			previousPlan: 'Profesional',
			features: [
				{ text: 'Llamada de descubrimiento extendida (60 min)', icon: Calendar },
				{ text: '6-8 funcionalidades core', icon: Code },
				{ text: 'Diseño premium personalizado', icon: Globe },
				{ text: '3 rondas de ajustes', icon: Check },
				{ text: '1 mes de soporte incluido', icon: Shield },
				{ text: 'Aplicación móvil (iOS y Android)', icon: Smartphone, highlight: true },
				{ text: 'Workflows de AI integrados', icon: Bot, highlight: true },
			],
			cta: 'Ir por todo',
			highlighted: false,
		},
	]

	return (
		<section id="precio" className="relative scroll-mt-16 bg-[#0f0f18] py-16 sm:py-24">
			<div className="absolute inset-0 grid-pattern opacity-30" />
			<div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
			<Container>
				<div className="relative mx-auto max-w-2xl text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5">
						<span className="text-sm font-medium text-purple-300">
							Inversión clara
						</span>
					</div>
					<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
						Elige el plan que se ajusta a <span className="text-gradient-cyber">tu idea</span>
					</h2>
					<p className="mt-4 text-lg text-gray-400">
						Precio fijo. Sin sorpresas. Pago en 2 partes.
					</p>
				</div>
				<div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
					{plans.map((plan) => (
						<div
							key={plan.name}
							className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 ${plan.highlighted
								? 'border border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-purple-500/10 shadow-[0_0_40px_rgba(0,245,255,0.1)]'
								: 'border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
								}`}
						>
							{plan.highlighted && (
								<div className="absolute -top-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
							)}
							{plan.highlighted && (
								<div className="absolute -top-4 left-1/2 -translate-x-1/2">
									<span className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/25">
										Recomendado
									</span>
								</div>
							)}
							<div className="text-center">
								<p className="text-lg font-semibold text-white">{plan.name}</p>
								<p className="mt-1 text-sm text-gray-400">{plan.description}</p>
								<div className="mt-4 flex items-baseline justify-center gap-1">
									<span className={`text-4xl font-semibold tracking-tight ${plan.highlighted ? 'text-gradient-cyber' : 'text-white'}`}>
										{plan.price}
									</span>
									<span className="text-base text-gray-500">USD</span>
								</div>
							</div>
							<div className="mt-8 space-y-3">
								{plan.includesPrevious && plan.previousPlan && (
									<div className="mb-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 text-center">
										<span className="text-sm font-medium text-cyan-300">
											✓ Todo lo del plan {plan.previousPlan}
										</span>
									</div>
								)}
								<ul className="space-y-3">
									{plan.features.map((feature) => (
										<li key={feature.text} className="flex items-start gap-3">
											<feature.icon className={`mt-0.5 size-4 shrink-0 ${feature.highlight ? 'text-cyan-400' : plan.highlighted ? 'text-cyan-400' : 'text-gray-500'}`} />
											<span className={`text-sm ${feature.highlight ? 'font-medium text-cyan-300' : 'text-gray-400'}`}>
												{feature.text}
											</span>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-8">
								<Link
									href="#contacto"
									className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-all ${plan.highlighted
										? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'
										: 'border border-white/10 bg-white/5 text-white hover:border-cyan-500/30 hover:bg-white/10'
										}`}
								>
									{plan.cta}
									<ArrowRight className="size-4" />
								</Link>
							</div>
						</div>
					))}
				</div>
				<div className="relative mx-auto mt-12 max-w-2xl">
					<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
						<div className="flex items-start gap-4">
							<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/10">
								<Shield className="size-5 text-purple-400" />
							</div>
							<div>
								<p className="text-sm font-medium text-white">
									Soporte continuo (opcional)
								</p>
								<p className="mt-1 text-sm text-gray-400">
									$200-300 USD/mes. Nos encargamos del hosting, monitoreo y pequeños ajustes. Tú solo vendes.
								</p>
							</div>
						</div>
					</div>
				</div>
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
				'Usamos IA como herramienta, no como reemplazo. La inteligencia artificial nos ayuda a ser más productivos, pero cada decisión de arquitectura, cada patrón de diseño y cada línea de código pasa por revisión humana. No hacemos "vibe coding" — hacemos ingeniería de software con criterio. La IA acelera, pero la experiencia y el buen juicio son nuestros.',
		},
		{
			question: '¿Cómo logran entregar en solo 3 semanas?',
			answer:
				'Tenemos un kit base probado con autenticación, pagos, dashboards y todas las piezas comunes ya resueltas. No empezamos de cero — empezamos con una base sólida y nos enfocamos en construir lo que hace único a tu producto. Eso nos permite ir rápido sin sacrificar calidad.',
		},
	]

	return (
		<section id="faq" className="relative scroll-mt-16 bg-[#0a0a0f] py-16 sm:py-24">
			<div className="absolute inset-0 grid-pattern opacity-30" />
			<Container>
				<div className="relative mx-auto max-w-2xl text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5">
						<span className="text-sm font-medium text-cyan-300">
							Preguntas comunes
						</span>
					</div>
					<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
						Lo que otros fundadores <span className="text-gradient-cyber">preguntan</span>
					</h2>
				</div>
				<div className="relative mx-auto mt-16 max-w-3xl">
					<FAQAccordion items={faqs} />
				</div>
			</Container>
		</section>
	)
}

function Contact() {
	return (
		<section id="contacto" className="relative scroll-mt-16 overflow-hidden bg-[#0f0f18] py-16 sm:py-24">
			<div className="absolute inset-0 grid-pattern opacity-30" />
			<div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
			<div className="absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
			<div className="absolute -right-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]" />
			<Container>
				<div className="relative mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
						¿Listo para <span className="text-gradient-cyber">lanzar tu idea</span>?
					</h2>
					<p className="mt-4 text-lg text-gray-400">
						Escríbenos directo. Sin formularios eternos.
					</p>
					<div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
						<Link
							href="https://wa.me/56993289547?text=Hola%20👋%20Quiero%20saber%20más%20sobre%20cómo%20lanzar%20mi%20producto"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-lg font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40"
						>
							<MessageCircle className="size-5" />
							Escríbenos por WhatsApp
							<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
						</Link>
						<span className="text-gray-500">o</span>
						<Link
							href="https://calendly.com"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-white/10"
						>
							<Calendar className="size-5" />
							Agenda una reunión
						</Link>
					</div>
					<p className="mt-8 text-sm text-gray-400">
						¿Prefieres email?{' '}
						<a
							href="mailto:seba@modoautomatico.app"
							className="font-medium text-cyan-400 underline underline-offset-4 transition-colors hover:text-cyan-300"
						>
							seba@modoautomatico.app
						</a>
					</p>
				</div>
			</Container>
		</section>
	)
}

export default function Home() {
	return (
		<div className="bg-[#0a0a0f]">
			<div className="relative">
				<Container>
					<LanzatuNavbar />
				</Container>
				<Hero />
			</div>
			<main>
				<TrustBadges />
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
