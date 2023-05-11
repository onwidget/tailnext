import { contact2Data } from '~/shared/data';
import Form from '../common/Form';
import HeaderWidget from '../common/HeaderWidget';

const Contact2 = () => {
  const { header, form } = contact2Data;

  return (
    <section className="bg-primary-50 dark:bg-slate-800" id="contactTwo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-5xl" />}
        <div className="flex items-stretch justify-center">
          <Form {...form} btnPosition="right" />
        </div>
      </div>
    </section>
  );
};

export default Contact2;
