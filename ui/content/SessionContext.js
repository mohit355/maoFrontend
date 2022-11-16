import { createContext, useMemo } from 'react';
import { useRequest } from '../helpers/request-helper';

const SessionContext = createContext({});

export function SessionProvider({ children }) {
  const [{ data: session }, refetch] = useRequest({ method: 'GET', url: '/user/me' });

  const value = useMemo(() => ({ session, refetch }), [refetch, session]);

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionContext;