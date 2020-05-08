
export const selectStyles = {

  container: (provided) => ({
    ...provided,
    width: 140,
    marginBottom: '10px'
  }),

  control: (provided, state) => ({
    ...provided,
    fontSize: 11,
    padding: '0 4px 0 0',
    background: '#e7e9ec',
    background: 'linear-gradient(to bottom,#f7f8fa,#e7e9ec)',
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ADB1B8 #A2A6AC #8D9096',
    cursor: 'pointer',
    minHeight: 'auto',
    outline: 0,
    '&:hover': {
      borderColor: '#A2A6AC #979AA1 #82858A',
      background: 'linear-gradient(to bottom,#d8dbde,#c3c6ca)',
      borderColor: state.isFocused
        ? '#e77600'
        : '#A2A6AC #979AA1 #82858A',
    },
    boxShadow: state.isFocused
      ? '0 0 3px 2px rgba(228,121,17,.5)'
      : '0 1px 0 rgba(255,255,255,.6) inset',
    borderColor: state.isFocused
      ? '#e77600'
      : '#ADB1B8 #A2A6AC #8D9096',
  }),

  singleValue: () => ({
    margin: 0,
  }),

  indicatorSeparator: () => ({
    display: 'none'
  }),

  dropdownIndicator: () => ({
    padding: 0,
    color: '#555',
  }),

  menuList: (provided) => ({
    ...provided,
    paddingTop: 6,
    paddingBottom: 6
  }),

  option: (provided, state) => ({
    ...provided,
    border: state.isSelected ? '1px solid #A6A6A6' : '1px solid #FFF',
    borderLeftColor: state.isSelected ? '#e77600' : '#FFF',
    background: state.isSelected ? '#EEE' : '#FFF',
    fontSize: 13,
    color: '#111',
    padding: '2px 4px 2px 8px',
    cursor: 'pointer',
    '&:hover': {
      background: '#EEE',
      border: '1px solid #A6A6A6',
      borderLeftColor: state.isSelected ? '#e77600' : '#A6A6A6',
    }
  }),

}