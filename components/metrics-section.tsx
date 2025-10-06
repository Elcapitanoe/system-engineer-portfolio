'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, TrendingUp, Zap, Clock } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const uptimeData = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  uptime: 95 + Math.random() * 5,
}));

const performanceData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  cpu: 30 + Math.random() * 40,
  memory: 50 + Math.random() * 30,
  network: 20 + Math.random() * 50,
}));

const systemStats = [
  {
    label: 'Average Uptime',
    value: '99.8%',
    change: '+0.2%',
    icon: TrendingUp,
    color: 'text-emerald-500',
  },
  {
    label: 'Response Time',
    value: '12ms',
    change: '-3ms',
    icon: Zap,
    color: 'text-blue-500',
  },
  {
    label: 'Active Sessions',
    value: '1,247',
    change: '+89',
    icon: Activity,
    color: 'text-cyan-500',
  },
  {
    label: 'Total Uptime',
    value: '342d',
    change: '+1d',
    icon: Clock,
    color: 'text-amber-500',
  },
];

export function MetricsSection() {
  return (
    <section className="py-12 md:py-16 bg-slate-950/50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="h-6 w-6 text-emerald-500" />
            <h2 className="text-3xl font-bold text-slate-50">System Metrics & Analytics</h2>
          </div>
          <p className="text-slate-400 font-mono text-sm">
            {'>'} tail -f /var/log/system-metrics.log
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {systemStats.map((stat) => (
            <Card key={stat.label} className="card-glow">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  <span className="text-xs text-slate-400 font-mono">{stat.label}</span>
                </div>
                <div className="text-2xl font-bold text-slate-50 mb-1">{stat.value}</div>
                <div className={`text-xs font-mono ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-blue-500'}`}>
                  {stat.change} from last week
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-emerald-500" />
                24-Hour Uptime
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={uptimeData}>
                    <defs>
                      <linearGradient id="uptimeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                    <XAxis
                      dataKey="hour"
                      stroke="#64748b"
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      tickFormatter={(value) => `${value}:00`}
                    />
                    <YAxis
                      stroke="#64748b"
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      domain={[90, 100]}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#e2e8f0',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="uptime"
                      stroke="#10b981"
                      strokeWidth={2}
                      fill="url(#uptimeGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-slate-400 font-mono">Current: 99.2%</span>
                <span className="text-emerald-500 font-mono">Target: 99.5%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                30-Day Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                    <XAxis
                      dataKey="day"
                      stroke="#64748b"
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      tickFormatter={(value) => `D${value}`}
                    />
                    <YAxis stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#e2e8f0',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="cpu"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={false}
                      name="CPU"
                    />
                    <Line
                      type="monotone"
                      dataKey="memory"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={false}
                      name="Memory"
                    />
                    <Line
                      type="monotone"
                      dataKey="network"
                      stroke="#06b6d4"
                      strokeWidth={2}
                      dot={false}
                      name="Network"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-slate-400 font-mono">CPU</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                  <span className="text-slate-400 font-mono">Memory</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full" />
                  <span className="text-slate-400 font-mono">Network</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
