import {
    IconArrowRight,
    IconMail
  } from "@tabler/icons";
  
  const items = [
    [
      {
        title: "Get template",
        description:"Aliquam sodales est lectus, quis.",
        href: "https://github.com/onwidget/tailnext",
      },
      {
        title: "Learn more",
        description:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum.",
        href: "/",
      },
    ]
  ];
  
  const Card = ({ cardTitle, cardDescription, isCardIcon, isCardForm }) => (
    <div className="mb-4 px-5 py-4 rounded-md shadow-md border-gray-400 border bg-transparent font-medium text-base text-gray-700">
      <div className="flex justify-between items-center">
        <div className="w-full">
          <h3 className="mb-3 text-xl font-bold">
            {cardTitle}
          </h3>
          <p className="text-gray-600 dark:text-slate-400">
            {cardDescription}
          </p>
        </div>
        {isCardIcon && (
          <div className="flex items-center justify-center w-10 h-10">
            <IconArrowRight className="w-6 h-6 text-primary-600 dark:text-slate-200" />
          </div>
        )}
      </div>
      {isCardForm && (
        <div className="mt-2">
          <form className="rounded-md shadow-md border-gray-400 border bg-white">
            <div className="flex items-center">
              <span className="px-2 py-2">
                <IconMail className="w-6 h-6 text-primary-600 dark:text-slate-200" />
              </span>
              <input 
                type="email" 
                name="EMAIL" 
                placeholder="Enter your email address" 
                className="w-full pl-2 pr-4 py-2"
              />
              <button 
                name="subscribe" 
                type="submit" 
                className="border-l-[1px] border-gray-400 px-4 py-2 text-primary-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
  
  const CallToAction = () => (
    <section className="bg-gray-50 text-gray-800">
      <div className="px-4 py-16 sm:px-6 mx-auto lg:px-8 lg:py-20 max-w-6xl">
        <div className="grid gap-6 row-gap-10 md:grid-cols-2">
          <div className="md:pb-6 md:pr-16 mx-auto md:ml-0 md:my-auto">
            <h2 className="flex justify-center md:justify-start mb-3 text-6xl font-bold">Join us</h2>
            <div className="text-gray-600 dark:text-slate-400">
              <p className="text-xl text-gray-600 dark:text-slate-400">Quisque ac eleifend enim, a blandit.</p>
            </div>
          </div>
          <div className="relative">
            <>
              {items.map((subitems) =>
                subitems.map(({ title, description, href }, index) => (
                  <a 
                    href={href}                   
                    className="sm:mb-0 w-full"
                    target="_blank"
                    rel="noopener noreferrer" 
                    key={`item-cta-${index}`}
                  >
                    <Card 
                      cardTitle={title}
                      cardDescription={description}
                      isCardIcon={true}
                      isCardForm={false}
                    />
                  </a>
                ))
              )}
              <Card 
                cardTitle={"Subscribe"}
                cardDescription={"Morbi orci nunc, euismod ac dui id, convallis."}
                isCardIcon={false}
                isCardForm={true}
              />
            </>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default CallToAction;