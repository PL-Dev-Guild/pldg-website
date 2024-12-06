import { Twitter, Send } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-steel/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo and Description */}
          <div className="text-center">
            <h4 className="font-spaceGrotesk font-bold text-2xl mb-4">PLDG</h4>
            <p className="text-steel max-w-md mx-auto">
              Growing the impact of open source contributors to Protocol Labs & Web3 public goods projects.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://t.me/+o0fw5UQg2-BlNjc1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel hover:text-electric transition-colors flex items-center space-x-2 group"
            >
              <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              <span>Telegram</span>
            </a>
            <a
              href="https://x.com/pldevguild"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel hover:text-electric transition-colors flex items-center space-x-2 group"
            >
              <Twitter className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              <span>Twitter</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-steel/60 text-sm font-jetbrains">
            © {new Date().getFullYear()} Protocol Labs Dev Guild. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}; 