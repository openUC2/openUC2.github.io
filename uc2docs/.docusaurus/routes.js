import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'd92'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '706'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'f96'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '409'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '41b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '72f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '299'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '426'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '6bb'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '316'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'e2b'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'f93'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'cb6'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '5d2'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'fe9'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'e32'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'fd7'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '957'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '497'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '484'),
    routes: [
      {
        path: '/docs/DiscoveryKit/DiscKit1',
        component: ComponentCreator('/docs/DiscoveryKit/DiscKit1', '75c'),
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
    component: ComponentCreator('/', '781'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
