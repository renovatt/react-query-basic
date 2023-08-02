'use client'

import SmallLoading from './SmallLoading'
import { useSkillsQuery } from '@/hooks/useSkillsQuery'
import { ErrorMessageResponse, SkillsResponse } from '../@types'

const ListSkills = () => {
    const {
        data,
        isLoading,
        error,
        isError
    } = useSkillsQuery()

    if (isError) {
        const errorResponse = error as ErrorMessageResponse;
        return (
            <p className='w-44 text-center text-xs font-bold py-2 transition-all text-textPrimary hover:text-white bg-white hover:bg-backgroundPrimary rounded-lg mt-2'>{errorResponse.message}
            </p>
        )
    }

    const skillsData = data as SkillsResponse;
    return (
        <section>
            {isLoading ? <SmallLoading /> : skillsData.skills?.map(skill => (
                <ul className='flex justify-center items-center' key={skill.id}>
                    <li className='w-44 text-center text-xs font-bold py-2 transition-all text-textPrimary hover:text-white bg-white hover:bg-backgroundPrimary rounded-lg mt-2'>{skill.skill_name}</li>
                </ul>
            ))}
        </section>
    )
}

export default ListSkills;