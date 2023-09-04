import { BackgroundProps } from '~/shared/types';

const Background = ({ children, isDark }: BackgroundProps) => {
  return (
    <div className={`absolute inset-0 ${isDark ? 'bg-transparent' : 'bg-primary-50 dark:bg-slate-800'}`}>
      {children}
    </div>
  );
};

export default Background;
