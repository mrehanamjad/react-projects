import React from 'react';
import { CgNotes } from '../icons';

const Header: React.FC = () => {
  return (
    <div className='h-12 w-full bg-slate-500 flex justify-center items-center font-bold text-2xl'>
      <div className="flex gap-1" id='logo'>
        <CgNotes className='mt-1' /> R_Notes
      </div>
    </div>
  );
};

export default Header;
