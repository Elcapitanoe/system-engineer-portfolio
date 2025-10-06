"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Server,
  Cpu,
  HardDrive,
  Network,
  CircleCheck as CheckCircle2,
} from "lucide-react";

const systemMetrics = [
  { label: "CPU Usage", value: 42, icon: Cpu, color: "text-blue-500" },
  { label: "Memory", value: 68, icon: HardDrive, color: "text-emerald-500" },
  { label: "Network", value: 34, icon: Network, color: "text-cyan-500" },
  { label: "Storage", value: 56, icon: Server, color: "text-amber-500" },
];

export function HeroSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-mono">
              <CheckCircle2 className="h-4 w-4" />
              <span>System Online</span>
            </div>

            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-50 mb-4 terminal-glow">
                Domi Adiwijaya
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 font-mono mb-2">
                System Engineer & HomeLAB Enthusiast
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Building and optimizing distributed systems, automation
                pipelines, and home lab infrastructure. Passionate about server
                architecture, containerization, and network engineering.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-slate-300 font-mono text-sm">
                <span className="text-emerald-500">$</span> admin@domiadi.com:~
              </div>
              <div className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-slate-300 font-mono text-sm">
                uptime: 99.8%
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="card-glow scan-line">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Server className="h-5 w-5 text-emerald-500" />
                  <h3 className="font-semibold text-lg text-slate-50">
                    System Resources
                  </h3>
                </div>
                <div className="space-y-4">
                  {systemMetrics.map((metric) => (
                    <div key={metric.label} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <metric.icon className={`h-4 w-4 ${metric.color}`} />
                          <span className="text-slate-300 font-mono">
                            {metric.label}
                          </span>
                        </div>
                        <span
                          className={`font-mono font-semibold ${metric.color}`}
                        >
                          {metric.value}%
                        </span>
                      </div>
                      <Progress value={metric.value} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Services", value: "24", status: "active" },
                { label: "Containers", value: "16", status: "running" },
                { label: "Alerts", value: "0", status: "clear" },
              ].map((stat) => (
                <Card key={stat.label} className="card-glow">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-500 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
