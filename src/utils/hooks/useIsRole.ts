import useAuth from 'src/utils/hooks/useAuth';

const useIsRole = (roles: string[]): boolean => {
  const { user } = useAuth();
  if ((user && roles.includes(user?.role)) || roles.includes('noRole')) {
    return true;
  }
  return false;
};

export default useIsRole;
