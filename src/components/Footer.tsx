import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-oat border-t border-carbon/10 py-12 px-8 flex flex-col md:flex-row justify-between items-center text-carbon font-body text-xs uppercase tracking-widest gap-6">
      <p className="opacity-60">© 2025 Steven Temimi. All Rights Reserved.</p>
      <div className="flex gap-8 font-medium">
        <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
        <a href="#" className="hover:opacity-60 transition-opacity">IMDb</a>
        <a href="#" className="hover:opacity-60 transition-opacity">Models.com</a>
      </div>
    </footer>
  );
};
