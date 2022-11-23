import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a78'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '93d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c53'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'e6d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '83f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'a30'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '30e'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '0fb'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '8d0'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'c5a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '1eb'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '65a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '3c7'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '2c9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'da1'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'ec0'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '0a3'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '661'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3e3'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ab1'),
    routes: [
      {
        path: '/docs/DiscoveryKit/DiscKit1',
        component: ComponentCreator('/docs/DiscoveryKit/DiscKit1', '75c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DiscoveryKit/MicroscopyCore/',
        component: ComponentCreator('/docs/DiscoveryKit/MicroscopyCore/', '3fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DiscoveryKit/MicroscopyCore/ALIGNMENT_FinOptics/',
        component: ComponentCreator('/docs/DiscoveryKit/MicroscopyCore/ALIGNMENT_FinOptics/', '303'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DiscoveryKit/MicroscopyCore/ALIGNMENT_InfOptics/',
        component: ComponentCreator('/docs/DiscoveryKit/MicroscopyCore/ALIGNMENT_InfOptics/', '524'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/DiscoveryKit/MicroscopyCore/BUILD_ME/',
        component: ComponentCreator('/docs/DiscoveryKit/MicroscopyCore/BUILD_ME/', '99c'),
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
      },
      {
        path: '/docs/PRODUCTION/PG_01_Camera',
        component: ComponentCreator('/docs/PRODUCTION/PG_01_Camera', 'eb1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PRODUCTION/PG_02_Eyepiece',
        component: ComponentCreator('/docs/PRODUCTION/PG_02_Eyepiece', '74f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PRODUCTION/PG_03_LENS',
        component: ComponentCreator('/docs/PRODUCTION/PG_03_LENS', 'f42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PRODUCTION/PG_04_KIN_MIR_45',
        component: ComponentCreator('/docs/PRODUCTION/PG_04_KIN_MIR_45', 'c5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PRODUCTION/PG_05_KIN_MIR_90',
        component: ComponentCreator('/docs/PRODUCTION/PG_05_KIN_MIR_90', '86f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PRODUCTION/PG_06_BEAMSPLITTER',
        component: ComponentCreator('/docs/PRODUCTION/PG_06_BEAMSPLITTER', 'ad8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PRODUCTION/PG_09_MIR_45',
        component: ComponentCreator('/docs/PRODUCTION/PG_09_MIR_45', '3cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PRODUCTION/PG_10_KIN_XY_LASER',
        component: ComponentCreator('/docs/PRODUCTION/PG_10_KIN_XY_LASER', 'd8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PRODUCTION/PG_11_STAGE_Z_MANUAL',
        component: ComponentCreator('/docs/PRODUCTION/PG_11_STAGE_Z_MANUAL', '112'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PRODUCTION/PG_12_STAGE_Z_NEMA',
        component: ComponentCreator('/docs/PRODUCTION/PG_12_STAGE_Z_NEMA', '923'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PRODUCTION/PG_13_TORCH',
        component: ComponentCreator('/docs/PRODUCTION/PG_13_TORCH', '4c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PRODUCTION/PG_14_SAMPLE_HOLDEr',
        component: ComponentCreator('/docs/PRODUCTION/PG_14_SAMPLE_HOLDEr', '1d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PRODUCTION/PG_15_POLARIZER_ROTATING',
        component: ComponentCreator('/docs/PRODUCTION/PG_15_POLARIZER_ROTATING', 'a58'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PRODUCTION/PG_16_APERTURES',
        component: ComponentCreator('/docs/PRODUCTION/PG_16_APERTURES', '416'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ee5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
