'use client'

import SmallLoading from './SmallLoading';
import { useSoftskillsQuery } from '@/hooks/useSoftskillsQuery';
import { ErrorMessageResponse, SoftskillsResponse } from '@/@types'

const ListSoftskills = () => {
    const {
        data,
        isLoading,
        error,
        isError
    } = useSoftskillsQuery()

    if (isError) {
        const errorResponse = error as ErrorMessageResponse;
        return (
            <p className='w-44 text-center text-xs font-bold py-2 transition-all text-textPrimary hover:text-white bg-white hover:bg-backgroundPrimary rounded-lg mt-2'>{errorResponse.message}
            </p>
        )
    }

    const softskillsData = data as SoftskillsResponse;
    return (
        <section>
            {isLoading ? <SmallLoading /> : softskillsData.softskills?.map(softskill => (
                <ul className='flex justify-center items-center' key={softskill.id}>
                    <li className='w-44 text-center text-xs font-bold py-2 transition-all text-textPrimary hover:text-white bg-white hover:bg-backgroundPrimary rounded-lg mt-2'>{softskill.softskill_name}</li>
                </ul>
            ))}
        </section>
    )
}

export default ListSoftskills;