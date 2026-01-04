"use client";

import React from "react";
import {
  MessageCircle,
  Search,
  Zap,
  ShieldCheck,
  ArrowDown,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function GASolutionsLanding() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+5517976001584";
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre os serviços de anúncios no Google.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      {/* Hero Section */}
      <section className="relative flex h-[90dvh] flex-col justify-center overflow-hidden px-4 py-12 md:px-8">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight uppercase sm:text-5xl md:text-8xl md:leading-tight">
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Seu Cliente Tá
            </span>
            <span className="mt-2 block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent sm:mt-3">
              Procurando Você
            </span>
            <span className="mt-2 block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl text-transparent sm:mt-3 sm:text-4xl md:text-6xl">
              no Google
            </span>
          </h1>

          <p className="mt-6 text-lg font-light text-gray-300 sm:mt-10 sm:text-2xl md:text-3xl">
            A gente coloca ele direto no seu{" "}
            <span className="font-semibold text-blue-500">WhatsApp</span>
          </p>

          <div className="mt-8 sm:mt-14">
            <button className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-base font-bold tracking-wide uppercase shadow-lg shadow-blue-500/30 transition-colors hover:from-blue-700 hover:to-blue-800 sm:gap-3 sm:px-10 sm:py-6 sm:text-lg">
              Quero Aparecer no Google
            </button>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Sem enrolação • Direto ao ponto
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ArrowDown className="h-6 w-6 text-gray-600" />
        </div>
      </section>

      {/* Problema */}
      <section className="relative px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:mt-6 md:text-6xl">
              Você Tá Perdendo Cliente
              <span className="block text-red-400">Todo Dia</span>
            </h2>
          </div>

          <div className="space-y-8 sm:space-y-12">
            <div className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-5 sm:rounded-3xl sm:p-8 md:p-12">
              <div className="flex items-center gap-3 text-gray-400 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 sm:h-12 sm:w-12">
                  <span className="text-xl font-bold text-blue-400 sm:text-2xl">
                    1
                  </span>
                </div>
                <p className="text-base sm:text-xl md:text-2xl">
                  Cliente pesquisa{" "}
                  <span className="font-bold text-white">
                    seu serviço no Google + cidade
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <ArrowDown className="h-8 w-8 text-blue-500/30 sm:h-12 sm:w-12" />
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-5 sm:rounded-3xl sm:p-8 md:p-12">
              <div className="flex items-center gap-3 text-gray-400 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 sm:h-12 sm:w-12">
                  <span className="text-xl font-bold text-blue-400 sm:text-2xl">
                    2
                  </span>
                </div>
                <p className="text-base sm:text-xl md:text-2xl">
                  Ele vê{" "}
                  <span className="font-bold text-white">
                    3 anúncios no topo
                  </span>
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="h-8 w-8 text-red-500/30 sm:h-12 sm:w-12" />
            </div>

            <div className="rounded-2xl border border-red-900/50 bg-gradient-to-br from-red-950/30 to-neutral-950 p-5 shadow-lg shadow-red-500/10 sm:rounded-3xl sm:p-8 md:p-12">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:h-12 sm:w-12">
                  <span className="text-xl font-bold text-red-400 sm:text-2xl">
                    3
                  </span>
                </div>
                <p className="text-base font-bold text-white sm:text-xl md:text-2xl">
                  Se você não tá lá, ele liga{" "}
                  <span className="text-red-400">pro concorrente</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="relative border-t border-neutral-800 px-4 py-16 md:px-8 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-20">
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:mt-6 md:text-6xl">
              Como Funciona
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="relative rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:rounded-3xl sm:p-8">
              <div className="absolute -top-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 sm:h-12 sm:w-12">
                <Search className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="mt-6 text-center sm:mt-8">
                <h3 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">
                  Aparecer
                </h3>
                <p className="text-sm text-gray-400 sm:text-base">
                  Seu anúncio no topo do Google quando alguém procurar seu
                  serviço na sua região
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:rounded-3xl sm:p-8">
              <div className="absolute -top-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 sm:h-12 sm:w-12">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="mt-6 text-center sm:mt-8">
                <h3 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">
                  Conectar
                </h3>
                <p className="text-sm text-gray-400 sm:text-base">
                  Cliente clica e vai direto pro seu WhatsApp. Sem enrolação,
                  sem perder tempo.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:rounded-3xl sm:p-8">
              <div className="absolute -top-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 sm:h-12 sm:w-12">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="mt-6 text-center sm:mt-8">
                <h3 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">
                  Fechar
                </h3>
                <p className="text-sm text-gray-400 sm:text-base">
                  Você responde rápido, tira as dúvidas e fecha o serviço.
                  Simples assim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem */}
      <section className="border-t border-neutral-800 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
              Funciona Pra Você?
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/30 to-neutral-950 p-6 shadow-lg shadow-blue-500/10 sm:rounded-3xl sm:p-8 md:p-10">
              <div className="mb-6 flex items-center gap-2 sm:mb-8 sm:gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-400 sm:h-8 sm:w-8" />
                <h3 className="text-2xl font-bold text-blue-400 sm:text-3xl">
                  Sim, se você:
                </h3>
              </div>
              <ul className="space-y-4 sm:space-y-5">
                {[
                  "Usa WhatsApp para fechar serviços",
                  "Presta serviços urgentes",
                  "Faz reparos e manutenção",
                  "Trabalha com instalação ou assistência técnica",
                  "Atende em uma cidade ou região específica",
                  "Quer mais clientes sem depender de indicação",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-300 sm:gap-3"
                  >
                    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/20 sm:h-5 sm:w-5">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-400 sm:h-2 sm:w-2"></div>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-950/30 to-neutral-950 p-6 shadow-lg shadow-red-500/10 sm:rounded-3xl sm:p-8 md:p-10">
              <div className="mb-6 flex items-center gap-2 sm:mb-8 sm:gap-3">
                <XCircle className="h-6 w-6 text-red-400 sm:h-8 sm:w-8" />
                <h3 className="text-2xl font-bold text-red-400 sm:text-3xl">
                  Não é pra você se:
                </h3>
              </div>
              <ul className="space-y-4 sm:space-y-5">
                {[
                  'Quer resultado "milagroso" em 3 dias',
                  "Não tem WhatsApp profissional",
                  "Demora pra responder cliente",
                  "Quer gastar R$ 50 e esperar 100 clientes",
                  "Não tá disposto a investir pra crescer",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-300 sm:gap-3"
                  >
                    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500/20 sm:h-5 sm:w-5">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-400 sm:h-2 sm:w-2"></div>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section className="border-t border-neutral-800 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:mt-6 md:text-6xl">
              Quanto Custa
            </h2>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-5 shadow-2xl sm:rounded-3xl sm:p-8 md:p-12">
            <div className="space-y-5 sm:space-y-8">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 sm:rounded-2xl sm:p-6">
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-baseline">
                  <div>
                    <span className="text-base font-semibold text-gray-300 sm:text-lg">
                      Setup inicial
                    </span>
                    <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                      Configuração completa dos anúncios
                    </p>
                  </div>
                  <span className="text-3xl font-bold text-white sm:text-4xl">
                    R$ 800
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 sm:rounded-2xl sm:p-6">
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-baseline">
                  <div>
                    <span className="text-base font-semibold text-gray-300 sm:text-lg">
                      Mensalidade
                    </span>
                    <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                      Gestão e otimização contínua
                    </p>
                  </div>
                  <span className="text-3xl font-bold text-white sm:text-4xl">
                    R$ 600
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 sm:rounded-2xl sm:p-6">
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-baseline">
                  <div>
                    <span className="text-base font-semibold text-gray-300 sm:text-lg">
                      Anúncios (Google)
                    </span>
                    <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                      Recomendamos R$ 15/dia
                    </p>
                  </div>
                  <span className="text-xl font-semibold text-gray-400 sm:text-2xl">
                    Você define
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-blue-900/10 p-5 sm:mt-10 sm:rounded-2xl sm:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 sm:h-12 sm:w-12">
                  <ShieldCheck className="h-5 w-5 text-blue-400 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <p className="text-lg font-bold text-blue-400 sm:text-xl">
                    Garantia de 30 dias
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300 sm:mt-3 sm:text-base">
                    Se não gerar conversas de qualidade no WhatsApp, a gente
                    ajusta a estratégia ou você cancela. Sem burocracia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-neutral-800 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
              Perguntas Rápidas
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: "Preciso ter site?",
                a: "Não. A gente cria uma página simples que leva direto pro WhatsApp. Você não precisa de site cheio de frescura.",
              },
              {
                q: "Quantos clientes vou receber?",
                a: "Depende do seu investimento em anúncio, da concorrência e de como você atende. Não prometemos número mágico. Prometemos conversas de qualidade.",
              },
              {
                q: "Quanto tempo leva pra começar?",
                a: "3 a 5 dias úteis pra tudo ficar pronto. Depois disso, anúncio no ar e você começando a receber conversas.",
              },
              {
                q: "Funciona na minha cidade?",
                a: "Se tem gente procurando seu serviço no Google na sua região, funciona. Vamos validar isso antes de começar.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-5 sm:rounded-2xl sm:p-8"
              >
                <h3 className="mb-3 text-lg font-bold text-white sm:mb-4 sm:text-xl">
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative border-t border-neutral-800 px-4 py-16 md:px-8 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold sm:mb-8 sm:text-5xl md:text-7xl">
            Vamos Testar?
          </h2>

          <p className="mb-10 text-lg text-gray-300 sm:mb-14 sm:text-2xl">
            Sem enrolação. Vamos conversar sobre o seu negócio e ver se faz
            sentido.
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-5 text-base font-bold tracking-wide uppercase shadow-lg shadow-blue-500/30 transition-colors hover:from-blue-700 hover:to-blue-800 sm:gap-3 sm:px-12 sm:py-7 sm:text-xl"
          >
            Chamar no WhatsApp
          </button>

          <p className="mt-8 text-sm text-gray-500">
            Resposta em até 1 hora • Horário comercial
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-4 py-8 text-center sm:py-12">
        <p className="text-base font-semibold text-gray-400 sm:text-lg">
          GA Solutions © 2026
        </p>
        <p className="mt-2 text-gray-600">
          Anúncios no Google que trazem clientes pro seu WhatsApp
        </p>
      </footer>
    </div>
  );
}
