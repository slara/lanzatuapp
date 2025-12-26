import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { GlobeBackground } from '@/components/globe-background'
import { LanzatuFooter } from '@/components/lanzatu-footer'
import { LanzatuNavbar } from '@/components/lanzatu-navbar'
import {
	ArrowRight,
	Calendar,
	Check,
	Cloud,
	Code,
	FileText,
	Globe,
	LayoutDashboard,
	Lock,
	Shield,
	Users,
	Zap,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'lanzatu.app - De idea a producto en 3 semanas',
	description:
		'Tienes la idea. Nosotros la construimos. MVP profesional en 3 semanas para fundadores no tecnicos. Sin agencias. Sin freelancers. Sin dolores de cabeza.',
}

function Hero() {
	return (
		<section className="relative overflow-hidden" style={{ minHeight: '700px' }}>
			<GlobeBackground />
			<Container>
				<div className="relative z-10 max-w-2xl pb-20 pt-20 sm:pb-32 sm:pt-28 lg:pt-36">
					<p className="text-sm font-medium text-emerald-600">
						Para fundadores sin equipo tecnico
					</p>
					<h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
						Deja de buscar desarrolladores.{' '}
						<span className="text-emerald-600">Lanza tu producto.</span>
					</h1>
					<p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
						Tienes una idea validada pero no quien la lleve a cabo. En 3 semanas la convertimos en un producto real que puedes mostrar a inversionistas y vender a tus primeros clientes.
					</p>
					<div className="mt-10 flex flex-col gap-4 sm:flex-row">
						<Link
							href="#contacto"
							className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800"
						>
							Agenda tu llamada gratis
							<ArrowRight className="size-4" />
						</Link>
						<Link
							href="#proceso"
							className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
						>
							Ver como funciona
						</Link>
					</div>
					<p className="mt-6 text-sm text-gray-500">
						30 minutos. Sin compromiso. Sin jerga tecnica.
					</p>
				</div>
			</Container>
		</section>
	)
}

function TrustBadges() {
	return (
		<section className="border-y border-gray-200 bg-gray-50 py-8">
			<Container>
				<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-gray-600">
					<div className="flex items-center gap-2">
						<Zap className="size-4 text-emerald-500" />
						<span>Listo en 3 semanas</span>
					</div>
					<div className="flex items-center gap-2">
						<Lock className="size-4 text-emerald-500" />
						<span>El codigo es tuyo</span>
					</div>
					<div className="flex items-center gap-2">
						<Shield className="size-4 text-emerald-500" />
						<span>Precio fijo, sin sorpresas</span>
					</div>
					<div className="flex items-center gap-2">
						<Cloud className="size-4 text-emerald-500" />
						<span>Listo para escalar</span>
					</div>
				</div>
			</Container>
		</section>
	)
}

