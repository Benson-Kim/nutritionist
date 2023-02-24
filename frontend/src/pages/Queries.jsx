import React from 'react'
import Accordion from './Accordion'

const Queries = () => {

    return (
        <div className='my-8 md:my-10 lg:my-12 px-4 bg-blue-600'>
            <section className="max-w-6xl mx-auto text-center">
                <Accordion title="All Clients" content={lorem} />
                <Accordion title="meal information of a specific client for a specific date" content={lorem} />
                <Accordion title="information of the foods which their calories are less than the average of foods registered in the database" content={lorem} />
                <Accordion title="show information of the foods which their calories are less than the average of foods registered in the database" content={lorem} />
                <Accordion title="show the name of the client who consumed the highest amount of calorie in a specific date" content={lorem} />
                <Accordion title="show information of the youngest and oldest client" content={lorem} />
                <Accordion title="for each food that their calorie is higher than average, show the number of clients who consumed that food" content={lorem} />
                <Accordion title="show the average of calories of the foods that contain that specific ingredient." content={lorem} />
                <Accordion title="the average calorie consumption of females and males" content={lorem} />
                <Accordion title="what was the most consumed food, along with its calorie, category, number of people consumed" content={lorem} />
                <Accordion title="calculate weight status of each of each client " content={lorem} />
                <Accordion title="for each client weight status (underweight, healthy, overweight, obese) show the average time of the day that have consume their food on a specific date" content={lorem} />
                <Accordion title="show the ingredient which is used mostly in a specific week for obese clients" content={lorem} />
            </section>
        </div>
    )
}

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default Queries
