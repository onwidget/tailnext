import { CallToActionType, PricingProps } from '~/shared/types';
import CTA from '../common/CTA';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';
import { IconCheck } from '@tabler/icons-react';

const Pricing = ({ header, prices, id, hasBackground = false }: PricingProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && <Headline header={header} containerClass="max-w-5xl" titleClass="text-2xl sm:text-3xl" />}
    <div className="flex items-stretch justify-center">
      <div className="grid grid-cols-3 gap-3 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {prices &&
          prices.map(
            ({ title, subtitle, price, period, items, callToAction, hasRibbon = false, ribbonTitle }, index) => (
              <div
                className="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
                key={`pricing-${index}`}
              >
                {price && period && (
                  <div className="card max-w-sm flex flex-col justify-between text-center">
                    {hasRibbon && ribbonTitle && (
                      <div className="absolute right-[-5px] rtl:right-auto rtl:left-[-5px] top-[-5px] z-[1] h-[100px] w-[100px] overflow-hidden text-right">
                        <span className="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']">
                          {ribbonTitle}
                        </span>
                      </div>
                    )}
                    <div className="px-2 py-0">
                      {title && (
                        <h3 className="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">
                          {title}
                        </h3>
                      )}
                      {subtitle && (
                        <p className="font-light sm:text-lg text-gray-600 dark:text-slate-400">{subtitle}</p>
                      )}
                      <div className="my-8">
                        <div className="flex items-center justify-center text-center mb-1">
                          <span className="text-5xl">$</span>
                          <span className="text-6xl font-extrabold">{price}</span>
                        </div>
                        <span className="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">
                          {period}
                        </span>
                      </div>
                      {items && (
                        <div className="my-8 md:my-10 space-y-2 text-left">
                          <ItemGrid
                            id={id}
                            items={items}
                            columns={1}
                            defaultIcon={IconCheck}
                            containerClass="gap-2 md:gap-y-2"
                            panelClass="flex items-start space-x-2"
                            iconClass="w-4 h-4 mt-1.5 mr-2 rtl:mr-0 rtl:ml-2 mr-1.5 flex items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white dark:text-slate-200"
                          />
                        </div>
                      )}
                    </div>
                    {callToAction && (
                      <CTA
                        callToAction={callToAction as CallToActionType}
                        linkClass={`btn ${hasRibbon ? 'btn-primary' : ''}`}
                      />
                    )}
                  </div>
                )}
              </div>
            ),
          )}
      </div>
    </div>
  </WidgetWrapper>
);

export default Pricing;
