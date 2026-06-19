"use client";

import BookingModal from "@/components/BookingModal";
import GlassCard from "@/components/GlassCard";
import NetworkBackground from "@/components/NetworkBackground";
import TechStack from "@/components/TechStack";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Bot,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Github,
  Globe,
  Layers,
  Mail,
  MessageSquare,
  Network,
  Phone,
  Shield,
  Sparkles,
  Stethoscope,
  Terminal,
  TrendingUp,
  Users,
  Workflow
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-bg-base overflow-x-hidden select-none">
      {/* Background Layer */}
      <NetworkBackground />
      <div className="pointer-events-none absolute inset-0 z-0 cyber-grid opacity-35" />

      {/* Radial Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full glow-overlay-blue animate-pulse-slow" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full glow-overlay-purple animate-pulse-slow" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[500px] w-[500px] rounded-full glow-overlay-blue animate-pulse-slow" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-bg-base/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all group-hover:border-glow-purple group-hover:bg-glow-purple/10">
              <Brain className="h-5 w-5 text-glow-blue transition-colors group-hover:text-glow-purple" />
              <div className="absolute inset-0 rounded-lg bg-glow-blue/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display text-sm font-extrabold uppercase tracking-widest text-white group-hover:text-glow-blue transition-colors">
              G. J. Naidu
            </span>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#who-we-are" className="text-xs uppercase font-semibold tracking-wider text-text-secondary hover:text-white transition-colors">
              Who We Are
            </a>
            <a href="#what-we-build" className="text-xs uppercase font-semibold tracking-wider text-text-secondary hover:text-white transition-colors">
              What We Build
            </a>
            <a href="#solutions" className="text-xs uppercase font-semibold tracking-wider text-text-secondary hover:text-white transition-colors">
              AI Solutions
            </a>
            <a href="#healthcare" className="text-xs uppercase font-semibold tracking-wider text-text-secondary hover:text-white transition-colors">
              Healthcare AI
            </a>
            <a href="#case-studies" className="text-xs uppercase font-semibold tracking-wider text-text-secondary hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#tech-stack" className="text-xs uppercase font-semibold tracking-wider text-text-secondary hover:text-white transition-colors">
              Tech Stack
            </a>
          </nav>

          <button
            onClick={() => setBookingOpen(true)}
            className="relative inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-glow-purple hover:bg-glow-purple/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-sm hover:shadow-glow-purple/20"
          >
            Book Consultation
          </button>
        </div>
      </header>

      {/* Main Body Layout */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        
        {/* HERO SECTION */}
        <section className="relative flex min-h-[calc(100vh-80px)] flex-col justify-center py-20">
          <div className="space-y-8 max-w-5xl">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-glow-blue/20 bg-glow-blue/5 px-4.5 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow-blue opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-glow-blue"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-glow-blue">
                Available for Collaboration
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-hero-giant text-white tracking-tighter"
              style={{ fontSize: "clamp(3rem, 7.5vw, 9.5rem)" }}
            >
              Building <br className="hidden md:inline" />
              <span className="bg-gradient-to-r from-glow-blue via-glow-purple to-glow-accent bg-clip-text text-transparent">
                AI Solutions
              </span> <br />
              For Healthcare <br />
              <span className="text-white/20">& Business</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl text-base md:text-lg leading-relaxed text-text-secondary font-medium"
            >
              AI-powered applications, intelligent automation systems, healthcare technology platforms, AI agents, and scalable digital products engineered for impact.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-glow-blue to-glow-purple px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-glow-purple/25 transition-all"
              >
                Book Consultation
              </button>
              <a
                href="#solutions-showcase"
                className="inline-flex items-center justify-center rounded-lg border border-white/8 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                View Projects
              </a>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 max-w-xl border-t border-white/5 pt-10 mt-12"
            >
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-extrabold text-white font-display">5+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">AI Solutions</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-extrabold text-white font-display">10+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Technologies</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-extrabold text-white font-display">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Custom Built</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHO WE ARE SECTION */}
        <section id="who-we-are" className="py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-glow-blue">
                Who We Are
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-none text-white">
                Engineering <br className="hidden md:inline" />
                The Future <br className="hidden md:inline" />
                Of Intelligence
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-text-secondary text-base md:text-lg leading-relaxed font-medium">
              <p>
                Gorli Janardhan Naidu is an AI Solutions Architect specializing in healthcare technology, AI-powered software, intelligent automation, full-stack development, and scalable digital platforms.
              </p>
              <p>
                Focused on building real-world solutions that improve clinical workflows, automate repetitive business processes, and create measurable bottom-line impact. By combining cutting-edge LLM frameworks, robust database modeling, and state-of-the-art Web interfaces, he bridges the gap between academic AI research and deployable enterprise software.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="what-we-build" className="py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-glow-purple">
              What We Build
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-none text-white">
              CORE SERVICES
            </h2>
            <p className="text-text-secondary text-sm md:text-base font-medium">
              Premium digital architectures built to streamline operations and unlock cognitive workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard glowColor="blue" delay={0.05}>
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-blue/10 border border-glow-blue/20">
                  <Bot className="h-6 w-6 text-glow-blue" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  AI Agents
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                  Custom AI assistants, copilots, autonomous workflows, and intelligent business process automation tailored to your unique requirements.
                </p>
              </div>
            </GlassCard>

            <GlassCard glowColor="purple" delay={0.1}>
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-purple/10 border border-glow-purple/20">
                  <Stethoscope className="h-6 w-6 text-glow-purple" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  Healthcare AI
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                  AI Doctor Assistants, medical report analysers, automated patient support bots, clinical analytics dashboards, and interactive appointment schedulers.
                </p>
              </div>
            </GlassCard>

            <GlassCard glowColor="accent" delay={0.15}>
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-accent/10 border border-glow-accent/20">
                  <Layers className="h-6 w-6 text-glow-accent" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  SaaS Products
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                  Scalable, cloud-based software-as-a-service architectures built to handle volume, optimize database storage, and scale alongside company growth.
                </p>
              </div>
            </GlassCard>

            <GlassCard glowColor="blue" delay={0.2}>
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-blue/10 border border-glow-blue/20">
                  <Globe className="h-6 w-6 text-glow-blue" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  Web Applications
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                  Enterprise-grade platforms, custom corporate hubs, responsive administrative consoles, and modern interactive user experiences.
                </p>
              </div>
            </GlassCard>

            <GlassCard glowColor="purple" delay={0.25}>
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-purple/10 border border-glow-purple/20">
                  <Workflow className="h-6 w-6 text-glow-purple" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  Automation Systems
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                  Integration of heterogeneous APIs, automated data pipelines, custom logic triggers, and smart processing systems that decrease manual tasks.
                </p>
              </div>
            </GlassCard>

            <GlassCard glowColor="accent" delay={0.3}>
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-accent/10 border border-glow-accent/20">
                  <Cloud className="h-6 w-6 text-glow-accent" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  Cloud Solutions
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                  Scalable deployments, secure APIs, containerized workloads, resilient cloud pipelines, infrastructure-as-code, and system migrations.
                </p>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* AI SOLUTIONS SHOWCASE */}
        <section id="solutions" className="py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-glow-blue">
                Core Systems
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-none text-white">
                AI SOLUTIONS
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-text-secondary text-sm md:text-base leading-relaxed font-medium">
                Engineered AI solutions targeting workflow optimization, clinical information systems, database scaling, and autonomous agents.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group rounded-2xl border border-white/8 bg-card-glass/30 p-8 backdrop-blur-md transition-all hover:border-glow-blue/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-glow-blue">AI Showcase 01</span>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">Python</span>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">React</span>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">AI APIs</span>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">AI Healthcare Assistant</h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                  A cognitive dialog system designed to assist clinical operators and handle patient queries. Evaluates medical information requests and suggests appointment slots.
                </p>
                <div className="space-y-2 border-t border-white/5 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Core Features</p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-white/90">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-blue flex-shrink-0" /> Patient query handling</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-blue flex-shrink-0" /> Medical info assistance</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-blue flex-shrink-0" /> Intelligent conversations</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-blue flex-shrink-0" /> Appointment support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative group rounded-2xl border border-white/8 bg-card-glass/30 p-8 backdrop-blur-md transition-all hover:border-glow-purple/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-glow-purple">AI Showcase 02</span>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">FastAPI</span>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">LlamaIndex</span>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">PDF Extract</span>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">Medical Report Analyzer</h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                  Automated parsing system that ingestion clinical laboratory files, medical imaging metadata, and records. Provides structured clinical analytics summaries.
                </p>
                <div className="space-y-2 border-t border-white/5 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Core Features</p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-white/90">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-purple flex-shrink-0" /> Document processing</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-purple flex-shrink-0" /> Information extraction</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-purple flex-shrink-0" /> AI summaries</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-purple flex-shrink-0" /> Analytics dashboard</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative group rounded-2xl border border-white/8 bg-card-glass/30 p-8 backdrop-blur-md transition-all hover:border-glow-accent/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-glow-accent">AI Showcase 03</span>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">Next.js</span>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">LangChain</span>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">Tailwind</span>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">AI Career Assistant</h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                  Dynamic tool that parses resumes, assesses professional profiles, designs step-by-step career path roadmaps, and conducts live mock interview simulations.
                </p>
                <div className="space-y-2 border-t border-white/5 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Core Features</p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-white/90">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-accent flex-shrink-0" /> Resume analysis</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-accent flex-shrink-0" /> Roadmap generation</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-accent flex-shrink-0" /> Interview preparation</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-accent flex-shrink-0" /> Profile assessment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative group rounded-2xl border border-white/8 bg-card-glass/30 p-8 backdrop-blur-md transition-all hover:border-glow-blue/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-glow-blue">AI Showcase 04</span>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">CrewAI</span>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">Python</span>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">APIs</span>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">AI Automation Systems</h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                  Multi-agent autonomous systems designed to monitor folders, handle API requests, perform complex cron tasks, and dynamically trigger notification pipelines.
                </p>
                <div className="space-y-2 border-t border-white/5 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Core Features</p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-white/90">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-blue flex-shrink-0" /> Workflow automation</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-blue flex-shrink-0" /> Task execution</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-blue flex-shrink-0" /> Process optimization</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-glow-blue flex-shrink-0" /> Multi-agent execution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HEALTHCARE TECHNOLOGY SECTION */}
        <section id="healthcare" className="py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-glow-blue">
              Focus Domain
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-none text-white">
              HEALTHCARE AI
            </h2>
            <p className="text-text-secondary text-sm md:text-base font-medium">
              Enterprise patient assistance, clinical summary tools, and structured health-tech analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="rounded-2xl border border-white/8 bg-[#0a0a16]/60 overflow-hidden flex flex-col justify-between group hover:border-glow-blue/20 transition-all">
              <div className="p-6 space-y-4">
                <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                  AI Doctor Assistant
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed font-medium">
                  A cognitive platform designed to map patient symptoms to historical datasets, compile medical guidelines, and suggest treatment roadmaps.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">OpenAI GPT-4o</span>
                  <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">Python</span>
                  <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">FastAPI</span>
                </div>
              </div>
              
              {/* Premium Dashboard Visual Placeholder */}
              <div className="h-44 bg-zinc-950/80 border-t border-white/5 relative p-4 overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] text-text-secondary font-mono">
                  <span>ANALYSIS PIPELINE: READY</span>
                  <span className="text-glow-blue animate-pulse">● LIVE</span>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-2">
                  <div className="h-2 w-3/4 rounded bg-white/10 overflow-hidden">
                    <div className="h-full bg-glow-blue w-2/3 rounded animate-pulse" />
                  </div>
                  <div className="h-2 w-1/2 rounded bg-white/10 overflow-hidden">
                    <div className="h-full bg-glow-blue w-1/3 rounded animate-pulse" />
                  </div>
                  <div className="h-2 w-5/6 rounded bg-white/10 overflow-hidden">
                    <div className="h-full bg-glow-blue w-4/5 rounded animate-pulse" />
                  </div>
                </div>
                <div className="flex justify-between items-center text-[8px] text-white/30 font-mono">
                  <span>INPUT: CLINICAL_LAB_REPORT.JSON</span>
                  <span>ACCURACY: 98.4%</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-white/8 bg-[#0a0a16]/60 overflow-hidden flex flex-col justify-between group hover:border-glow-purple/20 transition-all">
              <div className="p-6 space-y-4">
                <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                  Patient Support Bot
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed font-medium">
                  Active dialog agent that resolves repetitive inquiries regarding clinic timings, doctor rosters, post-op care guides, and medication refill alerts.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">WebSockets</span>
                  <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">Node.js</span>
                  <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">Tailwind CSS</span>
                </div>
              </div>

              {/* Premium Live Chat Visual Placeholder */}
              <div className="h-44 bg-zinc-950/80 border-t border-white/5 relative p-4 overflow-hidden flex flex-col justify-end gap-2.5">
                <div className="rounded-lg bg-white/5 p-2.5 max-w-[85%] self-start border border-white/5 text-[9px] text-text-secondary leading-relaxed">
                  How can I check the results of my blood test?
                </div>
                <div className="rounded-lg bg-glow-purple/10 p-2.5 max-w-[85%] self-end border border-glow-purple/20 text-[9px] text-white leading-relaxed">
                  Your results are processed. Log into the health portal or click &quot;Medical Analyzer&quot; above.
                </div>
                <div className="h-7 border border-white/5 bg-white/5 rounded-md px-2 flex items-center justify-between text-[9px] text-white/30">
                  <span>Enter message...</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-glow-purple" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-white/8 bg-[#0a0a16]/60 overflow-hidden flex flex-col justify-between group hover:border-glow-accent/20 transition-all">
              <div className="p-6 space-y-4">
                <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                  Medical Analytics Dashboard
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed font-medium">
                  Administrative dashboard mapping metrics like daily patient volume, readmission ratios, department capacities, and staff workloads.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">Next.js 15</span>
                  <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">PostgreSQL</span>
                  <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">Recharts</span>
                </div>
              </div>

              {/* Premium Analytics Chart Visual Placeholder */}
              <div className="h-44 bg-zinc-950/80 border-t border-white/5 relative p-4 overflow-hidden flex flex-col justify-between">
                <div className="flex justify-between items-center text-[9px] text-text-secondary font-mono">
                  <span>PATIENT OUTCOMES (MONTHLY)</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                    <TrendingUp className="h-3 w-3" /> +12.4%
                  </span>
                </div>
                {/* SVG Mock Chart lines */}
                <div className="flex-1 flex items-end justify-between px-2 pt-2 gap-1.5">
                  <div className="w-1/6 bg-glow-accent/20 rounded-t h-[40%]" />
                  <div className="w-1/6 bg-glow-accent/40 rounded-t h-[55%]" />
                  <div className="w-1/6 bg-glow-accent/60 rounded-t h-[70%]" />
                  <div className="w-1/6 bg-glow-accent/80 rounded-t h-[60%]" />
                  <div className="w-1/6 bg-glow-accent rounded-t h-[85%]" />
                  <div className="w-1/6 bg-glow-blue rounded-t h-[95%]" />
                </div>
                <div className="flex justify-between text-[7px] text-white/30 font-mono mt-1">
                  <span>JAN</span>
                  <span>FEB</span>
                  <span>MAR</span>
                  <span>APR</span>
                  <span>MAY</span>
                  <span>JUN</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-white/8 bg-[#0a0a16]/60 overflow-hidden flex flex-col justify-between group hover:border-glow-blue/20 transition-all">
              <div className="p-6 space-y-4">
                <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                  Healthcare Appointment Platform
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed font-medium">
                  Automated appointment engine matching patients to specialist availability, optimizing schedules, and syncing calendars dynamically.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">Node.js</span>
                  <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">PostgreSQL</span>
                  <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">Twilio API</span>
                </div>
              </div>

              {/* Premium Calendar Mockup Visual Placeholder */}
              <div className="h-44 bg-zinc-950/80 border-t border-white/5 relative p-4 overflow-hidden flex flex-col justify-between">
                <div className="text-[9px] text-text-secondary font-mono">CALENDAR SLOTS AVAILABLE</div>
                <div className="grid grid-cols-3 gap-2 py-2">
                  <div className="border border-glow-blue/30 bg-glow-blue/10 rounded-md p-1.5 flex flex-col justify-center text-center">
                    <span className="text-[8px] font-bold text-glow-blue">10:00 AM</span>
                    <span className="text-[7px] text-text-secondary">DR. SHARMA</span>
                  </div>
                  <div className="border border-white/5 bg-white/5 rounded-md p-1.5 flex flex-col justify-center text-center opacity-40">
                    <span className="text-[8px] font-bold text-white/50">11:30 AM</span>
                    <span className="text-[7px] text-white/30">TAKEN</span>
                  </div>
                  <div className="border border-glow-blue/30 bg-glow-blue/10 rounded-md p-1.5 flex flex-col justify-center text-center">
                    <span className="text-[8px] font-bold text-glow-blue">02:00 PM</span>
                    <span className="text-[7px] text-text-secondary">DR. PATEL</span>
                  </div>
                </div>
                <div className="text-[8px] text-glow-blue font-mono flex items-center justify-between">
                  <span>LAST RESERVED: 5 MINS AGO</span>
                  <span>SYNC OK</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES SECTION */}
        <section id="case-studies" className="py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-glow-purple">
                Real World Outcomes
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-none text-white">
                CASE STUDIES
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-text-secondary text-sm md:text-base leading-relaxed font-medium">
                Analysis of problems, implementations, and concrete business outcomes across healthcare technology systems.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Case Study 1 */}
            <div className="rounded-2xl border border-white/8 bg-card-glass/30 p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-glow-blue">Case Study 01</span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">Patient Dialog System</h3>
                  <div className="flex gap-2 pt-1">
                    <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">AI Assistant</span>
                    <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">Healthcare</span>
                  </div>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Problem</h4>
                    <p className="text-xs text-white/95 leading-relaxed font-medium">
                      Healthcare providers receive repetitive patient inquiries that consume administrative bandwidth.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-glow-purple">Solution</h4>
                    <p className="text-xs text-white/95 leading-relaxed font-medium">
                      Built an AI Healthcare Assistant using LLM technology to handle routing, clinic timings, and appointments.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Result</h4>
                    <p className="text-xs text-white/95 leading-relaxed font-medium">
                      Improved response speeds, automated 60%+ of patient chats, and reduced manual support workloads.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="rounded-2xl border border-white/8 bg-card-glass/30 p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-glow-purple">Case Study 02</span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">Report Ingestion System</h3>
                  <div className="flex gap-2 pt-1">
                    <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">Document Processing</span>
                    <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">Analytics</span>
                  </div>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Problem</h4>
                    <p className="text-xs text-white/95 leading-relaxed font-medium">
                      Medical reports require complex manual analysis, slowing down patient treatment decisions.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-glow-purple">Solution</h4>
                    <p className="text-xs text-white/95 leading-relaxed font-medium">
                      Developed Medical Report Analyzer using OCR pipelines and LangChain logic to digest laboratory PDF charts.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Result</h4>
                    <p className="text-xs text-white/95 leading-relaxed font-medium">
                      Enabled instant clinical understanding, decreasing administrative lookup time by over 80%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="rounded-2xl border border-white/8 bg-card-glass/30 p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-glow-accent">Case Study 03</span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">Smart Scheduler Roster</h3>
                  <div className="flex gap-2 pt-1">
                    <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">Calendar Sync</span>
                    <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-text-secondary">Optimisation</span>
                  </div>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Problem</h4>
                    <p className="text-xs text-white/95 leading-relaxed font-medium">
                      Appointment scheduling creates administrative inefficiencies, booking gaps, and patient wait times.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-glow-purple">Solution</h4>
                    <p className="text-xs text-white/95 leading-relaxed font-medium">
                      Built Healthcare Appointment Platform with automated calendar updates and confirmation SMS.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Result</h4>
                    <p className="text-xs text-white/95 leading-relaxed font-medium">
                      Improved booking efficiency, minimized double bookings, and increased patient engagement ratios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section id="tech-stack" className="py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-glow-accent">
              Core Capabilities
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-none text-white">
              TECH STACK
            </h2>
            <p className="text-text-secondary text-sm md:text-base font-medium">
              Categorized technologies, frameworks, and deployment engines utilized for production-grade builds.
            </p>
          </div>

          <TechStack />
        </section>

        {/* FEATURED PROJECTS SHOWCASE */}
        <section id="solutions-showcase" className="py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-glow-blue">
                Enterprise Products
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-none text-white">
                FEATURED SOLUTIONS
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-text-secondary text-sm md:text-base leading-relaxed font-medium">
                Live deployments and open source configurations developed by Gorli Janardhan Naidu.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            
            {/* Project 1 */}
            <div className="rounded-2xl border border-white/8 bg-[#0a0a16]/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-glow-blue/20 transition-all group">
              <div className="lg:col-span-7 p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">Python</span>
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">React.js</span>
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">LLM API</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                    AI Healthcare Assistant
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                    A conversational dialogue terminal mapped directly to clinician timetables and healthcare service repositories. Helps triage patient symptoms and optimize booking.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://health-ai-companion-azure.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-glow-blue px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-white hover:bg-glow-blue/80 hover:shadow-lg hover:shadow-glow-blue/30 transition-all cursor-pointer"
                  >
                    Live Demo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://github.com/futuret6ch/Health-AI-Companion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-card-glass/60 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-text-secondary hover:text-white hover:border-glow-blue/30 hover:shadow-lg hover:shadow-glow-blue/15 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    GitHub Repository <Github className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Thumbnail Container */}
              <div className="lg:col-span-5 h-64 lg:h-auto min-h-[220px] bg-zinc-950/80 border-t lg:border-t-0 lg:border-l border-white/5 relative p-6 overflow-hidden flex flex-col justify-between">
                <div className="text-[9px] text-text-secondary font-mono tracking-widest">SYSTEM: AGENTIC_DIALOG_BUS</div>
                <div className="border border-white/5 bg-white/5 rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-glow-blue animate-pulse" />
                    <span className="text-[10px] font-bold uppercase">TRIAGE ACTIVE</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full bg-white/10 rounded" />
                    <div className="h-1.5 w-5/6 bg-white/10 rounded" />
                    <div className="h-1.5 w-2/3 bg-white/10 rounded" />
                  </div>
                </div>
                <div className="flex justify-between items-center text-[8px] text-white/30 font-mono">
                  <span>MODEL: CLAUDE 3.5 SONNET</span>
                  <span>100% SECURE</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="rounded-2xl border border-white/8 bg-[#0a0a16]/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-glow-purple/20 transition-all group">
              <div className="lg:col-span-7 p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">FastAPI</span>
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">LlamaIndex</span>
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">Tailwind CSS</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                    Medical Report Analyzer
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                    Fully automated medical report digestion dashboard. Performs layout parsing on lab result charts, extracts metrics, and flags values outside acceptable clinical limits.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://health-ai-companion-azure.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-glow-purple px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-white hover:bg-glow-purple/80 hover:shadow-lg hover:shadow-glow-purple/30 transition-all cursor-pointer"
                  >
                    Live Demo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://github.com/futuret6ch/Health-AI-Companion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-card-glass/60 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-text-secondary hover:text-white hover:border-glow-purple/30 hover:shadow-lg hover:shadow-glow-purple/15 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    GitHub Repository <Github className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Thumbnail Container */}
              <div className="lg:col-span-5 h-64 lg:h-auto min-h-[220px] bg-zinc-950/80 border-t lg:border-t-0 lg:border-l border-white/5 relative p-6 overflow-hidden flex flex-col justify-between">
                <div className="text-[9px] text-text-secondary font-mono tracking-widest font-bold">ANALYZER: INGEST_READY</div>
                <div className="flex justify-between items-center bg-glow-purple/5 border border-glow-purple/10 rounded-xl p-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold text-white">CHOLESTEROL</span>
                    <span className="block text-[8px] text-text-secondary">TARGET: &lt; 200 mg/dL</span>
                  </div>
                  <span className="text-xl font-bold text-glow-purple font-display">240 ↑</span>
                </div>
                <div className="flex justify-between items-center text-[8px] text-white/30 font-mono">
                  <span>INPUT: LAB_BLOOD_PANEL.PDF</span>
                  <span>FLAGGED VALUES: 1</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="rounded-2xl border border-white/8 bg-[#0a0a16]/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-glow-accent/20 transition-all group">
              <div className="lg:col-span-7 p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">Node.js</span>
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">PostgreSQL</span>
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">Twilio API</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                    Healthcare Appointment Platform
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                    Integrated scheduler engine matching doctor rosters to patient slots. Syncs to Google Calendars, triggers Twilio text confirmation scripts, and controls double-booking logic.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://health-ai-companion-azure.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-glow-accent px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-white hover:bg-glow-accent/80 hover:shadow-lg hover:shadow-glow-accent/30 transition-all cursor-pointer"
                  >
                    Live Demo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://github.com/futuret6ch/Health-AI-Companion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-card-glass/60 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-text-secondary hover:text-white hover:border-glow-accent/30 hover:shadow-lg hover:shadow-glow-accent/15 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    GitHub Repository <Github className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Thumbnail Container */}
              <div className="lg:col-span-5 h-64 lg:h-auto min-h-[220px] bg-zinc-950/80 border-t lg:border-t-0 lg:border-l border-white/5 relative p-6 overflow-hidden flex flex-col justify-between">
                <div className="text-[9px] text-text-secondary font-mono tracking-widest font-bold">SCHEDULER: APPOINTMENT_SYNC</div>
                <div className="border border-white/5 bg-white/5 rounded-xl p-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-white uppercase">Patient Confirmed</span>
                    <span className="block text-[8px] text-text-secondary">June 22, 10:00 AM EST</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 text-[8px] font-bold text-emerald-400">SMS SENT</span>
                </div>
                <div className="flex justify-between items-center text-[8px] text-white/30 font-mono">
                  <span>QUEUE: TWILIO_SMS_GATEWAY</span>
                  <span>SYNC OK</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="rounded-2xl border border-white/8 bg-[#0a0a16]/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-glow-blue/20 transition-all group">
              <div className="lg:col-span-7 p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">React.js</span>
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">FastAPI</span>
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">Leaflet Maps</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                    Modern Farming Platform
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                    Agricultural monitoring software mapping soil moisture contents, crop yields, and weather alerts onto regional geographic dashboards.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://ai.studio/apps/caaf8273-115b-441c-9f66-5c3d3ba64718"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-glow-blue px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-white hover:bg-glow-blue/80 hover:shadow-lg hover:shadow-glow-blue/30 transition-all cursor-pointer"
                  >
                    Live Demo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-white/5 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-text-secondary hover:text-white hover:bg-white/10 transition-all"
                  >
                    GitHub <Github className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Thumbnail Container */}
              <div className="lg:col-span-5 h-64 lg:h-auto min-h-[220px] bg-zinc-950/80 border-t lg:border-t-0 lg:border-l border-white/5 relative p-6 overflow-hidden flex flex-col justify-between">
                <div className="text-[9px] text-text-secondary font-mono tracking-widest font-bold">SOIL: MOISTURE_SCAN</div>
                <div className="flex gap-3 items-center bg-glow-blue/5 border border-glow-blue/10 rounded-xl p-4">
                  <div className="flex-1 space-y-1">
                    <span className="text-[10px] font-bold text-white uppercase">Sector 4-B</span>
                    <div className="h-1 w-full bg-white/10 rounded">
                      <div className="h-full bg-glow-blue w-[82%]" />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-glow-blue">82%</span>
                </div>
                <div className="flex justify-between items-center text-[8px] text-white/30 font-mono">
                  <span>TELEMETRY: SOIL_NODE_43</span>
                  <span>STATUS: HEALTHY</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="rounded-2xl border border-white/8 bg-[#0a0a16]/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-glow-purple/20 transition-all group">
              <div className="lg:col-span-7 p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">TypeScript</span>
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">MongoDB</span>
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold text-text-secondary">Next.js</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                    Task Management Application
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                    Corporate kanban software allowing departments to dispatch tasks, assign workloads, trace bottlenecks, and configure email reminder alerts.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="inline-flex items-center gap-2 rounded-lg bg-glow-purple px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-white hover:bg-glow-purple/80 transition-all"
                  >
                    Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-white/5 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-text-secondary hover:text-white hover:bg-white/10 transition-all"
                  >
                    GitHub <Github className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Thumbnail Container */}
              <div className="lg:col-span-5 h-64 lg:h-auto min-h-[220px] bg-zinc-950/80 border-t lg:border-t-0 lg:border-l border-white/5 relative p-6 overflow-hidden flex flex-col justify-between">
                <div className="text-[9px] text-text-secondary font-mono tracking-widest font-bold">BOARD: ENTERPRISE_FLOW</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-white/5 bg-white/5 rounded-lg p-2.5 space-y-1">
                    <span className="text-[7px] text-text-secondary font-bold uppercase">To Do</span>
                    <span className="block text-[8px] font-bold text-white">Ingest Lab Schema</span>
                  </div>
                  <div className="border border-glow-purple/20 bg-glow-purple/5 rounded-lg p-2.5 space-y-1">
                    <span className="text-[7px] text-glow-purple font-bold uppercase">In Progress</span>
                    <span className="block text-[8px] font-bold text-white">Resolve API SSL</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[8px] text-white/30 font-mono">
                  <span>DATABASE: MONGO_REPLICA</span>
                  <span>TOTAL TASKS: 24</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COLLABORATION SECTION */}
        <section id="collaboration" className="py-24 border-t border-white/5">
          <div className="max-w-4xl space-y-8">
            <span className="text-xs uppercase font-extrabold tracking-widest text-glow-accent">
              Let&apos;s Partner
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-none text-white">
              AVAILABLE FOR COLLABORATION
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed font-medium max-w-3xl">
              Partnering with healthcare startups, SaaS companies, technology businesses, educational institutions, and innovation-driven organizations to design and deploy cognitive infrastructure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div className="rounded-xl border border-white/5 bg-[#0a0a16]/40 p-5 space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-glow-blue/10 border border-glow-blue/20">
                  <Activity className="h-4.5 w-4.5 text-glow-blue" />
                </div>
                <h4 className="text-xs uppercase font-bold text-white tracking-wider">Health Startups</h4>
                <p className="text-[11px] text-text-secondary font-medium leading-relaxed">
                  Integrating patient triage algorithms and securing medical document data structures.
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#0a0a16]/40 p-5 space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-glow-purple/10 border border-glow-purple/20">
                  <Layers className="h-4.5 w-4.5 text-glow-purple" />
                </div>
                <h4 className="text-xs uppercase font-bold text-white tracking-wider">SaaS Companies</h4>
                <p className="text-[11px] text-text-secondary font-medium leading-relaxed">
                  Building scalable cloud APIs, databases, and modern interactive user dashboards.
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#0a0a16]/40 p-5 space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-glow-accent/10 border border-glow-accent/20">
                  <Users className="h-4.5 w-4.5 text-glow-accent" />
                </div>
                <h4 className="text-xs uppercase font-bold text-white tracking-wider">Tech Enterprises</h4>
                <p className="text-[11px] text-text-secondary font-medium leading-relaxed">
                  Architecting multi-agent workflows, intelligent process tools, and system integrations.
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#0a0a16]/40 p-5 space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-glow-blue/10 border border-glow-blue/20">
                  <Shield className="h-4.5 w-4.5 text-glow-blue" />
                </div>
                <h4 className="text-xs uppercase font-bold text-white tracking-wider">Innovation Labs</h4>
                <p className="text-[11px] text-text-secondary font-medium leading-relaxed">
                  Designing proof of concepts, conducting feasibility tests, and prototyping models.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 border-t border-white/5 flex flex-col justify-center items-center text-center">
          <div className="space-y-6 max-w-4xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-glow-purple">
              Initiate Project
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-none text-white tracking-tight">
              LET&apos;S BUILD <br />
              THE NEXT <br />
              <span className="bg-gradient-to-r from-glow-blue via-glow-purple to-glow-accent bg-clip-text text-transparent">
                AI PRODUCT
              </span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base font-medium max-w-lg mx-auto">
              Ready to transform your idea into a powerful AI solution? Connect directly to scope your architecture.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-glow-blue to-glow-purple px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:shadow-lg hover:shadow-glow-purple/20 transition-all"
              >
                Schedule Consultation <Calendar className="h-4 w-4" />
              </button>

              <a
                href="mailto:gorli.janardhan@example.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/8 bg-white/5 hover:bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-white transition-all"
              >
                Email Me <Mail className="h-4 w-4" />
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/5 bg-emerald-500/10 hover:bg-emerald-500/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-emerald-400 transition-all"
              >
                WhatsApp <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#040409] py-12 relative z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-white">
              Gorli Janardhan Naidu
            </h4>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 text-[10px] font-bold uppercase tracking-widest text-text-secondary">
              <span>AI Solutions Architect</span>
              <span className="hidden sm:inline">•</span>
              <span>Healthcare AI Engineer</span>
              <span className="hidden sm:inline">•</span>
              <span>Full Stack Developer</span>
            </div>
          </div>
          
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 text-center md:text-right">
            © {currentYear} Naidu AI. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Interactive Booking Modal Context */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
