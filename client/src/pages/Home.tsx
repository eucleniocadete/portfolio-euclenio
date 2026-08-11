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
  Send
} from "lucide-react";
import { toast } from "sonner";

export default function Home() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error("Por favor, preencha todos os campos do formulário.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mensagem enviada com sucesso! Entrarei em contacto em breve.");
      setContactForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  const projects = [
    {
      title: "DevMetrics AI",
      category: "Fullstack / AI",
      description: "Plataforma inteligente para análise de performance de código e sugestões de refatoração automática com IA.",
      tags: ["React", "TypeScript", "Node.js", "OpenAI API"],
      metrics: "+40% produtividade",
      imageBg: "from-blue-900/40 to-indigo-950/60"
    },
    {
      title: "CloudScale Dashboard",
      category: "Cloud Architecture",
      description: "Painel de monitorização em tempo real para infraestruturas distribuídas com alertas preditivos.",
      tags: ["Next.js", "Tailwind CSS", "GraphQL", "Docker"],
      metrics: "99.9% uptime monitorizado",
      imageBg: "from-slate-900/40 to-blue-950/60"
    },
    {
      title: "CodeFlow Mobile",
      category: "Mobile App",
      description: "Aplicação móvel para revisão rápida de pull requests e gestão de sprints em equipas de engenharia.",
      tags: ["React Native", "Expo", "Supabase"],
      metrics: "4.9★ na App Store",
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
                Olá, sou o <strong className="text-white">Euclénio Cadete</strong>. Desenvolvo soluções robustas em código e partilho conhecimento prático sobre engenharia de software e produtividade na comunidade digital.
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
                  <div className="text-2xl font-bold text-white">4+</div>
                  <div className="text-xs text-slate-400">Anos de Código</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-slate-400">Foco e Qualidade</div>
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
                Acredito que o verdadeiro valor da programação reside não apenas no código limpo e eficiente, mas na capacidade de comunicar conceitos complexos de forma simples e acessível.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Através da minha presença no Instagram (<strong className="text-white">@_euclenio_</strong>), crio conteúdos educativos e dinâmicos para inspirar outros programadores e impulsionar a comunidade tecnológica.
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
                <h3 className="text-lg font-bold text-white mb-2">Desenvolvimento Técnico</h3>
                <p className="text-sm text-slate-400">
                  Criação de aplicações web e mobile de alto desempenho, arquitetura escalável e integração de serviços modernos.
                </p>
              </Card>

              <Card className="bg-slate-900/80 border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-pink-600/10 text-pink-400 flex items-center justify-center mb-4">
                  <Instagram className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Criação de Conteúdo</h3>
                <p className="text-sm text-slate-400">
                  Produção de Reels, carrosséis educativos e dicas práticas sobre ferramentas essenciais para programadores.
                </p>
              </Card>

              <Card className="bg-slate-900/80 border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-400 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Inteligência Artificial</h3>
                <p className="text-sm text-slate-400">
                  Utilização de ferramentas de IA para otimizar workflows diários, automação de testes e geração de código inteligente.
                </p>
              </Card>

              <Card className="bg-slate-900/80 border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-400 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Comunidade Tech</h3>
                <p className="text-sm text-slate-400">
                  Fomento da partilha aberta de conhecimento, resolução de bugs em equipa e mentoria para novos talentos.
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
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
                  <span className="text-xs text-slate-500">Repositório Público</span>
                  <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 h-auto font-semibold">
                    Explorar <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
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
                    <span className="font-medium text-white">euclenio.cadete@example.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-pink-400">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Instagram</span>
                    <span className="font-medium text-white">@_euclenio_</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
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

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/30">
                    {isSubmitting ? "A enviar..." : "Enviar Mensagem"} <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
