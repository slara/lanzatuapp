import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { LanzatuFooter } from '@/components/lanzatu-footer'
import { LanzatuNavbar } from '@/components/lanzatu-navbar'
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Cloud,
  Code,
  FileText,
  Lock,
  Shield,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'lanzatu.app - Tu idea, en produccion en 2-3 semanas',
  description:
    'Construimos tu MVP con codigo profesional en 2-3 semanas. Next.js, FastAPI, PostgreSQL. El codigo es 100% tuyo.',
}

function Hero() {
  return (
    <section className="pb-16 pt-8 sm:pb-24 sm:pt-12">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Tu idea, en produccion
            <br />
            <span className="text-emerald-600">en 2-3 semanas</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Construimos tu MVP con codigo profesional. Next.js, FastAPI,
            PostgreSQL. El codigo es 100% tuyo — cuando llegue tu CTO, puede
            tomarlo y seguir construyendo.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800"
            >
              Agendar llamada de diagnostico
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#proceso"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Ver como funciona
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Sin compromiso. 30 minutos. Definimos juntos si tiene sentido
            trabajar juntos.
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
            <Clock className="size-4 text-gray-400" />
            <span>2-3 semanas de entrega</span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="size-4 text-gray-400" />
            <span>Codigo profesional</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="size-4 text-gray-400" />
            <span>100% tuyo</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="size-4 text-gray-400" />
            <span>Desplegado en Google Cloud</span>
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
      title: 'Llamada de diagnostico',
      description:
        'En 30 minutos entendemos tu idea y definimos juntos las 3-5 funcionalidades esenciales de tu producto. Sin jerga tecnica, enfocados en lo que tu negocio necesita.',
      icon: Calendar,
    },
    {
      number: '02',
      title: 'Construccion',
      description:
        'Durante 2-3 semanas construimos tu aplicacion con Next.js, FastAPI y PostgreSQL. Te mantenemos informado con updates semanales del progreso.',
      icon: Code,
    },
    {
      number: '03',
      title: 'Entrega y despliegue',
      description:
        'Desplegamos tu app en Google Cloud con tu dominio y SSL configurado. Te entregamos todo documentado: repositorio en GitHub, credenciales, guia de arquitectura.',
      icon: Cloud,
    },
  ]

  return (
    <section id="proceso" className="scroll-mt-16 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Proceso
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            De idea a producto en 3 pasos
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                  <step.icon className="size-6 text-gray-700" />
                </div>
                <span className="text-sm font-medium text-emerald-600">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-base text-gray-600 leading-relaxed">
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
      title: 'Aplicacion funcional',
      description:
        'Tu MVP completo con las funcionalidades core definidas en la llamada de diagnostico. Listo para mostrar a inversionistas o primeros clientes.',
      icon: Code,
    },
    {
      title: 'Codigo fuente en GitHub',
      description:
        'Repositorio privado con todo el codigo. Next.js para frontend, FastAPI para backend, PostgreSQL para base de datos. Arquitectura limpia y escalable.',
      icon: FileText,
    },
    {
      title: 'Desplegado en Google Cloud',
      description:
        'Tu app corriendo en produccion con tu dominio personalizado, certificado SSL, y configuracion profesional de infraestructura.',
      icon: Cloud,
    },
    {
      title: 'Documentacion tecnica',
      description:
        'Guia de arquitectura, instrucciones de desarrollo local, y documentacion de APIs. Tu futuro CTO puede tomar el proyecto y seguir construyendo.',
      icon: FileText,
    },
    {
      title: 'Credenciales y accesos',
      description:
        'Todas las claves de APIs, accesos a servicios cloud, y credenciales organizadas y documentadas. Control total desde el dia uno.',
      icon: Lock,
    },
    {
      title: 'Soporte post-lanzamiento',
      description:
        'Opcional: hosting y soporte mensual para que te enfoques en vender mientras nosotros mantenemos todo funcionando.',
      icon: Shield,
    },
  ]

  return (
    <section
      id="entregables"
      className="scroll-mt-16 border-t border-gray-200 bg-gray-50 py-16 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Entregables
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que recibes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No solo codigo — un producto completo listo para escalar.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-gray-100">
                <item.icon className="size-5 text-gray-700" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
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
    'Llamada de diagnostico (30 min)',
    '3-5 funcionalidades core',
    'Frontend con Next.js',
    'Backend con FastAPI',
    'Base de datos PostgreSQL',
    'Despliegue en Google Cloud',
    'Dominio y SSL configurado',
    'Repositorio en GitHub',
    'Documentacion tecnica',
    'Credenciales y accesos',
  ]

  return (
    <section id="precio" className="scroll-mt-16 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Inversion
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Precio transparente
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-lg">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">MVP Completo</p>
              <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="text-5xl font-semibold tracking-tight text-gray-900">
                  $1,500 - $2,000
                </span>
                <span className="text-lg text-gray-500">USD</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">Pago unico. Sin costos ocultos.</p>
            </div>
            <div className="mt-8 border-t border-gray-100 pt-8">
              <p className="text-sm font-medium text-gray-900">
                Todo incluido:
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
                Agendar llamada
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">
              El precio final depende de la complejidad del proyecto.
              <br />
              Lo definimos en la llamada de diagnostico.
            </p>
          </div>
          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-sm font-medium text-gray-900">
              Soporte post-lanzamiento (opcional)
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Hosting, monitoreo, y soporte tecnico por{' '}
              <span className="font-medium text-gray-900">$200-300 USD/mes</span>
              . Tu te enfocas en vender, nosotros mantenemos todo funcionando.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

function FAQ() {
  const faqs = [
    {
      question: 'No se nada de tecnologia. ¿Puedo trabajar con ustedes?',
      answer:
        'Si, absolutamente. Nuestro proceso esta diseñado para fundadores no tecnicos. En la llamada de diagnostico traducimos tu vision de negocio a requerimientos tecnicos. Tu nos cuentas que problema resuelves y para quien, nosotros nos encargamos de como construirlo.',
    },
    {
      question: '¿Por que 2-3 semanas y no menos?',
      answer:
        'Porque un MVP bien construido necesita arquitectura solida. Podriamos entregar algo en 5 dias, pero seria codigo que tu futuro CTO tendria que reescribir. Preferimos tomarnos el tiempo para hacer las cosas bien desde el inicio.',
    },
    {
      question: '¿Y si necesito cambios despues del lanzamiento?',
      answer:
        'El codigo es tuyo. Puedes contratar a cualquier desarrollador para seguir construyendo, o podemos seguir trabajando juntos en nuevas funcionalidades. Con el plan de soporte mensual, tambien incluimos pequeños ajustes y mejoras.',
    },
    {
      question: '¿Que tecnologias usan?',
      answer:
        'Next.js para el frontend (React), FastAPI para el backend (Python), y PostgreSQL para la base de datos. Todo desplegado en Google Cloud. Son tecnologias modernas, bien documentadas, y con gran comunidad — facil encontrar desarrolladores cuando necesites escalar tu equipo.',
    },
    {
      question: '¿Como se que van a entregar lo prometido?',
      answer:
        'Estructuramos el pago en hitos: un porcentaje al inicio, otro a mitad del desarrollo, y el resto a la entrega. Ademas, te mantenemos informado con updates semanales del progreso. Si algo no te convence, lo hablamos y ajustamos.',
    },
    {
      question: '¿El codigo es realmente mio?',
      answer:
        'Si, 100%. Te entregamos acceso completo al repositorio en GitHub. No hay licencias raras ni dependencias propietarias. Cuando termina el proyecto, el codigo es completamente tuyo para hacer lo que quieras con el.',
    },
  ]

  return (
    <section
      id="faq"
      className="scroll-mt-16 border-t border-gray-200 bg-gray-50 py-16 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Preguntas frecuentes
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
    <section id="contacto" className="scroll-mt-16 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Empecemos
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Agenda tu llamada de diagnostico
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            30 minutos. Sin compromiso. Definimos juntos las funcionalidades de
            tu MVP y te damos un presupuesto exacto.
          </p>
          <div className="mt-10">
            <Link
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-emerald-700"
            >
              <Calendar className="size-5" />
              Agendar ahora
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            ¿Prefieres escribir primero?{' '}
            <a
              href="mailto:hola@lanzatu.app"
              className="font-medium text-gray-900 underline underline-offset-4"
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
    <div className="bg-white">
      <Container>
        <LanzatuNavbar />
      </Container>
      <main>
        <Hero />
        <TrustBadges />
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
