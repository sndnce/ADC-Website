window.addEventListener('DOMContentLoaded', () => {
    const ambient = document.getElementById('ambient-audio');
    const tick = document.getElementById('tick-audio');
    if (ambient) ambient.volume = 0.15;
    if (tick) tick.volume = 0.1;
  });
  