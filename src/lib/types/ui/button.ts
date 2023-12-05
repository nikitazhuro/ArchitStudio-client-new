type Mode = 'primary' | 'secondary' | 'option';
type Size = 'small' | 'medium' | 'large';

export interface IButton
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  mode?: Mode;
  size?: Size;
  children: React.ReactNode;
  className?: string;
}
