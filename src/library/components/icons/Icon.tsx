export type IconSizeProps = {
  width?: string;
  height?: string;
};

export function FacebookIcon({
  width = '1.5em',
  height = '1.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z'
      />
    </svg>
  );
}

export function LinkedinIcon({
  width = '1.5em',
  height = '1.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 20 20'
    >
      <path
        fill='currentColor'
        d='M2.5 18h3V6.9h-3zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2m6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6'
      />
    </svg>
  );
}

export function TwitterIcon({
  width = '1.2em',
  height = '1.2em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 14 14'
    >
      <g fill='none'>
        <g clipPath='url(#primeTwitter0)'>
          <path
            fill='currentColor'
            d='M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z'
          />
        </g>
        <defs>
          <clipPath id='primeTwitter0'>
            <path fill='#fff' d='M0 0h14v14H0z' />
          </clipPath>
        </defs>
      </g>
    </svg>
  );
}

export function HeartIcon({
  width = '1.5em',
  height = '1.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 20 20'
    >
      <path
        fill='currentColor'
        d='M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0L10 5.197L8.864 4.155c-1.672-1.534-4.382-1.534-6.054 0c-1.881 1.727-1.881 4.52 0 6.246L10 17l7.19-6.599c1.88-1.726 1.88-4.52 0-6.246'
      />
    </svg>
  );
}