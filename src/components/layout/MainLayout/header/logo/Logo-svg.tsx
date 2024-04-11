interface LogoProps {
  style?: React.CSSProperties;
}

function LogoSVG(props: LogoProps): JSX.Element {
  const { style } = props;
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="100%"
        viewBox="6.24899959564209 5.782249927520752 87.5 87.96875"
      >
        <g stroke="#079AA2" strokeWidth="2.273563633258818px">
          <g fill="#079AA2">
            <path d="M29.688 46.875c2.5 0 4.688 2.188 4.688 4.688s-2.188 4.687-4.688 4.687-4.687-2.188-4.687-4.688 2.187-4.687 4.687-4.687m0-6.25c-5.937 0-10.938 5-10.938 10.938s5 10.938 10.938 10.938 10.938-5 10.938-10.938-5-10.938-10.938-10.938z"></path>
            <path d="M78.125 43.75h-25c-3.438 0-6.25 2.813-6.25 6.25v18.75H12.5V33.125L50 12.813l39.062 20.938 2.813-5.625L51.248 6.251c-.937-.625-1.875-.625-2.812 0L7.812 28.126c-.938.937-1.563 1.875-1.563 3.125v62.5h6.25v-18.75h75v18.75h6.25V59.376c0-8.75-6.874-15.625-15.624-15.625zm-25 25V50h25c5.313 0 9.375 4.063 9.375 9.375v9.375z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default LogoSVG;
