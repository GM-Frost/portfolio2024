import { Divide } from "lucide-react";
import Socials from "./Socials";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* Socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary text-[20px] dark:text-white/70 hover:text-white dark:hover:text-primary duration-300 transition-colors"
          />
          <div className="text-muted-foreground">
            Copyright &copy; {date} - Nayan Bastola.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
