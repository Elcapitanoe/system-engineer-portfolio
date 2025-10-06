"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Terminal,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@domiadi.com",
    href: "mailto:hello@domiadi.com",
    color: "text-emerald-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/elcapitanoe",
    href: "https://github.com/elcapitanoe",
    color: "text-slate-300",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/domiadiwijaya",
    href: "https://linkedin.com/in/domiadiwijaya",
    color: "text-blue-500",
  },
];

export function ContactSection() {
  const [terminalLines, setTerminalLines] = useState([
    "$ whoami",
    "admin@domiadi.com",
    "",
    "$ cat contact.txt",
    "Ready to collaborate on infrastructure projects,",
    "discuss homelab setups, or share DevOps insights.",
    "",
    "$ echo $STATUS",
    "Available for consulting and collaboration",
    "",
  ]);

  const [inputValue, setInputValue] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newLines = [...terminalLines, `$ ${inputValue}`];

    if (inputValue.toLowerCase() === "help") {
      newLines.push(
        "Available commands: help, clear, contact, skills, projects"
      );
    } else if (inputValue.toLowerCase() === "clear") {
      setTerminalLines([]);
      setInputValue("");
      return;
    } else if (inputValue.toLowerCase() === "contact") {
      newLines.push("Email: hello@domiadi.com");
      newLines.push("GitHub: github.com/elcapitanoe");
      newLines.push("LinkedIn: linkedin.com/in/domiadiwijaya");
    } else if (inputValue.toLowerCase() === "skills") {
      newLines.push("Core: Kubernetes, Docker, Terraform, Ansible");
      newLines.push("Cloud: AWS, GCP, Azure");
      newLines.push("Monitoring: Prometheus, Grafana, ELK Stack");
    } else if (inputValue.toLowerCase() === "projects") {
      newLines.push("→ Kubernetes HomeLAB Cluster");
      newLines.push("→ Infrastructure as Code Pipeline");
      newLines.push("→ Network Monitoring Dashboard");
      newLines.push("→ Automated Backup Solution");
    } else {
      newLines.push(`Command not found: ${inputValue}`);
      newLines.push('Type "help" for available commands');
    }

    newLines.push("");
    setTerminalLines(newLines);
    setInputValue("");
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Terminal className="h-6 w-6 text-emerald-500" />
            <h2 className="text-3xl font-bold text-slate-50">
              Initialize Connection
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-sm">
            {">"} ssh admin@domiadi.com
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="card-glow scan-line">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-emerald-500" />
                Interactive Terminal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-sm">
                <div className="space-y-1 mb-4 max-h-80 overflow-y-auto">
                  {terminalLines.map((line, idx) => (
                    <div
                      key={idx}
                      className={
                        line.startsWith("$")
                          ? "text-emerald-500"
                          : line.startsWith("→")
                          ? "text-blue-400"
                          : "text-slate-300"
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>

                <form
                  onSubmit={handleCommand}
                  className="flex items-center gap-2"
                >
                  <ChevronRight className="h-4 w-4 text-emerald-500" />
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-slate-50"
                    placeholder="Type 'help' for commands..."
                    autoFocus
                  />
                  <span
                    className={`w-2 h-4 bg-emerald-500 ${
                      showCursor ? "opacity-100" : "opacity-0"
                    } transition-opacity`}
                    style={{ animation: "blink 1s infinite" }}
                  />
                </form>
              </div>

              <div className="mt-4 text-xs text-slate-500 font-mono">
                Tip: Try commands like "help", "contact", "skills", or
                "projects"
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <method.icon className={`h-5 w-5 ${method.color}`} />
                      <div>
                        <div className="text-sm font-semibold text-slate-300 group-hover:text-emerald-500 transition-colors">
                          {method.label}
                        </div>
                        <div className="text-xs text-slate-500 font-mono">
                          {method.value}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-emerald-500 transition-colors" />
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="card-glow bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-emerald-500/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-50 mb-2">
                  Open for Opportunities
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  Interested in infrastructure consulting, DevOps collaboration,
                  or discussing homelab architectures? Let's connect and build
                  something amazing together.
                </p>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold">
                  Start a Conversation
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
