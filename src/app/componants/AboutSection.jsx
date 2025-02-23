"use client";
import React, { useTransition, useState }from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>NextJs</li>
                <li>php</li>
                <li>sql</li>
                <li>Node.js</li>

        </ul>
        )
        
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>

                <li>Rajamangala University of Technology Phra Nakhon</li>
                

        </ul>
        )
        
    }
    
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src={'/images/Desktop.png'}
                    alt='about'
                    width={500}
                    height={500}
            />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                    I am studying at Rajamangala University of Technology Phra Nakhon in the field of Computer Science.
                    I have experience woking with Python, HTML, CSS, JavaScript, React, Node.js .
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active={tab === "education"}>
                        {" "}
                        Education{" "}
                    </TabButton>                 
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) =>t.id === tab).content}</div>
        </div>
        </div>
      
    </section>
  )
}

export default AboutSection
