/**
 * Input properties type.
 */
export interface IProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  control?: any
  formatChars?: any
  innerRef?: LegacyRef<HTMLInputElement | HTMLTextAreaElement>
  mask?: string | Array<(string | RegExp)>
  maskChar?: any
  icon?: JSX.Element
  multiline?: boolean
  cols?: number
  rows?: number
}
