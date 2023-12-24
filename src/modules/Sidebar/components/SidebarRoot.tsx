import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './sidebarRoot.css';

import Calc from '../../../lib/assets/calc.svg';
import Projects from '../../../lib/assets/projects.svg';
import ContactUs from '../../../lib/assets/contact-us.svg';
import FAQ from '../../../lib/assets/faq.svg';
import TopBar from './TopBar/TopBar';

import { ISidebarRoot } from '../types';
import { useTypedSelector } from '../../../lib/hooks/useTypedSelector';
import { getUser } from '../../../lib/store/user';
import { useSignInSliceActions } from '../../../lib/store/auth';

const SidebarRoot: React.FC<ISidebarRoot> = (props) => {
  const router = useNavigate();
  const { pathname } = useLocation();

  const user = useTypedSelector(getUser);
  const { setDefaultState, setIsSignInOpen } = useSignInSliceActions();

  const [activeRoute, setActiveRoute] = useState('home');
  const [isMenuhidden, setIsMenuHidden] = useState(false);

  const switchActiveRoute = (path: string) => {
    switch (path) {
      case '/':
        setActiveRoute('home');
        break;
      case '/calc':
        setActiveRoute('calc');
        break;
      case '/profile':
        setActiveRoute('profile');
        break;
      case '/contact-us':
        setActiveRoute('contact-us');
        break;
      case '/faq':
        setActiveRoute('faq');
        break;
      case '/projects':
        if (!user) {
          setActiveRoute('home');
          router('/');
        } else {
          setActiveRoute('projects');
        }
        break;
    }
  };

  const changeLocation = (route: string) => {
    if (!user) {
      setIsSignInOpen(true);
      setDefaultState('signIn');
    } else {
      router(route);
    }
  };

  useEffect(() => {
    switchActiveRoute(pathname);
  }, [pathname, user]);

  return (
    <div className='page'>
      <div className='pageWithSidebar'>
        <div
          className={
            isMenuhidden ? 'sidebarRootHidden' : 'sidebarRoot'
          }
        >
          <div className='sidebarContent'>
            <div className='navigation'>
              <div className='companyName'>
                <h1 className='logo'>ARC PM</h1>

                <h5 className='shortDescription'>
                  Archit cacl and pm system
                </h5>
              </div>

              <div>
                <div
                  onClick={() => router('/calc')}
                  className={
                    activeRoute === 'calc'
                      ? 'navItem navItemActive'
                      : 'navItem'
                  }
                >
                  <div className='navItemIcon'>
                    <Calc width={25} height={24} />
                  </div>
                  <div className='navItemTitle'>Calculator</div>
                </div>

                <div
                  onClick={() => changeLocation('/projects')}
                  className={
                    activeRoute === 'projects'
                      ? 'navItem navItemActive'
                      : 'navItem'
                  }
                >
                  <div className='navItemIcon'>
                    <Projects />
                  </div>
                  <div className='navItemTitle'>Projects</div>
                </div>
              </div>
            </div>
            <div className='navigation'>
              <div
                onClick={() => router('/contact-us')}
                className={
                  activeRoute === 'contact-us'
                    ? 'navItem navItemActive'
                    : 'navItem'
                }
              >
                <div className='navItemIcon'>
                  <ContactUs />
                </div>
                <div className='navItemTitle'>Contact us</div>
              </div>
              <div
                onClick={() => router('/faq')}
                className={
                  activeRoute === 'faq'
                    ? 'navItem navItemActive'
                    : 'navItem'
                }
              >
                <div className='navItemIcon'>
                  <FAQ />
                </div>
                <div className='navItemTitle'>FAQ</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            isMenuhidden
              ? 'pageWrapperWithHiddenMenu'
              : 'pageWrapper'
          }
        >
          <TopBar />
          <div className='main-page-content'>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarRoot;
