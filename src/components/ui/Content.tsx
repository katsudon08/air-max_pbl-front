import React, { ReactNode } from 'react'

export const Content = ({ children }: { children: ReactNode}) => {
    return (
        <div className='p-2'>
            {children}
        </div>
    )
}
