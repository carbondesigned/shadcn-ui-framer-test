'use client';
import {motion} from 'framer-motion';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {ModeToggle} from '@/components/ui/theme-toggle';
import SidebarFolder from '@/components/sidebar-folder';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fileStructure = [
    {
      title: 'Zig',
      files: [
        {
          title: 'WebAssembly',
          id: 1,
        },
        {
          title: 'Async',
          id: 2,
        },
        {
          title: 'String Manipulation',
          id: 3,
        },
      ],
    },
    {
      title: 'School',
      files: [
        {
          title: 'Calc II',
          id: 1,
        },
        {
          title: 'Physics',
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <nav>
        <ModeToggle />
      </nav>
      <main className='grid place-items-center min-h-screen bg-background w-full'>
        <div className='grid place-items-center h-full w-full'>
          <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <span>Toggle Sidebar</span>
          </Button>
        </div>
        <motion.div
          initial={{x: '-100%'}}
          animate={{x: isSidebarOpen ? '0%' : '-100%'}}
          transition={{type: 'spring', stiffness: 250, damping: 30}}
          className='top-0 left-0 w-64 bg- text-white fixed h-full overflow-auto z-30 bg-background border-r'
        >
          <div className='p-5'>
            <h4 className='text-sm font-bold text-muted-foreground'>
              Sidebar Content
            </h4>

            {fileStructure.map((folder) => (
              <SidebarFolder
                key={folder.title}
                title={folder.title}
                files={folder.files}
              />
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
