import { Fragment, useState } from 'react'

export default function SkillsSection({ servant }: SkillsSectionProps) {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleTabChange = (i: number) => {
    setActiveTab(i)
  }

  return (
    <div className='mt-8'>
      <h3 className='text-3xl font-bold mb-3'>Skills</h3>
      <div className='flex flex-col gap-y-2 border-2 border-primary w-[870px]'>
        <div className='tabs px-4 item gap-x-6 border-b-2 border-primary py-2'>
          {servant.skills.slice(0, 3).map((skill, i) => (
            <span
              key={i}
              className={`text-2xl tab p-0 ${
                activeTab === i ? 'tab-active' : ''
              }`}
              onClick={() => handleTabChange(i)}
            >
              {skill.name}
            </span>
          ))}
        </div>
        <div className='px-4 pb-2'>
          {servant.skills.slice(0, 3).map(
            (skill, i) =>
              activeTab === i && (
                <div key={i} className='flex gap-2 items-center max-h-52'>
                  <>
                    <img className='w-20' src={skill.icon} alt={skill.name} />
                    <p className='break-normal'>{skill.detail}</p>
                  </>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  )
}

interface SkillsSectionProps {
  servant: Servant
}
