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
      {/* Orbs 3D - mesma paleta do nome: #1f2421, #216869, #49a078, #9cc5a1, #dce1de */}
      <div
        className="bg-3d-orb w-[min(95vmax,720px)] h-[min(95vmax,720px)] -top-[45%] -left-[22%]"
        style={{
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(33, 104, 105, 0.5) 0%, rgba(31, 36, 33, 0.25) 45%, transparent 50%)'
            : 'radial-gradient(circle, rgba(73, 160, 120, 0.45) 0%, rgba(33, 104, 105, 0.2) 50%, transparent 50%)',
        }}
        aria-hidden
      />
      <div
        className="bg-3d-orb w-[min(75vmax,560px)] h-[min(75vmax,560px)] top-[35%] -right-[12%]"
        style={{
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(73, 160, 120, 0.45) 0%, rgba(33, 104, 105, 0.2) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(156, 197, 161, 0.4) 0%, rgba(73, 160, 120, 0.18) 50%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="bg-3d-orb w-[min(65vmax,440px)] h-[min(65vmax,440px)] top-[65%] left-[8%]"
        style={{
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(156, 197, 161, 0.35) 0%, rgba(73, 160, 120, 0.15) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(220, 225, 222, 0.35) 0%, rgba(156, 197, 161, 0.15) 50%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="bg-3d-orb w-[min(55vmax,380px)] h-[min(55vmax,380px)] top-[10%] right-[22%]"
        style={{
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(33, 104, 105, 0.45) 0%, rgba(31, 36, 33, 0.15) 55%, transparent 70%)'
            : 'radial-gradient(circle, rgba(33, 104, 105, 0.4) 0%, rgba(73, 160, 120, 0.15) 55%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="bg-3d-orb w-[min(50vmax,360px)] h-[min(50vmax,360px)] bottom-[15%] right-[8%]"
        style={{
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(73, 160, 120, 0.4) 0%, rgba(33, 104, 105, 0.12) 55%, transparent 70%)'
            : 'radial-gradient(circle, rgba(156, 197, 161, 0.3) 0%, rgba(73, 160, 120, 0.12) 55%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="bg-3d-content">
        {children}
      </div>
    </div>
  );
}; 