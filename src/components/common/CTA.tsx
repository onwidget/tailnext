import Link from 'next/link';
import { CallToAction } from '~/shared/types';

const CTA = (props: { data: CallToAction; class?: string }) => {
  const { text, href, icon: Icon, targetBlank, btnText, btnType } = props.data;

  return (
    <>
      {props.data && text && href && (
        <div className="flex w-full sm:w-auto">
          {targetBlank ? (
            <Link
              className={`btn ${btnType === 'primary' ? 'btn-primary' : ''} w-full sm:mb-0 ${
                props.class ? props.class : ''
              } ${btnText === 'uppercase' ? 'uppercase' : ''}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Icon && <Icon className="mr-1 -ml-1.5 h-5 w-5" />} {text}
            </Link>
          ) : (
            <Link
              className={`btn ${btnType === 'primary' ? 'btn-primary' : ''} w-full sm:mb-0 ${
                props.class ? props.class : ''
              } ${btnText === 'uppercase' ? 'uppercase' : ''}`}
              href={href}
            >
              {Icon && <Icon className="mr-1 -ml-1.5 h-5 w-5" />} {text}
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default CTA;
