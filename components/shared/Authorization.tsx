import React from 'react'
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog'
import { cn } from '@/lib/utils'

interface IParams {
  isOpen: boolean
}
const Authorization = ({ isOpen }: IParams) => {
  return (
    <>
      <Dialog open={isOpen} >
        <DialogContent
          className={
            cn('flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-[#31313194] z-[-10] opacity-0 transition-all duration-300',
              isOpen && ' z-[10] opacity-100')
          }
        >
          <div className=''>

          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Authorization