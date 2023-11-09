import React, { useMemo } from 'react'
import { useRouter } from 'next/router';
import LoginLayout from './LoginLayout';
import { DefaultLayoutProps } from '../../utils/AllProps';
import HomePageLayout from './HomePageLayout';

const DefaultLayout : React.FC<DefaultLayoutProps> = ({ children }) => {
    const Router = useRouter();
    const Path = useMemo(() => Router.pathname, [Router?.pathname]);
    const loginPages = ["/login"];
    return (
      <>
        {loginPages.includes(Path) ? (
          <LoginLayout children={children} />
        ) : (
          <HomePageLayout children={children} />
        )}
      </>
    );
  };

export default DefaultLayout