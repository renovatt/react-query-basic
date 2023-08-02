import { getSkills } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const useSkillsQuery = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['skills'],
    queryFn: () => getSkills(),
  });
  return { data, isLoading, error, isError };
};