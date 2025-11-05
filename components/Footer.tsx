import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card/30 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-text-secondary">
        <p>&copy; {new Date().getFullYear()} Minimalist Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
