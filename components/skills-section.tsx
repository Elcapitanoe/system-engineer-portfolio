"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Award,
  Code as Code2,
  Database,
  Shield,
  Network,
  Package,
} from "lucide-react";

const skillCategories = [
  {
    category: "Infrastructure & Cloud",
    icon: Network,
    skills: [
      { name: "Linux Administration", level: 95 },
      { name: "Docker & Kubernetes", level: 90 },
      { name: "AWS/GCP/Azure", level: 85 },
      { name: "Terraform & Ansible", level: 88 },
    ],
  },
  {
    category: "Networking",
    icon: Shield,
    skills: [
      { name: "TCP/IP & Routing", level: 92 },
      { name: "VPN & VLANs", level: 87 },
      { name: "Load Balancing", level: 85 },
      { name: "Network Security", level: 89 },
    ],
  },
  {
    category: "Automation & DevOps",
    icon: Code2,
    skills: [
      { name: "CI/CD Pipelines", level: 90 },
      { name: "Python & Bash Scripting", level: 93 },
      { name: "GitOps & ArgoCD", level: 86 },
      { name: "Monitoring (Prometheus)", level: 88 },
    ],
  },
  {
    category: "Storage & Databases",
    icon: Database,
    skills: [
      { name: "ZFS & RAID", level: 87 },
      { name: "PostgreSQL & MySQL", level: 84 },
      { name: "Redis & MongoDB", level: 82 },
      { name: "Backup Strategies", level: 91 },
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    id: "ACSA-2024",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
    id: "CKA-2023",
  },
  {
    name: "Red Hat Certified Engineer",
    issuer: "Red Hat",
    date: "2023",
    id: "RHCE-2023",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2022",
    id: "CTIAS-2022",
  },
];

export function SkillsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Package className="h-6 w-6 text-emerald-500" />
            <h2 className="text-3xl font-bold text-slate-50">
              Technical Proficiencies
            </h2>
          </div>
          <p className="text-slate-400 font-mono text-sm">
            {">"} cat /etc/skills.conf
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category) => (
            <Card key={category.category} className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <category.icon className="h-5 w-5 text-emerald-500" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300 font-mono">
                        {skill.name}
                      </span>
                      <span className="text-emerald-500 font-mono font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-blue-500" />
            <h3 className="text-2xl font-bold text-slate-50">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className="card-glow hover:border-blue-500/50 transition-colors"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm text-slate-50 leading-tight">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-slate-400">{cert.issuer}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-emerald-500 font-mono">
                          {cert.date}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                          {cert.id}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
