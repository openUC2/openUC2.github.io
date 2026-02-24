const footerColumn = (releaseChannel) => {
  const result = {
    title: 'Documentation',
    items: [
      {
        label: 'Home',
        to: '/',
      },
      {
        label: 'Workshops',
        to: '/workshops',
      },
      {
        label: 'Archive',
        to: '/archive',
      },
    ],
  }
  if (releaseChannel === 'offline') {
    result.items.push({
      label: 'Latest Docs',
      href: 'https://openuc2.github.io',
    });
  }
  return result;
};

module.exports = footerColumn;
