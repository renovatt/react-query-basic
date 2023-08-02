'use client'

import Link from 'next/link'
import SmallLoading from './SmallLoading'
import { useProjectsQuery } from '@/hooks/useProjectsQuery'
import { ErrorMessageResponse, ProjectsResponse } from '../@types'

const ListProjects = () => {
    const {
        data,
        isLoading,
        error,
        isError
    } = useProjectsQuery()

    if (isError) {
        const errorResponse = error as ErrorMessageResponse;
        return (
            <p className='w-44 text-center text-xs font-bold py-2 transition-all text-textPrimary hover:text-white bg-white hover:bg-backgroundPrimary rounded-lg mt-2'>{errorResponse.message}
            </p>
        )
    }

    const projectsData = data as ProjectsResponse;

    return (
        <section>
            {isLoading ? <SmallLoading /> : projectsData.projects
                .sort((a, b) => a.order - b.order)
                .map((project) => (
                    <li className='flex justify-center items-center' key={project.id}>
                        <Link className='w-44 text-center text-xs font-bold py-2 transition-all text-textPrimary hover:text-white bg-white hover:bg-backgroundPrimary rounded-lg mt-2' href={project.deploy_url} target='_blank'>{project.project_name}</Link>
                    </li>
                ))}
        </section>
    )
}

export default ListProjects;