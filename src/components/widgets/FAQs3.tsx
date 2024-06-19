import Headline from '../common/Headline';
import Collapse from '../common/Collapse';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { CallToActionType, FAQsProps, Item } from '~/shared/types';
import CTA from '../common/CTA';
import WidgetWrapper from '../common/WidgetWrapper';

const FAQs3 = ({ header, items, callToAction, id, hasBackground = false }: FAQsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    <div className="flex items-stretch justify-center">
      <div className="grid w-full md:grid-cols-3 md:items-center md:gap-4">
        <div
          className={`h-full ${callToAction ? 'block sm:flex md:block' : ''} sm:items-center sm:justify-between md:mt-10`}
        >
          {header && (
            <Headline
              header={header}
              titleClass={`text-3xl sm:text-4xl text-center ${callToAction ? 'sm:text-left' : 'md:text-left'}`}
              subtitleClass={`text-center ${callToAction ? 'sm:text-left' : 'md:text-left'}`}
            />
          )}
          {callToAction && (
            <CTA
              callToAction={callToAction as CallToActionType}
              linkClass="btn btn-primary mb-8 sm:w-auto sm:justify-start"
            />
          )}
        </div>
        <div className="mt-4 h-fit md:col-span-2 md:mx-4 md:mt-0 md:px-4">
          <Collapse
            items={items as Item[]}
            classCollapseItem="border-b border-solid border-slate-300 dark:border-slate-500 py-5"
            iconUp={<IconMinus className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
            iconDown={<IconPlus className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
          />
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default FAQs3;
