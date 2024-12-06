import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const partners = [
  {
    name: "Filecoin",
    logo: "/partners/Filecoin Logo (3).png",
    description: "Decentralized storage network",
    website: "https://filecoin.io"
  },
  {
    name: "IPFS",
    logo: "/partners/IPFS Logo 1024.png",
    description: "Distributed file system protocol",
    website: "https://ipfs.tech"
  },
  {
    name: "Libp2p",
    logo: "/partners/Libp2p Logo.png",
    description: "Modular network protocol stack",
    website: "https://libp2p.io"
  },
  {
    name: "Akave",
    logo: "/partners/Akave Logo.png",
    description: "Web3 infrastructure solutions",
    website: "https://www.akave.ai/"
  }
];

const successStories = [
  {
    title: "Enhanced Peer Connection Management",
    description: "Implemented a new host interface method get_connected_peers in py-libp2p, significantly improving network visibility tracking capabilities.",
    impact: "Improved network monitoring and management capabilities for libp2p implementations",
    contributor: "Vraj Desai",
    project: "libp2p"
  },
  {
    title: "Protocol Security Strengthening",
    description: "Implemented private configuration fields in rust-libp2p, improving the protocol's encapsulation and safety.",
    impact: "Enhanced security and encapsulation in rust-libp2p implementations",
    contributor: "Krishang Shah",
    project: "libp2p"
  },
  {
    title: "Lotus Performance Optimization",
    description: "Multiple improvements including chainindexer optimization, automated documentation workflow, and enhanced error handling for message retrieval.",
    impact: "Significant performance improvements and reliability enhancements for Lotus",
    contributor: "Viraj Bhartiya",
    project: "Filecoin"
  },
  {
    title: "IPFS Framework Integration",
    description: "Resolved Angular-Helia integration issues and optimized IPLD explorer components.",
    impact: "Improved accessibility for Angular developers and enhanced system efficiency",
    contributor: "Paschal Okwuosa & Vaishnavi Singh",
    project: "IPFS"
  }
];

export const PartnerShowcase = () => {
  return (
    <div className="space-y-24">
      {/* Partners Section */}
      <div>
        <h3 className="font-spaceGrotesk text-3xl font-bold mb-12 text-center">Technology Partners</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 mb-4 w-full aspect-square flex items-center justify-center transition-all group-hover:bg-steel/10 border border-steel/10 relative">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-32 h-32 object-contain filter brightness-100"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-electric" />
                </div>
              </div>
              <h4 className="font-spaceGrotesk font-bold text-white text-lg mb-2 group-hover:text-electric transition-colors">
                {partner.name}
              </h4>
              <p className="text-sm text-steel">{partner.description}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Success Stories Section */}
      <div>
        <h3 className="font-spaceGrotesk text-3xl font-bold mb-12 text-center">Contributor Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm rounded-lg p-8 space-y-4 hover:bg-steel/10 transition-colors border border-steel/10"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-spaceGrotesk font-bold text-xl text-electric">{story.title}</h4>
                  <div className="text-sm text-steel/70 font-jetbrains mt-1">
                    Project: {story.project}
                  </div>
                </div>
              </div>
              <p className="text-steel">{story.description}</p>
              <div className="pt-4 border-t border-steel/10">
                <div className="text-mint font-jetbrains mb-2">Impact</div>
                <p className="text-white">{story.impact}</p>
              </div>
              <div className="text-sm text-steel/70 font-jetbrains">
                Contributed by {story.contributor}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}; 