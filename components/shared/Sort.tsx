import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { ArrowDownWideNarrow } from 'lucide-react'
import React from 'react'
interface IParams {
  className?: string
}
const Sort: React.FC<IParams> = ({ className }) => {
  return (
    <Popover>
      <PopoverTrigger className={cn('inline-flex items-center justify-center gap-[5px] py-4 px-5 bg-gray-50 rounded-2xl text-black text-sm font-bold cursor-pointer', className)}>
        <ArrowDownWideNarrow size={16} />
        Сортировка:
        <span className='text-primary '>
          рейтингу
        </span>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  )
}

export default Sort