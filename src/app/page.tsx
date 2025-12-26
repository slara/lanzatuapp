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
	MessageCircle,
	Shield,
	Users,
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
		<section className="relative overflow-hidden" style={{ minHeight: '700px' }}>
			<GlobeBackground />
			<Container>
				<div className="relative z-10 max-w-2xl pb-20 pt-20 sm:pb-32 sm:pt-28 lg:pt-36">
					<p className="text-sm font-medium text-emerald-600">
						Para fundadores sin equipo técnico
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
							<MessageCircle className="size-4" />
							Escríbenos por WhatsApp
						</Link>
						<Link
							href="#proceso"
							className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
						>
							Ver cómo funciona
						</Link>
					</div>
					<p className="mt-6 text-sm text-gray-500">
						Respuesta en menos de 2 horas. Sin compromiso.
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
						<span>El código es tuyo</span>
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
						Construir tu primer producto no debería ser tan difícil
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
								Semanas buscando, comunicación difícil, y nunca sabes si el código sirve.
							</p>
						</div>
						<div className="rounded-xl border border-red-100 bg-red-50/50 p-6">
							<p className="font-medium text-gray-900">Aprender a programar</p>
							<p className="mt-2 text-sm text-gray-600">
								6-12 meses solo para lo básico. Tu competencia ya estará vendiendo.
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
			title: 'Hablamos de tu negocio, no de tecnología',
			description:
				'Nos escribes por WhatsApp, nos cuentas qué problema resuelves y para quién. Juntos definimos las 3-5 funciones que tu producto necesita para validar. Cero jerga técnica.',
			icon: MessageCircle,
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
		<section id="proceso" className="scroll-mt-16 border-t border-gray-200 bg-gray-50 py-16 sm:py-24">
			<Container>
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-medium text-emerald-600">
						Así de simple
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
				'Tus clientes pueden registrarse con Google, email o redes sociales. Listo para manejar múltiples empresas si lo necesitas.',
			icon: Users,
		},
		{
			title: 'Página de inicio profesional',
			description:
				'Landing page lista para convertir visitantes en clientes. Fácil de editar el texto cuando quieras.',
			icon: Globe,
		},
		{
			title: 'Panel de administración',
			description:
				'Dashboard donde ves todo: usuarios, datos, métricas. Con tablas, filtros y formularios listos.',
			icon: LayoutDashboard,
		},
		{
			title: 'Tu información segura',
			description:
				'Base de datos profesional. Tu información organizada, respaldada y lista para crecer.',
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
				'tuapp.com funcionando. Ambiente de pruebas y producción. Certificado de seguridad incluido.',
			icon: Cloud,
		},
		{
			title: 'El código es tuyo',
			description:
				'Repositorio completo en GitHub. Sin dependencias raras. Tu futuro CTO puede continuar sin problemas.',
			icon: Lock,
		},
		{
			title: 'Documentación completa',
			description:
				'Guía de arquitectura, cómo funciona cada parte, y manual de despliegue. Tu equipo futuro te lo agradecerá.',
			icon: FileText,
		},
	]

	return (
		<section id="entregables" className="scroll-mt-16 py-16 sm:py-24">
			<Container>
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-medium text-emerald-600">
						Qué incluye cada MVP
					</p>
					<h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
						Todo lo que necesitas para lanzar
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						No empezamos de cero. Hemos desarrollado un kit moderno, con todo lo necesario.
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
	const plans = [
		{
			name: 'Starter',
			description: 'Para validar tu idea rápido',
			price: '$1,200',
			features: [
				'Chat de descubrimiento por WhatsApp',
				'2-3 funcionalidades core',
				'Diseño limpio y funcional',
				'Tu producto online',
				'El código es 100% tuyo',
				'1 ronda de ajustes',
			],
			cta: 'Empezar simple',
			highlighted: false,
		},
		{
			name: 'Profesional',
			description: 'El más popular para lanzar',
			price: '$2,000',
			features: [
				'Chat de descubrimiento por WhatsApp',
				'4-5 funcionalidades core',
				'Diseño profesional y pulido',
				'Tu producto online con tu dominio',
				'El código es 100% tuyo',
				'Documentación para tu equipo',
				'Updates semanales',
				'2 rondas de ajustes',
			],
			cta: 'Elegir Profesional',
			highlighted: true,
		},
		{
			name: 'Completo',
			description: 'Para productos más ambiciosos',
			price: '$3,500',
			features: [
				'Sesión de descubrimiento personalizada',
				'6-8 funcionalidades core',
				'Diseño premium personalizado',
				'Tu producto online con tu dominio',
				'El código es 100% tuyo',
				'Documentación completa',
				'Updates semanales + demo',
				'3 rondas de ajustes',
				'1 mes de soporte incluido',
			],
			cta: 'Ir por todo',
			highlighted: false,
		},
	]

	return (
		<section id="precio" className="scroll-mt-16 border-t border-gray-200 bg-gray-50 py-16 sm:py-24">
			<Container>
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-medium text-emerald-600">
						Inversión clara
					</p>
					<h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
						Elige el plan que se ajusta a tu idea
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						Precio fijo. Sin sorpresas. Pago en 3 partes.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
					{plans.map((plan) => (
						<div
							key={plan.name}
							className={`relative rounded-2xl p-8 ${plan.highlighted
								? 'border-2 border-emerald-500 bg-white shadow-lg'
								: 'border border-gray-200 bg-white shadow-sm'
								}`}
						>
							{plan.highlighted && (
								<div className="absolute -top-4 left-1/2 -translate-x-1/2">
									<span className="rounded-full bg-emerald-500 px-4 py-1 text-sm font-medium text-white">
										Recomendado
									</span>
								</div>
							)}
							<div className="text-center">
								<p className="text-lg font-semibold text-gray-900">{plan.name}</p>
								<p className="mt-1 text-sm text-gray-500">{plan.description}</p>
								<div className="mt-4 flex items-baseline justify-center gap-1">
									<span className="text-4xl font-semibold tracking-tight text-gray-900">
										{plan.price}
									</span>
									<span className="text-base text-gray-500">USD</span>
								</div>
							</div>
							<ul className="mt-8 space-y-3">
								{plan.features.map((feature) => (
									<li key={feature} className="flex items-start gap-3">
										<Check className={`mt-0.5 size-4 shrink-0 ${plan.highlighted ? 'text-emerald-600' : 'text-gray-400'}`} />
										<span className="text-sm text-gray-600">{feature}</span>
									</li>
								))}
							</ul>
							<div className="mt-8">
								<Link
									href="#contacto"
									className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-colors ${plan.highlighted
										? 'bg-emerald-500 text-white hover:bg-emerald-600'
										: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
										}`}
								>
									{plan.cta}
									<ArrowRight className="size-4" />
								</Link>
							</div>
						</div>
					))}
				</div>
				<div className="mx-auto mt-12 max-w-2xl">
					<div className="rounded-xl border border-gray-200 bg-white p-6">
						<div className="flex items-start gap-4">
							<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
								<Shield className="size-5 text-gray-600" />
							</div>
							<div>
								<p className="text-sm font-medium text-gray-900">
									Soporte continuo (opcional)
								</p>
								<p className="mt-1 text-sm text-gray-600">
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
			question: '¿Por qué 3 semanas y no 3 días?',
			answer:
				'Podríamos entregar algo en 3 días, pero sería código que tu futuro CTO tiraría a la basura. 3 semanas nos permiten construir algo sólido, con buenas bases, que puede crecer contigo. Es la diferencia entre una casa prefabricada y una con cimientos reales.',
		},
		{
			question: '¿Cómo sé que van a entregar?',
			answer:
				'Pagas en 3 partes: 40% al inicio, 30% a mitad del proyecto, 30% a la entrega. Cada semana te mostramos el avance. Si en cualquier momento no estás conforme, lo hablamos y ajustamos. Tu dinero está protegido porque solo pagas por avances reales.',
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
						Sin formularios. Sin esperas. Escríbenos directo y te respondemos en menos de 2 horas.
					</p>
					<div className="mt-10">
						<Link
							href="https://wa.me/1234567890?text=Hola!%20Tengo%20una%20idea%20y%20me%20gustaría%20saber%20más%20sobre%20cómo%20trabajan"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-emerald-600"
						>
							<MessageCircle className="size-5" />
							Escríbenos por WhatsApp
						</Link>
					</div>
					<p className="mt-6 text-sm text-gray-400">
						¿Prefieres email?{' '}
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
