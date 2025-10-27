'use client';

import {useState, useEffect} from 'react';

export function Logo() {
  const [currentScheme, setCurrentScheme] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScheme((prev) => (prev + 1) % 2);
    }, 3000); // Alterna a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl font-display font-bold">
      {currentScheme === 0 ? (
        // Esquema 1: DEV em azul + ICTOR em ciano
        <span>
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            DEV
          </span>
          <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            ICTOR
          </span>
        </span>
      ) : (
        // Esquema 2: DE em azul + VICTOR em ciano
        <span>
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            DE
          </span>
          <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            VICTOR
          </span>
        </span>
      )}
    </div>
  );
}

