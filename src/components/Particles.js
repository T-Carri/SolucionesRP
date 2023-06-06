import React, { useEffect } from 'react';
import 'particles.js'

export const ParticlesComponent = () => {
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.particlesJS.load('particles-js', 'particles.json', function () {
          console.log('particles.js loaded');
        });
      }
    }, []);

  return<div id="particles-js" />
};

