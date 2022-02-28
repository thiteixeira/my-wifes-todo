import * as icons from '@mui/icons-material';

export type IconNames = keyof typeof icons;

interface IIconRendererProps {
  taskType: IconNames;
}

export const IconRenderer = ({ taskType }: IIconRendererProps): JSX.Element => {
  const Icon = icons[taskType];
  return <Icon style={{ marginRight: '1rem' }} />;
};
