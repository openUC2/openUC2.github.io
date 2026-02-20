const navbar = {
  title: 'openUC2 Documentation',
  logo: {
    alt: 'openUC2 Logo',
    src: 'img/Artboard4@4x.png',
  },
  items: [
    {
      type: 'doc',
      docId: 'usage/README',
      label: 'Usage',
      position: 'left',
    },
    {
      type: 'doc',
      docId: 'dev/README',
      label: 'Development',
      position: 'left',
    },
    {
      href: 'https://openuc2-gmbh.odoo.com',
      label: 'Shop',
      position: 'right',
    },
    {
      href: 'https://github.com/openuc2/',
      label: 'GitHub',
      position: 'right',
    },
  ],
}

module.exports = navbar;
