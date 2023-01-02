import Image from 'next/image';

import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';

const Features2 = () => (
  <section className="bg-primary-50 text-gray-800 dark:bg-slate-800">
    <div className="container mx-auto max-w-6xl p-4 py-16 md:py-20 md:px-8">
      <div className="mb-16 text-center">
        <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
          Features
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Aliquip definiebas ad est
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
          Quando cetero his ne, eum admodum sapientem ut.
        </p>
      </div>
      <div className="mb-24 grid md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Ad vix debet docendi
          </h3>
          <p className="mt-3 text-lg text-gray-600 dark:text-slate-400">
            Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit
            te euismod tacimates.
          </p>
          <div className="mt-12 space-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Per ei quaeque sensibus</h4>
                <p className="mt-2 text-gray-600 dark:text-slate-400">
                  Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id
                  apeirian dignissim.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Cu imperdiet posidonium sed
                </h4>
                <p className="mt-2 text-gray-600 dark:text-slate-400">
                  Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset
                  inciderint, ex quis.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Nulla omittam sadipscing mel ne
                </h4>
                <p className="mt-2 text-gray-600 dark:text-slate-400">
                  At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico
                  quando soleat, nam modus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="mt-10 self-start md:mt-0">
          <Image
            src={cameraFrontImg}
            width={500}
            height={500}
            alt="Random image from unplash"
            className="mx-auto w-full rounded-lg bg-gray-500 shadow-lg"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:items-center md:gap-16">
        <div className="md:col-start-2">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Eam nibh gloriatur ex
          </h3>
          <p className="mt-3 text-lg text-gray-600 dark:text-slate-400">
            Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh
            dissentias, mei exerci tamquam euripidis cu.
          </p>
          <div className="mt-12 space-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Cibo augue offendit has ad
                </h4>
                <p className="mt-2 text-gray-600 dark:text-slate-400">
                  An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione
                  contentiones est.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  At eum ferri luptatum lobortis
                </h4>
                <p className="mt-2 text-gray-600 dark:text-slate-400">
                  Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis
                  iisque efficiantur.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Dicunt verterem evertitur eu sea
                </h4>
                <p className="mt-2 text-gray-600 dark:text-slate-400">
                  Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet
                  eleifend ut vix.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 self-start md:col-start-1 md:row-start-1 md:mt-0">
          <Image
            src={cameraBackImg}
            width={500}
            height={500}
            alt="Random image from unplash"
            className="mx-auto w-full rounded-lg bg-gray-500 shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Features2;
