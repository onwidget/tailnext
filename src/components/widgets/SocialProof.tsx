import Image from 'next/image';
import { SocialProofProps } from '~/shared/types';

const SocialProof = ({ images }: SocialProofProps) => (
  <section id="social-proof">
    <div className="m-auto max-w-3xl py-12">
      <div className="flex items-center justify-center gap-6 md:gap-9">
        {images &&
          images.map(({ src, alt, link }, index) => (
            <div key={`item-social-proof-${index}`}>
              <a href={link} target="_blank" rel="noopener">
                <Image
                  src={src}
                  alt={alt}
                  className="h-auto w-12 opacity-50 contrast-50 grayscale duration-75 hover:opacity-100 hover:contrast-100 hover:grayscale-0 md:w-16"
                  object-fit="contain"
                  width={64}
                  height={64}
                />
              </a>
            </div>
          ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
