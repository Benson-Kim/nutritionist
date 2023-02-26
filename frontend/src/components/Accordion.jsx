import React, { useState } from 'react'

const Accordion = ({ title, content }) => {

    const minusIcon = '-'
    const plusIcon = '+'
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => setExpanded((current) => !current)

    return (
        <div className={`my-1 sm:my-2 md:my-3 shadow-md  rounded ${expanded ? "bg-white" : "bg-slate-50"}`} >
            <div className="px-6 text-left items-center h-14 select-none flex justify-between flex-row">
                <h5 className='flex-1 font-semibold '>{title}</h5>
                <div className="flex-none pl-2 text-3xl font-semibold cursor-pointer " onClick={toggleExpanded}>{expanded ? minusIcon : plusIcon} </div>
            </div>
            <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${expanded ? "max-h-min" : "max-h-0"}`}>
                <section className="pb-4 text-left font-light">
                    {content}
                </section>
            </div>
        </div>
    )
}

export default Accordion