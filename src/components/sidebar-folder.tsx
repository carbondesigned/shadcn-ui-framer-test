import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {CardStackIcon} from '@radix-ui/react-icons';
import {useState} from 'react';

type File = {
  title: string;
  id: number;
};

type SidebarFolderProps = {
  title: string;
  files: File[];
};
export default function SidebarFolder({title, files}: SidebarFolderProps) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem
        value='item-1'
        className='border-none hover:bg-secondary data-[state="open"]:bg-secondary rounded-md'
      >
        <AccordionTrigger
          className={` p-2 rounded-md`}
          onClick={() => setIsSelected(!isSelected)}
        >
          <div className='flex space-x-2 items-center'>
            <CardStackIcon />
            <span className='font-bold'>{title}</span>
          </div>
        </AccordionTrigger>
        {files.map((file) => (
          <AccordionContent
            key={file.id}
            className='py-2 pl-4 bg-background cursor-pointer hover:underline'
          >
            {file.title}
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
}
