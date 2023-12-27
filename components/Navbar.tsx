import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavbarProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles?: string;
}

const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/projects",
    name: "projects",
  },
  {
    path: "/contact",
    name: "contact",
  },
];
const Navbar: React.FC<NavbarProps> = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
