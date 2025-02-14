import { Link } from 'react-router-dom';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import { ModeToggle } from '../DarkMode/ModeToggle';

export default function Header() {
  return (
    <header className='sticky top-0 w-full border-b'>
      <div className='h-14 container flex items-center'>
        {/* Desktop */}
        <MainNav />

        {/* Mobile */}
        <MobileNav />

        {/* Desktop & mobile */}
        <div className='flex items-center justify-end flex-1 mr-4'>
          <ModeToggle/>
        </div>
      </div>
    </header>
  );
}
