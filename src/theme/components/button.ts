export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: '16px',
        boxShadow: '45px 76px 113px 7px rgba(112, 144, 176, 0.08)',
        transition: '.25s all ease',
        boxSizing: 'border-box',
        _focus: {
          boxShadow: 'none',
        },
        _active: {
          boxShadow: 'none',
        },
      },
      variants: {
        outline: () => ({
          borderRadius: '16px',
        }),
        brand: () => ({
          bg: 'brand.500',
          color: 'white',
          _focus: {
            bg: 'brand.500',
          },
          _active: {
            bg: 'brand.500',
          },
          _hover: {
            bg: 'brand.600',
          },
        }),
        darkBrand: () => ({
          bg: 'brand.900',
          color: 'white',
          _focus: {
            bg: 'brand.900',
          },
          _active: {
            bg: 'brand.900',
          },
          _hover: {
            bg: 'brand.800',
          },
        }),
        lightBrand: () => ({
          bg: '#F2EFFF',
          color: 'brand.500',
          _focus: {
            bg: '#F2EFFF',
          },
          _active: {
            bg: 'secondaryGray.300',
          },
          _hover: {
            bg: 'secondaryGray.400',
          },
        }),
        light: () => ({
          bg: 'secondaryGray.300',
          color: 'secondaryGray.900',
          _focus: {
            bg: 'secondaryGray.300',
          },
          _active: {
            bg: 'secondaryGray.300',
          },
          _hover: {
            bg: 'secondaryGray.400',
          },
        }),
        action: () => ({
          fontWeight: '500',
          borderRadius: '50px',
          bg: 'secondaryGray.300',
          color: 'brand.500',
          _focus: {
            bg: 'secondaryGray.300',
          },
          _active: { bg: 'secondaryGray.300' },
          _hover: {
            bg: 'secondaryGray.200',
          },
        }),
        setup: () => ({
          fontWeight: '500',
          borderRadius: '50px',
          bg: 'transparent',
          border: '1px solid',
          borderColor: 'secondaryGray.400',
          color: 'secondaryGray.900',
          _focus: {
            bg: 'transparent',
          },
          _active: { bg: 'transparent' },
          _hover: {
            bg: 'secondaryGray.100',
          },
        }),
      },
    },
  },
};
