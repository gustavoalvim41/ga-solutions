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
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 py-12 md:px-8">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-extrabold tracking-tight uppercase md:text-8xl md:leading-tight">
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Seu Cliente Tá
            </span>
            <span className="mt-3 block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Procurando Você
            </span>
            <span className="mt-3 block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl text-transparent md:text-6xl">
              no Google
            </span>
          </h1>

          <p className="mt-10 text-2xl font-light text-gray-300 md:text-3xl">
            A gente coloca ele direto no seu{" "}
            <span className="font-semibold text-blue-500">WhatsApp</span>
          </p>

          <div className="mt-14">
            <button className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-10 py-6 text-lg font-bold tracking-wide uppercase shadow-lg shadow-blue-500/30 transition-colors hover:from-blue-700 hover:to-blue-800">
              Quero Aparecer no Google
            </button>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Sem complicação • Sem enrolação • Direto ao ponto
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ArrowDown className="h-6 w-6 text-gray-600" />
        </div>
      </section>

      {/* Problema */}
      <section className="relative border-t border-neutral-800 px-4 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mt-6 text-4xl font-bold md:text-6xl">
              Você Tá Perdendo Cliente
              <span className="block text-red-400">Todo Dia</span>
            </h2>
          </div>

          <div className="space-y-12">
            <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12">
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <p className="text-xl md:text-2xl">
                  Cliente pesquisa{" "}
                  <span className="font-bold text-white">
                    instalação ar condicionado [sua cidade]
                  </span>
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="h-12 w-12 text-blue-500/30" />
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12">
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                  <span className="text-2xl font-bold text-blue-400">2</span>
                </div>
                <p className="text-xl md:text-2xl">
                  Ele vê{" "}
                  <span className="font-bold text-white">
                    3 anúncios no topo
                  </span>
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="h-12 w-12 text-red-500/30" />
            </div>

            <div className="rounded-3xl border border-red-900/50 bg-gradient-to-br from-red-950/30 to-neutral-950 p-8 shadow-lg shadow-red-500/10 md:p-12">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                  <span className="text-2xl font-bold text-red-400">3</span>
                </div>
                <p className="text-xl font-bold text-white md:text-2xl">
                  Se você não tá lá, ele liga{" "}
                  <span className="text-red-400">pro concorrente</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="relative border-t border-neutral-800 px-4 py-24 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <h2 className="mt-6 text-4xl font-bold md:text-6xl">
              Como Funciona
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8">
              <div className="absolute -top-4 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/50">
                <Search className="h-6 w-6" />
              </div>
              <div className="mt-8 text-center">
                <h3 className="mb-4 text-2xl font-bold">Aparecer</h3>
                <p className="text-gray-400">
                  Seu anúncio no topo do Google quando alguém procurar seu
                  serviço na sua região
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8">
              <div className="absolute -top-4 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/50">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="mt-8 text-center">
                <h3 className="mb-4 text-2xl font-bold">Conectar</h3>
                <p className="text-gray-400">
                  Cliente clica e vai direto pro seu WhatsApp. Sem enrolação,
                  sem perder tempo.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8">
              <div className="absolute -top-4 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/50">
                <Zap className="h-6 w-6" />
              </div>
              <div className="mt-8 text-center">
                <h3 className="mb-4 text-2xl font-bold">Fechar</h3>
                <p className="text-gray-400">
                  Você responde rápido, tira as dúvidas e fecha o serviço.
                  Simples assim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem */}
      <section className="border-t border-neutral-800 px-4 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-6xl">
              Funciona Pra Você?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/30 to-neutral-950 p-8 shadow-lg shadow-blue-500/10 md:p-10">
              <div className="mb-8 flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-blue-400" />
                <h3 className="text-3xl font-bold text-blue-400">
                  Sim, se você:
                </h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Serviços urgentes (encanador, eletricista, chaveiro)",
                  "Reparos e manutenção residencial",
                  "Desentupimento e hidráulica",
                  "Serviços de segurança",
                  "Atendimento local",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                      <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-red-500/30 bg-gradient-to-br from-red-950/30 to-neutral-950 p-8 shadow-lg shadow-red-500/10 md:p-10">
              <div className="mb-8 flex items-center gap-3">
                <XCircle className="h-8 w-8 text-red-400" />
                <h3 className="text-3xl font-bold text-red-400">
                  Não é pra você se:
                </h3>
              </div>
              <ul className="space-y-5">
                {[
                  'Quer resultado "milagroso" em 3 dias',
                  "Não tem WhatsApp profissional",
                  "Demora pra responder cliente",
                  "Quer gastar R$ 50 e esperar 100 clientes",
                  "Não tá disposto a investir pra crescer",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                      <div className="h-2 w-2 rounded-full bg-red-400"></div>
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section className="border-t border-neutral-800 px-4 py-24 md:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mt-6 text-4xl font-bold md:text-6xl">
              Quanto Custa
            </h2>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 shadow-2xl md:p-12">
            <div className="space-y-8">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-lg font-semibold text-gray-300">
                      Setup inicial
                    </span>
                    <p className="mt-2 text-sm text-gray-500">
                      Configuração completa dos anúncios
                    </p>
                  </div>
                  <span className="text-4xl font-bold text-white">R$ 800</span>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-lg font-semibold text-gray-300">
                      Mensalidade
                    </span>
                    <p className="mt-2 text-sm text-gray-500">
                      Gestão e otimização contínua
                    </p>
                  </div>
                  <span className="text-4xl font-bold text-white">R$ 600</span>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-lg font-semibold text-gray-300">
                      Anúncios (Google)
                    </span>
                    <p className="mt-2 text-sm text-gray-500">
                      Recomendamos R$ 20-30/dia
                    </p>
                  </div>
                  <span className="text-2xl font-semibold text-gray-400">
                    Você define
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-blue-900/10 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                  <ShieldCheck className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-xl font-bold text-blue-400">
                    Garantia de 30 dias
                  </p>
                  <p className="mt-3 leading-relaxed text-gray-300">
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
      <section className="border-t border-neutral-800 px-4 py-24 md:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-6xl">
              Perguntas Rápidas
            </h2>
          </div>

          <div className="space-y-6">
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
                className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8"
              >
                <h3 className="mb-4 text-xl font-bold text-white">{faq.q}</h3>
                <p className="leading-relaxed text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative border-t border-neutral-800 px-4 py-24 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-5xl font-bold md:text-7xl">Vamos Testar?</h2>

          <p className="mb-14 text-2xl text-gray-300">
            Sem enrolação. Vamos conversar sobre o seu negócio e ver se faz
            sentido.
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-12 py-7 text-xl font-bold tracking-wide uppercase shadow-lg shadow-blue-500/30 transition-colors hover:from-blue-700 hover:to-blue-800"
          >
            Chamar no WhatsApp
          </button>

          <p className="mt-8 text-sm text-gray-500">
            Resposta em até 1 hora • Horário comercial
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-4 py-12 text-center">
        <p className="text-lg font-semibold text-gray-400">
          GA Solutions © 2026
        </p>
        <p className="mt-2 text-gray-600">
          Anúncios no Google que trazem clientes pro seu WhatsApp
        </p>
      </footer>
    </div>
  );
}
