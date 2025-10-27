'use client';

export function ParticlesBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-secondary/40 rounded-full animate-float1" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent/60 rounded-full animate-float2" />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/50 rounded-full animate-float3" />
      <div className="absolute bottom-20 right-32 w-2 h-2 bg-secondary/30 rounded-full animate-float1" />
      <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-accent/40 rounded-full animate-float2" />
      <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-primary/60 rounded-full animate-float3" />
      <div className="absolute top-60 left-1/2 w-1 h-1 bg-secondary/50 rounded-full animate-float1" />
      <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-float2" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
    </div>
  );
}

