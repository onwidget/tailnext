import Form from '../common/Form';
import HeaderWidget from '../common/HeaderWidget';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Contact2 = ({ header, form, id, isDark = false }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} isDark={isDark} containerClass="max-w-7xl mx-auto">
    {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-5xl" />}
    <div className="flex items-stretch justify-center">
      <Form {...form} btnPosition="right" />
    </div>
  </WidgetWrapper>
);

export default Contact2;
