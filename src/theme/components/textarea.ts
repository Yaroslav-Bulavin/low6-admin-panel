export const textareaStyles = {
  components: {
    Textarea: {
      baseStyle: {
        field: {
          fontWeight: 400,
          borderRadius: '8px',
        },
      },
      variants: {
        main: () => ({
          field: {
            bg: 'transparent',
            border: '1px solid !important',
            color: 'secondaryGray.900',
            borderColor: 'secondaryGray.100',
            borderRadius: '16px',
            fontSize: 'sm',
            p: '20px',
            _placeholder: { color: 'secondaryGray.400' },
          },
        }),
        auth: () => ({
          field: {
            bg: 'white',
            border: '1px solid',
            borderColor: 'secondaryGray.100',
            borderRadius: '16px',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
        authSecondary: () => ({
          field: {
            bg: 'white',
            border: '1px solid',
            borderColor: 'secondaryGray.100',
            borderRadius: '16px',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
        search: () => ({
          field: {
            border: 'none',
            py: '11px',
            borderRadius: 'inherit',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
      },
    },
  },
};
