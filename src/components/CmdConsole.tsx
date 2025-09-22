import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const commandsHelp = [
  { cmd: 'whoami', desc: 'Show identity (redirect to Home)' },
  { cmd: 'about', desc: 'Go to About page' },
  { cmd: 'projects', desc: 'Open Projects page' },
  { cmd: 'contact', desc: 'Open Contact page' },
  { cmd: 'help', desc: 'Show available commands' },
  { cmd: 'clear', desc: 'Clear the console' },
];

const CmdConsole: React.FC = () => {
  const [history, setHistory] = useState<string[]>(["Type 'help' to see available commands."]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const append = (line: string) => setHistory((h) => [...h, line]);

  const handleCommand = (cmdRaw: string) => {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    append(`> ${cmdRaw}`);

    switch (cmd) {
      case 'whoami':
        append("Hi, my name is Genesis Polotan");
        navigate('/'); // will redirect to main cmd page's home route - we also want to navigate to /home
        navigate('/home');
        break;
      case 'about':
        append('Opening About...');
        navigate('/about');
        break;
      case 'projects':
      case 'portfolio':
        append('Opening Projects...');
        navigate('/portfolio');
        break;
      case 'contact':
        append('Opening Contact...');
        navigate('/contact');
        break;
      case 'help':
        commandsHelp.forEach((c) => append(`${c.cmd} - ${c.desc}`));
        break;
      case 'clear':
        setHistory([]);
        break;
      default:
        append(`${cmdRaw}: command not found. Type 'help' for list of commands.`);
    }
  };

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-black text-green-400 font-mono">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-black/90 border border-green-500/30 rounded-lg shadow-2xl p-6">
          <div className="h-64 overflow-auto mb-4">
            {history.map((line, idx) => (
              <div key={idx} className="text-sm text-gray-200">{line}</div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="flex items-center space-x-2">
            <span className="text-green-400">genesis@portfolio:~$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white"
              autoComplete="off"
              spellCheck={false}
            />
            <button type="submit" className="px-3 py-1 bg-green-500/20 rounded">Run</button>
          </form>

          <div className="mt-6 text-xs text-gray-400">
            Available commands: {commandsHelp.map((c) => c.cmd).join(', ')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CmdConsole;
