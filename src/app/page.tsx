// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Camera, LineChart, FileText, Building, LayoutTemplate, ShieldAlert, ChevronRight } from 'lucide-react';
import { LeadForm } from '@/components/LeadForm';
import { LogoBloco } from '@/components/LogoBloco';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-white">

      {/* 1. Cabeçalho (Header) - Atua como a viga superior do pórtico */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <LogoBloco href={'/'} theme={'light'} />
          </div>
          <nav className="hidden md:flex gap-8 items-center font-medium text-sm">
            <Link href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </Link>
            <Link
              href="https://costamarinhoengenharia.grupocazua.com.br"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              Área do Cliente
              <ChevronRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* 2. Primeira Dobra (Hero Section) - Divisão estrutural estrita 50/50 */}
        <section className="relative w-full bg-white border-b border-border">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2">

            {/* Coluna de Texto (Pilar Esquerdo) */}
            <div className="px-4 py-24 md:pr-12 lg:pr-24 flex flex-col justify-center space-y-8 border-r border-transparent md:border-border">
              <div className="space-y-4">
                <div className="h-1 w-12 bg-primary mb-6" /> {/* Elemento de tração visual */}
                <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight tracking-tight">
                  Engenharia e Construção com Rigor Técnico.
                </h1>
                <p className="text-lg text-muted-foreground font-normal leading-relaxed">
                  Projetos estruturais, investigações patológicas e execução de obras. Monitoramento em tempo real do avanço físico-financeiro via ecossistema Cazuá.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#contato"
                  className="bg-primary text-primary-foreground px-6 py-3.5 rounded-sm font-semibold text-center hover:bg-primary/90 transition-colors"
                >
                  Solicitar Avaliação Técnica
                </Link>
                <Link
                  href="#cazua"
                  className="border border-border text-foreground px-6 py-3.5 rounded-sm font-semibold text-center hover:bg-secondary transition-colors"
                >
                  Especificações do Sistema
                </Link>
              </div>
            </div>

            {/* Coluna de Imagem (Pilar Direito) */}
            <div className="relative h-[400px] md:h-auto w-full bg-secondary">
              <Image
                src="/assets/hero-obra.webp"
                alt="Execução de obra gerenciada pela Costa Marinho"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority 
                className="object-cover grayscale-[20%] contrast-125 mix-blend-multiply"
              />
              {/* Overlay técnico geométrico */}
              <div className="absolute inset-0 border-[16px] border-white/10 pointer-events-none" />
            </div>

          </div>
        </section>

        {/* 3. O Diferencial Tecnológico (Seção Cazuá) */}
        <section id="cazua" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12 items-center">

            <div className="md:col-span-5 order-2 md:order-1 relative h-[600px] w-full bg-card rounded-sm border border-border flex items-center justify-center p-8 shadow-sm">
              <Image
                src="/assets/template-cazua.webp"
                alt="Interface do Sistema Cazuá"
                fill
                className="object-contain p-4"
              />
            </div>

            <div className="md:col-span-7 order-1 md:order-2 space-y-8 lg:pl-12">
              <h2 className="text-3xl font-bold text-primary flex items-center gap-4">
                <span className="w-8 h-1 bg-primary hidden sm:block"></span>
                Transparência e Controle de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A Costa Marinho Engenharia opera sob infraestrutura tecnológica própria. O SaaS Cazuá garante acesso ininterrupto aos parâmetros da sua obra:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="border border-border p-6 rounded-sm bg-card hover:border-primary/50 transition-colors">
                  <Camera className="w-6 h-6 text-primary mb-4" />
                  <strong className="block text-foreground mb-2">Diário de Obra Digital</strong>
                  <span className="text-muted-foreground text-sm block">Relatórios fotográficos e registro descritivo de atividades executadas in loco.</span>
                </div>
                <div className="border border-border p-6 rounded-sm bg-card hover:border-primary/50 transition-colors">
                  <LineChart className="w-6 h-6 text-primary mb-4" />
                  <strong className="block text-foreground mb-2">Avanço Físico-Financeiro</strong>
                  <span className="text-muted-foreground text-sm block">Acompanhamento de curva S, equalizando cronograma planejado e realizado.</span>
                </div>
                <div className="border border-border p-6 rounded-sm bg-card hover:border-primary/50 transition-colors sm:col-span-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="p-3 bg-secondary rounded-sm">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-foreground">Gestão de Documentos e Projetos</strong>
                    <span className="text-muted-foreground text-sm">Repositório centralizado para laudos, projetos básicos, executivos e ARTs.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Linha de Serviços - Blocos Estruturais */}
        <section id="servicos" className="py-24 bg-secondary border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16 border-l-4 border-primary pl-6">
              <h2 className="text-3xl font-bold text-primary">Escopo de Atuação Técnica</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">Soluções de engenharia civil pautadas em normativas vigentes e precisão estrutural.</p>
            </div>

            {/* Grid imitando malha estrutural */}
            <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
              <div className="p-10 bg-card hover:bg-background transition-colors flex flex-col h-full">
                <Building className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Execução e Gerenciamento</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                  Construção operada sob matriz de fiscalização rigorosa. Aplicamos parâmetros de controle de qualidade e gestão de suprimentos para garantir o cumprimento de baseline em projetos corporativos e residenciais de alto padrão.
                </p>
              </div>
              <div className="p-10 bg-card hover:bg-background transition-colors flex flex-col h-full">
                <LayoutTemplate className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Projetos Estruturais</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                  Dimensionamento de estruturas em concreto armado e fundações. Foco irrestrito em segurança normativa (ABNT NBR 6118) aliado à otimização quantitativa de aço e concreto para viabilidade econômica.
                </p>
              </div>
              <div className="p-10 bg-card hover:bg-background transition-colors flex flex-col h-full">
                <ShieldAlert className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Engenharia Diagnóstica</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                  Investigação patológica, emissão de laudos periciais e diagnóstico de falhas construtivas. Especificação técnica de reforços estruturais e soluções definitivas para anomalias em edificações.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Autoridade e Experiência Técnica - Fundação (Bloco Sólido) */}
        <section className="py-24 bg-primary text-primary-foreground border-b-8 border-primary-foreground/10">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl font-bold font-heading">Protocolos de Fiscalização aplicados à Iniciativa Privada.</h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed font-sans">
              Operamos com a expertise adquirida na coordenação e fiscalização de obras de alta complexidade. A Costa Marinho Engenharia implementa matrizes de risco, planejamento estratégico e rastreabilidade documental ponta a ponta, assegurando integridade e conformidade ao investimento.
            </p>
          </div>
        </section>
      </main>

      {/* 6. Rodapé (Footer) e Captura */}
      <footer id="contato" className="bg-foreground py-16 text-background">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            {/* O LogoBloco já possui tratamento para dark theme caso configurado via props */}
            <LogoBloco href={'/'} theme={'dark'} className="w-48" />
            <div className="grid grid-cols-2 gap-4 text-sm text-muted">
              <div>
                <strong className="block text-background mb-1">Registro CREA</strong>
                <span>MG-000000</span>
              </div>
              <div>
                <strong className="block text-background mb-1">CNPJ</strong>
                <span>00.000.000/0000-00</span>
              </div>
              <div className="col-span-2">
                <strong className="block text-background mb-1">Endereço</strong>
                <span>Conselheiro Lafaiete, MG</span>
              </div>
              <div className="col-span-2">
                <strong className="block text-background mb-1">Contato Técnico</strong>
                <span>contato@costamarinho.com.br</span>
              </div>
            </div>
          </div>

          <div className="bg-background text-foreground p-8 rounded-sm shadow-lg border-t-4 border-primary">
            <h3 className="text-xl font-bold text-primary mb-6">Iniciar Especificação Técnica</h3>
            <LeadForm />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-muted-foreground/30 flex flex-col md:flex-row justify-between items-center text-xs text-muted">
          <p>© {new Date().getFullYear()} Costa Marinho Engenharia. Todos os direitos reservados.</p>
          <p>Operado pelo Sistema Cazuá.</p>
        </div>
      </footer>
    </div>
  );
}