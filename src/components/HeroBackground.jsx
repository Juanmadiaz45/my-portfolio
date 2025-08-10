import React from 'react';

const HeroBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-black opacity-90"></div>
    <div 
      className="absolute inset-0 opacity-5" 
      style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, #06b6d4 0%, transparent 30%), radial-gradient(circle at 75% 75%, #6366f1 0%, transparent 30%)',
        animation: 'pulse 10s infinite'
      }}
    ></div>
    <div 
      className="absolute inset-0 opacity-10" 
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'rgb(100,116,139)\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }}
    />
  </div>
);

export default HeroBackground;