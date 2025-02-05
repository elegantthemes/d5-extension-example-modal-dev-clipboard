
// Icon data.
export const name      = 'dev-clipboard'; // Unique name.
export const viewBox   = '0 0 24 24'; // You will need to adjust this to match your SVG.
export const component = (color = '#A2B0C1') => (
  <>
  <path
      d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
    />
    <path
      d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
    />
    </>
); // Your SVG path. without the svg tag.
