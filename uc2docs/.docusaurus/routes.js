import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '9ed'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '98c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd53'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '452'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'da0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '347'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'f2a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'a87'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '19f'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'd54'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'fa4'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'df4'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '744'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '12a'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '9be'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '5fe'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '318'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'afb'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'c84'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '921'),
    routes: [
      {
        path: '/docs/DiscoveryKit/DiscKit1',
        component: ComponentCreator('/docs/DiscoveryKit/DiscKit1', '75c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DiscoveryKit/Polarisation/',
        component: ComponentCreator('/docs/DiscoveryKit/Polarisation/', '531'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DiscoveryKit/Polarisation/APP_POL_Brewster_Angle_Experiment/',
        component: ComponentCreator('/docs/DiscoveryKit/Polarisation/APP_POL_Brewster_Angle_Experiment/', '682'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DiscoveryKit/Polarisation/APP_POL_Circular_Polarizer/',
        component: ComponentCreator('/docs/DiscoveryKit/Polarisation/APP_POL_Circular_Polarizer/', '98b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DiscoveryKit/Polarisation/APP_POL_Crossed_Polarizers/',
        component: ComponentCreator('/docs/DiscoveryKit/Polarisation/APP_POL_Crossed_Polarizers/', '8ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DiscoveryKit/Polarisation/APP_POL_Many_Microscope_Slides_Experiment/',
        component: ComponentCreator('/docs/DiscoveryKit/Polarisation/APP_POL_Many_Microscope_Slides_Experiment/', '506'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DiscoveryKit/Polarisation/APP_POL_Newtons_Rings_Experiment/',
        component: ComponentCreator('/docs/DiscoveryKit/Polarisation/APP_POL_Newtons_Rings_Experiment/', 'b07'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DiscoveryKit/Polarisation/APP_POL_Polarization_using_optically_active_solution/',
        component: ComponentCreator('/docs/DiscoveryKit/Polarisation/APP_POL_Polarization_using_optically_active_solution/', 'bfe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DiscoveryKit/Polarisation/APP_POL_Stress_Birefringence/',
        component: ComponentCreator('/docs/DiscoveryKit/Polarisation/APP_POL_Stress_Birefringence/', '6c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DiscoveryKit/Polarisation/APP_POL_Three_Polarizers/',
        component: ComponentCreator('/docs/DiscoveryKit/Polarisation/APP_POL_Three_Polarizers/', '731'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Electronics/uc2e1',
        component: ComponentCreator('/docs/Electronics/uc2e1', '91f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Electronics/uc2e2',
        component: ComponentCreator('/docs/Electronics/uc2e2', '67b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Electronics/uc2e3',
        component: ComponentCreator('/docs/Electronics/uc2e3', '4c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Electronics/uc2e4',
        component: ComponentCreator('/docs/Electronics/uc2e4', '74b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Electronics/uc2e5',
        component: ComponentCreator('/docs/Electronics/uc2e5', 'ba6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Electronics/uc2e6',
        component: ComponentCreator('/docs/Electronics/uc2e6', 'bc6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Electronics/uc2e7',
        component: ComponentCreator('/docs/Electronics/uc2e7', '07d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Electronics/uc2e8',
        component: ComponentCreator('/docs/Electronics/uc2e8', '60b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Electronics/uc2e9',
        component: ComponentCreator('/docs/Electronics/uc2e9', 'e67'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ImSwitch/ImSwitchInstall',
        component: ComponentCreator('/docs/ImSwitch/ImSwitchInstall', '178'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mdx',
        component: ComponentCreator('/docs/mdx', '9de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/MiniBox/uc2miniboxDE',
        component: ComponentCreator('/docs/MiniBox/uc2miniboxDE', 'bbd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/MiniBox/uc2miniboxEN',
        component: ComponentCreator('/docs/MiniBox/uc2miniboxEN', '1f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '0f7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
