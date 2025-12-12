import { useEffect } from 'react';

const ComingSoon = () => {
  useEffect(() => {
    window.location.replace('https://game.forrealscan.com');
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#0a192f] to-[#020c1b]">
      <p className="text-white">Weiterleitung zu game.forrealscan.com...</p>
    </div>
  );
};

export default ComingSoon;
