const Card = {
  baseStyle: {
    container: {
      p: '20px',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      position: 'relative',
      borderRadius: '20px',
      minWidth: '0px',
      wordWrap: 'break-word',
      bg: '#ffffff',
      boxShadow: '14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
      backgroundClip: 'border-box',
    },
  },
};

export const CardComponent = {
  components: {
    Card,
  },
};
