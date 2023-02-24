import React, { useState } from 'react'

const Accordion = ({ title, content }) => {

    const minusIcon = '-'
    const plusIcon = '+'
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => setExpanded((current) => !current)

    return (
        <div className={`my-1 sm:my-2 md:my-3 shadow-md cursor-pointer rounded ${expanded ? "bg-white" : "bg-slate-50"}`} onClick={toggleExpanded}>
            <div className="px-6 text-left items-center h-14 select-none flex justify-between flex-row">
                <h5 className='flex-1 font-semibold '>{title}</h5>
                <div className="flex-none pl-2 text-3xl font-semibold">{expanded ? minusIcon : plusIcon} </div>
            </div>
            <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${expanded ? "max-h-40" : "max-h-0"}`}>
                <p className="pb-4 text-left font-light">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Accordion