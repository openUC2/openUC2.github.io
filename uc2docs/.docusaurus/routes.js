
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','869'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','8ed'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','1b8'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','446'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','8c6'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','4d6'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','a35'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','a0b'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','d64'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','d0a'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','87d'),
  exact: true,
},
{
  path: '/docs/DiscKit1',
  component: ComponentCreator('/docs/DiscKit1','bf4'),
  exact: true,
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2','fd3'),
  exact: true,
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3','e02'),
  exact: true,
},
{
  path: '/docs/ImSwitchInstall',
  component: ComponentCreator('/docs/ImSwitchInstall','37e'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','955'),
  exact: true,
},
{
  path: '/docs/uc2e1',
  component: ComponentCreator('/docs/uc2e1','052'),
  exact: true,
},
{
  path: '/docs/uc2e2',
  component: ComponentCreator('/docs/uc2e2','fe9'),
  exact: true,
},
{
  path: '/docs/uc2e3',
  component: ComponentCreator('/docs/uc2e3','7f7'),
  exact: true,
},
{
  path: '/docs/uc2e4',
  component: ComponentCreator('/docs/uc2e4','bed'),
  exact: true,
},
{
  path: '/docs/uc2e5',
  component: ComponentCreator('/docs/uc2e5','5b5'),
  exact: true,
},
{
  path: '/docs/uc2e6',
  component: ComponentCreator('/docs/uc2e6','7db'),
  exact: true,
},
{
  path: '/docs/uc2e7',
  component: ComponentCreator('/docs/uc2e7','d46'),
  exact: true,
},
{
  path: '/docs/uc2e8',
  component: ComponentCreator('/docs/uc2e8','fe5'),
  exact: true,
},
{
  path: '/docs/uc2e9',
  component: ComponentCreator('/docs/uc2e9','013'),
  exact: true,
},
{
  path: '/docs/uc2miniboxDE',
  component: ComponentCreator('/docs/uc2miniboxDE','f40'),
  exact: true,
},
{
  path: '/docs/uc2miniboxEN',
  component: ComponentCreator('/docs/uc2miniboxEN','7a5'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
