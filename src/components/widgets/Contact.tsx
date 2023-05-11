import { contactData } from '~/shared/data';
import Form from '../common/Form';
import HeaderWidget from '../common/HeaderWidget';

const Contact = () => {
  const { header, content, items, form } = contactData;

  return (
    <section className="bg-primary-50 dark:bg-slate-800" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-5xl" />}
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              {content && <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">{content}</p>}
              <ul className="mb-6 md:mb-0">
                {items.map(({ title, description, icon: Icon }, index) => (
                  <li key={`item-contact-${index}`} className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>
                      {typeof description === 'string' ? (
                        <p key={`text-description-${index}`} className="text-gray-600 dark:text-slate-400">
                          {description}
                        </p>
                      ) : (
                        description &&
                        description.map((desc, index) => (
                          <p key={`text-description-${index}`} className="text-gray-600 dark:text-slate-400">
                            {desc}
                          </p>
                        ))
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Form {...form} btnPosition="center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
