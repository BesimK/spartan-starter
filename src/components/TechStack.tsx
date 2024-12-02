import Image from "next/image";
import { motion } from "framer-motion";

const tools = [
  { name: "Next.js", icon: "/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/tailwind.svg" },
  { name: "shadcn/ui", icon: "/shadcn.svg" },
  { name: "Convex", icon: "/convex.svg" },
  { name: "next-intl", icon: "/next-intl.svg" },
];

export function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="flex flex-wrap justify-center items-center gap-8 mt-12"
    >
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
          className="group"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="relative flex flex-col items-center"
          >
            <div className="relative">
              <Image
                src={tool.icon}
                alt={tool.name}
                width={80}
                height={80}
                className="transition-all duration-300 group-hover:drop-shadow-lg"
              />
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-75 blur"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="mt-4 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-500">
              {tool.name}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
