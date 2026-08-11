import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Smartphone, 
  Globe, 
  Instagram, 
  Github, 
  Linkedin,
  Phone, 
  Mail, 
  ExternalLink, 
  Sparkles, 
  PlayCircle, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Zap,
  Coffee,
  MessageSquare,
  Send,
  Loader2
} from "lucide-react";
import { toast } from "sonner";

export default function Home() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error("Por favor, preencha todos os campos do formulário.");
      return;
    }

    setSubmitState('loading');
    window.setTimeout(() => {
      setSubmitState('success');
      toast.success("Mensagem enviada com sucesso! Entrarei em contacto em breve.");
      setContactForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  const projects = [
    {
      title: "Cantina Online DDF",
      category: "Projeto académico",
      description: "Projeto desenvolvido no percurso técnico, pensado para organizar uma experiência digital de cantina e aproximar tecnologia das necessidades do dia a dia.",
      tags: ["Lógica de programação", "Desenvolvimento web", "Projeto académico"],
      metrics: "Percurso académico",
      imageBg: "from-blue-900/40 to-indigo-950/60"
    },
    {
      title: "RegistAgro",
      category: "Solução digital",
      description: "Uma das soluções criadas ao longo da formação em informática, demonstrando interesse em aplicar software a contextos concretos e úteis.",
      tags: ["Análise de requisitos", "Bases de dados", "Projeto académico"],
      metrics: "Projeto listado no currículo",
      imageBg: "from-emerald-950/50 to-blue-950/60"
    },
    {
      title: "Calculadora de IMC",
      category: "Mobile / Flutter",
      description: "Aplicação de cálculo de índice de massa corporal desenvolvida para praticar construção de interfaces e lógica em Flutter.",
      tags: ["Flutter", "Mobile", "Lógica de programação"],
      metrics: "Projeto académico",
      imageBg: "from-indigo-950/40 to-slate-900/60"
    }
  ];

  const reelsStrategies = [
    {
      title: "Otimização de Workflow no VS Code",
      category: "Produtividade",
      hook: "Se usas o VS Code e não tens estas 3 extensões, estás a perder tempo.",
      type: "Carrossel & Reels",
      impact: "Alto salvamento e partilha"
    },
    {
      title: "Expectativa vs. Realidade: Debugging",
      category: "Storytelling & Humor",
      hook: "O que acho que vai demorar 5 minutos vs. 3 horas de debugging.",
      type: "Reels Dinâmico",
      impact: "Elevada identificação e alcance"
    },
    {
      title: "Como a IA acelera o meu código",
      category: "Tecnologia & IA",
      hook: "Parei de escrever código repetitivo à mão. Vê como uso IA no dia a dia.",
      type: "Time-lapse Técnico",
      impact: "Autoridade e inovação"
    },
    {
      title: "Dica Técnica Relâmpago",
      category: "Educação",
      hook: "Sabias que podes resolver este problema comum com apenas uma linha?",
      type: "Tutorial 45s",
      impact: "Retenção e novos seguidores"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
        <div className="container max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/20">
              EC
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
                Euclénio Cadete
              </span>
              <span className="block text-xs text-blue-400 font-medium">Software Engineer & Creator</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#competencias" className="hover:text-blue-400 transition-colors">Competências</a>
            <a href="#projetos" className="hover:text-blue-400 transition-colors">Projetos</a>
            <a href="#estrategia" className="hover:text-blue-400 transition-colors">Estratégia & Conteúdo</a>
            <a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/_euclenio_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all"
            >
              <Instagram className="w-4 h-4 text-pink-500" />
              <span>@_euclenio_</span>
            </a>
            <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 rounded-xl font-semibold">
              <a href="#contacto">Falar Comigo</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 border-b border-slate-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))] pointer-events-none" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Software Developer & Digital Creator</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Construção de <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 bg-clip-text text-transparent">Software de Alta Performance</span> e Impacto Real.
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                Olá, sou o <strong className="text-white">Euclénio Cadete</strong>, Desenvolvedor de Software Júnior com foco em backend. Desenvolvo soluções técnicas com atenção à qualidade, ao cliente e à colaboração em equipa, enquanto partilho conhecimento prático sobre tecnologia.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-8 shadow-xl shadow-blue-600/30">
                  <a href="#projetos">Ver Projetos <ArrowRight className="w-4 h-4 ml-2" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-200 rounded-xl px-8">
                  <a href="#estrategia"><Instagram className="w-4 h-4 mr-2 text-pink-500" /> Explorar Conteúdo</a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80 max-w-lg">
                <div>
                  <div className="text-2xl font-bold text-white">642+</div>
                  <div className="text-xs text-slate-400">Seguidores no IG</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-xs text-slate-400">Projetos académicos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">14</div>
                  <div className="text-xs text-slate-400">Média de formação</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-30 blur-2xl" />
                <Card className="relative bg-slate-900/90 border-slate-800 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-xl">
                  <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">euclenio.config.ts</span>
                  </div>
                  <CardContent className="p-6 font-mono text-xs sm:text-sm text-slate-300 space-y-3">
                    <p className="text-blue-400">// Perfil Profissional</p>
                    <p><span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = &#123;</p>
                    <p className="pl-4">name: <span className="text-green-300">"Euclénio Cadete"</span>,</p>
                    <p className="pl-4">role: <span className="text-green-300">"Software Engineer"</span>,</p>
                    <p className="pl-4">focus: [<span className="text-green-300">"Fullstack"</span>, <span className="text-green-300">"Cloud"</span>, <span className="text-green-300">"AI Integration"</span>],</p>
                    <p className="pl-4">creator: <span className="text-blue-300">true</span>,</p>
                    <p className="pl-4">status: <span className="text-green-300">"Pronto para novos desafios"</span></p>
                    <p>&#125;;</p>
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                      <span>_euclenio_</span>
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Online
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-slate-900/40">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-semibold">
                <Code2 className="w-4 h-4" /> Sobre Mim
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Engenharia rigorosa unida à partilha de conhecimento.
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Sou Desenvolvedor de Software Júnior com foco em desenvolvimento backend. Durante um estágio de seis meses na Kudika Digital, trabalhei no desenvolvimento e manutenção de APIs e serviços backend, implementei regras de negócio e integrações entre sistemas, apoiei a correção de bugs e participei em testes e validações técnicas.
              </p>
              <p className="text-slate-300 leading-relaxed">
                A minha formação como Técnico de Informática no Instituto Politécnico Dom Damião Franklin, concluída em 2026 com média de 14 valores, reforçou uma postura autodidata, disciplinada e orientada para resolver problemas reais. No Instagram (<strong className="text-white">@_euclenio_</strong>), transformo essa aprendizagem em conteúdo acessível para a comunidade.
              </p>
              <div className="flex gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> Clean Code
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> Escalabilidade
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> UI/UX Moderno
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <Card className="bg-slate-900/80 border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center mb-4">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Experiência Backend</h3>
                <p className="text-sm text-slate-400">
                  Experiência de estágio na Kudika Digital com APIs, serviços backend, regras de negócio, integrações entre sistemas, testes e correção de bugs.
                </p>
              </Card>

              <Card className="bg-slate-900/80 border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-pink-600/10 text-pink-400 flex items-center justify-center mb-4">
                  <Instagram className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Formação Técnica</h3>
                <p className="text-sm text-slate-400">
                  Técnico de Informática pelo Instituto Politécnico Dom Damião Franklin, com base em lógica, programação, bases de dados e desenvolvimento de soluções.
                </p>
              </Card>

              <Card className="bg-slate-900/80 border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-400 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Projetos & Competições</h3>
                <p className="text-sm text-slate-400">
                  Participação em feiras científicas, na Maratona de Programação do ITEL e na criação e exposição de soluções digitais académicas.
                </p>
              </Card>

              <Card className="bg-slate-900/80 border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-400 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Perfil Humano</h3>
                <p className="text-sm text-slate-400">
                  Pessoa motivada, disciplinada e colaborativa, com alegria em ajudar os outros e interesse contínuo por tecnologia, programação e voluntariado.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competencias" className="py-24 border-t border-slate-800/80">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Stack Tecnológico</h2>
            <p className="text-slate-400">
              As ferramentas e tecnologias que utilizo diariamente para dar vida a produtos digitais robustos e eficientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/60 border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" /> Frontend & Web
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="bg-slate-900/60 border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-indigo-400" /> Backend & Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "Python", "REST APIs", "GraphQL", "Docker", "Supabase", "Git/GitHub"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="bg-slate-900/60 border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-400" /> Content & Creator
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Instagram Reels", "Carrosséis Técnicos", "Copywriting Tech", "Edição de Vídeo", "Estratégia de Audiência", "Comunidade"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-24 bg-slate-900/40 border-t border-slate-800/80">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Projetos em Destaque</h2>
              <p className="text-slate-400 max-w-xl">
                Soluções desenvolvidas com foco na experiência do utilizador, arquitetura limpa e alta performance.
              </p>
            </div>
            <Button asChild variant="outline" className="border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-xl">
              <a href="https://github.com/eucleniocadete" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" /> Ver GitHub
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="bg-slate-900/80 border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-blue-500/50 transition-all group">
                <div>
                  <div className={`h-48 bg-gradient-to-br ${project.imageBg} p-6 flex flex-col justify-between relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                    <div className="flex justify-between items-start relative z-10">
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{project.metrics}</span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-medium text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>
                <CardFooter className="px-6 pb-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Projetos de Euclénio</span>
                  <Button asChild variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 h-auto font-semibold">
                    <a href="https://github.com/eucleniocadete" target="_blank" rel="noopener noreferrer">
                      Ver GitHub <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Strategy / Reels Section */}
      <section id="estrategia" className="py-24 border-t border-slate-800/80">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pink-500/10 text-pink-400 text-xs font-semibold">
              <Instagram className="w-4 h-4" /> Estratégia de Conteúdo
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Conteúdos & Reels em Destaque</h2>
            <p className="text-slate-400">
              A estratégia de comunicação digital desenvolvida para o Instagram <strong className="text-white">@_euclenio_</strong>, focada em utilidade, humor e autoridade técnica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reelsStrategies.map((item, idx) => (
              <Card key={idx} className="bg-slate-900/60 border-slate-800 rounded-2xl p-6 hover:border-pink-500/40 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-medium border border-pink-500/20">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{item.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300">
                    <span className="text-pink-400 font-bold">Hook:</span> "{item.hook}"
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Objetivo:</span>
                  <span className="text-blue-400 font-semibold">{item.impact}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold rounded-xl px-8 shadow-xl shadow-pink-600/20">
              <a href="https://instagram.com/_euclenio_" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 mr-2" /> Seguir @_euclenio_ no Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-slate-900/40 border-t border-slate-800/80">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-semibold">
                <Mail className="w-4 h-4" /> Vamos Conversar
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Pronto para iniciar o próximo grande projeto?
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Estou sempre aberto a novos desafios de engenharia de software, colaborações em projetos ou troca de ideias sobre tecnologia. Envie uma mensagem!
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Email Direto</span>
                    <a href="mailto:eucleniocadete@gmail.com" className="font-medium text-white hover:text-blue-400 transition-colors">eucleniocadete@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Telefone</span>
                    <a href="tel:945282557" className="font-medium text-white hover:text-blue-400 transition-colors">945282557</a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-pink-400">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Instagram</span>
                    <a href="https://instagram.com/_euclenio_" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:text-pink-400 transition-colors">@_euclenio_</a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">LinkedIn</span>
                    <a href="https://www.linkedin.com/in/eucl%C3%A9nio-cadete-560471278/" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:text-sky-400 transition-colors">Euclénio Cadete</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
                <img
                  src="/manus-storage/euclenio-whatsapp-contact_4a35dd9a.png"
                  alt="Euclénio Cadete com chamada de contacto por WhatsApp"
                  className="block w-full max-h-[620px] object-cover object-top"
                />
              </div>
              <Card className="bg-slate-900/90 border-slate-800 rounded-3xl p-8 shadow-2xl">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">O seu nome</label>
                    <input 
                      type="text" 
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      placeholder="Ex: Ana Silva"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">O seu email</label>
                    <input 
                      type="email" 
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      placeholder="Ex: ana@exemplo.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">A sua mensagem</label>
                    <textarea 
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Descreva o seu projeto ou ideia..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all text-sm resize-none"
                    />
                  </div>

                  {submitState === 'success' && (
                    <div className="flex items-start gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4 text-sm text-emerald-300" role="status" aria-live="polite">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      <div>
                        <p className="font-semibold text-emerald-200">Mensagem preparada com sucesso.</p>
                        <p className="mt-1 text-emerald-300/80">Obrigado pelo contacto. Entrarei em contacto assim que possível.</p>
                      </div>
                    </div>
                  )}
                  <Button type="submit" disabled={submitState === 'loading'} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/30 transition-all">
                    {submitState === 'loading' ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> A enviar mensagem...</>
                    ) : submitState === 'success' ? (
                      <><CheckCircle2 className="w-4 h-4 mr-2" /> Enviado com sucesso</>
                    ) : (
                      <><Send className="w-4 h-4 mr-2" /> Enviar Mensagem</>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/244945282557?text=Olá%20Euclénio%2C%20encontrei%20o%20teu%20portfólio%20e%20gostaria%20de%20falar%20contigo."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Euclénio pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500 px-4 py-3 text-sm font-bold text-white shadow-2xl shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-1 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-95"
      >
        <MessageSquare className="h-5 w-5" />
        <span className="hidden sm:inline">Falar no WhatsApp</span>
      </a>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800/80 bg-slate-950 text-slate-400 text-sm">
        <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
              EC
            </div>
            <span className="font-bold text-white">Euclénio Cadete</span>
            <span className="text-slate-600">© 2026. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://instagram.com/_euclenio_" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://github.com/eucleniocadete" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:eucleniocadete@gmail.com" className="hover:text-blue-400 transition-colors" aria-label="Enviar email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/eucl%C3%A9nio-cadete-560471278/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label="Abrir LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
