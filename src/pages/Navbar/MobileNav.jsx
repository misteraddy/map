import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import MySvgIcon from "../../assets/name-logo-favicon.svg";
import MySvgIconDark from "../../assets/name-logo-white.svg";
import { useTheme } from "../DarkMode/ThemeProvider";


export default function MobileNav() {

  const { theme } = useTheme();

  return (
    <div className="md:hidden ">
      <Sheet>
        <SheetTrigger asChild>
          <button className="text-gray-700 ml-5">
            <AlignJustify />
          </button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <Link to="/">
              <img
                className="w-auto h-6 xs:h-7 sm:h-10"
                src={theme === "dark" ? MySvgIconDark : MySvgIcon}
                alt="logo"
              />
            </Link>
          </SheetHeader>
          {/* <RangeSelect/> */}
        </SheetContent>
      </Sheet>
    </div>
  );
}
