import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { currentTheme, isDarkMode } = useTheme();

  return (
    <div
      className="min-h-screen transition-colors duration-200 bg-3d"
      style={{ backgroundColor: currentTheme.bg.primary }}
    >
      {/* Orbs 3D - cores diferentes para light/dark */}
      <div
        className="bg-3d-orb w-[min(95vmax,720px)] h-[min(95vmax,720px)] -top-[45%] -left-[22%]"
        style={{
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(126, 34, 206, 0.55) 0%, rgba(49, 46, 129, 0.25) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, rgba(79, 70, 229, 0.25) 50%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="bg-3d-orb w-[min(75vmax,560px)] h-[min(75vmax,560px)] top-[35%] -right-[12%]"
        style={{
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(30, 58, 138, 0.22) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(124, 58, 237, 0.2) 50%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="bg-3d-orb w-[min(65vmax,440px)] h-[min(65vmax,440px)] top-[65%] left-[8%]"
        style={{
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(131, 24, 67, 0.18) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, rgba(219, 39, 119, 0.15) 50%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="bg-3d-orb w-[min(55vmax,380px)] h-[min(55vmax,380px)] top-[10%] right-[22%]"
        style={{
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(88, 28, 135, 0.15) 55%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.15) 55%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="bg-3d-orb w-[min(50vmax,360px)] h-[min(50vmax,360px)] bottom-[15%] right-[8%]"
        style={{
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(34, 211, 238, 0.35) 0%, rgba(21, 94, 117, 0.12) 55%, transparent 70%)'
            : 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(6, 182, 212, 0.12) 55%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="bg-3d-content">
        {children}
      </div>
    </div>
  );
}; 