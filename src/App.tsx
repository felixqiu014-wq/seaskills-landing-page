import { toast } from "sonner";
import {
  BadgeCheck,
  Check,
  ChevronRight,
  Cloud,
  Copy,
  GitBranch,
  Globe,
  Layers3,
  LockKeyhole,
  PlayCircle,
  Rocket,
  ServerCog,
  Sparkles,
  Terminal,
  WandSparkles,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu";
import { Toaster } from "@/src/components/ui/sonner";

const installCommand = "npx skills add zjy365/seakills";

const navLinks = ["Products", "Docs", "GitHub", "Demo", "Login"];

const features = [
  {
    icon: WandSparkles,
    title: "Pre-Built AI Skills Library",
    description:
      "Ready-to-use AI models and developer skills with production-minded defaults, so teams can skip prompt wrangling and custom training.",
  },
  {
    icon: Cloud,
    title: "Seamless Sealos Integration",
    description:
      "Connect directly to Sealos and move from local install to cloud execution without rebuilding your workflow around a new platform.",
  },
  {
    icon: Terminal,
    title: "CLI & GUI Dual Support",
    description:
      "Run high-speed terminal flows when you want precision, then switch to a visual console for inspection, sharing, and operations.",
  },
  {
    icon: Globe,
    title: "Cross-Environment",
    description:
      "Use the same skill layer on Linux, macOS, Windows WSL, remote jump boxes, and cloud-hosted developer environments.",
  },
  {
    icon: Sparkles,
    title: "Real-Time Skill Updates",
    description:
      "Pull the latest AI and DevOps skill upgrades continuously so your toolkit stays current as models, infra, and best practices evolve.",
  },
  {
    icon: LockKeyhole,
    title: "Secure & Open-Source",
    description:
      "Build on an open-source core with transparent behavior, then pair it with secure cloud execution for controlled team adoption.",
  },
];

const steps = [
  {
    number: "01",
    title: "Install",
    description:
      "Drop one command into your terminal and bootstrap the SeaSkills runtime in seconds.",
  },
  {
    number: "02",
    title: "Configure",
    description:
      "Connect your account, choose the skills that matter, and point them at the environment you actually ship to.",
  },
  {
    number: "03",
    title: "Run",
    description:
      "Launch from the CLI or UI and execute AI-assisted workflows directly against your cloud-native stack.",
  },
];

const useCases = [
  {
    title: "AI Model Rapid Deployment",
    description:
      "Package and launch model-backed developer workflows without building a bespoke ops layer first. SeaSkills turns repeatable deployment logic into reusable skills your team can run on demand.",
    code: ["seaskills run deploy-model", "--env production", "--skill llm-release"],
  },
  {
    title: "DevOps Automation Execution",
    description:
      "Automate environment checks, release steps, and remediation routines with shared operational skills. Teams get consistent execution paths instead of tribal shell snippets scattered across repos.",
    code: ["seaskills run ops-remediate", "--target prod-cluster", "--skill rollback-checks"],
  },
  {
    title: "Cloud-Native App Testing",
    description:
      "Trigger repeatable validation flows for services, clusters, and staged environments before rollout. The same skill can be reused locally, in CI, or from a cloud-hosted control plane.",
    code: ["seaskills run test-suite", "--env staging", "--skill smoke-k8s"],
  },
  {
    title: "Team Shared Skill Repository",
    description:
      "Publish internal skills once and let every engineer consume the same tested workflows across teams. Governance becomes easier when commands, versions, and execution targets are centralized.",
    code: ["seaskills sync repo", "--org platform-team", "--visibility shared"],
  },
];

const faqs = [
  {
    question: "What are the system requirements for SeaSkills?",
    answer:
      "SeaSkills works on Linux, macOS, and Windows through WSL. A modern shell, outbound internet access for installation and updates, and access to your target Sealos or cloud environment are typically all you need.",
  },
  {
    question: "How do I update to the latest version?",
    answer:
      "Run the installer again or use the built-in update flow once SeaSkills is installed. The platform is designed so teams can pull the latest skill definitions and runtime improvements without rebuilding their local setup.",
  },
  {
    question: "Is it compatible with other cloud platforms?",
    answer:
      "Yes. Sealos is the native path, but the skill model is useful anywhere you need repeatable developer and DevOps execution. Teams commonly adapt skills to multi-cloud environments, remote Linux hosts, and internal platforms.",
  },
  {
    question: "How can I contribute custom skills?",
    answer:
      "You can create and publish your own skill definitions, then share them with your team or the wider community. The open-source core makes it straightforward to version, review, and evolve custom automation over time.",
  },
];

function copyCommand(command: string, label: string) {
  navigator.clipboard.writeText(command).then(
    () => {
      toast.success("Copied Successfully!", {
        description: `The ${label} command is ready to paste into your terminal.`,
      });
    },
    () => {
      toast.error("Copy failed", {
        description: "Clipboard access was blocked. You can still copy the command manually.",
      });
    },
  );
}

function CommandBlock({
  compact = false,
  centered = false,
}: {
  compact?: boolean;
  centered?: boolean;
}) {
  return (
    <div
      className={[
        "mx-auto w-full",
        compact ? "max-w-2xl" : "max-w-4xl",
        centered ? "mx-auto max-w-3xl" : "",
      ].join(" ")}
    >
      <div className="rounded-[26px] border border-border bg-card p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_40px_color-mix(in_oklab,var(--color-primary)_10%,transparent)]">
        <div className="flex min-w-0 items-center gap-3 rounded-[20px] px-4 py-3 text-left">
          <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-sm font-medium md:text-lg">
            <span className="text-primary">npx</span>
            <span className="text-muted-foreground"> skills add </span>
            <span className="text-foreground">zjy365/seakills</span>
          </code>
          <button
            type="button"
            onClick={() => copyCommand(installCommand, "install")}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition hover:border-primary/40 hover:text-primary"
            aria-label="Copy install command"
          >
            <Copy className="size-3.5" />
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center gap-2 text-center">
        <p className="text-xs text-muted-foreground">Compatible with Linux, macOS, Windows WSL</p>
        <a
          href="#docs"
          className="text-sm text-muted-foreground underline decoration-border underline-offset-4 transition hover:text-foreground"
        >
          Or read the documentation
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="dark min-h-screen bg-background font-sans text-foreground antialiased">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-2 text-primary">
              <Cloud className="size-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">SeaSkills</span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link}>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle}>
                      <a href={`#${link.toLowerCase()}`}>{link}</a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button asChild variant="cyan" size="lg" className="font-medium">
              <a href="#install">Get Started Now</a>
            </Button>
          </div>

          <Button asChild variant="cyan" size="sm" className="lg:hidden">
            <a href="#install">Get Started</a>
          </Button>
        </div>
      </div>

      <main id="top">
        <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--color-primary)_16%,transparent),transparent_28%),radial-gradient(circle_at_top_left,color-mix(in_oklab,var(--color-secondary)_18%,transparent),transparent_30%)]" />
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <Badge variant="cyan" className="mb-6">
                Built for global developers and DevOps teams
              </Badge>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-[3.4rem]">
                AI-Powered Skill Toolkit for Cloud-Native Developers
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                One-click installation. Instant access to pre-built AI and DevOps skills.
                Simplify your cloud workflow seamlessly.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="outline" size="lg">
                  <a href="#docs">View Full Docs</a>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  Fast local bootstrap
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  Native Sealos path
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  Team-ready execution
                </span>
              </div>
            </div>
            <div className="mt-12" id="install">
              <CommandBlock centered />
            </div>
          </div>
        </section>

        <section id="products" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <Badge variant="cyan">Core Features</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                A skill execution layer designed for real cloud workflows
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                SeaSkills gives platform engineers a clean surface area for AI-assisted
                automation without sacrificing operational control.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="group border-border/90 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardHeader>
                    <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl border border-border bg-secondary/30 text-primary">
                      <feature.icon className="size-5" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent/30 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <Badge variant="cyan">How It Works</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Three steps from install to cloud execution
              </h2>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <Card key={step.title} className="overflow-hidden border-border bg-card">
                    <CardContent className="p-0">
                      <div className="grid gap-0 md:grid-cols-[96px_1fr]">
                        <div className="flex items-center justify-center border-b border-border bg-primary/12 text-2xl font-semibold text-primary md:border-b-0 md:border-r">
                          {step.number}
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                            {index === 0 ? <Badge variant="cyan">Start here</Badge> : null}
                          </div>
                          <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                          {index === 0 ? (
                            <div className="mt-5 max-w-2xl">
                              <CommandBlock compact />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>What developers get immediately</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 size-5 text-primary" />
                    <p>Reusable AI and DevOps skills with one shared command surface.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <GitBranch className="mt-0.5 size-5 text-primary" />
                    <p>Consistent local, team, and cloud execution with less scripting drift.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ServerCog className="mt-0.5 size-5 text-primary" />
                    <p>Operationally cleaner paths for rollout, testing, and maintenance tasks.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-card px-4 py-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Badge variant="dark" className="border-border bg-accent text-foreground">
              Repeat the command, remember the product
            </Badge>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Get SeaSkills Right Now
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Install once and turn AI-assisted execution into a repeatable part of your
              developer workflow.
            </p>
            <div className="mt-10">
              <CommandBlock centered />
            </div>
          </div>
        </section>

        <section id="demo" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <Badge variant="cyan">Use Cases</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                The workflows teams want to standardize first
              </h2>
            </div>

            <div className="mt-12 space-y-8">
              {useCases.map((useCase, index) => (
                <div
                  key={useCase.title}
                  className="grid items-center gap-8 rounded-[2rem] border border-border bg-card p-6 shadow-sm lg:grid-cols-2 lg:p-10"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      {useCase.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-muted-foreground">
                      {useCase.description}
                    </p>
                    <Button asChild variant="ghost" className="mt-6 px-0 text-primary hover:bg-transparent hover:text-primary/80">
                      <a href="#install">
                        See install flow
                        <ChevronRight />
                      </a>
                    </Button>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="rounded-3xl border border-border bg-background p-6 shadow-[0_0_30px_color-mix(in_oklab,var(--color-primary)_8%,transparent)]">
                      <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                        <Terminal className="size-4 text-primary" />
                        workflow preview
                      </div>
                      <div className="space-y-3 font-mono text-sm text-foreground">
                        {useCase.code.map((line) => (
                          <div key={line} className="rounded-xl border border-border bg-card px-4 py-3">
                            <span className="text-primary">$</span> {line}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="docs" className="bg-accent/30 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="max-w-2xl">
              <Badge variant="cyan">FAQ</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Common questions from platform and infrastructure teams
              </h2>
            </div>

            <Card className="mt-10 border-border">
              <CardContent className="p-6">
                <Accordion type="single" collapsible>
                  {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={faq.question}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-card px-4 pb-8 pt-16 text-muted-foreground sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-border pb-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-primary/20 bg-primary/10 p-2 text-primary">
                  <Cloud className="size-5" />
                </div>
                <span className="text-lg font-semibold text-foreground">SeaSkills</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                AI-powered developer skills and cloud-native execution for teams that want
                faster, cleaner operational workflows.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">Docs</h3>
              <div className="mt-4 space-y-3 text-sm">
                <a href="#docs" className="block hover:text-foreground">Installation</a>
                <a href="#products" className="block hover:text-foreground">Features</a>
                <a href="#demo" className="block hover:text-foreground">Use Cases</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">GitHub</h3>
              <div className="mt-4 space-y-3 text-sm">
                <a href="#github" className="block hover:text-foreground">Repository</a>
                <a href="#github" className="block hover:text-foreground">Releases</a>
                <a href="#github" className="block hover:text-foreground">Contributing</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">Support</h3>
              <div className="mt-4 space-y-3 text-sm">
                <a href="#login" className="block hover:text-foreground">Contact</a>
                <a href="#demo" className="block hover:text-foreground">Demo</a>
                <a href="#docs" className="block hover:text-foreground">FAQ</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground">Legal</h3>
              <div className="mt-4 space-y-3 text-sm">
                <a href="#privacy" className="block hover:text-foreground">Privacy</a>
                <a href="#terms" className="block hover:text-foreground">Terms</a>
                <a href="#security" className="block hover:text-foreground">Security</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm">© 2026 SeaSkills by Sealos. Built for modern developer platforms.</p>
            <button
              type="button"
              onClick={() => copyCommand(installCommand, "install")}
              className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-background px-3 py-2 font-mono text-xs text-primary transition hover:border-primary/40 hover:text-primary/80"
            >
              <Copy className="size-3.5" />
              <span>{installCommand}</span>
            </button>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 hidden xl:block">
        <button
          type="button"
          onClick={() => copyCommand(installCommand, "install")}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/95 px-4 py-2 font-mono text-xs text-primary shadow-[0_0_20px_color-mix(in_oklab,var(--color-primary)_12%,transparent)] backdrop-blur"
        >
          <Copy className="size-3.5" />
          {installCommand}
        </button>
      </div>

      <Toaster position="top-right" />
    </div>
  );
}

export default App;
