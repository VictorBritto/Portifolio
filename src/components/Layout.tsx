interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#030a15] relative overflow-hidden">
      {/* ═══ STAR WARS BACKGROUND (Whole Page) ═══ */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="stars-layer" />
        <div className="stars-layer stars-layer-2" />
        
        {/* Perspective Grid at the bottom of the viewport */}
        <div className="sw-grid" />
        
        {/* Scanlines over everything */}
        <div className="sw-scanlines" />
        
        {/* Vignette for cinematic feel */}
        <div className="sw-vignette" />
      </div>

      <div className="aurora-content relative z-10">
        {children}
      </div>
    </div>
  );
};