function Problem() {
	return (
		<section className="py-16 sm:py-24">
			<Container>
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
						Construir tu primer producto no deberia ser tan dificil
					</h2>
					<div className="mt-12 grid gap-8 text-left sm:grid-cols-3">
						<div className="rounded-xl border border-red-100 bg-red-50/50 p-6">
							<p className="font-medium text-gray-900">Contratar una agencia</p>
							<p className="mt-2 text-sm text-gray-600">
								$15,000+ USD, 3-6 meses, y al final dependes de ellos para cada cambio.
							</p>
						</div>
						<div className="rounded-xl border border-red-100 bg-red-50/50 p-6">
							<p className="font-medium text-gray-900">Buscar freelancers</p>
							<p className="mt-2 text-sm text-gray-600">
								Semanas buscando, comunicacion dificil, y nunca sabes si el codigo sirve.
							</p>
						</div>
						<div className="rounded-xl border border-red-100 bg-red-50/50 p-6">
							<p className="font-medium text-gray-900">Aprender a programar</p>
							<p className="mt-2 text-sm text-gray-600">
								6-12 meses solo para lo basico. Tu competencia ya estara vendiendo.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

function Process() {
	const steps = [
		{
			number: '01',
			title: 'Hablamos de tu negocio, no de tecnologia',
			description:
				'En 30 minutos me cuentas que problema resuelves y para quien. Juntos definimos las 3-5 funciones que tu producto necesita para validar. Cero jerga tecnica.',
			icon: Calendar,
		},
		{
			number: '02',
			title: 'Construimos mientras tu vendes',
			description:
				'Durante 3 semanas desarrollo tu producto. Cada semana te muestro el avance. Tu te enfocas en conseguir tus primeros clientes.',
			icon: Code,
		},
		{
			number: '03',
			title: 'Lanzamos y te entrego todo',
			description:
				'Tu producto online, funcionando, con tu dominio. El codigo es 100% tuyo. Cuando contrates un CTO, puede continuar sin problemas.',
			icon: Cloud,
		},
	]

	return (
		<section id="proceso" className="scroll-mt-16 border-t border-gray-200 bg-gray-50 py-16 sm:py-24">
			<Container>
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-medium text-emerald-600">
						Asi de simple
					</p>
					<h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
						De idea a producto en 3 pasos
					</h2>
				</div>
				<div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-3">
					{steps.map((step) => (
						<div key={step.number} className="relative rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
							<div className="flex items-center gap-4">
								<div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-emerald-100">
									<step.icon className="size-6 text-emerald-600" />
								</div>
								<span className="text-sm font-semibold text-emerald-600">
									Paso {step.number}
								</span>
							</div>
							<h3 className="mt-4 text-lg font-semibold text-gray-900">
								{step.title}
							</h3>
							<p className="mt-2 text-base leading-relaxed text-gray-600">
								{step.description}
							</p>
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
			title: 'Sistema de usuarios listo',
			description:
				'Tus clientes pueden registrarse con Google, email o redes sociales. Listo para manejar multiples empresas si lo necesitas.',
			icon: Users,
		},
		{
			title: 'Pagina de inicio profesional',
			description:
				'Landing page lista para convertir visitantes en clientes. Facil de editar el texto cuando quieras.',
			icon: Globe,
		},
		{
			title: 'Panel de administracion',
			description:
				'Dashboard donde ves todo: usuarios, datos, metricas. Con tablas, filtros y formularios listos.',
			icon: LayoutDashboard,
		},
		{
			title: 'Tu informacion segura',
			description:
				'Base de datos profesional. Tu informacion organizada, respaldada y lista para crecer.',
			icon: Shield,
		},
		{
			title: 'Listo para conectar',
			description:
				'Backend preparado para integraciones futuras. Pasarelas de pago, emails, lo que necesites.',
			icon: Zap,
		},
		{
			title: 'Online con tu dominio',
			description:
				'tuapp.com funcionando. Ambiente de pruebas y produccion. Certificado de seguridad incluido.',
			icon: Cloud,
		},
		{
			title: 'El codigo es tuyo',
			description:
				'Repositorio completo en GitHub. Sin dependencias raras. Tu futuro CTO puede continuar sin problemas.',
			icon: Lock,
		},
		{
			title: 'Documentacion completa',
			description:
				'Guia de arquitectura, como funciona cada parte, y manual de despliegue. Tu equipo futuro te lo agradecera.',
			icon: FileText,
		},
	]

	return (
		<section id="entregables" className="scroll-mt-16 py-16 sm:py-24">
			<Container>
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-medium text-emerald-600">
						Que incluye cada MVP
					</p>
					<h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
						Todo lo que necesitas para lanzar
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						No empezamos de cero. Usamos un kit base probado que acelera el desarrollo.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{items.map((item) => (
						<div
							key={item.title}
							className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
						>
							<div className="flex size-10 items-center justify-center rounded-lg bg-emerald-100">
								<item.icon className="size-5 text-emerald-600" />
							</div>
							<h3 className="mt-4 text-base font-semibold text-gray-900">
								{item.title}
							</h3>
							<p className="mt-2 text-sm leading-relaxed text-gray-600">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

function Pricing() {
	const included = [
		'Llamada de descubrimiento (30 min)',
		'3-5 funcionalidades core de tu producto',
		'Diseño limpio y profesional',
		'Tu producto online con tu dominio',
		'El codigo es 100% tuyo',
		'Documentacion para tu futuro equipo',
		'Updates semanales del progreso',
		'2 rondas de ajustes incluidas',
	]

	return (
		<section id="precio" className="scroll-mt-16 border-t border-gray-200 bg-gray-50 py-16 sm:py-24">
			<Container>
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-medium text-emerald-600">
						Inversion clara
					</p>
					<h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
						Sabes exactamente cuanto pagas
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						Sin costos ocultos. Sin sorpresas. Sin extras.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-lg">
					<div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
						<div className="text-center">
							<p className="text-sm font-medium text-gray-500">Tu MVP completo</p>
							<div className="mt-4 flex items-baseline justify-center gap-2">
								<span className="text-5xl font-semibold tracking-tight text-gray-900">
									$1,500 - $2,000
								</span>
								<span className="text-lg text-gray-500">USD</span>
							</div>
							<p className="mt-2 text-sm text-gray-600">Pago en 3 partes. Precio fijo.</p>
						</div>
						<div className="mt-8 border-t border-gray-100 pt-8">
							<p className="text-sm font-medium text-gray-900">
								Incluye:
							</p>
							<ul className="mt-4 space-y-3">
								{included.map((item) => (
									<li key={item} className="flex items-start gap-3">
										<Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
										<span className="text-sm text-gray-600">{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="mt-8">
							<Link
								href="#contacto"
								className="flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800"
							>
								Empezar mi proyecto
								<ArrowRight className="size-4" />
							</Link>
						</div>
						<p className="mt-4 text-center text-xs text-gray-500">
							El precio exacto lo definimos en la llamada, segun la complejidad de tu idea.
						</p>
					</div>
					<div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
						<div className="flex items-start gap-4">
							<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
								<Shield className="size-5 text-gray-600" />
							</div>
							<div>
								<p className="text-sm font-medium text-gray-900">
									Soporte continuo (opcional)
								</p>
								<p className="mt-1 text-sm text-gray-600">
									$200-300 USD/mes. Me encargo del hosting, monitoreo y pequeños ajustes. Tu solo vendes.
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
			question: 'No se nada de tecnologia. ¿Esto es para mi?',
			answer:
				'Si. De hecho, es exactamente para ti. En nuestra llamada hablamos de tu negocio: que problema resuelves, quienes son tus clientes, como quieres ganar dinero. Yo me encargo de traducir eso a tecnologia. Nunca vas a escuchar jerga tecnica.',
		},
		{
			question: '¿Por que 3 semanas y no 3 dias?',
			answer:
				'Podria entregar algo en 3 dias, pero seria codigo que tu futuro CTO tiraria a la basura. 3 semanas me permiten construir algo solido, con buenas bases, que puede crecer contigo. Es la diferencia entre una casa prefabricada y una con cimientos reales.',
		},
		{
			question: '¿Como se que vas a entregar?',
			answer:
				'Pagas en 3 partes: 40% al inicio, 30% a mitad del proyecto, 30% a la entrega. Cada semana te muestro el avance. Si en cualquier momento no estas conforme, lo hablamos y ajustamos. Tu dinero esta protegido porque solo pagas por avances reales.',
		},
		{
			question: '¿Y si necesito cambios despues?',
			answer:
				'El codigo es tuyo. Puedes contratar cualquier desarrollador para mejorarlo. O podemos seguir trabajando juntos. Muchos clientes continuan con el soporte mensual para pequeños ajustes y nuevas funciones.',
		},
		{
			question: '¿Por que eres mas barato que una agencia?',
			answer:
				'No tengo oficinas, no tengo 20 empleados, no tengo gerentes de proyecto. Soy un desarrollador senior que trabaja directo contigo. Sin intermediarios, sin overhead. Tu pagas por codigo, no por estructura corporativa.',
		},
		{
			question: '¿Que pasa si mi idea cambia mientras construimos?',
			answer:
				'Es normal. Por eso empezamos con las 3-5 funciones mas importantes y tienes 2 rondas de ajustes incluidas. Si necesitas un cambio grande a mitad de camino, lo conversamos y vemos como adaptarnos.',
		},
	]

	return (
		<section id="faq" className="scroll-mt-16 py-16 sm:py-24">
			<Container>
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-medium text-emerald-600">
						Preguntas comunes
					</p>
					<h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
						Lo que otros fundadores preguntan
					</h2>
				</div>
				<div className="mx-auto mt-16 max-w-3xl">
					<FAQAccordion items={faqs} />
				</div>
			</Container>
		</section>
	)
}

function Contact() {
	return (
		<section id="contacto" className="scroll-mt-16 border-t border-gray-200 bg-gray-900 py-16 sm:py-24">
			<Container>
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
						Hablemos de tu idea
					</h2>
					<p className="mt-4 text-lg text-gray-300">
						30 minutos. Sin compromiso. Te cuento si puedo ayudarte y como seria el proceso.
					</p>
					<div className="mt-10">
						<Link
							href="https://calendly.com"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-emerald-600"
						>
							<Calendar className="size-5" />
							Agendar llamada gratis
						</Link>
					</div>
					<p className="mt-6 text-sm text-gray-400">
						¿Prefieres escribir?{' '}
						<a
							href="mailto:hola@lanzatu.app"
							className="font-medium text-white underline underline-offset-4"
						>
							hola@lanzatu.app
						</a>
					</p>
				</div>
			</Container>
		</section>
	)
}

export default function Home() {
	return (
		<div>
			<div className="relative">
				<Container>
					<LanzatuNavbar />
				</Container>
				<Hero />
			</div>
			<main className="bg-white">
				<TrustBadges />
				<Problem />
				<Process />
				<Deliverables />
				<Pricing />
				<FAQ />
				<Contact />
			</main>
			<LanzatuFooter />
		</div>
	)
}
