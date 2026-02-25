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
      label: 'Latest Documentation',
      href: 'https://docs.openuc2.com',
    });
  }
  return result;
};

module.exports = footerColumn;
