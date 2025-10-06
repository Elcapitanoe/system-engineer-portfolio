'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FolderGit2, ExternalLink, GitBranch, Clock, CircleCheck as CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Kubernetes HomeLAB Cluster',
    description: 'Multi-node K8s cluster with automated deployment pipelines, monitoring stack (Prometheus/Grafana), and service mesh implementation.',
    status: 'RUNNING',
    tech: ['Kubernetes', 'Docker', 'Helm', 'ArgoCD'],
    deployTime: '2024-08-15T10:30:00Z',
    logs: [
      '✓ Cluster initialized successfully',
      '✓ 5 nodes connected and healthy',
      '✓ Ingress controller deployed',
      '→ 24 pods running across namespaces',
    ],
  },
  {
    id: 2,
    name: 'Infrastructure as Code Pipeline',
    description: 'Automated infrastructure provisioning using Terraform and Ansible. Self-healing configurations with GitOps workflow.',
    status: 'RUNNING',
    tech: ['Terraform', 'Ansible', 'GitHub Actions', 'AWS'],
    deployTime: '2024-09-01T14:20:00Z',
    logs: [
      '✓ Terraform plan executed',
      '✓ 12 resources provisioned',
      '✓ Configuration drift detection active',
      '→ Auto-scaling policies applied',
    ],
  },
  {
    id: 3,
    name: 'Network Monitoring Dashboard',
    description: 'Real-time network traffic analysis with custom alerting system. Monitors bandwidth, latency, and security events across VLANs.',
    status: 'RUNNING',
    tech: ['Grafana', 'InfluxDB', 'Telegraf', 'Python'],
    deployTime: '2024-07-20T09:15:00Z',
    logs: [
      '✓ Data collectors online',
      '✓ 1.2M metrics/hour ingested',
      '✓ 0 critical alerts',
      '→ Dashboard refresh: 5s intervals',
    ],
  },
  {
    id: 4,
    name: 'Automated Backup Solution',
    description: 'Distributed backup system with encryption, deduplication, and multi-destination sync (local NAS + cloud storage).',
    status: 'RUNNING',
    tech: ['Restic', 'Rclone', 'Cron', 'ZFS'],
    deployTime: '2024-06-10T18:45:00Z',
    logs: [
      '✓ Last backup: 2 hours ago',
      '✓ 487GB backed up (compressed)',
      '✓ Integrity check passed',
      '→ Next scheduled backup: 22:00',
    ],
  },
];

export function ProjectsSection() {
  return (
    <section className="py-12 md:py-16 bg-slate-950/50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FolderGit2 className="h-6 w-6 text-emerald-500" />
            <h2 className="text-3xl font-bold text-slate-50">Project Repository</h2>
          </div>
          <p className="text-slate-400 font-mono text-sm">
            {'>'} ls -la ~/projects/ --sort=modified
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="card-glow hover:border-emerald-500/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 flex items-center gap-2">
                      <GitBranch className="h-5 w-5 text-emerald-500" />
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      {project.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                    <div className="h-2 w-2 bg-emerald-500 rounded-full metric-blink" />
                    <span className="text-xs text-emerald-500 font-mono">{project.status}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-slate-800 text-slate-300 rounded border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bg-slate-950 rounded-md p-3 border border-slate-800 font-mono text-xs space-y-1">
                  {project.logs.map((log, idx) => (
                    <div key={idx} className="text-slate-400 flex items-start gap-2">
                      {log.startsWith('✓') && <CheckCircle2 className="h-3 w-3 text-emerald-500 mt-0.5 flex-shrink-0" />}
                      <span className={log.startsWith('✓') ? 'text-emerald-500' : log.startsWith('→') ? 'text-blue-400' : ''}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="h-3 w-3" />
                    <span className="font-mono">
                      Deployed: {new Date(project.deployTime).toLocaleDateString()}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    View Details
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
