import theme from '@/theme';
import { Text as NativeText, TextProps } from 'react-native';

type Props = TextProps & {
  color?: keyof typeof theme.colors;
  fontSize?: keyof typeof theme.fontSizes;
  fontFamily?: keyof typeof theme.fonts;
  fontWeight?: keyof typeof theme.fontWeights;
};

const Text = ({
  color = 'textPrimary',
  fontSize = 'body',
  fontFamily = 'main',
  fontWeight = 'normal',
  style,
  ...props
}: Props) => {
  const textStyle = [
    {
      color: theme.colors[color],
      fontSize: theme.fontSizes[fontSize],
      fontFamily: theme.fonts[fontFamily],
      fontWeight: theme.fontWeights[fontWeight],
    },
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
