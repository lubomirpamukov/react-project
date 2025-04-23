import React from 'react';
import { useState } from 'react';
import { GoTriangleDown, GoTriangleLeft } from 'react-icons/go';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    
    const handleClick = (id) => {
        setActiveIndex((current) => {
            if (current === id) {
                return -1;
            }
            return id;
        })
    }

    const renderedItems = items.map((item, index) => {
        const isActive = index === activeIndex;
        const icon = isActive ? <GoTriangleDown className='text-xl'/> : <GoTriangleLeft className='text-xl'/>;
        return (
            <div key={item.id}>
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                    </div>
                {isActive && <div className='border-b p-5'>{item.content}</div>}
            </div>
        )
    })
    
    return (
        <div className='border-x border-t rounded'>
            {renderedItems}
        </div>
    )
}

export default Accordion;