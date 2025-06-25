import { useLayoutEffect, useRef } from 'react'
import './App.css'

import relogioPretoImg from './assets/relogio-preto.svg'
import relogioRoseImg from './assets/relogio-rose.svg'
import relogioUltraImg from './assets/relogio-ultra.svg'
import relogio2 from './assets/relogio2.svg'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Button from './components/Button/Button'

function App() {
  const element = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<GSAPTimeline | null>(null);

  // Section 1
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".relogio", {
      x: 0,
      opacity: 1,
      rotate: "0deg",
      scrollTrigger: {
        trigger: ".items",
        // markers: true,
        start: "top 80%",
        end: "bottom 70%",
        scrub: true
      }
    });

    // Boa prática: sempre que o componente for "desmontado", é retirado o plugin
    return () => {
      gsap.killTweensOf(".relogio");
    }
  }, [])

  //Section 2
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx: gsap.Context = gsap.context(() => {
      timeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".models-item",
          scrub: true,
          // markers: true,
          start: "top 90%",
          end: "bottom 70%"
        }
      })
        .fromTo("#model-1", { opacity: 0, y: 160 }, { opacity: 1, y: 0 })
        .fromTo("#model-2", { opacity: 0, y: 160 }, { opacity: 1, y: 0 })
        .fromTo("#model-3", { opacity: 0, y: 160 }, { opacity: 1, y: 0 })

    }, element)

    return () => {
      ctx.revert(); // desvincula automaticamente todos os efeitos do GSAP dentro do contexto.
      // gsap.killTweensOf(".models-item");
    }
  }, [])

  return (
    <>
      <Header />

      <div className="container">
        <div className="area-model">
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className="mt-16 md:mt-32 w-full md:w-1/2 text-center md:text-left">
              <h2 className='text-2xl md:text-3xl font-bold text-center'>
                Adquira já o seu
              </h2>
              <p className="mt-4 ml-4 md:ml-10 text-zinc-900 text-base md:text-lg leading-relaxed px-4">
                Tenha tecnologia, praticidade e estilo no seu pulso. Com um Smartwatch moderno, você monitora sua saúde em tempo real, acompanha seus treinos, controla músicas, visualiza mensagens e recebe notificações importantes sem precisar tirar o celular do bolso. Ideal para o dia a dia corrido, ele une funcionalidade e design em um único dispositivo inteligente.
              </p>
            </div>

            <div className="mt-16 md:mt-32 w-full md:w-1/2 flex justify-center">
              <img
                src="/smart-watch-information.webp"
                alt="Smart Watch"
                className="max-w-[300px] md:max-w-[500px] h-auto object-contain rounded-md"
              />
            </div>
          </div>
        </div>

        <section className="items">
          <div className="mt-32 md:mt-0 items-content flex justify-center">
            <img className="relogio" src={relogio2} alt="Relogio AppleWatch" />
          </div>
        </section>

        <section className="models-container">
          <h2 className="text-2xl md:text-3xl font-bold text-center px-4">Qual é o Apple Watch ideal para você?</h2>

          <div className="flex flex-col md:flex-row items-center justify-between my-9 gap-8"
            ref={element}
          >
            <div className="models-item flex flex-col items-center text-center" id="model-1">
              <div className="h-[200px] md:h-[260px] flex items-center justify-center mb-4 w-full max-w-[200px] md:max-w-[300px]">
                <img
                  src={relogioPretoImg}
                  alt="Relogio Preto"
                  className="w-full max-w-[200px] md:max-w-[300px] mb-4"
                />
              </div>
              <span className="models-tag text-orange-600 font-semibold">Novo</span>
              <h4 className="models-title text-sm md:text-2xl font-semibold">Apple Watch Series 8</h4>
              <p className="models-description text-zinc-700 text-base">A partir de <strong>R$ 5.299</strong></p>

              <Button
                type="submit"
                className="mt-2 mb-16 ml-4 px-4 py-1 sm:px-3 sm:py-1 md:px-8 md:py-2 bg-orange-500 text-white rounded hover:bg-orange-700 duration-300"
              >
                COMPRAR
              </Button>
            </div>

            <div className="models-item flex flex-col items-center text-center" id="model-2">
              <div className="h-[200px] md:h-[260px] flex items-center justify-center mb-4 w-full max-w-[200px] md:max-w-[300px]">
                <img
                  src={relogioRoseImg}
                  alt="Relogio Rose"
                  className="w-full max-w-[200px] md:max-w-[300px] mb-4"
                />
              </div>
              <span className="models-tag text-orange-600 font-semibold">Novo</span>
              <h4 className="models-title text-xl md:text-2xl font-semibold">Apple Watch SE</h4>
              <p className="models-description text-zinc-700 text-base">A partir de <strong>R$ 3.399</strong></p>

              <Button
                type="submit"
                className="mt-2 mb-16 ml-4 px-4 py-1 sm:px-3 sm:py-1 md:px-8 md:py-2 bg-orange-500 text-white rounded hover:bg-orange-700 duration-300"
              >
                COMPRAR
              </Button>
            </div>

            <div className="models-item flex flex-col items-center text-center" id="model-3">
              <div className="h-[200px] md:h-[260px] flex items-center justify-center mb-4 w-full max-w-[200px] md:max-w-[300px]">
                <img
                  src={relogioUltraImg}
                  alt="Relogio Ultra"
                  className="w-full max-w-[200px] md:max-w-[300px] mb-4"
                />
              </div>
              <span className="models-tag text-orange-600 font-semibold">Novo</span>
              <h4 className="models-title text-xl md:text-2xl font-semibold">Apple Watch Ultra</h4>
              <p className="models-description text-zinc-700 text-base">A partir de <strong>R$ 10.299</strong></p>

              <Button
                type="submit"
                className="mt-2 mb-16 ml-4 px-4 py-1 sm:px-3 sm:py-1 md:px-8 md:py-2 bg-orange-500 text-white rounded hover:bg-orange-700 duration-300"
              >
                COMPRAR
              </Button>
            </div>
          </div>

        </section>

        <div className="area-model">
          <div className='flex flex-col md:flex-row justify-between items-center gap-8 px-4'>
            <div className="mt-16 md:mt-32 w-full md:w-1/2 flex justify-center">
              <img
                src="/about-us-image.webp"
                alt="Sobre Nós"
                className="max-w-[300px] md:max-w-[500px] h-auto object-contain rounded-md"
              />
            </div>
            <div className="mt-10 md:mt-32 w-full md:w-1/2 text-center md:text-left">
              <h2 className='text-2xl md:text-3xl font-bold text-center'>Sobre nós</h2>
              <p className="mt-4 ml-4 md:ml-10 text-zinc-900 text-base md:text-lg leading-relaxed">
                Somos uma equipe apaixonada por tecnologia e inovação, dedicada a oferecer produtos inteligentes que facilitam o seu dia a dia. Nosso compromisso é trazer soluções modernas, com qualidade e design, para conectar você ao futuro de forma simples e eficiente. Aqui, você encontra confiança, atendimento personalizado e uma experiência feita sob medida para suas necessidades.
              </p>
            </div>
          </div>
        </div>

        <div className="area-model">
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className="mt-52 md:mt-32 w-full md:w-1/2 flex justify-center">
              <img
                src="/contact-image.webp"
                alt="Contato"
                className="max-w-[300px] md:max-w-[500px] h-auto object-contain rounded-md"
              />
            </div>
            <div className="mt-4 md:mt-32 w-full md:w-1/2 text-center md:text-left">
              <h2 className='text-2xl md:text-3xl font-bold text-center'>Entre em contato com a gente!</h2>
              <p className="mt-4 ml-4 md:ml-10 text-zinc-900 text-base md:text-lg md:text-center leading-relaxed">
                suporte@gmail.com
              </p>
              <p className="mt-4 ml-4 md:ml-10 text-zinc-900 text-base md:text-lg md:text-center leading-relaxed">
                atendimento@gmail.com
              </p>
              <p className="mt-4 ml-4 md:ml-10 text-zinc-900 text-base md:text-lg md:text-center leading-relaxed">
                parcerias@gmail.com
              </p>
              <p className="mt-4 ml-4 md:ml-10 text-zinc-900 text-base md:text-lg md:text-center leading-relaxed">
                rh@gmail.com
              </p>
              <p className="mt-4 ml-4 md:ml-10 text-zinc-900 text-base md:text-lg md:text-center leading-relaxed">
                talentos@gmail.com
              </p>
              <p className="mt-4 ml-4 md:ml-10 text-zinc-900 text-base md:text-lg md:text-center leading-relaxed">
                (18) 11111-111
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
