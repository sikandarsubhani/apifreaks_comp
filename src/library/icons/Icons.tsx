import { IconSizeProps } from '../types/types';

export function GithubIcon({ width = '20', height = '20' }: IconSizeProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z'
        fill='black'
      />
    </svg>
  );
}

export function GithubDarkIcon({ width = '20', height = '20' }: IconSizeProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z'
        fill='white'
      />
    </svg>
  );
}
export function GoogleIcon({
  width = '1.5em',
  height = '1.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 48 48'
    >
      <path
        fill='#ffc107'
        d='M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917'
      />
      <path
        fill='#ff3d00'
        d='m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691'
      />
      <path
        fill='#4caf50'
        d='M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44'
      />
      <path
        fill='#1976d2'
        d='M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917'
      />
    </svg>
  );
}

export function UserIcon({ width = '2em', height = '2em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1'
      />
    </svg>
  );
}

export function LockIcon({ width = '1.8em', height = '1.8em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm0-2h12V10H6zm6-3q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zM6 20V10z'
      />
    </svg>
  );
}

export function DeleteIcon({
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
        d='M10 5h4a2 2 0 1 0-4 0M8.5 5a3.5 3.5 0 1 1 7 0h5.75a.75.75 0 0 1 0 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0 1 15.026 22H8.974a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5zm2 4.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zM14.25 9a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75m-7.516 9.467a2.25 2.25 0 0 0 2.24 2.033h6.052a2.25 2.25 0 0 0 2.24-2.033L18.424 6.5H5.576z'
      />
    </svg>
  );
}

export function ErrorIcon({ width = '2em', height = '2em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8'
      />
    </svg>
  );
}

export function TickIcon({ width = '1.5em', height = '1.5em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        d='M437.3 30L202.7 339.3L64 200.7l-64 64L213.3 478L512 94z'
      />
    </svg>
  );
}

export function DropDownIcon({
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
      <path fill='currentColor' d='m7 10l5 5l5-5z' />
    </svg>
  );
}

export function HamburgerIcon({
  width = '2.5em',
  height = '2.5em',
}: IconSizeProps) {
  return (
    <svg
      width={width}
      height={height}
      stroke='currentColor'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        className='inline-flex'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  );
}
export function MobileNavigationCloseIcon({
  width = '2.5em',
  height = '2.5em',
}: IconSizeProps) {
  return (
    <svg
      width={width}
      height={height}
      stroke='currentColor'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        className='inline-flex'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );
}

export function CrossIcon({
  width = '1.4em',
  height = '1.4em',
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
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m7 7l10 10M7 17L17 7'
      />
    </svg>
  );
}

export function LeftArrowIcon({
  width = '1.5em',
  height = '1.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 16 16'
    >
      <path
        fill='currentColor'
        d='M7.4 12.5L3.8 9H16V7H3.8l3.6-3.5l-1.5-1.4L0 8l5.9 5.9z'
      />
    </svg>
  );
}

export function LogoutIcon({
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
        d='M14.945 1.25c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.524.525-.79 1.17-.929 1.928c-.135.737-.161 1.638-.167 2.72a.75.75 0 0 0 1.5.008c.006-1.093.034-1.868.142-2.457c.105-.566.272-.895.515-1.138c.277-.277.666-.457 1.4-.556c.755-.101 1.756-.103 3.191-.103h1c1.436 0 2.437.002 3.192.103c.734.099 1.122.28 1.4.556c.276.277.456.665.555 1.4c.102.754.103 1.756.103 3.191v8c0 1.435-.001 2.436-.103 3.192c-.099.734-.279 1.122-.556 1.399c-.277.277-.665.457-1.399.556c-.755.101-1.756.103-3.192.103h-1c-1.435 0-2.436-.002-3.192-.103c-.733-.099-1.122-.28-1.399-.556c-.243-.244-.41-.572-.515-1.138c-.108-.589-.136-1.364-.142-2.457a.75.75 0 1 0-1.5.008c.006 1.082.032 1.983.167 2.72c.14.758.405 1.403.93 1.928c.601.602 1.36.86 2.26.982c.866.116 1.969.116 3.336.116h1.11c1.368 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982c.602-.602.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-8.11c0-1.367 0-2.47-.116-3.337c-.121-.9-.38-1.658-.982-2.26c-.602-.602-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117z'
      />
      <path
        fill='currentColor'
        d='M15 11.25a.75.75 0 0 1 0 1.5H4.027l1.961 1.68a.75.75 0 1 1-.976 1.14l-3.5-3a.75.75 0 0 1 0-1.14l3.5-3a.75.75 0 1 1 .976 1.14l-1.96 1.68z'
      />
    </svg>
  );
}

export function ProfileIcon({
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
      <g fill='none'>
        <path
          stroke='currentColor'
          strokeWidth='1.5'
          d='M21 12a8.958 8.958 0 0 1-1.526 5.016A8.991 8.991 0 0 1 12 21a8.991 8.991 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z'
        />
        <path
          fill='currentColor'
          d='M13.25 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 9zM12 10.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 11.75zM10.75 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 9zM12 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 6.25zM5.166 17.856l-.719-.214l-.117.392l.267.31zm13.668 0l.57.489l.266-.31l-.117-.393zM9 15.75h6v-1.5H9zm0-1.5a4.752 4.752 0 0 0-4.553 3.392l1.438.428A3.252 3.252 0 0 1 9 15.75zm3 6a8.23 8.23 0 0 1-6.265-2.882l-1.138.977A9.73 9.73 0 0 0 12 21.75zm3-4.5c1.47 0 2.715.978 3.115 2.32l1.438-.428A4.752 4.752 0 0 0 15 14.25zm3.265 1.618A8.23 8.23 0 0 1 12 20.25v1.5a9.73 9.73 0 0 0 7.403-3.405z'
        />
      </g>
    </svg>
  );
}

export function HomeIcon({ width = '1.5em', height = '1.5em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 1024 1024'
    >
      <path
        fill='currentColor'
        d='M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2M568 868H456V664h112zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7l23.1 23.1L882 542.3z'
      />
    </svg>
  );
}

export function CashIcon({ width = '1.5em', height = '1.5em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 14 14'
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M8.351 5.307a1.166 1.166 0 0 0-1.1-.778h-.903a1.041 1.041 0 0 0-.223 2.059l1.375.3a1.167 1.167 0 0 1-.25 2.307h-.777c-.508 0-.94-.324-1.1-.777m1.489-3.889V3.362m0 7V9.196m-4.864 4.302v-2.5h2.5' />
        <path d='M13.388 5.804a6.5 6.5 0 0 1-11.39 5.35M.612 8.196a6.5 6.5 0 0 1 11.39-5.35' />
        <path d='M12.002.502v2.5h-2.5' />
      </g>
    </svg>
  );
}

export function MeterIcon({
  width = '1.5em',
  height = '1.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 256 256'
    >
      <path
        fill='currentColor'
        d='M207.06 72.67A111.24 111.24 0 0 0 128 40h-.4C66.07 40.21 16 91 16 153.13V176a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24a111.25 111.25 0 0 0-32.94-79.33M224 176H119.71l54.76-75.3a8 8 0 0 0-12.94-9.42L99.92 176H32v-22.87c0-3.08.15-6.12.43-9.13H56a8 8 0 0 0 0-16H35.27c10.32-38.86 44-68.24 84.73-71.66V80a8 8 0 0 0 16 0V56.33A96.14 96.14 0 0 1 221 128h-21a8 8 0 0 0 0 16h23.67c.21 2.65.33 5.31.33 8Z'
      />
    </svg>
  );
}

export function KeyIcon({ width = '1.5em', height = '1.5em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M22 8.293c0 3.476-2.83 6.294-6.32 6.294c-.636 0-2.086-.146-2.791-.732l-.882.878c-.519.517-.379.669-.148.919c.096.105.208.226.295.399c0 0 .735 1.024 0 2.049c-.441.585-1.676 1.404-3.086 0l-.294.292s.881 1.025.147 2.05c-.441.585-1.617 1.17-2.646.146l-1.028 1.024c-.706.703-1.568.293-1.91 0l-.883-.878c-.823-.82-.343-1.708 0-2.05l7.642-7.61s-.735-1.17-.735-2.78c0-3.476 2.83-6.294 6.32-6.294S22 4.818 22 8.293m-6.319 2.196a2.2 2.2 0 0 0 2.204-2.195a2.2 2.2 0 0 0-2.204-2.196a2.2 2.2 0 0 0-2.204 2.196a2.2 2.2 0 0 0 2.204 2.195'
        clipRule='evenodd'
      />
    </svg>
  );
}

export function TodayIcon({
  width = '1.5em',
  height = '1.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 256 256'
    >
      <path
        fill='currentColor'
        d='M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2m-98-90v64a6 6 0 0 1-12 0v-54.29l-7.32 3.66a6 6 0 1 1-5.36-10.74l16-8A6 6 0 0 1 110 120m59.57 29.25L148 178h20a6 6 0 0 1 0 12h-32a6 6 0 0 1-4.8-9.6L160 142a10 10 0 1 0-16.65-11a6 6 0 1 1-10.35-6a22 22 0 1 1 36.62 24.26Z'
      />
    </svg>
  );
}

export function CalendarIcon({
  width = '1.3em',
  height = '1.3em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 512 512'
    >
      <rect
        width='416'
        height='384'
        x='48'
        y='80'
        fill='none'
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='32'
        rx='48'
      />
      <circle cx='296' cy='232' r='24' fill='currentColor' />
      <circle cx='376' cy='232' r='24' fill='currentColor' />
      <circle cx='296' cy='312' r='24' fill='currentColor' />
      <circle cx='376' cy='312' r='24' fill='currentColor' />
      <circle cx='136' cy='312' r='24' fill='currentColor' />
      <circle cx='216' cy='312' r='24' fill='currentColor' />
      <circle cx='136' cy='392' r='24' fill='currentColor' />
      <circle cx='216' cy='392' r='24' fill='currentColor' />
      <circle cx='296' cy='392' r='24' fill='currentColor' />
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M128 48v32m256-32v32'
      />
      <path
        fill='none'
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M464 160H48'
      />
    </svg>
  );
}

export function ClockIcon({
  width = '1.5em',
  height = '1.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 256 256'
    >
      <path
        fill='currentColor'
        d='M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8'
      />
    </svg>
  );
}

export function MailIcon({ width = '1.5em', height = '1.5em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
    >
      <path
        fill='currentColor'
        d='M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z'
      />
    </svg>
  );
}

export function OrganizationIcon({
  width = '1.5em',
  height = '1.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
    >
      <path
        fill='currentColor'
        d='M28 2H16a2 2 0 0 0-2 2v10H4a2 2 0 0 0-2 2v14h28V4a2 2 0 0 0-2-2M9 28v-7h4v7Zm19 0H15v-8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v8H4V16h12V4h12Z'
      />
      <path
        fill='currentColor'
        d='M18 8h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2z'
      />
    </svg>
  );
}

export function EditIcon({ width = '1.5em', height = '1.5em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 576 512'
    >
      <path
        fill='currentColor'
        d='m402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0m162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2M384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5'
      />
    </svg>
  );
}

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

export function DomainIcon({ width = '2em', height = '2em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V8H4zm6.95-4.35l3.475-3.475q.3-.3.725-.3t.725.3t.3.725t-.3.725L11.65 15.85q-.3.3-.7.3t-.7-.3l-2.125-2.125q-.3-.3-.3-.725t.3-.725t.725-.3t.725.3zM4 18V6z'
      />
    </svg>
  );
}

export function IPIcon({ width = '32px', height = '32px' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M4.26 12A8.2 8.2 0 0 1 4 10a8.2 8.2 0 0 1 .26-2h3.38a17 17 0 0 0-.14 2a17 17 0 0 0 .14 2h2.02a15 15 0 0 1-.16-2a15 15 0 0 1 .16-2h4.68a15 15 0 0 1 .16 2a15 15 0 0 1-.16 2h2.02a17 17 0 0 0 .14-2a17 17 0 0 0-.14-2h3.38a8.2 8.2 0 0 1 .26 2a8.2 8.2 0 0 1-.26 2h2.059A10 10 0 1 0 2.2 12Zm14.66-6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 6M12 2.04A14.1 14.1 0 0 1 13.91 6h-3.82A14.1 14.1 0 0 1 12 2.04m-2.59.4A15.7 15.7 0 0 0 8.03 6H5.08a8 8 0 0 1 4.33-3.56m3.339 15.055h2v1h-2z'
      />
      <path
        fill='currentColor'
        d='M20.998 14H3.002A2 2 0 0 0 1 16.002v5.996A2 2 0 0 0 3.002 24h17.996A2 2 0 0 0 23 21.998v-5.996A2 2 0 0 0 20.998 14M9.251 22.005h-1.5v-6h1.5Zm6.998-3.51a1.473 1.473 0 0 1-1.5 1.5h-2v2h-1.5v-6h3.5a1.473 1.473 0 0 1 1.5 1.5Z'
      />
    </svg>
  );
}

export function HistoricIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 14 14'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M10 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m3.5 1l-1.73-1.73M7 2A1.5 1.5 0 0 0 5.5.5h-5v10h5M7 2v4.5M7 2A1.5 1.5 0 0 1 8.5.5h5v7'
      />
    </svg>
  );
}

export function ReverseIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 21 21'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m8.5 10.5l-4 4l4 4m8-4h-12m8-12l4 4l-4 4m4-4h-12'
      />
    </svg>
  );
}

export function ReverseDNSLookupIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M17.5 17.5L22 22m-2-11a9 9 0 0 1-17.064 4M2 11a9 9 0 0 1 17.065-4m0 0V2m0 5H14.5M2.936 15v5m0-5H7.5'
        color='currentColor'
      />
    </svg>
  );
}

export function ASNIcon({ width = '32px', height = '32px' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 100 100'
    >
      <path
        fill='currentColor'
        d='M50 0C22.427 0 0 22.427 0 50s22.427 50 50 50s50-22.427 50-50S77.573 0 50 0m2.506 7.078c12.818.733 24.105 7.053 31.486 16.568c-1.948-.05-3.887-.062-5.818-.033a138.28 138.28 0 0 0-10.04.532a7.5 7.5 0 0 0-6.747-4.23a7.5 7.5 0 0 0-1.043.073a124.289 124.289 0 0 0-7.838-12.91m-6.078.08c3.637 4.969 6.79 10.013 9.488 15.127a7.5 7.5 0 0 0-1.92 3.858a140.675 140.675 0 0 0-13.83 3.43a7.5 7.5 0 0 0-2.082-1.917c1.887-6.735 4.527-13.559 7.902-20.465c.147-.013.295-.02.442-.033m-6.44 1.022c-2.82 6.165-5.07 12.307-6.744 18.41a7.5 7.5 0 0 0-5.13 2.978a170.51 170.51 0 0 0-13.698-3.748A42.954 42.954 0 0 1 39.988 8.18m41.123 20.418c2.092.013 4.194.08 6.307.19a42.719 42.719 0 0 1 5.037 14.366c-6.05.984-11.94 2.347-17.674 4.065a7.5 7.5 0 0 0-5.043-2.746a107.837 107.837 0 0 0-3.517-11.327a7.5 7.5 0 0 0 2.472-4.048c4.099-.356 8.236-.527 12.418-.5M11.732 30.36c5.102 1.123 10.08 2.436 14.913 3.979a7.5 7.5 0 0 0 .001.03c-6.508 2.673-12.907 5.825-19.199 9.437a42.72 42.72 0 0 1 4.285-13.446m43.094.684a7.5 7.5 0 0 0 6.56 3.87a7.5 7.5 0 0 0 .202-.005a101.851 101.851 0 0 1 3.336 10.694a7.5 7.5 0 0 0-1.057.81A142.695 142.695 0 0 0 41.62 34.57a7.5 7.5 0 0 0 .014-.256a135.084 135.084 0 0 1 13.193-3.27m-26.32 7.941a7.5 7.5 0 0 0 1.93 1.57c-1.232 9.641-.959 19.147.921 28.446a167.383 167.383 0 0 0-12.79 10.355C11.392 71.677 7 61.366 7 50c0-.047.004-.092.004-.139c7.047-4.234 14.21-7.87 21.502-10.875m11.121.159a137.068 137.068 0 0 1 21.902 11.697a7.5 7.5 0 0 0-.082 1.09a7.5 7.5 0 0 0 0 .047c-8.96 3.725-17.514 8.38-25.672 13.914c-1.41-7.998-1.56-16.15-.507-24.444a7.5 7.5 0 0 0 4.359-2.304m53.326 8.994c.026.617.047 1.237.047 1.861a42.929 42.929 0 0 1-3.783 17.666a140.036 140.036 0 0 0-13.469-12.572a7.5 7.5 0 0 0 .7-3.147a134.787 134.787 0 0 1 16.505-3.808m-29.818 8.529a7.5 7.5 0 0 0 4.25 2.598c1.094 9.909.76 20.066-.932 30.48A42.976 42.976 0 0 1 50 93c-1.477 0-2.937-.074-4.375-.219c-4.012-7.064-6.909-14.27-8.729-21.607c8.328-5.823 17.063-10.675 26.239-14.506m9.181 2.06a135.865 135.865 0 0 1 14.438 13.637A43.083 43.083 0 0 1 71.906 87.02c1.285-9.602 1.44-19.043.41-28.291m-39.71 15.555c1.59 5.893 3.834 11.697 6.753 17.393a42.817 42.817 0 0 1-17.162-8.858c3.397-3.02 6.865-5.87 10.408-8.535'
        color='currentColor'
      />
    </svg>
  );
}

export function BulkDNSLookupIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        d='M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Zm0-3.9h18M3 12h18m0-4.5H3M12 21V3'
      />
    </svg>
  );
}

export function BulkWhoIsLookupIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      >
        <path d='M4.159 9.134c-.637 0-1.152.516-1.152 1.152v3.456c0 .636.515 1.152 1.152 1.152h15.678c.636 0 1.152-.515 1.152-1.152v-3.456c0-.636-.516-1.152-1.152-1.152m-2.293 2.88h-3.018' />
        <path d='m3.004 4.554l.01 3.456c.002.636.52 1.15 1.156 1.149l15.678-.05a1.152 1.152 0 0 0 1.148-1.155l-.01-3.456A1.152 1.152 0 0 0 19.83 3.35l-15.678.049c-.636.002-1.15.52-1.148 1.155m14.54 1.689h-3.018M4.159 14.894c-.637 0-1.152.516-1.152 1.152v3.456c0 .636.515 1.152 1.152 1.152h15.678c.636 0 1.152-.516 1.152-1.152v-3.456c0-.636-.516-1.152-1.152-1.152m-2.293 2.88h-3.018' />
      </g>
    </svg>
  );
}

export function BulkDocumentsIcon({
  width = '32px',
  height = '32px',
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
        d='M11.063 1.456a1.75 1.75 0 0 1 1.874 0l8.383 5.316a1.75 1.75 0 0 1 0 2.956l-8.383 5.316a1.75 1.75 0 0 1-1.874 0L2.68 9.728a1.75 1.75 0 0 1 0-2.956Zm1.071 1.267a.25.25 0 0 0-.268 0L3.483 8.039a.25.25 0 0 0 0 .422l8.383 5.316a.25.25 0 0 0 .268 0l8.383-5.316a.25.25 0 0 0 0-.422Z'
      />
      <path
        fill='currentColor'
        d='M1.867 12.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.75 1.75 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035'
      />
      <path
        fill='currentColor'
        d='M1.867 16.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.75 1.75 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035'
      />
    </svg>
  );
}

export function DNSIcon({ width = '32px', height = '32px' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path fill='currentColor' d='M4.5 17.5h2v3h-2z' />
      <path
        fill='currentColor'
        d='M20.998 14H3.002A2 2 0 0 0 1 16.002v5.996A2 2 0 0 0 3.002 24h17.996A2 2 0 0 0 23 21.998v-5.996A2 2 0 0 0 20.998 14M8 20.5A1.473 1.473 0 0 1 6.5 22H3v-6h3.5A1.473 1.473 0 0 1 8 17.5Zm6.5 1.5h-1.2l-2.55-3.5V22H9.5v-6h1.25l2.5 3.5V16h1.25Zm6.5-4.48h-3.5v.74H20a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1h-4v-1.5h3.51v-.74H17a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1h4ZM4.26 12A8.2 8.2 0 0 1 4 10a8.2 8.2 0 0 1 .26-2h3.38a17 17 0 0 0-.14 2a17 17 0 0 0 .14 2h2.02a15 15 0 0 1-.16-2a15 15 0 0 1 .16-2h4.68a15 15 0 0 1 .16 2a15 15 0 0 1-.16 2h2.02a17 17 0 0 0 .14-2a17 17 0 0 0-.14-2h3.38a8.2 8.2 0 0 1 .26 2a8.2 8.2 0 0 1-.26 2h2.059A10 10 0 1 0 2.2 12Zm14.66-6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 6M12 2.04A14.1 14.1 0 0 1 13.91 6h-3.82A14.1 14.1 0 0 1 12 2.04m-2.59.4A15.7 15.7 0 0 0 8.03 6H5.08a8 8 0 0 1 4.33-3.56'
      />
    </svg>
  );
}

export function SSLIcon({ width = '32px', height = '32px' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 2048 2048'
    >
      <path
        fill='currentColor'
        d='M1920 256v512q0 151-38 285t-105 253t-158 223t-198 195t-224 171t-237 150q-119-70-236-149t-224-171t-198-196t-159-223t-105-253T0 768V256q83 0 161-6t152-22t146-45t144-75q85-55 170-81T960 0q51 0 97 6t89 20t86 34t85 48q72 46 144 75t146 45t152 22t161 6m-128 512V382q-149-8-285-48t-263-121q-68-44-135-64t-149-21q-81 0-148 20t-136 65q-126 81-262 121t-286 48v386q0 127 33 244t92 222t138 200t172 178t193 155t204 130q102-59 203-130t194-154t172-178t138-200t91-223t34-244M960 320q66 0 124 25t101 69t69 102t26 124v128h128v640H512V768h128V640q0-66 25-124t68-101t102-69t125-26m320 960V896H640v384zM768 768h384V640q0-40-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75z'
      />
    </svg>
  );
}

export function SSLCertificateChainLookupIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 2048 2048'
    >
      <path
        fill='currentColor'
        d='M1274 1018q-11 57-39 105t-71 83t-94 54t-110 20H576q-32 0-61 10t-53 28t-42 43t-27 56q54 13 99 42t78 71t51 92t19 106q0 66-25 124t-69 102t-102 69t-124 25t-124-25t-101-68t-69-102t-25-125q0-57 19-108t52-94t81-71t103-40V633q-56-11-103-40t-80-71t-53-93T1 320q0-66 25-124T94 95t102-69T320 0q66 0 124 25t101 69t69 102t26 124q0 57-19 109t-53 93t-81 71t-103 40v585q42-32 91-49t101-17h384q32 0 61-10t53-28t42-43t27-56q-54-13-99-42t-78-70t-51-92t-19-107q0-66 25-124t68-101t102-69t125-26t124 25t101 69t69 102t26 124q0 58-19 110t-55 94t-83 71t-105 39m-250-314q0 40 15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75M128 320q0 40 15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75m384 1408q0-40-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75m1216-704q66 0 124 25t101 69t69 102t26 124t-25 124t-69 102t-102 69t-124 25q-47 0-92-13t-84-40l-419 418q-19 19-45 19t-45-19t-19-45t19-45l418-419q-26-39-39-84t-14-92q0-66 25-124t68-101t102-69t125-26m0 512q40 0 75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15'
      />
    </svg>
  );
}

export function CurrencyExchangeIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 16 16'
    >
      <path
        fill='currentColor'
        d='M4.5 2.002a.5.5 0 0 0-.5.5v.323c-1.152.31-2 1.36-2 2.61v.094c0 1.102.647 2.1 1.652 2.551L4 8.236v3.875a1.7 1.7 0 0 1-1-1.55v-.723a.5.5 0 0 0-1 0v.722c0 1.25.849 2.3 2 2.61v.335a.5.5 0 0 0 1 0v-.26a2.7 2.7 0 0 0 2.402-2.685v-.088a2.79 2.79 0 0 0-1.648-2.546L5 7.588V3.76a1.7 1.7 0 0 1 1.402 1.676v.734a.5.5 0 0 0 1 0v-.734A2.7 2.7 0 0 0 5 2.75v-.248a.5.5 0 0 0-.5-.5M3 5.435a1.7 1.7 0 0 1 1-1.55v3.254c-.61-.302-1-.925-1-1.61zm2 6.8v-3.55l.345.154a1.79 1.79 0 0 1 1.057 1.633v.088c0 .838-.605 1.534-1.402 1.676M9.07 9a7 7 0 0 1-.072-1h-.502a.5.5 0 0 1 0-1h.572c.134-.94.455-1.792.915-2.468c.616-.905 1.52-1.537 2.58-1.537c.401 0 .85.114 1.213.358a.5.5 0 0 1-.56.83a1.2 1.2 0 0 0-.653-.188c-.632 0-1.26.376-1.754 1.1c-.344.505-.604 1.16-.729 1.905h.417a.5.5 0 0 1 0 1h-.499q.002.52.083 1h.416a.5.5 0 1 1 0 1h-.149q.192.503.461.899c.493.724 1.122 1.1 1.754 1.1c.244 0 .484-.064.645-.178a.5.5 0 0 1 .58.814c-.376.268-.838.364-1.225.364c-1.06 0-1.964-.632-2.58-1.537A5.5 5.5 0 0 1 9.293 10h-.797a.5.5 0 0 1 0-1z'
      />
    </svg>
  );
}

export function BarGraphIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        d='M23 23v466h466v-18h-40.893V256h-48v215h-31.675V159.33h-48V471h-31.227V320.242h-48V471H207.2V80.418h-48V471H128V192H80v279H41V23z'
      />
    </svg>
  );
}

export function ConvertIcon({
  width = '32px',
  height = '32px',
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
        d='M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9c0-1.02 1.11-1.39 1.81-1.39c1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96c0 2.27 2.25 2.91 3.35 3.31c1.58.56 2.28 1.07 2.28 2.03c0 1.13-1.05 1.61-1.98 1.61c-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22c0-1.39-.61-2.61-3.01-3.44M3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4a9 9 0 0 0 9-9h2c0 6.08-4.92 11-11 11c-3.72 0-7.01-1.85-9-4.67zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3a9 9 0 0 0-9 9z'
      />
    </svg>
  );
}

export function HistoricalCurrencyConverterIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 36 36'
    >
      <path
        fill='currentColor'
        d='M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14'
      />
      <path
        fill='currentColor'
        d='M18.92 18.4v-7.65a1 1 0 0 0-2 0v8.72l5.9 4a1 1 0 1 0 1.11-1.66Z'
      />
      <path
        fill='currentColor'
        d='M8 17.94a9.94 9.94 0 0 1 15.41-8.35l.85-1.36a11.55 11.55 0 1 0-8.53 21L16 27.7a10 10 0 0 1-8-9.76'
      />
      <path fill='none' d='M0 0h36v36H0z' />
    </svg>
  );
}

export function LocalCurrencyIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 48 48'
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='4'
      >
        <path
          strokeLinecap='round'
          d='M9.858 32.757C6.238 33.843 4 35.343 4 37c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.657-2.239-3.157-5.858-4.243'
        />
        <path d='M24 35s13-8.496 13-18.318C37 9.678 31.18 4 24 4S11 9.678 11 16.682C11 26.504 24 35 24 35Z' />
        <path d='M24 22a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z' />
      </g>
    </svg>
  );
}

export function TimeSeriesIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
    >
      <path fill='currentColor' d='M23.586 13L21 10.414V6h2v3.586l2 2z' />
      <path
        fill='currentColor'
        d='M22 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m0-14a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6'
      />
      <path
        fill='currentColor'
        d='m8.63 18l7 6H30v-2H16.37l-7-6H4V2H2v26a2.003 2.003 0 0 0 2 2h26v-2H4V18Z'
      />
    </svg>
  );
}

export function FluctuationIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 48 48'
    >
      <path
        fill='currentColor'
        d='M10.407 38.474a1.25 1.25 0 0 1-2.313-.948l12.824-31.31c.763-1.863 3.401-1.863 4.164 0l12.374 30.208l4.167-8.713a1.25 1.25 0 1 1 2.255 1.078l-5.5 11.5c-.287.6-.994.87-1.608.615l-12-5a1.25 1.25 0 1 1 .961-2.308l9.483 3.952L23 7.727z'
      />
    </svg>
  );
}

export function AvailableIcon({
  width = '32px',
  height = '32px',
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
        d='M10.95 18.35L7.4 14.8l1.45-1.45l2.1 2.1l4.2-4.2l1.45 1.45zM5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6z'
      />
    </svg>
  );
}

export function SuggestIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
    >
      <path
        fill='currentColor'
        d='M6.813 2.406L5.405 3.812L7.5 5.906L8.906 4.5zm18.375 0L23.093 4.5L24.5 5.906l2.094-2.093zM16 3.03c-.33.004-.664.023-1 .064c-.01 0-.02-.002-.03 0c-4.056.465-7.284 3.742-7.845 7.78c-.448 3.25.892 6.197 3.125 8.095a5.238 5.238 0 0 1 1.75 3.03v6h2.28c.348.597.983 1 1.72 1s1.372-.403 1.72-1H20v-4h.094v-1.188c0-1.466.762-2.944 2-4.093C23.75 17.06 25 14.705 25 12c0-4.94-4.066-9.016-9-8.97m0 2c3.865-.054 7 3.11 7 6.97c0 2.094-.97 3.938-2.313 5.28l.032.032A7.792 7.792 0 0 0 18.279 22h-4.374c-.22-1.714-.955-3.373-2.344-4.563c-1.767-1.5-2.82-3.76-2.468-6.312c.437-3.15 2.993-5.683 6.125-6.03a6.91 6.91 0 0 1 .78-.064zM2 12v2h3v-2zm25 0v2h3v-2zM7.5 20.094l-2.094 2.093l1.407 1.407L8.905 21.5zm17 0L23.094 21.5l2.093 2.094l1.407-1.407zM14 24h4v2h-4z'
      />
    </svg>
  );
}

export function IpLocationLookupIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        color='currentColor'
      >
        <path d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10' />
        <path d='M20 5.699c-.935.067-2.132.43-2.962 1.504c-1.5 1.94-2.999 2.103-3.999 1.456c-1.5-.97-.239-2.543-1.999-3.397C9.893 4.705 9.733 3.19 10.372 2M2 11c.763.662 1.83 1.268 3.089 1.268c2.6 0 3.12.497 3.12 2.484s0 1.987.52 3.477c.338.97.456 1.938-.218 2.771m11.388-1.071L22 22m-.892-4.954a4.05 4.05 0 0 1-4.054 4.046A4.05 4.05 0 0 1 13 17.046A4.05 4.05 0 0 1 17.054 13a4.05 4.05 0 0 1 4.054 4.046' />
      </g>
    </svg>
  );
}

export function BulkIpLocationLookupIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 2048 2048'
    >
      <path
        fill='currentColor'
        d='M1792 640h256v1152H512v-256H256v-256H0V128h1536v256h256zM128 256v896h1280V256zm256 1024v128h1280V512h-128v768zm1536 384V768h-128v768H640v128z'
      />
    </svg>
  );
}

export function TimeZoneIcon({
  width = '32px',
  height = '32px',
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
        d='M15 12h1.5v4.25l2.86 1.69l-.75 1.22L15 17zm1-3c.69 0 1.37.1 2 .29V4.7l-3 1.16v3.21c.33-.07.66-.07 1-.07m7 7a7 7 0 0 1-7 7c-3 0-5.6-1.92-6.58-4.6L8 17.9l-5.34 2.07l-.16.03a.5.5 0 0 1-.5-.5V4.38c0-.23.15-.41.36-.48L8 2l6 2.1l5.34-2.07l.16-.03a.5.5 0 0 1 .5.5v7.75c1.81 1.25 3 3.37 3 5.75M9 16c0-2.79 1.63-5.2 4-6.33v-3.8l-4-1.4v11.66zm7-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5M4 5.46v11.85l3-1.16V4.45z'
      />
    </svg>
  );
}

export function TimeZoneConvertIcon({
  width = '32px',
  height = '32px',
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
        d='M4 12c0-2.154.851-4.109 2.235-5.547c.122.111.227.252.306.43c.204.457.204.928.204 1.345c0 .328 0 .64.105.865c.144.308.766.44 1.315.554l.02.005c.19.04.385.08.563.13c.506.14.898.595 1.211.96c.13.151.323.374.42.43c.05-.036.211-.211.29-.498c.062-.22.044-.414-.045-.52c-.56-.66-.529-1.93-.356-2.399c.272-.739 1.122-.684 1.744-.644h.006c.23.015.446.03.608.009c.471-.06.695-.616.835-.964c.045-.111.081-.201.114-.246c.265-.363 1.024-.892 1.577-1.265a8.02 8.02 0 0 1 4.424 4.779a8 8 0 0 1 2.339 1.263C21.272 5.785 17.078 2 12 2C6.477 2 2 6.477 2 12c0 5.078 3.785 9.272 8.687 9.915a8 8 0 0 1-1.263-2.339A8 8 0 0 1 4 12m13 1a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0a6 6 0 0 1-12 0m5-3v4h4v-2h-2v-2z'
      />
    </svg>
  );
}

export function AstronomyApiIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 14 14'
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M8.73 2.21C10.82.8 12.56.15 13.2.8c1 1-1.04 4.56-4.44 8c-3.4 3.44-7 5.44-8 4.44c-.657-.657-.02-2.455 1.491-4.592' />
        <path d='M5.44 11.754A5.06 5.06 0 0 0 7 12a5 5 0 0 0 4.736-6.613M3 10a5 5 0 0 1 7-7' />
      </g>
    </svg>
  );
}

export function WhoIsLookupIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 256 256'
    >
      <g fill='none' stroke='currentColor' strokeWidth='16'>
        <path d='m 89.074145,145.23139 -68.17345,68.17344' />
        <path d='M 111.27275,167.42999 43.099304,235.60344' />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m 43.099305,235.60344 a 15.696788,15.696788 0 0 1 -22.19861,0'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m 20.900695,213.40483 a 15.696788,15.696788 0 0 0 0,22.19861'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M 240.65575,86.483932 A 70.635544,70.635544 0 0 1 170.0202,157.11948 70.635544,70.635544 0 0 1 99.384659,86.483932 70.635544,70.635544 0 0 1 170.0202,15.848389 70.635544,70.635544 0 0 1 240.65575,86.483932 Z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m 89.074145,145.23139 22.198605,22.1986'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m 100.17344,156.33068 19.89988,-19.89987'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m 70.126446,164.17908 22.198606,22.1986'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M 209.26216,86.483936 A 39.241967,39.241967 0 0 1 170.0202,125.7259'
        />
      </g>
    </svg>
  );
}

export function WhoIsHistoricalLookupIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 2048 2048'
    >
      <path
        fill='currentColor'
        d='M1664 896q79 0 149 30t122 82t83 123t30 149q0 80-30 149t-82 122t-123 83t-149 30q-60 0-117-18t-105-53l-437 436q-19 19-45 19t-45-19t-19-45t19-45l436-437q-35-48-53-105t-18-117q0-79 30-149t82-122t122-83t150-30m0 640q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20m-1280 64q0 15 8 27t19 23q29 29 73 51t95 37t100 26t89 16v128h-8q-6 0-8-1q-39-5-90-15t-107-27t-108-40t-95-56t-68-74t-26-95V448q0-48 22-86t58-70t83-54t96-41t95-29t84-18q66-11 132-16t132-6q67 0 133 5t132 18q36 6 83 17t95 29t96 40t83 55t59 69t23 87v320h-128V637q-58 37-130 62t-148 40t-153 22t-145 7t-144-6t-153-22t-149-41t-130-62zM960 256q-57 0-130 6t-148 20t-143 40t-115 63q-14 11-27 27t-13 36q0 19 13 35t27 28q46 38 114 63t143 39t148 21t131 6q57 0 130-6t148-20t143-40t114-63q14-11 27-27t14-36q0-19-13-35t-28-28q-46-38-114-63t-142-39t-148-21t-131-6'
      />
    </svg>
  );
}

export function UserAgentApiIcon({
  width = '32px',
  height = '32px',
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
        d='M1 2h22v4h-2V4H3v13h9v2H1zm13 6h10v14H14zm2 2v10h6V10zm1.998 6.998h2.004v2.004h-2.004zM5 20h7v2H5z'
      />
    </svg>
  );
}

export function AddIcon({
  width = '1.5rem',
  height = '1.5rem',
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
        d='M7.007 12a.75.75 0 0 1 .75-.75h3.493V7.757a.75.75 0 0 1 1.5 0v3.493h3.493a.75.75 0 1 1 0 1.5H12.75v3.493a.75.75 0 0 1-1.5 0V12.75H7.757a.75.75 0 0 1-.75-.75'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M7.317 3.769a42.502 42.502 0 0 1 9.366 0c1.827.204 3.302 1.643 3.516 3.48c.37 3.157.37 6.346 0 9.503c-.215 1.837-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.643-3.516-3.48a40.903 40.903 0 0 1 0-9.503c.214-1.837 1.69-3.276 3.516-3.48m9.2 1.49a41.001 41.001 0 0 0-9.034 0A2.486 2.486 0 0 0 5.29 7.424a39.402 39.402 0 0 0 0 9.154a2.486 2.486 0 0 0 2.193 2.164c2.977.332 6.057.332 9.034 0a2.486 2.486 0 0 0 2.192-2.164a39.401 39.401 0 0 0 0-9.154a2.486 2.486 0 0 0-2.192-2.163'
        clipRule='evenodd'
      />
    </svg>
  );
}

export function RestrictionIcon({
  width = '1.5rem',
  height = '1.5rem',
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
        d='M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10s10-4.478 10-10S15.522 0 10 0m0 18.304A8.305 8.305 0 0 1 3.56 4.759l11.681 11.68A8.27 8.27 0 0 1 10 18.305m6.44-3.063L4.759 3.561a8.305 8.305 0 0 1 11.68 11.68'
      />
    </svg>
  );
}

export function DownloadInvoiceIcon({
  width = '1.5rem',
  height = '1.5rem',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        fill='currentColor'
        d='m12 15.577l-3.538-3.539l.707-.719L11.5 13.65V5h1v8.65l2.33-2.33l.708.718zM6.615 19q-.69 0-1.152-.462Q5 18.075 5 17.385v-2.423h1v2.423q0 .23.192.423q.193.192.423.192h10.77q.23 0 .423-.192q.192-.193.192-.423v-2.423h1v2.423q0 .69-.462 1.152q-.463.463-1.153.463z'
      />
    </svg>
  );
}

export function ChevronRightIcon() {
  return (
    <svg
      className='w-4 h-4 ml-1'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M9 5l7 7-7 7'
      />
    </svg>
  );
}

export function ChevronLefttIcon() {
  return (
    <svg
      className='w-4 h-4 mr-1'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M15 19l-7-7l7-7'
      />
    </svg>
  );
}

export function SearchIcon({
  width = '1.5rem',
  height = '1.5rem',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='currentColor'

    >
      <path
        fill='currentColor'
        d='m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14'
      />
    </svg>
  );
}

export function SortArrowsIcon({ width = '1.1rem', height = '1.1rem' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
    >
      <path
        fill='currentColor'
        d='m16 3.594l-.72.687l-8 8L5.595 14h20.811l-1.687-1.72l-8-8l-.72-.686zm0 2.844L21.563 12H10.438zM5.594 18l1.687 1.72l8 8l.72.686l.72-.687l8-8L26.405 18zm4.843 2h11.126L16 25.563z'
      />
    </svg>
  );
}

export function CopyIcon({ width = '1em', height = '1em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 15 15'
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M1 9.5A1.5 1.5 0 0 0 2.5 11H4v-1H2.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V4H5.5A1.5 1.5 0 0 0 4 5.5v7A1.5 1.5 0 0 0 5.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4H11V2.5A1.5 1.5 0 0 0 9.5 1h-7A1.5 1.5 0 0 0 1 2.5zm4-4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export function SuccessIcon({ width = '1em', height = '1em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z'
      />
    </svg>
  );
}

export function CalculatorIcon({
  width = '1em',
  height = '1em',
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
        d='M8 16v1.25q0 .325.213.538T8.75 18t.538-.213t.212-.537V16h1.25q.325 0 .538-.213t.212-.537t-.213-.537t-.537-.213H9.5v-1.25q0-.325-.213-.537T8.75 12.5t-.537.213T8 13.25v1.25H6.75q-.325 0-.537.213T6 15.25t.213.538t.537.212zm5.75 1.25h3.5q.325 0 .538-.213T18 16.5t-.213-.537t-.537-.213h-3.5q-.325 0-.537.213T13 16.5t.213.538t.537.212m0-2.5h3.5q.325 0 .538-.213T18 14t-.213-.537t-.537-.213h-3.5q-.325 0-.537.213T13 14t.213.538t.537.212m1.75-5.2l.875.875q.225.225.525.225t.525-.225q.2-.2.212-.513t-.187-.537l-.9-.925l.875-.875q.225-.225.225-.525t-.225-.525T16.9 6.3t-.525.225L15.5 7.4l-.875-.875Q14.4 6.3 14.1 6.3t-.525.225t-.225.525t.225.525l.875.875l-.9.925q-.2.225-.2.525t.225.525t.525.225t.525-.225zM7 9.2h3.5q.325 0 .538-.212t.212-.538t-.213-.537T10.5 7.7H7q-.325 0-.537.213t-.213.537t.213.538T7 9.2M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z'
      />
    </svg>
  );
}

export function ArrowUpIcon({ width = '1em', height = '1em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 1024 1024'
    >
      <path
        fill='currentColor'
        d='M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496'
      />
    </svg>
  );
}

export function ArrowDownIcon({
  width = '1em',
  height = '1em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 1024 1024'
    >
      <path
        fill='currentColor'
        d='M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496'
      />
    </svg>
  );
}

export function PlusIcon({ width = '1.5em', height = '1.5em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 256 256'
    >
      <path
        fill='currentColor'
        d='M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12'
      />
    </svg>
  );
}

export function InviteIcon({
  width = '1.5rem',
  height = '1.5rem',
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
        d='M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.9 2.9 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.9 2.9 0 0 0 18 11a3 3 0 0 0 0-6M8 10H5V7H3v3H0v2h3v3h2v-3h3Z'
      />
    </svg>
  );
}

export function AdminIcon({
  width = '1.5rem',
  height = '1.5rem',
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
        d='M12 23C6.443 21.765 2 16.522 2 11V5l10-4l10 4v6c0 5.524-4.443 10.765-10 12M4 6v5a10.58 10.58 0 0 0 8 10a10.58 10.58 0 0 0 8-10V6l-8-3Z'
      />
      <circle cx='12' cy='8.5' r='2.5' fill='currentColor' />
      <path
        fill='currentColor'
        d='M7 15a5.78 5.78 0 0 0 5 3a5.78 5.78 0 0 0 5-3c-.025-1.896-3.342-3-5-3c-1.667 0-4.975 1.104-5 3'
      />
    </svg>
  );
}

export function PythonIcon({
  width = '1.5em',
  height = '1.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 256 255'
    >
      <defs>
        <linearGradient
          id='logosPython0'
          x1='12.959%'
          x2='79.639%'
          y1='12.039%'
          y2='78.201%'
        >
          <stop offset='0%' stopColor='#387eb8' />
          <stop offset='100%' stopColor='#366994' />
        </linearGradient>
        <linearGradient
          id='logosPython1'
          x1='19.128%'
          x2='90.742%'
          y1='20.579%'
          y2='88.429%'
        >
          <stop offset='0%' stopColor='#ffe052' />
          <stop offset='100%' stopColor='#ffc331' />
        </linearGradient>
      </defs>
      <path
        fill='url(#logosPython0)'
        d='M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072M92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13'
      />
      <path
        fill='url(#logosPython1)'
        d='M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897m34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13'
      />
    </svg>
  );
}

export function PHPIcon({ width = '2em', height = '2em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 256 135'
    >
      <defs>
        <radialGradient
          id='logosPhp0'
          cx='.837'
          cy='-125.811'
          r='363.057'
          gradientTransform='translate(76.464 81.918)scale(.463)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor='#fff' />
          <stop offset='.5' stopColor='#4c6b97' />
          <stop offset='1' stopColor='#231f20' />
        </radialGradient>
      </defs>
      <ellipse cx='128' cy='67.3' fill='url(#logosPhp0)' rx='128' ry='67.3' />
      <ellipse cx='128' cy='67.3' fill='#6181b6' rx='123' ry='62.3' />
      <path
        fill='#fff'
        d='m152.9 87.5l6.1-31.4c1.4-7.1.2-12.4-3.4-15.7c-3.5-3.2-9.5-4.8-18.3-4.8h-10.6l3-15.6c.1-.6 0-1.2-.4-1.7s-.9-.7-1.5-.7h-14.6c-1 0-1.8.7-2 1.6l-6.5 33.3c-.6-3.8-2-7-4.4-9.6c-4.3-4.9-11-7.4-20.1-7.4H52.1c-1 0-1.8.7-2 1.6L37 104.7c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.7c1 0 1.8-.7 2-1.6l3.2-16.3h10.9c5.7 0 10.6-.6 14.3-1.8q5.85-1.95 10.5-6.3c2.5-2.3 4.6-4.9 6.2-7.7l-2.6 13.5c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.6c1 0 1.8-.7 2-1.6l7.2-37h10c4.3 0 5.5.8 5.9 1.2c.3.3.9 1.5.2 5.2L134.1 87c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h15c.9-.3 1.7-1 1.9-1.9m-67.6-26c-.9 4.7-2.6 8.1-5.1 10s-6.6 2.9-12 2.9h-6.5l4.7-24.2h8.4c6.2 0 8.7 1.3 9.7 2.4c1.3 1.6 1.6 4.7.8 8.9m130-18.6c-4.3-4.9-11-7.4-20.1-7.4h-28.3c-1 0-1.8.7-2 1.6l-13.1 67.5c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.7c1 0 1.8-.7 2-1.6l3.2-16.3h10.9c5.7 0 10.6-.6 14.3-1.8q5.85-1.95 10.5-6.3c2.6-2.4 4.8-5.1 6.4-8s2.8-6.1 3.5-9.6c1.7-8.7.4-15.5-3.9-20.5M200 61.5c-.9 4.7-2.6 8.1-5.1 10s-6.6 2.9-12 2.9h-6.5l4.7-24.2h8.4c6.2 0 8.7 1.3 9.7 2.4c1.4 1.6 1.7 4.7.8 8.9'
      />
      <path
        fill='#000004'
        d='M74.8 48.2c5.6 0 9.3 1 11.2 3.1s2.3 5.6 1.3 10.6c-1 5.2-3 9-5.9 11.2q-4.35 3.3-13.2 3.3h-8.9l5.5-28.2zM39 105h14.7l3.5-17.9h12.6c5.6 0 10.1-.6 13.7-1.8s6.8-3.1 9.8-5.9q3.75-3.45 6-7.5c1.5-2.7 2.6-5.7 3.2-9c1.6-8 .4-14.2-3.5-18.7s-10.1-6.7-18.6-6.7H52.1zm74.3-85.4h14.6l-3.5 17.9h13c8.2 0 13.8 1.4 16.9 4.3s4 7.5 2.8 13.9L151 87.1h-14.8l5.8-29.9c.7-3.4.4-5.7-.7-6.9s-3.6-1.9-7.3-1.9h-11.7l-7.5 38.7h-14.6zm76.2 28.6c5.6 0 9.3 1 11.2 3.1s2.3 5.6 1.3 10.6c-1 5.2-3 9-5.9 11.2q-4.35 3.3-13.2 3.3H174l5.5-28.2zM153.7 105h14.7l3.5-17.9h12.6c5.6 0 10.1-.6 13.7-1.8s6.8-3.1 9.8-5.9q3.75-3.45 6-7.5c1.5-2.7 2.6-5.7 3.2-9c1.6-8 .4-14.2-3.5-18.7s-10.1-6.7-18.6-6.7h-28.3z'
      />
    </svg>
  );
}

export function JavaIcon({ width = '1.7em', height = '1.7em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 128 128'
    >
      <path
        fill='#0074bd'
        d='M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092c0 0 2.871 1.795 6.873 3.351c-24.439 10.47-55.308-.607-36.115-5.969m-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6c0 0 1.993 2.025 5.132 3.131c-29.542 8.64-62.446.68-41.309-6.336'
      />
      <path
        fill='#ea2d2e'
        d='M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58c0 .001-42.731 10.67-22.324 34.187'
      />
      <path
        fill='#0074bd'
        d='M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171c-4.451-1.938 3.899-4.625 6.526-5.192c2.739-.593 4.303-.485 4.303-.485c-4.953-3.487-32.013 6.85-13.743 9.815c49.821 8.076 90.817-3.637 77.896-9.468M49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326c9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958c10.832-5.239 19.644-4.643 19.644-4.643m40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285c-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725c0-.002.359-.327.468-.617'
      />
      <path
        fill='#ea2d2e'
        d='M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559c-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587'
      />
      <path
        fill='#0074bd'
        d='M52.214 126.021c22.476 1.437 57-.8 57.817-11.436c0 0-1.571 4.032-18.577 7.231c-19.186 3.612-42.854 3.191-56.887.874c0 .001 2.875 2.381 17.647 3.331'
      />
    </svg>
  );
}

export function NodeJsIcon({
  width = '1.6em',
  height = '1.6em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 256 289'
    >
      <path
        fill='#539e43'
        d='M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385m32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101q0 1.193-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571'
      />
    </svg>
  );
}

export function JavaScriptIcon({
  width = '2.5em',
  height = '2.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 256 256'
    >
      <path fill='#f7df1e' d='M0 0h256v256H0z' />
      <path d='m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574' />
    </svg>
  );
}

export function RubyIcon({ width = '1.4em', height = '1.4em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 256 255'
    >
      <defs>
        <linearGradient
          id='logosRuby0'
          x1='84.75%'
          x2='58.254%'
          y1='111.399%'
          y2='64.584%'
        >
          <stop offset='0%' stopColor='#fb7655' />
          <stop offset='0%' stopColor='#fb7655' />
          <stop offset='41%' stopColor='#e42b1e' />
          <stop offset='99%' stopColor='#900' />
          <stop offset='100%' stopColor='#900' />
        </linearGradient>
        <linearGradient
          id='logosRuby1'
          x1='116.651%'
          x2='1.746%'
          y1='60.89%'
          y2='19.288%'
        >
          <stop offset='0%' stopColor='#871101' />
          <stop offset='0%' stopColor='#871101' />
          <stop offset='99%' stopColor='#911209' />
          <stop offset='100%' stopColor='#911209' />
        </linearGradient>
        <linearGradient
          id='logosRuby2'
          x1='75.774%'
          x2='38.978%'
          y1='219.327%'
          y2='7.829%'
        >
          <stop offset='0%' stopColor='#871101' />
          <stop offset='0%' stopColor='#871101' />
          <stop offset='99%' stopColor='#911209' />
          <stop offset='100%' stopColor='#911209' />
        </linearGradient>
        <linearGradient
          id='logosRuby3'
          x1='50.012%'
          x2='66.483%'
          y1='7.234%'
          y2='79.135%'
        >
          <stop offset='0%' stopColor='#fff' />
          <stop offset='0%' stopColor='#fff' />
          <stop offset='23%' stopColor='#e57252' />
          <stop offset='46%' stopColor='#de3b20' />
          <stop offset='99%' stopColor='#a60003' />
          <stop offset='100%' stopColor='#a60003' />
        </linearGradient>
        <linearGradient
          id='logosRuby4'
          x1='46.174%'
          x2='49.932%'
          y1='16.348%'
          y2='83.047%'
        >
          <stop offset='0%' stopColor='#fff' />
          <stop offset='0%' stopColor='#fff' />
          <stop offset='23%' stopColor='#e4714e' />
          <stop offset='56%' stopColor='#be1a0d' />
          <stop offset='99%' stopColor='#a80d00' />
          <stop offset='100%' stopColor='#a80d00' />
        </linearGradient>
        <linearGradient
          id='logosRuby5'
          x1='36.965%'
          x2='49.528%'
          y1='15.594%'
          y2='92.478%'
        >
          <stop offset='0%' stopColor='#fff' />
          <stop offset='0%' stopColor='#fff' />
          <stop offset='18%' stopColor='#e46342' />
          <stop offset='40%' stopColor='#c82410' />
          <stop offset='99%' stopColor='#a80d00' />
          <stop offset='100%' stopColor='#a80d00' />
        </linearGradient>
        <linearGradient
          id='logosRuby6'
          x1='13.609%'
          x2='85.764%'
          y1='58.346%'
          y2='-46.717%'
        >
          <stop offset='0%' stopColor='#fff' />
          <stop offset='0%' stopColor='#fff' />
          <stop offset='54%' stopColor='#c81f11' />
          <stop offset='99%' stopColor='#bf0905' />
          <stop offset='100%' stopColor='#bf0905' />
        </linearGradient>
        <linearGradient
          id='logosRuby7'
          x1='27.624%'
          x2='50.745%'
          y1='21.135%'
          y2='79.056%'
        >
          <stop offset='0%' stopColor='#fff' />
          <stop offset='0%' stopColor='#fff' />
          <stop offset='31%' stopColor='#de4024' />
          <stop offset='99%' stopColor='#bf190b' />
          <stop offset='100%' stopColor='#bf190b' />
        </linearGradient>
        <linearGradient
          id='logosRuby8'
          x1='-20.667%'
          x2='104.242%'
          y1='122.282%'
          y2='-6.342%'
        >
          <stop offset='0%' stopColor='#bd0012' />
          <stop offset='0%' stopColor='#bd0012' />
          <stop offset='7%' stopColor='#fff' />
          <stop offset='17%' stopColor='#fff' />
          <stop offset='27%' stopColor='#c82f1c' />
          <stop offset='33%' stopColor='#820c01' />
          <stop offset='46%' stopColor='#a31601' />
          <stop offset='72%' stopColor='#b31301' />
          <stop offset='99%' stopColor='#e82609' />
          <stop offset='100%' stopColor='#e82609' />
        </linearGradient>
        <linearGradient
          id='logosRuby9'
          x1='58.792%'
          x2='11.964%'
          y1='65.205%'
          y2='50.128%'
        >
          <stop offset='0%' stopColor='#8c0c01' />
          <stop offset='0%' stopColor='#8c0c01' />
          <stop offset='54%' stopColor='#990c00' />
          <stop offset='99%' stopColor='#a80d0e' />
          <stop offset='100%' stopColor='#a80d0e' />
        </linearGradient>
        <linearGradient
          id='logosRubya'
          x1='79.319%'
          x2='23.088%'
          y1='62.754%'
          y2='17.888%'
        >
          <stop offset='0%' stopColor='#7e110b' />
          <stop offset='0%' stopColor='#7e110b' />
          <stop offset='99%' stopColor='#9e0c00' />
          <stop offset='100%' stopColor='#9e0c00' />
        </linearGradient>
        <linearGradient
          id='logosRubyb'
          x1='92.88%'
          x2='59.841%'
          y1='74.122%'
          y2='39.704%'
        >
          <stop offset='0%' stopColor='#79130d' />
          <stop offset='0%' stopColor='#79130d' />
          <stop offset='99%' stopColor='#9e120b' />
          <stop offset='100%' stopColor='#9e120b' />
        </linearGradient>
        <linearGradient
          id='logosRubyc'
          x1='56.57%'
          x2='3.105%'
          y1='101.717%'
          y2='11.993%'
        >
          <stop offset='0%' stopColor='#8b2114' />
          <stop offset='0%' stopColor='#8b2114' />
          <stop offset='43%' stopColor='#9e100a' />
          <stop offset='99%' stopColor='#b3100c' />
          <stop offset='100%' stopColor='#b3100c' />
        </linearGradient>
        <linearGradient
          id='logosRubyd'
          x1='30.87%'
          x2='92.471%'
          y1='35.599%'
          y2='100.694%'
        >
          <stop offset='0%' stopColor='#b31000' />
          <stop offset='0%' stopColor='#b31000' />
          <stop offset='44%' stopColor='#910f08' />
          <stop offset='99%' stopColor='#791c12' />
          <stop offset='100%' stopColor='#791c12' />
        </linearGradient>
        <radialGradient
          id='logosRubye'
          cx='32.001%'
          cy='40.21%'
          r='69.573%'
          fx='32.001%'
          fy='40.21%'
        >
          <stop offset='0%' stopColor='#a80d00' />
          <stop offset='0%' stopColor='#a80d00' />
          <stop offset='99%' stopColor='#7e0e08' />
          <stop offset='100%' stopColor='#7e0e08' />
        </radialGradient>
        <radialGradient
          id='logosRubyf'
          cx='13.549%'
          cy='40.86%'
          r='88.386%'
          fx='13.549%'
          fy='40.86%'
        >
          <stop offset='0%' stopColor='#a30c00' />
          <stop offset='0%' stopColor='#a30c00' />
          <stop offset='99%' stopColor='#800e08' />
          <stop offset='100%' stopColor='#800e08' />
        </radialGradient>
      </defs>
      <path
        fill='url(#logosRuby0)'
        d='m197.467 167.764l-145.52 86.41l188.422-12.787L254.88 51.393z'
      />
      <path
        fill='url(#logosRuby1)'
        d='M240.677 241.257L224.482 129.48l-44.113 58.25z'
      />
      <path
        fill='url(#logosRuby2)'
        d='m240.896 241.257l-118.646-9.313l-69.674 21.986z'
      />
      <path
        fill='url(#logosRuby3)'
        d='m52.744 253.955l29.64-97.1L17.16 170.8z'
      />
      <path
        fill='url(#logosRuby4)'
        d='M180.358 188.05L153.085 81.226l-78.047 73.16z'
      />
      <path
        fill='url(#logosRuby5)'
        d='m248.693 82.73l-73.777-60.256l-20.544 66.418z'
      />
      <path fill='url(#logosRuby6)' d='M214.191.99L170.8 24.97L143.424.669z' />
      <path
        fill='url(#logosRuby7)'
        d='m0 203.372l18.177-33.151l-14.704-39.494z'
      />
      <path
        fill='#fff'
        d='m2.496 129.48l14.794 41.963l64.283-14.422l73.39-68.207l20.712-65.787L143.063 0L87.618 20.75c-17.469 16.248-51.366 48.396-52.588 49c-1.21.618-22.384 40.639-32.534 59.73'
      />
      <path
        fill='url(#logosRuby8)'
        d='M54.442 54.094c37.86-37.538 86.667-59.716 105.397-40.818c18.72 18.898-1.132 64.823-38.992 102.349c-37.86 37.525-86.062 60.925-104.78 42.027c-18.73-18.885.515-66.032 38.375-103.558'
      />
      <path
        fill='url(#logosRuby9)'
        d='m52.744 253.916l29.408-97.409l97.665 31.376c-35.312 33.113-74.587 61.106-127.073 66.033'
      />
      <path
        fill='url(#logosRubya)'
        d='m155.092 88.622l25.073 99.313c29.498-31.016 55.972-64.36 68.938-105.603z'
      />
      <path
        fill='url(#logosRubyb)'
        d='M248.847 82.833c10.035-30.282 12.35-73.725-34.966-81.791l-38.825 21.445z'
      />
      <path
        fill='#9e1209'
        d='M0 202.935c1.39 49.979 37.448 50.724 52.808 51.162l-35.48-82.86z'
      />
      <path
        fill='url(#logosRubye)'
        d='M155.232 88.777c22.667 13.932 68.35 41.912 69.276 42.426c1.44.81 19.695-30.784 23.838-48.64z'
      />
      <path
        fill='url(#logosRubyf)'
        d='m82.113 156.507l39.313 75.848c23.246-12.607 41.45-27.967 58.121-44.42z'
      />
      <path
        fill='url(#logosRubyc)'
        d='m17.174 171.34l-5.57 66.328c10.51 14.357 24.97 15.605 40.136 14.486c-10.973-27.311-32.894-81.92-34.566-80.814'
      />
      <path
        fill='url(#logosRubyd)'
        d='m174.826 22.654l78.1 10.96c-4.169-17.662-16.969-29.06-38.787-32.623z'
      />
    </svg>
  );
}

export function CSharpIcon({
  width = '2.5em',
  height = '2.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 128 128'
    >
      <path
        fill='#9b4f96'
        d='M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7s-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7'
      />
      <path
        fill='#68217a'
        d='M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7s2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8z'
      />
      <path
        fill='#fff'
        d='M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20c-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8z'
      />
    </svg>
  );
}

export function CIcon({ width = '2.5em', height = '2.5em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 128 128'
    >
      <path
        fill='#659ad3'
        d='M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7s-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7'
      />
      <path
        fill='#03599c'
        d='M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7s2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8z'
      />
      <path
        fill='#fff'
        d='M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20c-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8z'
      />
    </svg>
  );
}

export function RustIcon({ width = '2.5em', height = '2.5em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 16 16'
    >
      <g
        fill='none'
        stroke='#f5a97f'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M15.5 9.5Q8 13.505.5 9.5l1-1l-1-2l2-.5V4.5h2l.5-2l1.5 1l1.5-2l1.5 2l1.5-1l.5 2h2V6l2 .5l-1 2z' />
        <path d='M6.5 7.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m5 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1M4 11.02c-.67.37-1.5.98-1.5 2.23s1.22 1.22 2 1.25v-2M12 11c.67.37 1.5 1 1.5 2.25s-1.22 1.22-2 1.25v-2' />
      </g>
    </svg>
  );
}

export function BashIcon({ width = '2.5em', height = '2.5em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 128 128'
    >
      <path fill='none' d='M-143.76 4.24h119.53v119.53h-119.53z' />
      <path
        fill='currentColor'
        d='M109.01 28.64L71.28 6.24c-2.25-1.33-4.77-2-7.28-2s-5.03.67-7.28 2.01l-37.74 22.4c-4.5 2.67-7.28 7.61-7.28 12.96v44.8c0 5.35 2.77 10.29 7.28 12.96l37.73 22.4c2.25 1.34 4.76 2 7.28 2c2.51 0 5.03-.67 7.28-2l37.74-22.4c4.5-2.67 7.28-7.62 7.28-12.96V41.6c0-5.34-2.77-10.29-7.28-12.96M79.79 98.59l.06 3.22c0 .39-.25.83-.55.99l-1.91 1.1c-.3.15-.56-.03-.56-.42l-.03-3.17c-1.63.68-3.29.84-4.34.42c-.2-.08-.29-.37-.21-.71l.69-2.91c.06-.23.18-.46.34-.6c.06-.06.12-.1.18-.13c.11-.06.22-.07.31-.03c1.14.38 2.59.2 3.99-.5c1.78-.9 2.97-2.72 2.95-4.52c-.02-1.64-.9-2.31-3.05-2.33c-2.74.01-5.3-.53-5.34-4.57c-.03-3.32 1.69-6.78 4.43-8.96l-.03-3.25c0-.4.24-.84.55-1l1.85-1.18c.3-.15.56.04.56.43l.03 3.25c1.36-.54 2.54-.69 3.61-.44c.23.06.34.38.24.75l-.72 2.88c-.06.22-.18.44-.33.58a.8.8 0 0 1-.19.14c-.1.05-.19.06-.28.05c-.49-.11-1.65-.36-3.48.56c-1.92.97-2.59 2.64-2.58 3.88c.02 1.48.77 1.93 3.39 1.97c3.49.06 4.99 1.58 5.03 5.09c.05 3.44-1.79 7.15-4.61 9.41m19.78-5.41c0 .3-.04.58-.29.72l-9.54 5.8c-.25.15-.45.02-.45-.28v-2.46c0-.3.18-.46.43-.61l9.4-5.62c.25-.15.45-.02.45.28zm6.56-55.09l-35.7 22.05c-4.45 2.6-7.73 5.52-7.74 10.89v43.99c0 3.21 1.3 5.29 3.29 5.9c-.65.11-1.32.19-1.98.19c-2.09 0-4.15-.57-5.96-1.64l-37.73-22.4c-3.69-2.19-5.98-6.28-5.98-10.67V41.6c0-4.39 2.29-8.48 5.98-10.67l37.74-22.4c1.81-1.07 3.87-1.64 5.96-1.64s4.15.57 5.96 1.64l37.74 22.4c3.11 1.85 5.21 5.04 5.8 8.63c-1.27-2.67-4.09-3.39-7.38-1.47'
      />
    </svg>
  );
}

export function GoIcon({ width = '2.5em', height = '2.5em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
    >
      <path
        fill='currentColor'
        d='M2.417 14.286c-.063 0-.078-.031-.047-.078l.328-.422c.031-.047.104-.078.167-.078h5.563c.063 0 .078.047.047.094l-.266.406a.23.23 0 0 1-.156.094zM.063 15.719c-.063 0-.078-.031-.047-.078l.328-.422c.031-.042.109-.073.172-.073H7.62c.063 0 .094.047.078.094l-.125.37c-.016.063-.078.094-.141.094zm3.77 1.432c-.063 0-.078-.047-.047-.089l.219-.391c.031-.047.094-.094.156-.094h3.115c.063 0 .094.047.094.109l-.031.375c0 .063-.063.109-.109.109zm16.172-3.146c-.979.25-1.651.438-2.62.688c-.234.063-.245.078-.453-.156c-.229-.266-.401-.438-.729-.594c-.984-.479-1.932-.344-2.818.234c-1.063.688-1.604 1.698-1.589 2.958c.01 1.25.87 2.276 2.099 2.448c1.063.141 1.948-.234 2.651-1.026c.141-.172.266-.359.422-.578h-3.01c-.323 0-.406-.203-.297-.469a26 26 0 0 1 .797-1.698a.43.43 0 0 1 .391-.25h5.672c-.031.422-.031.844-.094 1.266a6.65 6.65 0 0 1-1.281 3.052c-1.12 1.479-2.583 2.401-4.438 2.646c-1.526.203-2.948-.094-4.193-1.026c-1.151-.87-1.807-2.026-1.979-3.458c-.198-1.698.297-3.224 1.328-4.568c1.104-1.448 2.568-2.365 4.359-2.693c1.464-.266 2.87-.094 4.13.76c.828.547 1.417 1.297 1.807 2.198c.094.141.031.219-.156.266zm5.156 8.62c-1.417-.036-2.708-.438-3.802-1.375a4.9 4.9 0 0 1-1.682-3.005c-.281-1.76.203-3.318 1.26-4.708c1.141-1.495 2.51-2.271 4.365-2.599c1.589-.281 3.083-.125 4.443.797c1.229.839 1.995 1.974 2.193 3.469c.266 2.104-.339 3.818-1.792 5.286c-1.026 1.042-2.286 1.698-3.74 1.99c-.417.083-.839.094-1.245.146zm3.709-6.297c-.016-.203-.016-.359-.047-.516c-.281-1.542-1.698-2.411-3.177-2.073c-1.448.328-2.385 1.25-2.729 2.714c-.276 1.214.313 2.448 1.438 2.943c.854.375 1.714.328 2.536-.094c1.234-.641 1.901-1.635 1.979-2.974'
      />
    </svg>
  );
}

export function KotlinIcon({
  width = '2.5em',
  height = '2.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 256 256'
    >
      <g fill='none'>
        <rect width='256' height='256' fill='#f4f2ed' rx='60' />
        <path
          fill='url(#skillIconsKotlinLight0)'
          d='M218 218H38V38h180l-90 90z'
        />
        <defs>
          <linearGradient
            id='skillIconsKotlinLight0'
            x1='218'
            x2='38'
            y1='38'
            y2='218'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='.003' stopColor='#e44857' />
            <stop offset='.469' stopColor='#c711e1' />
            <stop offset='1' stopColor='#7f52ff' />
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}

export function DartIcon({ width = '2.5em', height = '2.5em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 128 128'
    >
      <path
        fill='#00c4b3'
        d='m35.2 34.9l-8.3-8.3v59.7l.1 2.8c0 1.3.2 2.8.7 4.3l65.6 23.1l16.3-7.2z'
      />
      <path
        fill='#22d3c5'
        d='m109.6 109.3l-16.3 7.2l-65.4-23.1c1.3 4.8 4 10.1 7 13.2l21.3 21.2l47.6.1z'
      />
      <path
        fill='#0075c9'
        d='M1.7 65.1C-.4 67.3.7 72 4 75.5l14.7 14.8l9.2 3.3c-.3-1.5-.7-3-.7-4.3l-.1-2.8l-.2-59.8m82.7 82.6l7.2-16.4l-23-65.6c-1.5-.3-3-.6-4.3-.7l-2.9-.1l-59.6.1'
      />
      <path
        fill='#00a8e1'
        d='M93.6 27.3q.3 0 0 0q.3 0 0 0m16 82l17.7-5.8V54.8l-20.4-20.5c-3-3-8.3-5.8-13.2-7l23.1 65.6'
      />
      <path
        fill='#00c4b3'
        d='M90.5 18.2L75.7 3.5c-3.4-3.4-8-4.4-10.4-2.3L26.9 26.6h59.5l2.9.1c1.3 0 2.8.2 4.3.7z'
      />
    </svg>
  );
}

export function SwiftIcon({
  width = '2.5em',
  height = '2.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 128 128'
    >
      <path
        fill='#f05138'
        d='M126.33 34.06a39.3 39.3 0 0 0-.79-7.83a28.8 28.8 0 0 0-2.65-7.58a28.8 28.8 0 0 0-4.76-6.32a23.4 23.4 0 0 0-6.62-4.55a27.3 27.3 0 0 0-7.68-2.53c-2.65-.51-5.56-.51-8.21-.76H30.25a45.5 45.5 0 0 0-6.09.51a21.8 21.8 0 0 0-5.82 1.52c-.53.25-1.32.51-1.85.76a34 34 0 0 0-5 3.28c-.53.51-1.06.76-1.59 1.26a22.4 22.4 0 0 0-4.76 6.32a23.6 23.6 0 0 0-2.65 7.58a79 79 0 0 0-.79 7.83v60.39a39.3 39.3 0 0 0 .79 7.83a28.8 28.8 0 0 0 2.65 7.58a28.8 28.8 0 0 0 4.76 6.32a23.4 23.4 0 0 0 6.62 4.55a27.3 27.3 0 0 0 7.68 2.53c2.65.51 5.56.51 8.21.76h63.22a45 45 0 0 0 8.21-.76a27.3 27.3 0 0 0 7.68-2.53a30 30 0 0 0 6.62-4.55a22.4 22.4 0 0 0 4.76-6.32a23.6 23.6 0 0 0 2.65-7.58a79 79 0 0 0 .79-7.83V34.06z'
      />
      <path
        fill='#fefefe'
        d='M85 96.5c-11.11 6.13-26.38 6.76-41.75.47A64.53 64.53 0 0 1 13.84 73a50 50 0 0 0 10.85 6.32c15.87 7.1 31.73 6.61 42.9 0c-15.9-11.66-29.4-26.82-39.46-39.2a43.5 43.5 0 0 1-5.29-6.82c12.16 10.61 31.5 24 38.38 27.79a272 272 0 0 1-27-32.34a266.8 266.8 0 0 0 44.47 34.87c.71.38 1.26.7 1.7 1a33 33 0 0 0 1.21-3.51c3.71-12.89-.53-27.54-9.79-39.67C93.25 33.81 106 57.05 100.66 76.51c-.14.53-.29 1-.45 1.55l.19.22c10.59 12.63 7.68 26 6.35 23.5C101 91 90.37 94.33 85 96.5'
      />
    </svg>
  );
}

export function DotsMenuIcon({
  width = '2.5em',
  height = '2.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92'
      />
    </svg>
  );
}

export function ExpandIcon({
  width = '1.5em',
  height = '1.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 32 32'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m9 20l7 7l7-7m0-8l-7-7l-7 7'
      />
    </svg>
  );
}

export function CollapseIcon({
  width = '1.5em',
  height = '1.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 512 512'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
        d='m136 104l120 104l120-104M136 408l120-104l120 104'
      />
    </svg>
  );
}

export function IncludeIcon({ width = '2em', height = '2em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z'
      />
    </svg>
  );
}

export function SubscriptionIcon({
  width = '2em',
  height = '2em',
}: IconSizeProps) {
  return (
    <svg
      width={width}
      height={height}
      fill='currentColor'
      version='1.1'
      id='Layer_1'
      viewBox='0 0 100 100'
      enableBackground='new 0 0 100 100'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <g>
          <path d='M83.729,23.57c-0.007-0.562-0.32-1.084-0.825-1.337c-0.503-0.259-1.107-0.212-1.568,0.114l-5.944,4.262l-0.468,0.336 c-6.405-6.391-15.196-10.389-24.938-10.389c-13.284,0-24.878,7.354-30.941,18.201l0.024,0.013 c-0.548,1.183-0.124,2.607,1.026,3.271c0.001,0,0.001,0,0.002,0.001l8.136,4.697c1.218,0.704,2.777,0.287,3.48-0.932 c0.006-0.011,0.009-0.023,0.015-0.034c3.591-6.404,10.438-10.747,18.289-10.747c4.879,0,9.352,1.696,12.914,4.5l-1.001,0.719 l-5.948,4.262c-0.455,0.327-0.696,0.89-0.611,1.447c0.081,0.558,0.471,1.028,1.008,1.208l25.447,8.669 c0.461,0.162,0.966,0.084,1.367-0.203c0.399-0.29,0.629-0.746,0.627-1.23L83.729,23.57z'></path>{' '}
          <path d='M79.904,61.958c0,0-0.001,0-0.002-0.001l-8.136-4.697c-1.218-0.704-2.777-0.287-3.48,0.932 c-0.006,0.011-0.009,0.023-0.015,0.034c-3.591,6.404-10.438,10.747-18.289,10.747c-4.879,0-9.352-1.696-12.914-4.5l1.001-0.719 l5.948-4.262c0.455-0.327,0.696-0.89,0.611-1.447c-0.081-0.558-0.471-1.028-1.008-1.208l-25.447-8.669 c-0.461-0.162-0.966-0.084-1.367,0.203c-0.399,0.29-0.629,0.746-0.627,1.23l0.092,26.828c0.007,0.562,0.32,1.084,0.825,1.337 c0.503,0.259,1.107,0.212,1.568-0.114l5.944-4.262l0.468-0.336c6.405,6.391,15.196,10.389,24.938,10.389 c13.284,0,24.878-7.354,30.941-18.201L80.93,65.23C81.478,64.046,81.055,62.623,79.904,61.958z'></path>{' '}
        </g>
      </g>
    </svg>
  );
}

export function OrganizationPlanIcon({
  width = '2em',
  height = '2em',
}: IconSizeProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='currentColor' >
      <g id='SVGRepo_iconCarrier'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M22 2H2V22H22V2ZM20 4H4V20H20V4Z'
        ></path>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 8.27273C9.89364 8.27273 8.18182 9.98455 8.18182 12.0909H10.0909L7.54545 14.6364L5 12.0909H6.90909C6.90909 9.27818 9.18727 7 12 7C12.9991 7 13.9282 7.29273 14.7109 7.78909L13.7818 8.71818C13.2536 8.43182 12.6427 8.27273 12 8.27273ZM13.9091 12.0909L16.4545 9.54545L19 12.0909H17.0909C17.0909 14.9036 14.8127 17.1818 12 17.1818C11.0009 17.1818 10.0718 16.8891 9.28909 16.3927L10.2182 15.4636C10.7464 15.75 11.3573 15.9091 12 15.9091C14.1064 15.9091 15.8182 14.1973 15.8182 12.0909H13.9091Z'
        ></path>
      </g>
    </svg>
  );
}

export function LinkIcon({ width = '2em', height = '2em' }: IconSizeProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 640 512'>
      <path d='M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z' />
    </svg>
  );
}

export function DiscountIcon({ width = '2em', height = '2em' }: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      width={width}
      height={height}
      viewBox='0 0 256 256'
      fill='currentColor'
    >
      <defs></defs>
      <g transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'>
        <path
          d='M 33.811 43.004 c -4.8 0 -8.705 -3.905 -8.705 -8.705 c 0 -4.8 3.905 -8.705 8.705 -8.705 s 8.705 3.905 8.705 8.705 C 42.516 39.1 38.611 43.004 33.811 43.004 z M 33.811 29.594 c -2.595 0 -4.706 2.111 -4.706 4.705 c 0 2.595 2.111 4.706 4.706 4.706 s 4.706 -2.111 4.706 -4.706 C 38.517 31.705 36.406 29.594 33.811 29.594 z'
          transform=' matrix(1 0 0 1 0 0) '
          strokeLinecap='round'
        />
        <path
          d='M 29.059 64.406 c -0.482 0 -0.966 -0.174 -1.35 -0.525 c -0.815 -0.746 -0.87 -2.01 -0.124 -2.825 l 31.881 -34.812 c 0.746 -0.814 2.01 -0.871 2.825 -0.124 c 0.814 0.746 0.87 2.011 0.124 2.825 l -31.88 34.812 C 30.14 64.187 29.601 64.406 29.059 64.406 z'
          transform=' matrix(1 0 0 1 0 0) '
          strokeLinecap='round'
        />
        <path
          d='M 57.166 64.406 c -4.8 0 -8.705 -3.905 -8.705 -8.705 s 3.905 -8.705 8.705 -8.705 s 8.705 3.905 8.705 8.705 S 61.966 64.406 57.166 64.406 z M 57.166 50.995 c -2.595 0 -4.706 2.111 -4.706 4.706 c 0 2.595 2.111 4.706 4.706 4.706 c 2.595 0 4.706 -2.111 4.706 -4.706 C 61.872 53.106 59.761 50.995 57.166 50.995 z'
          transform=' matrix(1 0 0 1 0 0) '
          strokeLinecap='round'
        />
        <path
          d='M 56.971 88.104 c -0.933 0 -1.882 -0.209 -2.781 -0.648 l -8.18 -3.998 c -0.643 -0.314 -1.38 -0.314 -2.02 0 l -8.18 3.998 c -3.069 1.504 -6.728 0.312 -8.331 -2.706 l -4.267 -8.043 c -0.335 -0.632 -0.93 -1.064 -1.634 -1.187 l -8.968 -1.573 c -3.366 -0.591 -5.627 -3.704 -5.149 -7.087 l 1.275 -9.015 c 0.099 -0.697 -0.134 -1.416 -0.623 -1.921 L 1.782 49.38 c -2.377 -2.455 -2.377 -6.304 0 -8.76 l 6.33 -6.543 c 0.497 -0.514 0.724 -1.214 0.624 -1.921 l -1.275 -9.015 c -0.478 -3.383 1.784 -6.497 5.149 -7.087 l 8.967 -1.573 c 0.704 -0.124 1.3 -0.557 1.635 -1.188 l 4.267 -8.043 c 1.601 -3.019 5.261 -4.209 8.331 -2.707 l 8.179 3.998 c 0.641 0.313 1.378 0.313 2.021 0 l 8.18 -3.998 c 3.069 -1.502 6.729 -0.312 8.33 2.707 l 4.268 8.042 c 0.335 0.632 0.93 1.064 1.634 1.188 l 8.968 1.573 c 3.365 0.591 5.627 3.704 5.148 7.087 l -1.275 9.015 c -0.101 0.707 0.128 1.408 0.625 1.921 l 6.33 6.543 c 2.376 2.456 2.376 6.304 0 8.76 l -6.33 6.543 c -0.497 0.514 -0.725 1.214 -0.625 1.922 l 1.275 9.014 c 0.478 3.383 -1.783 6.496 -5.148 7.087 l -8.968 1.573 c -0.705 0.123 -1.3 0.556 -1.633 1.186 L 62.52 84.75 C 61.388 86.884 59.225 88.103 56.971 88.104 z M 45 79.221 c 0.944 0 1.887 0.215 2.767 0.644 l 8.179 3.998 c 1.119 0.547 2.456 0.114 3.042 -0.988 l 4.268 -8.043 c 0.916 -1.729 2.548 -2.914 4.477 -3.251 l 8.967 -1.573 c 1.229 -0.216 2.054 -1.353 1.879 -2.588 l -1.275 -9.015 c -0.273 -1.939 0.35 -3.858 1.712 -5.263 l 6.329 -6.542 c 0.868 -0.897 0.868 -2.302 0 -3.198 l -6.33 -6.543 c -1.361 -1.406 -1.984 -3.324 -1.711 -5.262 l 1.275 -9.015 c 0.175 -1.236 -0.65 -2.372 -1.879 -2.588 l -8.968 -1.573 c -1.928 -0.338 -3.56 -1.524 -4.477 -3.253 l -4.267 -8.041 c -0.586 -1.103 -1.919 -1.537 -3.041 -0.989 l -8.181 3.998 l 0 0 c -1.757 0.859 -3.774 0.859 -5.532 0 l -8.179 -3.998 c -1.119 -0.548 -2.456 -0.113 -3.042 0.989 l -4.267 8.042 c -0.917 1.728 -2.548 2.914 -4.476 3.252 l -8.968 1.573 c -1.229 0.216 -2.055 1.353 -1.88 2.588 l 1.275 9.014 c 0.274 1.938 -0.349 3.856 -1.71 5.262 l -6.33 6.543 c -0.868 0.897 -0.868 2.302 0 3.198 l 6.331 6.543 c 1.361 1.406 1.984 3.324 1.71 5.262 l -1.275 9.015 c -0.175 1.235 0.651 2.373 1.881 2.588 l 8.967 1.573 c 1.927 0.337 3.559 1.522 4.477 3.251 l 4.267 8.043 c 0.584 1.101 1.919 1.534 3.043 0.988 l 8.179 -3.998 C 43.112 79.435 44.056 79.221 45 79.221 z M 46.888 8.339 h 0.01 H 46.888 z'
          transform=' matrix(1 0 0 1 0 0) '
          strokeLinecap='round'
        />
      </g>
    </svg>
  );
}

export function LoadingIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      version='1.0'
      width={width}
      height={height}
      viewBox='0 0 50.000000 50.000000'
      preserveAspectRatio='xMidYMid meet'
    >
      <g
        transform='translate(0.000000,50.000000) scale(0.100000,-0.100000)'
        fill='#000000'
        stroke='none'
      >
        <path
          d='M160 459 c-25 -11 -56 -30 -68 -42 -24 -22 -62 -88 -62 -107 0 -20
        18 -9 24 15 4 14 25 45 49 69 81 85 205 88 291 8 34 -32 65 -96 66 -134 0 -16
        5 -28 10 -28 32 0 -15 134 -61 177 -66 61 -170 78 -249 42z'
        />
        <path d='M20 233 c0 -31 15 -60 23 -47 7 13 -4 74 -14 74 -5 0 -9 -12 -9 -27z' />
        <path d='M50 141 c0 -15 38 -56 45 -49 4 4 -1 18 -12 32 -18 26 -33 33 -33 17z' />
        <path
          d='M390 90 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
        -10 -4 -10 -10z'
        />
        <path d='M130 62 c0 -5 11 -14 25 -20 29 -14 34 2 6 18 -24 12 -31 13 -31 2z' />
        <path d='M322 53 c-6 -2 -10 -9 -7 -13 7 -11 35 -2 35 11 0 10 -8 10 -28 2z' />
        <path
          d='M230 30 c0 -5 9 -10 20 -10 11 0 20 5 20 10 0 6 -9 10 -20 10 -11 0
        -20 -4 -20 -10z'
        />
      </g>
    </svg>
  );
}
export function CommodityIcon({
  width = '32px',
  height = '32px',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      shapeRendering='geometricPrecision'
      textRendering='geometricPrecision'
      imageRendering='optimizeQuality'
      fillRule='evenodd'
      clipRule='evenodd'
      viewBox='0 0 512 390.24'
      width={width}
      height={height}
    >
      <path
        fill='currentColor'
        d='M103.98 113.12c-16.16 2.01-26.04-6.32-26.49-29.94 9.39.63 32.74 5.9 26.49 29.94z'
      />
      <path
        fill='currentColor'
        d='M132.54 150.86c-10.69 11.01-18.23 13.26-36.64-2.23 13.02-6.46 24.49-15.7 36.64 2.23zm-17.21-19.57c-9.97 10.25-16.98 12.35-34.11-2.09 12.09-6.03 22.78-14.61 34.11 2.09zm87.08 86.09c15.54-11.69 19.59-20.79 3.05-46.39-10.22 15.3-23.65 28.25-3.05 46.39zm-22.28-25.29c15.54-11.69 19.59-20.8 3.05-46.39-10.21 15.31-23.63 28.26-3.05 46.39zm-21.85-24.75c13.83-10.39 17.43-18.5 2.72-41.26-9.09 13.61-21.04 25.12-2.72 41.26zm-19.45-22.02c12.27-9.21 15.46-16.41 2.42-36.62-8.06 12.09-18.67 22.3-2.42 36.62zm-17.24-19.54c11.43-8.59 14.4-15.28 2.24-34.1-7.51 11.23-17.39 20.77-2.24 34.1zm74.38 97.27c-13.56 13.94-23.1 16.8-46.4-2.83 16.47-8.21 31.02-19.91 46.4 2.83zm-22.28-25.29c-13.56 13.93-23.1 16.8-46.4-2.84 16.48-8.19 31.04-19.89 46.4 2.84zm-21.77-24.82c-12.05 12.4-20.55 14.95-41.27-2.51 14.65-7.3 27.57-17.7 41.27 2.51z'
      />
      <path
        fill='currentColor'
        d='M364.32 380.54c-14.05 2.12-29.34 3.28-45.35 3.28-68.68 0-124.38-21.36-124.38-47.76 0-5.18 2.16-10.15 6.13-14.8v-25.9c-4.72-5.18-7.28-12.27-7.28-16.55 0-4.28.59-5.5 1.72-8.15 1.18 1.21 2.46 2.4 3.87 3.53 19.86 16.08 64.62 26.11 111.13 27.54 9.4.3 18.88.24 28.25-.19-.72 3.82-1.11 7.63-1.11 11.45 0 13.42 2.51 26.11 7.54 38.05 4.52 10.74 11.02 20.58 19.48 29.5z'
      />
      <path
        fill='currentColor'
        d='M442.35 127.97c1.25 2.62 1.96 4.32 2.1 7.76a21.943 21.943 0 0 0-10.41-1c3.04-2.1 5.8-4.36 8.31-6.76zM340.72 292.48c-10.02.53-20.2.63-30.31.32-44.72-1.37-87.39-10.68-105.73-25.55-1.78-1.44-3.28-2.9-4.5-4.37.19-.22.35-.41.54-.6V153.59c-4.72-5.16-7.28-12.22-7.28-16.56 0-4.34.62-5.68 1.84-8.43 1.15 1.18 2.41 2.31 3.75 3.4 19.86 16.09 64.62 26.11 111.13 27.55 40.1 1.24 81.75-3.9 110.08-17.03a21.936 21.936 0 0 0-4.47 9.08c-6.73 29.25-25.85 57.78-42.75 83-13.86 20.68-26.46 39.5-32.3 57.88z'
      />
      <path
        fill='currentColor'
        d='M318.69 0c33.3 0 63.6 5.12 85.65 13.4 23.92 8.97 38.7 21.99 38.7 36.89 0 5.34-1.91 10.43-5.44 15.18v54.54c-2.81 2.97-6.15 5.71-9.99 8.24-25.9 17.09-72.4 23.74-117.23 22.37-44.69-1.38-87.36-10.68-105.7-25.52-1.69-1.37-3.15-2.75-4.34-4.19l.38-.4V66.72c-4.16-5.09-6.41-10.62-6.41-16.43 0-14.93 14.81-27.92 38.7-36.89C255.1 5.12 285.4 0 318.69 0z'
      />
      <path
        fill='currentColor'
        d='M437.22 156.51c8.9 38.21 40.13 74.99 59.98 110.59 33.67 60.38 8.31 123.14-59.98 123.14-74.44 0-92.67-68.15-55.7-130.38 19.81-33.36 47.5-67.77 55.7-103.35zm-51.6 145c-.4-4.33 2.84-8.18 7.16-8.58 4.33-.41 8.17 2.84 8.58 7.16 1.01 10.47 3.31 20.19 7.7 28.5 4.25 8.03 10.54 14.99 19.65 20.32 14.83 8.75-10.13 32.05-33.63-12.96-5.41-10.27-8.24-21.95-9.46-34.44z'
      />
      <path d='M258.31 45.67c8.4 0 15.21 2.37 15.21 5.31 0 2.93-6.81 5.31-15.21 5.31-8.4 0-15.21-2.38-15.21-5.31 0-2.91 6.81-5.31 15.21-5.31z' />
      <path
        fill='currentColor'
        d='M398.84 25.02c-20.37-7.65-48.69-12.37-80.15-12.37-31.45 0-59.78 4.72-80.15 12.37-18.52 6.93-29.99 15.93-29.99 25.27 0 9.37 11.47 18.34 29.99 25.27 20.37 7.62 48.7 12.37 80.15 12.37 31.46 0 59.78-4.72 80.15-12.37 18.52-6.93 29.99-15.93 29.99-25.27s-11.47-18.34-29.99-25.27z'
      />
      <path
        fill='currentColor'
        d='M254.86 40.87c12.41 0 22.45 4.52 22.45 10.11 0 5.58-10.04 10.1-22.45 10.1-12.4 0-22.44-4.52-22.44-10.1 0-5.59 10.04-10.11 22.44-10.11z'
      />
      <path
        fill='currentColor'
        d='m82.39 299.09 16.69-58.76c.6-2.15 2.56-3.56 4.69-3.56h71.19c2.38 0 4.34 1.7 4.79 3.92l17.14 58.68c.75 2.58-.73 5.28-3.31 6.03-.46.13-.91.19-1.36.19v.02H86.99a4.88 4.88 0 0 1-4.88-4.88c0-.58.09-1.13.28-1.64zm-8.67-100.34-.68.04c.35 5.59-1.44 10.61-5.35 15.05-3.91 4.45-8.68 6.83-14.27 7.18l.04.69c5.59-.35 10.61 1.44 15.06 5.38 4.44 3.94 6.84 8.69 7.19 14.25l.69-.04c-.36-5.59 1.43-10.61 5.34-15.05 3.91-4.44 8.68-6.83 14.27-7.18l-.04-.69c-5.59.36-10.61-1.44-15.05-5.35-4.44-3.93-6.84-8.68-7.2-14.28zM18.68 374.56l16.69-58.75c.6-2.15 2.56-3.56 4.69-3.56h71.19c2.38 0 4.34 1.69 4.79 3.91l17.14 58.69c.76 2.58-.73 5.27-3.32 6.02-.45.14-.9.19-1.35.19v.02H23.28c-2.7 0-4.88-2.18-4.88-4.88 0-.56.09-1.11.28-1.64zm127.3 0 16.69-58.75c.6-2.15 2.56-3.56 4.69-3.56h71.19c2.38 0 4.33 1.69 4.79 3.91l17.14 58.69a4.85 4.85 0 0 1-3.32 6.02c-.45.14-.9.19-1.35.19v.02H150.57c-2.69 0-4.87-2.18-4.87-4.88 0-.56.09-1.11.28-1.64z'
      />
      <path
        fill='currentColor'
        d='m82.27 299.23 16.69-58.76a4.887 4.887 0 0 1 4.7-3.56h71.18c2.38 0 4.34 1.69 4.79 3.92l.27.91h-68.82c-2.13 0-4.09 1.42-4.69 3.56l-16.7 58.76a4.67 4.67 0 0 0-.28 1.64v.04h-2.54c-2.7 0-4.88-2.18-4.88-4.88 0-.58.09-1.13.28-1.63z'
      />
      <path
        fill='currentColor'
        d='m18.68 374.56 16.69-58.76c.6-2.14 2.56-3.56 4.69-3.56h71.19c2.38 0 4.34 1.7 4.79 3.92l.27.92H47.49c-2.14 0-4.09 1.41-4.7 3.56L26.1 379.4a4.67 4.67 0 0 0-.28 1.64v.04h-2.54c-2.7 0-4.88-2.18-4.88-4.88 0-.58.09-1.13.28-1.64z'
      />
      <path
        fill='currentColor'
        d='m18.68 374.56 16.69-58.76c.6-2.14 2.56-3.56 4.69-3.56h71.19c2.38 0 4.34 1.7 4.79 3.92l.27.92H47.49c-2.14 0-4.09 1.41-4.7 3.56L26.1 379.4a4.67 4.67 0 0 0-.28 1.64v.04h-2.54c-2.7 0-4.88-2.18-4.88-4.88 0-.58.09-1.13.28-1.64zm127.3 0 16.69-58.76c.6-2.14 2.56-3.56 4.69-3.56h71.19c2.37 0 4.33 1.7 4.79 3.92l.27.92h-68.83c-2.13 0-4.08 1.41-4.69 3.56L153.4 379.4a4.67 4.67 0 0 0-.28 1.64v.04h-2.55c-2.69 0-4.87-2.18-4.87-4.88 0-.58.09-1.13.28-1.64z'
      />
      <path
        fill='currentColor'
        d='m21.28 270.23-.68.01c.1 5.6-1.92 10.53-6.02 14.79-4.11 4.26-8.98 6.43-14.58 6.53l.01.69c5.6-.1 10.53 1.92 14.8 6.05 4.26 4.13 6.44 8.99 6.54 14.56l.69-.01c-.1-5.6 1.92-10.54 6.02-14.8 4.11-4.26 8.97-6.42 14.58-6.53l-.01-.68c-5.61.1-10.54-1.92-14.8-6.02-4.26-4.14-6.44-8.99-6.55-14.59z'
      />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      className='shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export function FullScreenIcon() {
  return (
    <svg
      width='24px'
      height='24px'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      aria-label='Fullscreen Icon'
    >
      <rect x={0} fill='none' width={20} height={20} />

      <g>
        <path d='M7 2H2v5l1.8-1.8L6.5 8 8 6.5 5.2 3.8 7 2zm6 0l1.8 1.8L12 6.5 13.5 8l2.7-2.7L18 7V2h-5zm.5 10L12 13.5l2.7 2.7L13 18h5v-5l-1.8 1.8-2.7-2.8zm-7 0l-2.7 2.7L2 13v5h5l-1.8-1.8L8 13.5 6.5 12z' />
      </g>
    </svg>
  );
}

export function ScreenshotIcon({
  width = '2.5em',
  height = '2.5em',
}: IconSizeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 48 48'
    >
      <defs>
        <mask id='ipTScreenshotOne0'>
          <g fill='none' stroke='#fff' strokeWidth={4}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16 6H8a2 2 0 0 0-2 2v8m10 26H8a2 2 0 0 1-2-2v-8m26 10h8a2 2 0 0 0 2-2v-8M32 6h8a2 2 0 0 1 2 2v8'
            />
            <rect width={20} height={20} x={14} y={14} fill='#555555' rx={2} />
          </g>
        </mask>
      </defs>
      <path
        fill='currentColor'
        d='M0 0h48v48H0z'
        mask='url(#ipTScreenshotOne0)'
      />
    </svg>
  );
}

// tools-icons
export function HtmlIcon({
  width = '30px',
  height = '30px',
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      fill='#393939'
      height={height}
      width={width}
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 58 58'
      aria-label='Html Icon'
    >
      <g>
        <path
          d='M51.5,39V13.978c0-0.766-0.092-1.333-0.55-1.792L39.313,0.55C38.964,0.201,38.48,0,37.985,0H8.963
		C7.777,0,6.5,0.916,6.5,2.926V39H51.5z M37.5,3.391c0-0.458,0.553-0.687,0.877-0.363l10.095,10.095
		C48.796,13.447,48.567,14,48.109,14H37.5V3.391z M34.793,18.707c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l6,6
		c0.391,0.391,0.391,1.023,0,1.414l-6,6C36.012,30.902,35.756,31,35.5,31s-0.512-0.098-0.707-0.293
		c-0.391-0.391-0.391-1.023,0-1.414L40.086,24L34.793,18.707z M16.793,23.293l6-6c0.391-0.391,1.023-0.391,1.414,0
		s0.391,1.023,0,1.414L18.914,24l5.293,5.293c0.391,0.391,0.391,1.023,0,1.414C24.012,30.902,23.756,31,23.5,31
		s-0.512-0.098-0.707-0.293l-6-6C16.402,24.316,16.402,23.684,16.793,23.293z'
        />
        <path
          d='M6.5,41v15c0,1.009,1.22,2,2.463,2h40.074c1.243,0,2.463-0.991,2.463-2V41H6.5z M18.455,54h-1.641v-4.539h-4.361V54h-1.668
		V43.924h1.668v4.416h4.361v-4.416h1.641V54z M28.107,45.045H25.1V54h-1.654v-8.955h-3.008v-1.121h7.67V45.045z M39.373,54h-1.668
		v-6.932l-2.256,5.605H34l-2.27-5.605V54h-1.668V43.924h1.668l2.994,6.891l2.98-6.891h1.668V54z M48.205,54h-6.303V43.924h1.668
		v8.832h4.635V54z'
        />
      </g>
    </svg>
  );
}

export function CssIcon({
  width = '30px',
  height = '30px',
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      fill='#393939'
      height={height}
      width={width}
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 58 58'
      aria-label='Css Icon'
    >
      <g>
        <path
          d='M6.5,41v15c0,1.009,1.22,2,2.463,2h40.074c1.243,0,2.463-0.991,2.463-2V41H6.5z M19.46,50.664
		c0.132,0.483,0.314,0.877,0.547,1.183s0.497,0.528,0.793,0.67s0.608,0.212,0.937,0.212s0.636-0.06,0.923-0.178
		s0.549-0.31,0.786-0.574l1.135,0.998c-0.374,0.364-0.798,0.638-1.271,0.82s-0.984,0.273-1.531,0.273
		c-0.602,0-1.155-0.109-1.661-0.328s-0.948-0.542-1.326-0.971s-0.675-0.966-0.889-1.613c-0.214-0.647-0.321-1.395-0.321-2.242
		s0.107-1.593,0.321-2.235c0.214-0.643,0.511-1.178,0.889-1.606s0.822-0.754,1.333-0.978s1.062-0.335,1.654-0.335
		c0.547,0,1.058,0.091,1.531,0.273s0.897,0.456,1.271,0.82l-1.135,1.012c-0.228-0.265-0.48-0.456-0.759-0.574
		s-0.567-0.178-0.868-0.178c-0.337,0-0.658,0.063-0.964,0.191s-0.579,0.344-0.82,0.649s-0.431,0.699-0.567,1.183
		s-0.21,1.075-0.219,1.777C19.257,49.598,19.328,50.181,19.46,50.664z M32.407,52.298c-0.15,0.342-0.362,0.643-0.636,0.902
		s-0.61,0.467-1.012,0.622s-0.856,0.232-1.367,0.232c-0.219,0-0.444-0.012-0.677-0.034s-0.467-0.062-0.704-0.116
		s-0.463-0.13-0.677-0.226s-0.398-0.212-0.554-0.349l0.287-1.176c0.128,0.073,0.289,0.144,0.485,0.212s0.398,0.132,0.608,0.191
		s0.419,0.107,0.629,0.144s0.405,0.055,0.588,0.055c0.556,0,0.982-0.13,1.278-0.39s0.444-0.645,0.444-1.155
		c0-0.31-0.104-0.574-0.314-0.793s-0.472-0.417-0.786-0.595s-0.654-0.355-1.019-0.533s-0.706-0.388-1.025-0.629
		s-0.583-0.526-0.793-0.854s-0.314-0.738-0.314-1.23c0-0.446,0.082-0.843,0.246-1.189s0.385-0.641,0.663-0.882
		s0.602-0.426,0.971-0.554s0.759-0.191,1.169-0.191c0.419,0,0.843,0.039,1.271,0.116s0.774,0.203,1.039,0.376
		c-0.055,0.118-0.118,0.248-0.191,0.39s-0.142,0.273-0.205,0.396c-0.063,0.123-0.118,0.226-0.164,0.308s-0.073,0.128-0.082,0.137
		c-0.055-0.027-0.116-0.063-0.185-0.109s-0.166-0.091-0.294-0.137s-0.296-0.077-0.506-0.096s-0.479-0.014-0.807,0.014
		c-0.183,0.019-0.355,0.07-0.52,0.157s-0.31,0.193-0.438,0.321s-0.228,0.271-0.301,0.431s-0.109,0.313-0.109,0.458
		c0,0.364,0.104,0.658,0.314,0.882s0.47,0.419,0.779,0.588s0.647,0.333,1.012,0.492s0.704,0.354,1.019,0.581
		s0.576,0.513,0.786,0.854s0.314,0.781,0.314,1.319C32.633,51.603,32.558,51.956,32.407,52.298z M39.817,52.298
		c-0.15,0.342-0.362,0.643-0.636,0.902s-0.61,0.467-1.012,0.622s-0.856,0.232-1.367,0.232c-0.219,0-0.444-0.012-0.677-0.034
		s-0.467-0.062-0.704-0.116s-0.463-0.13-0.677-0.226s-0.398-0.212-0.554-0.349l0.287-1.176c0.128,0.073,0.289,0.144,0.485,0.212
		s0.398,0.132,0.608,0.191s0.419,0.107,0.629,0.144s0.405,0.055,0.588,0.055c0.556,0,0.982-0.13,1.278-0.39s0.444-0.645,0.444-1.155
		c0-0.31-0.104-0.574-0.314-0.793s-0.472-0.417-0.786-0.595s-0.654-0.355-1.019-0.533s-0.706-0.388-1.025-0.629
		s-0.583-0.526-0.793-0.854s-0.314-0.738-0.314-1.23c0-0.446,0.082-0.843,0.246-1.189s0.385-0.641,0.663-0.882
		s0.602-0.426,0.971-0.554s0.759-0.191,1.169-0.191c0.419,0,0.843,0.039,1.271,0.116s0.774,0.203,1.039,0.376
		c-0.055,0.118-0.118,0.248-0.191,0.39s-0.142,0.273-0.205,0.396s-0.118,0.226-0.164,0.308s-0.073,0.128-0.082,0.137
		c-0.055-0.027-0.116-0.063-0.185-0.109s-0.166-0.091-0.294-0.137s-0.296-0.077-0.506-0.096s-0.479-0.014-0.807,0.014
		c-0.183,0.019-0.355,0.07-0.52,0.157s-0.31,0.193-0.438,0.321s-0.228,0.271-0.301,0.431s-0.109,0.313-0.109,0.458
		c0,0.364,0.104,0.658,0.314,0.882s0.47,0.419,0.779,0.588s0.647,0.333,1.012,0.492s0.704,0.354,1.019,0.581
		s0.576,0.513,0.786,0.854s0.314,0.781,0.314,1.319C40.043,51.603,39.968,51.956,39.817,52.298z'
        />
        <path
          d='M51.5,39V13.978c0-0.766-0.092-1.333-0.55-1.792L39.313,0.55C38.964,0.201,38.48,0,37.985,0H8.963
		C7.777,0,6.5,0.916,6.5,2.926V39H51.5z M37.5,3.391c0-0.458,0.553-0.687,0.877-0.363l10.095,10.095
		C48.796,13.447,48.567,14,48.109,14H37.5V3.391z M36.5,23v-4c0-0.551-0.448-1-1-1c-0.553,0-1-0.448-1-1s0.447-1,1-1
		c1.654,0,3,1.346,3,3v4c0,1.103,0.897,2,2,2c0.553,0,1,0.448,1,1s-0.447,1-1,1c-1.103,0-2,0.897-2,2v4c0,1.654-1.346,3-3,3
		c-0.553,0-1-0.448-1-1s0.447-1,1-1c0.552,0,1-0.449,1-1v-4c0-1.2,0.542-2.266,1.382-3C37.042,25.266,36.5,24.2,36.5,23z M16.5,25
		c1.103,0,2-0.897,2-2v-4c0-1.654,1.346-3,3-3c0.553,0,1,0.448,1,1s-0.447,1-1,1c-0.552,0-1,0.449-1,1v4c0,1.2-0.542,2.266-1.382,3
		c0.84,0.734,1.382,1.8,1.382,3v4c0,0.551,0.448,1,1,1c0.553,0,1,0.448,1,1s-0.447,1-1,1c-1.654,0-3-1.346-3-3v-4
		c0-1.103-0.897-2-2-2c-0.553,0-1-0.448-1-1S15.947,25,16.5,25z'
        />
      </g>
    </svg>
  );
}

export function JavascriptIcon({
  width = '30px',
  height = '30px',
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      fill='#393939'
      height={height}
      width={width}
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 58 58'
      aria-label='Javascript Icon'
    >
      <g>
        <path
          d='M6.5,41v15c0,1.009,1.22,2,2.463,2h40.074c1.243,0,2.463-0.991,2.463-2V41H6.5z M27.021,51.566
		c0,0.474-0.087,0.873-0.26,1.196c-0.174,0.323-0.406,0.583-0.697,0.779c-0.292,0.196-0.627,0.333-1.005,0.41
		s-0.769,0.116-1.169,0.116c-0.201,0-0.436-0.021-0.704-0.062s-0.547-0.104-0.834-0.191s-0.563-0.185-0.827-0.294
		c-0.265-0.109-0.488-0.232-0.67-0.369l0.697-1.107c0.091,0.063,0.221,0.13,0.39,0.198s0.353,0.132,0.554,0.191
		c0.2,0.06,0.41,0.111,0.629,0.157s0.424,0.068,0.615,0.068c0.482,0,0.868-0.094,1.155-0.28s0.439-0.504,0.458-0.95v-7.711h1.668
		V51.566z M34.958,52.298c-0.15,0.342-0.362,0.643-0.636,0.902s-0.611,0.467-1.012,0.622c-0.401,0.155-0.857,0.232-1.367,0.232
		c-0.219,0-0.444-0.012-0.677-0.034s-0.468-0.062-0.704-0.116c-0.237-0.055-0.463-0.13-0.677-0.226s-0.399-0.212-0.554-0.349
		l0.287-1.176c0.127,0.073,0.289,0.144,0.485,0.212s0.398,0.132,0.608,0.191c0.209,0.06,0.419,0.107,0.629,0.144
		c0.209,0.036,0.405,0.055,0.588,0.055c0.556,0,0.982-0.13,1.278-0.39s0.444-0.645,0.444-1.155c0-0.31-0.105-0.574-0.314-0.793
		c-0.21-0.219-0.472-0.417-0.786-0.595s-0.654-0.355-1.019-0.533c-0.365-0.178-0.707-0.388-1.025-0.629
		c-0.319-0.241-0.584-0.526-0.793-0.854c-0.21-0.328-0.314-0.738-0.314-1.23c0-0.446,0.082-0.843,0.246-1.189
		s0.385-0.641,0.663-0.882s0.602-0.426,0.971-0.554s0.759-0.191,1.169-0.191c0.419,0,0.843,0.039,1.271,0.116
		c0.428,0.077,0.774,0.203,1.039,0.376c-0.055,0.118-0.119,0.248-0.191,0.39c-0.073,0.142-0.142,0.273-0.205,0.396
		c-0.064,0.123-0.119,0.226-0.164,0.308c-0.046,0.082-0.073,0.128-0.082,0.137c-0.055-0.027-0.116-0.063-0.185-0.109
		s-0.167-0.091-0.294-0.137c-0.128-0.046-0.297-0.077-0.506-0.096c-0.21-0.019-0.479-0.014-0.807,0.014
		c-0.183,0.019-0.355,0.07-0.52,0.157s-0.311,0.193-0.438,0.321c-0.128,0.128-0.229,0.271-0.301,0.431
		c-0.073,0.159-0.109,0.313-0.109,0.458c0,0.364,0.104,0.658,0.314,0.882c0.209,0.224,0.469,0.419,0.779,0.588
		c0.31,0.169,0.646,0.333,1.012,0.492c0.364,0.159,0.704,0.354,1.019,0.581s0.576,0.513,0.786,0.854
		c0.209,0.342,0.314,0.781,0.314,1.319C35.184,51.603,35.108,51.956,34.958,52.298z'
        />
        <path
          d='M51.5,39V13.978c0-0.766-0.092-1.333-0.55-1.792L39.313,0.55C38.964,0.201,38.48,0,37.985,0H8.963
		C7.777,0,6.5,0.916,6.5,2.926V39H51.5z M29.5,32c0,0.552-0.447,1-1,1s-1-0.448-1-1v-3c0-0.552,0.447-1,1-1s1,0.448,1,1V32z
		 M37.5,3.391c0-0.458,0.553-0.687,0.877-0.363l10.095,10.095C48.796,13.447,48.567,14,48.109,14H37.5V3.391z M36.5,23v-4
		c0-0.551-0.448-1-1-1c-0.553,0-1-0.448-1-1s0.447-1,1-1c1.654,0,3,1.346,3,3v4c0,1.103,0.897,2,2,2c0.553,0,1,0.448,1,1
		s-0.447,1-1,1c-1.103,0-2,0.897-2,2v4c0,1.654-1.346,3-3,3c-0.553,0-1-0.448-1-1s0.447-1,1-1c0.552,0,1-0.449,1-1v-4
		c0-1.2,0.542-2.266,1.382-3C37.042,25.266,36.5,24.2,36.5,23z M28.5,21c0.828,0,1.5,0.672,1.5,1.5S29.328,24,28.5,24
		S27,23.328,27,22.5S27.672,21,28.5,21z M16.5,25c1.103,0,2-0.897,2-2v-4c0-1.654,1.346-3,3-3c0.553,0,1,0.448,1,1s-0.447,1-1,1
		c-0.552,0-1,0.449-1,1v4c0,1.2-0.542,2.266-1.382,3c0.84,0.734,1.382,1.8,1.382,3v4c0,0.551,0.448,1,1,1c0.553,0,1,0.448,1,1
		s-0.447,1-1,1c-1.654,0-3-1.346-3-3v-4c0-1.103-0.897-2-2-2c-0.553,0-1-0.448-1-1S15.947,25,16.5,25z'
        />
      </g>
    </svg>
  );
}

export function JsonIcon({
  width = '30px',
  height = '30px',
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      fill='#393939'
      height={height}
      width={width}
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 58 58'
      aria-label='Json Icon'
    >
      <g>
        <path
          d='M33.655,45.988c-0.232-0.31-0.497-0.533-0.793-0.67s-0.608-0.205-0.937-0.205c-0.337,0-0.658,0.063-0.964,0.191
		s-0.579,0.344-0.82,0.649s-0.431,0.699-0.567,1.183c-0.137,0.483-0.21,1.075-0.219,1.777c0.009,0.684,0.08,1.267,0.212,1.75
		s0.314,0.877,0.547,1.183s0.497,0.528,0.793,0.67s0.608,0.212,0.937,0.212c0.337,0,0.658-0.066,0.964-0.198s0.579-0.349,0.82-0.649
		s0.431-0.695,0.567-1.183s0.21-1.082,0.219-1.784c-0.009-0.684-0.08-1.265-0.212-1.743S33.888,46.298,33.655,45.988z'
        />
        <path
          d='M51.5,39V13.978c0-0.766-0.092-1.333-0.55-1.792L39.313,0.55C38.964,0.201,38.48,0,37.985,0H8.963
		C7.777,0,6.5,0.916,6.5,2.926V39H51.5z M29.5,33c0,0.552-0.447,1-1,1s-1-0.448-1-1v-3c0-0.552,0.447-1,1-1s1,0.448,1,1V33z
		 M37.5,3.391c0-0.458,0.553-0.687,0.877-0.363l10.095,10.095C48.796,13.447,48.567,14,48.109,14H37.5V3.391z M36.5,24v-4
		c0-0.551-0.448-1-1-1c-0.553,0-1-0.448-1-1s0.447-1,1-1c1.654,0,3,1.346,3,3v4c0,1.103,0.897,2,2,2c0.553,0,1,0.448,1,1
		s-0.447,1-1,1c-1.103,0-2,0.897-2,2v4c0,1.654-1.346,3-3,3c-0.553,0-1-0.448-1-1s0.447-1,1-1c0.552,0,1-0.449,1-1v-4
		c0-1.2,0.542-2.266,1.382-3C37.042,26.266,36.5,25.2,36.5,24z M28.5,22c0.828,0,1.5,0.672,1.5,1.5S29.328,25,28.5,25
		c-0.828,0-1.5-0.672-1.5-1.5S27.672,22,28.5,22z M16.5,26c1.103,0,2-0.897,2-2v-4c0-1.654,1.346-3,3-3c0.553,0,1,0.448,1,1
		s-0.447,1-1,1c-0.552,0-1,0.449-1,1v4c0,1.2-0.542,2.266-1.382,3c0.84,0.734,1.382,1.8,1.382,3v4c0,0.551,0.448,1,1,1
		c0.553,0,1,0.448,1,1s-0.447,1-1,1c-1.654,0-3-1.346-3-3v-4c0-1.103-0.897-2-2-2c-0.553,0-1-0.448-1-1S15.947,26,16.5,26z'
        />
        <path
          d='M6.5,41v15c0,1.009,1.22,2,2.463,2h40.074c1.243,0,2.463-0.991,2.463-2V41H6.5z M18.021,51.566
		c0,0.474-0.087,0.873-0.26,1.196s-0.405,0.583-0.697,0.779s-0.627,0.333-1.005,0.41c-0.378,0.077-0.768,0.116-1.169,0.116
		c-0.2,0-0.436-0.021-0.704-0.062s-0.547-0.104-0.834-0.191s-0.563-0.185-0.827-0.294s-0.487-0.232-0.67-0.369l0.697-1.107
		c0.091,0.063,0.221,0.13,0.39,0.198s0.354,0.132,0.554,0.191s0.41,0.111,0.629,0.157s0.424,0.068,0.615,0.068
		c0.483,0,0.868-0.094,1.155-0.28s0.439-0.504,0.458-0.95v-7.711h1.668V51.566z M25.958,52.298c-0.15,0.342-0.362,0.643-0.636,0.902
		s-0.61,0.467-1.012,0.622s-0.856,0.232-1.367,0.232c-0.219,0-0.444-0.012-0.677-0.034s-0.467-0.062-0.704-0.116
		c-0.237-0.055-0.463-0.13-0.677-0.226s-0.398-0.212-0.554-0.349l0.287-1.176c0.128,0.073,0.289,0.144,0.485,0.212
		s0.398,0.132,0.608,0.191s0.419,0.107,0.629,0.144s0.405,0.055,0.588,0.055c0.556,0,0.982-0.13,1.278-0.39s0.444-0.645,0.444-1.155
		c0-0.31-0.104-0.574-0.314-0.793s-0.472-0.417-0.786-0.595s-0.654-0.355-1.019-0.533s-0.706-0.388-1.025-0.629
		s-0.583-0.526-0.793-0.854s-0.314-0.738-0.314-1.23c0-0.446,0.082-0.843,0.246-1.189s0.385-0.641,0.663-0.882
		s0.602-0.426,0.971-0.554s0.759-0.191,1.169-0.191c0.419,0,0.843,0.039,1.271,0.116s0.774,0.203,1.039,0.376
		c-0.055,0.118-0.118,0.248-0.191,0.39s-0.142,0.273-0.205,0.396s-0.118,0.226-0.164,0.308s-0.073,0.128-0.082,0.137
		c-0.055-0.027-0.116-0.063-0.185-0.109s-0.166-0.091-0.294-0.137s-0.296-0.077-0.506-0.096s-0.479-0.014-0.807,0.014
		c-0.183,0.019-0.355,0.07-0.52,0.157s-0.31,0.193-0.438,0.321s-0.228,0.271-0.301,0.431s-0.109,0.313-0.109,0.458
		c0,0.364,0.104,0.658,0.314,0.882s0.47,0.419,0.779,0.588s0.647,0.333,1.012,0.492s0.704,0.354,1.019,0.581
		s0.576,0.513,0.786,0.854s0.314,0.781,0.314,1.319C26.184,51.603,26.108,51.956,25.958,52.298z M35.761,51.156
		c-0.214,0.647-0.511,1.185-0.889,1.613s-0.82,0.752-1.326,0.971s-1.06,0.328-1.661,0.328s-1.155-0.109-1.661-0.328
		s-0.948-0.542-1.326-0.971s-0.675-0.966-0.889-1.613s-0.321-1.395-0.321-2.242s0.107-1.593,0.321-2.235s0.511-1.178,0.889-1.606
		s0.82-0.754,1.326-0.978s1.06-0.335,1.661-0.335s1.155,0.111,1.661,0.335s0.948,0.549,1.326,0.978s0.675,0.964,0.889,1.606
		s0.321,1.388,0.321,2.235S35.975,50.509,35.761,51.156z M45.68,54h-1.668l-3.951-6.945V54h-1.668V43.924h1.668l3.951,6.945v-6.945
		h1.668V54z'
        />
      </g>
    </svg>
  );
}

export function SqlIcon() {
  return (
    <svg
      width={32}
      height={32}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-label='Sql Icon'
    >
      <path
        d='M13.1371 6.91018C13.4184 6.7695 13.7123 6.59981 14 6.40001V8C14 9.65685 11.3137 11 8 11C4.68629 11 2 9.65685 2 8V6.40001C2.28772 6.59981 2.58158 6.7695 2.86293 6.91018C4.28096 7.61919 6.09998 8 8 8C9.90002 8 11.719 7.61919 13.1371 6.91018Z'
        fill='#393939'
      />
      <path
        d='M2 11.4V13C2 14.6569 4.68629 16 8 16C11.3137 16 14 14.6569 14 13V11.4C13.7123 11.5998 13.4184 11.7695 13.1371 11.9102C11.719 12.6192 9.90002 13 8 13C6.09998 13 4.28096 12.6192 2.86293 11.9102C2.58158 11.7695 2.28772 11.5998 2 11.4Z'
        fill='#393939'
      />
      <path
        d='M8 0C11.3137 0 14 1.34315 14 3C14 4.65685 11.3137 6 8 6C4.68629 6 2 4.65685 2 3C2 1.34315 4.68629 0 8 0Z'
        fill='#393939'
      />
    </svg>
  );
}

export function SvgIcon({
  width = '40px',
  height = '40px',
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
      aria-label='Svg Icon'
    >
      <title>svgDocument</title>
      <g
        id='Page-1'
        stroke='none'
        strokeWidth={1}
        fill='none'
        fillRule='evenodd'
      >
        <g id='icon' fill='#393939' transform='translate(85.333333, 42.666667)'>
          <path
            d='M236.504748,7.10542736e-15 L1.83808102,7.10542736e-15 L1.83808102,234.666667 L44.5047477,234.666667 L44.5047477,192 L44.5047477,169.6 L44.5047477,42.6666667 L218.798081,42.6666667 L300.504748,124.373333 L300.504748,169.6 L300.504748,192 L300.504748,234.666667 L343.171414,234.666667 L343.171414,106.666667 L236.504748,7.10542736e-15 L236.504748,7.10542736e-15 Z M4.26325641e-14,399.067492 L4.16875,374.417492 C18.85,380.579992 31.2958333,383.661242 41.50625,383.661242 C48.1520833,383.661242 53.0458333,382.029992 56.1875,378.767492 C58.90625,375.927909 60.265625,372.45395 60.265625,368.345617 C60.265625,364.6602 58.9364583,361.790409 56.278125,359.736242 C53.6197917,357.682075 47.0645833,354.5102 36.6125,350.220617 C28.8791667,347.018534 23.4265625,344.632075 20.2546875,343.061242 C17.0828125,341.490409 14.1677083,339.708117 11.509375,337.714367 C3.95729167,332.095617 0.18125,323.999784 0.18125,313.426867 C0.18125,304.30395 2.65833333,296.298742 7.6125,289.411242 C15.225,278.717492 27.73125,273.370617 45.13125,273.370617 C57.6979167,273.370617 71.3520833,275.696659 86.09375,280.348742 L80.29375,303.911242 C71.59375,300.709159 65.0536458,298.594575 60.6734375,297.567492 C56.2932292,296.540409 51.7166667,296.026867 46.94375,296.026867 C41.50625,296.026867 37.3677083,297.2352 34.528125,299.651867 C31.5677083,302.249784 30.0875,305.542492 30.0875,309.529992 C30.0875,312.973742 31.3411458,315.677388 33.8484375,317.64093 C36.3557292,319.604471 42.3822917,322.549784 51.928125,326.476867 C61.4135417,330.40395 67.696875,333.137805 70.778125,334.67843 C73.859375,336.219055 76.759375,338.01645 79.478125,340.070617 C86.909375,345.749784 90.625,354.419575 90.625,366.079992 C90.625,379.854992 85.9427083,390.276867 76.578125,397.345617 C68.603125,403.326867 57.4260417,406.317492 43.046875,406.317492 C28.0635417,406.317492 13.7145833,403.900825 4.26325641e-14,399.067492 Z M146.721875,404.051867 L98.05625,275.636242 L128.14375,275.636242 L149.53125,333.273742 C154.96875,347.954992 159.046875,360.038325 161.765625,369.523742 C165.934375,356.232075 169.891667,344.54145 173.6375,334.451867 L195.659375,275.636242 L224.296875,275.636242 L175.63125,404.051867 L146.721875,404.051867 Z M344.465625,332.186242 L344.465625,397.708117 C337.094792,400.1852 331.898958,401.81645 328.878125,402.601867 C319.513542,405.07895 309.454167,406.317492 298.7,406.317492 C277.554167,406.317492 261.453125,401.000825 250.396875,390.367492 C238.132292,378.646659 232,362.30395 232,341.339367 C232,317.233117 239.6125,299.0477 254.8375,286.783117 C265.89375,277.84145 280.816667,273.370617 299.60625,273.370617 C315.677083,273.370617 330.630208,276.300825 344.465625,282.161242 L334.5875,304.726867 C328.0625,301.464367 322.353125,299.183638 317.459375,297.88468 C312.565625,296.585721 307.188542,295.936242 301.328125,295.936242 C287.311458,295.936242 276.980208,300.4977 270.334375,309.620617 C264.715625,317.35395 261.90625,327.534159 261.90625,340.161242 C261.90625,355.325825 266.135417,366.744575 274.59375,374.417492 C281.360417,380.579992 289.758333,383.661242 299.7875,383.661242 C305.647917,383.661242 311.20625,382.664367 316.4625,380.670617 L316.4625,354.842492 L294.35,354.842492 L294.35,332.186242 L344.465625,332.186242 Z'
            id='Combined-Shape'
          ></path>
        </g>
      </g>
    </svg>
  );
}

export function XmlIcon({ width, height }: { width: string; height: string }) {
  return (
    <svg
      height={width}
      width={height}
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 56 56'
      aria-label='Xml Icon'
    >
      <g>
        <path
          style={{ fill: '#393939' }}
          d='M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074
		c0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z'
        />
        <polygon
          style={{ fill: '#D9D7CA' }}
          points='37.5,0.151 37.5,12 49.349,12 	'
        />
        <path
          style={{ fill: '#393939' }}
          d='M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z'
        />
        <g>
          <path
            style={{ fill: '#FFFFFF' }}
            d='M19.379,48.105L21.936,53h-1.9l-1.6-3.801h-0.137L16.576,53h-1.9l2.557-4.895l-2.721-5.182h1.873
			l1.777,4.102h0.137l1.928-4.102H22.1L19.379,48.105z'
          />
          <path
            style={{ fill: '#FFFFFF' }}
            d='M31.998,42.924h1.668V53h-1.668v-6.932l-2.256,5.605h-1.449l-2.27-5.605V53h-1.668V42.924h1.668
			l2.994,6.891L31.998,42.924z'
          />
          <path
            style={{ fill: '#FFFFFF' }}
            d='M37.863,42.924v8.832h4.635V53h-6.303V42.924H37.863z'
          />
        </g>
        <path
          style={{ fill: '#FFFFFF' }}
          d='M15.5,24c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l6-6
		c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-6,6C16.012,23.902,15.756,24,15.5,24z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M21.5,30c-0.256,0-0.512-0.098-0.707-0.293l-6-6c-0.391-0.391-0.391-1.023,0-1.414
		s1.023-0.391,1.414,0l6,6c0.391,0.391,0.391,1.023,0,1.414C22.012,29.902,21.756,30,21.5,30z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M33.5,30c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l6-6
		c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-6,6C34.012,29.902,33.756,30,33.5,30z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M39.5,24c-0.256,0-0.512-0.098-0.707-0.293l-6-6c-0.391-0.391-0.391-1.023,0-1.414
		s1.023-0.391,1.414,0l6,6c0.391,0.391,0.391,1.023,0,1.414C40.012,23.902,39.756,24,39.5,24z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M24.5,32c-0.11,0-0.223-0.019-0.333-0.058c-0.521-0.184-0.794-0.755-0.61-1.276l6-17
		c0.185-0.521,0.753-0.795,1.276-0.61c0.521,0.184,0.794,0.755,0.61,1.276l-6,17C25.298,31.744,24.912,32,24.5,32z'
        />
      </g>
    </svg>
  );
}

export function TextIcon({
  width = '40px',
  height = '40px',
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      height={width}
      width={height}
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 56 56'
      aria-label='Text Icon'
    >
      <g>
        <path
          style={{ fill: '#393939' }}
          d='M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074
		c0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z'
        />
        <polygon
          style={{ fill: '#D9D7CA' }}
          points='37.5,0.151 37.5,12 49.349,12 	'
        />
        <path
          style={{ fill: '#393939' }}
          d='M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z'
        />
        <g>
          <path
            style={{ fill: '#FFFFFF' }}
            d='M21.867,42.924v1.121h-3.008V53h-1.654v-8.955h-3.008v-1.121H21.867z'
          />
          <path
            style={{ fill: '#FFFFFF' }}
            d='M28.443,48.105L31,53h-1.9l-1.6-3.801h-0.137L25.641,53h-1.9l2.557-4.895l-2.721-5.182h1.873
			l1.777,4.102h0.137l1.928-4.102h1.873L28.443,48.105z'
          />
          <path
            style={{ fill: '#FFFFFF' }}
            d='M40.529,42.924v1.121h-3.008V53h-1.654v-8.955h-3.008v-1.121H40.529z'
          />
        </g>
        <path
          style={{ fill: '#FFFFFF' }}
          d='M18.5,13h-6c-0.553,0-1-0.448-1-1s0.447-1,1-1h6c0.553,0,1,0.448,1,1S19.053,13,18.5,13z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M21.5,18h-9c-0.553,0-1-0.448-1-1s0.447-1,1-1h9c0.553,0,1,0.448,1,1S22.053,18,21.5,18z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M25.5,18c-0.26,0-0.521-0.11-0.71-0.29c-0.181-0.19-0.29-0.44-0.29-0.71s0.109-0.52,0.3-0.71
		c0.36-0.37,1.04-0.37,1.41,0c0.18,0.19,0.29,0.45,0.29,0.71c0,0.26-0.11,0.52-0.29,0.71C26.02,17.89,25.76,18,25.5,18z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M37.5,18h-8c-0.553,0-1-0.448-1-1s0.447-1,1-1h8c0.553,0,1,0.448,1,1S38.053,18,37.5,18z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M12.5,33c-0.26,0-0.521-0.11-0.71-0.29c-0.181-0.19-0.29-0.45-0.29-0.71
		c0-0.26,0.109-0.52,0.29-0.71c0.37-0.37,1.05-0.37,1.42,0.01c0.18,0.18,0.29,0.44,0.29,0.7c0,0.26-0.11,0.52-0.29,0.71
		C13.02,32.89,12.76,33,12.5,33z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M24.5,33h-8c-0.553,0-1-0.448-1-1s0.447-1,1-1h8c0.553,0,1,0.448,1,1S25.053,33,24.5,33z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M43.5,18h-2c-0.553,0-1-0.448-1-1s0.447-1,1-1h2c0.553,0,1,0.448,1,1S44.053,18,43.5,18z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M34.5,23h-22c-0.553,0-1-0.448-1-1s0.447-1,1-1h22c0.553,0,1,0.448,1,1S35.053,23,34.5,23z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M43.5,23h-6c-0.553,0-1-0.448-1-1s0.447-1,1-1h6c0.553,0,1,0.448,1,1S44.053,23,43.5,23z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M16.5,28h-4c-0.553,0-1-0.448-1-1s0.447-1,1-1h4c0.553,0,1,0.448,1,1S17.053,28,16.5,28z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M30.5,28h-10c-0.553,0-1-0.448-1-1s0.447-1,1-1h10c0.553,0,1,0.448,1,1S31.053,28,30.5,28z'
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d='M43.5,28h-9c-0.553,0-1-0.448-1-1s0.447-1,1-1h9c0.553,0,1,0.448,1,1S44.053,28,43.5,28z'
        />
      </g>
    </svg>
  );
}
export function DiffCheckIcon({
  width = '24px',
  height = '24px',
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      aria-label='Note Add Icon'
    >
      <path
        fill='currentColor'
        d='M3 7c.55 0 1 .45 1 1v13h13c.55 0 1 .45 1 1s-.45 1-1 1H4c-1.1 0-2-.9-2-2V8c0-.55.45-1 1-1m12.59-5.41c-.38-.38-.89-.59-1.42-.59H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.41zM15.5 15h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1m0-6h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V9h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V6c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1'
      />
    </svg>
  );
}
export function RotateIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      aria-label='Rotate Icon'
    >
      <path
        fill='currentColor'
        d='M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.7 6.7 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95S18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0'
      />
    </svg>
  );
}

export function CropIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={22}
      height={22}
      viewBox='0 0 24 24'
      aria-label='Crop Icon'
    >
      <path
        fill='currentColor'
        d='M17 23v-4H7q-.825 0-1.412-.587T5 17V7H1V5h4V1h2v16h16v2h-4v4zm0-8V7H9V5h8q.825 0 1.413.588T19 7v8z'
      />
    </svg>
  );
}

export function YamlIcon({
  width = '40px',
  height = '40px',
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      aria-label='Yaml Icon'
    >
      <g fill='none' fillRule='evenodd'>
        <polygon fill='#393939' points='7 1 3 5 7 5' />
        <polygon fill='#393939' points='8 1 8 6 3 6 3 8 13 8 13 1' />
        <polygon
          fill='#393939'
          points='1.996 5 1.996 3.029 0 0 1.05 0 2.496 2.207 3.95 0 5 0 3 3.007 3 5'
          transform='translate(1 10)'
        />
        <polygon
          fill='#393939'
          points='0 0 .936 0 2.5 2 3.979 0 5 0 5 5 4 5 4 1.7 2.5 3.5 1 1.7 1 5 0 5'
          transform='translate(6 10)'
        />
        <polygon
          fill='#393939'
          points='0 0 1 0 1 4 3.5 4 3.5 5 0 5'
          transform='translate(12 10)'
        />
      </g>
    </svg>
  );
}
export function EmailIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 16 16'
    >
      <path
        fill='#454343'
        d='M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2M1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z'
      />
    </svg>
  );
}

export function ScraperApiIcon() {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='currentColor'
      >
        <path d='M1.277.899q.137-.002.275 0l.153-.001q.256-.001.513.002l.37-.001q.51-.001 1.02.001h1.099Q5.784.899 6.86.902l1.749.002h.629q2.365 0 4.73.004l4.205.004h1.211q2.07 0 4.139.003l1.374.001h.25q1.189 0 2.378.003l1.087.001.994.002h.361l.488.001.144-.001c.323.003.323.003.462.142.016.118.016.118.016.266l.001.169-.001.186.001.195v1.085l-.001.932v2.555l-.001.616.001.186-.001.169v.147c-.013.118-.013.118-.138.243-.181.021-.181.021-.418.03l-.132.005-.44.014-.315.011c-.965.032-1.93.05-2.896.064q-.972.014-1.943.048a56 56 0 0 1-1.698.039q-.448.003-.895.024c-1.829.092-1.829.092-2.4-.337-.326-.302-.604-.65-.887-.992-.647-.771-1.177-1.206-2.2-1.315-.778-.058-1.559-.043-2.338-.018-.446.014-.892.014-1.339.014-1.173.007-2.346.033-3.518.056l-7.956.107v19.625l11.625-.063-.625-.875-.419-.605-.463-.664a244 244 0 0 1-1.541-2.222q-.453-.658-.911-1.313l-.354-.508-.112-.161-.103-.151-.091-.132c-.102-.176-.108-.295-.069-.493l.098-.18c.115-.25.098-.437.027-.695-.236-.635-.656-1.008-1.25-1.313a1.6 1.6 0 0 0-.75-.063c-.171.082-.171.082-.25.25-.06.522.133.893.438 1.313.156.155.326.294.496.434.157.136.248.215.283.424-.029.142-.029.142-.135.259-.144.07-.144.07-.285.074-.603-.233-1.117-.807-1.375-1.39L5.75 17l-.078-.176c-.112-.477-.098-.951.141-1.387.201-.246.425-.467.651-.69a121 121 0 0 1 .754-.754l.578-.577q.485-.485.971-.968.561-.558 1.12-1.118l1.079-1.078.458-.458.541-.539.198-.198c.768-.77.768-.77 1.236-.843.731.007 1.236.18 1.788.658l.115.099c.459.426.815.995.862 1.627l.014.178q.01.173.009.345c.088.085.088.085.21.159l.141.092.156.1.163.106.352.228q.475.307.949.617l.198.129q.969.635 1.926 1.288a228 228 0 0 0 2.719 1.813 246 246 0 0 1 2.884 1.924c1.165.788 2.338 1.563 3.514 2.334q.357.234.713.471l.151.101.112.08v-.181l-.006-4.35-.003-2.104-.002-1.833-.001-.971-.001-.914-.001-.336v-.458l-.001-.134c.002-.245.02-.442.141-.657.184-.063.184-.063.375-.063.104.062.104.062.188.188.018.172.025.331.024.503l.001.157v.523l.001.374v2.081l-.001 1.786v4.9q.001.498-.001.996v.366q.001.249-.001.499l.001.147c-.004.324-.004.324-.11.48-.103.063-.103.063-.269.065-.283-.087-.495-.235-.737-.403l-.156-.107-.335-.23q-.455-.312-.911-.622l-.19-.13a126 126 0 0 0-1.942-1.291 242 242 0 0 1-2.885-1.925 256 256 0 0 0-2.772-1.845A204 204 0 0 1 17.688 13c.102.215.22.365.383.539.23.251.446.508.657.776q.287.359.581.712l.229.278.11.134.664.811.421.515.289.351.146.177.13.157.14.175.094.103c.299.349.329.615.316 1.065l.002.391q-.001.303-.007.607c-.016.932.085 1.5.726 2.2l.1.102c.081.095.081.095.144.282a5 5 0 0 0 .25.125 17 17 0 0 1 .402.281l.117.084q.426.31.841.633.44.339.889.665a80 80 0 0 1 1.454 1.092q.39.302.791.591c.925.668.925.668 1.068 1.217l.035.13c.093.49-.045.879-.316 1.28-.115.16-.115.16-.219.277H28v.125c-.098.097-.098.097-.23.207a8 8 0 0 0-.582.543l-.225.225-.121.121-.484.484-.279.287c-.295.281-.619.334-1.012.349-.515-.018-.847-.156-1.203-.531-.334-.395-.634-.816-.938-1.234a50 50 0 0 0-.738-.981 93 93 0 0 1-.984-1.309l-.108-.147c-.522-.711-.522-.711-.564-.931.031-.145.031-.145.137-.262.144-.071.144-.071.284-.075.275.106.403.326.575.559l.115.152.357.481.117.158.56.759q.306.418.618.831.165.219.328.44.239.322.481.641l.21.28c.193.242.359.409.677.451.318.009.553-.116.79-.314q.253-.244.496-.498l.172-.175c.275-.262.275-.262.488-.571h.125v-.125c.086-.102.086-.102.188-.188h.125v-.125h.125v-.125h.125l.055-.113c.07-.139.07-.139.195-.326.025-.144.025-.144.023-.301l.005-.158c-.058-.337-.256-.536-.521-.734l-.285-.198-.307-.216-.151-.106a15 15 0 0 1-.542-.408 47 47 0 0 0-.988-.742q-.72-.529-1.427-1.074a81 81 0 0 0-.995-.75c-.366.169-.639.427-.875.75h-.125l-.043.105c-.142.25-.308.428-.582.519a6 6 0 0 0-.125.25c-.101.116-.101.116-.215.227l-.113.112c-.17.154-.26.223-.493.228-.377-.067-.651-.382-.927-.628-.375-.314-.643-.379-1.126-.376l-.26-.001-.438-.002-.151-.001-.153-.001-.308.002c-.713.01-1.15-.049-1.69-.561l-.214-.175-.18-.157a22 22 0 0 0-.84-.688c-.473-.368-.935-.75-1.397-1.132-.576-.477-1.159-.944-1.744-1.411a15 15 0 0 0 .758 1.125c.375.505.729 1.024 1.082 1.544l.437.639.082.119q.426.618.859 1.23l.108.154.097.137c.144.213.16.356.139.613-.237.158-.425.142-.7.141l-.16.001h-.533l-.382.001h-2.123l-1.821-.001H3.534l-1.016-.001h-.373l-.508-.001-.15.001c-.238-.002-.347-.007-.549-.142-.139-.501-.072-1.087-.071-1.604l-.001-.296-.001-.811-.001-.876-.002-1.912-.001-1.194-.002-3.306v-1.071l-.003-3.455-.002-3.547-.002-1.992-.001-1.694q.001-.432-.001-.865v-.791l-.001-.287q-.001-.194.001-.389v-.218c.039-.323.09-.482.426-.543m.287.668v3.313l1.497.002 5.478.011h.148l2.374.004q1.218.001 2.436.005l1.503.002 1.153.003h.473l.645.002.19-.001c.357.004.571.041.852.284q.115.135.225.274c.098.113.204.201.32.296.189.162.336.325.481.528.341.45.692.829 1.272.923.596.07 1.199.048 1.798.031q.421-.009.842-.009.795-.007 1.59-.024.906-.018 1.812-.024 1.862-.018 3.722-.057c.081-1.859.035-3.697 0-5.563zm11.579 7.56-.131.121a48 48 0 0 0-.709.697l-.167.167-.447.448-.469.469-.886.887-1.009 1.011L7.25 15q.196.099.394.192c.907.434 1.348 1.006 1.731 1.933.319-.266.615-.546.906-.842l.277-.281.146-.149.773-.781.981-.993q.396-.403.795-.804l.302-.307.423-.426.125-.129c.285-.282.285-.282.548-.319.162.031.162.031.224.094.038.195.035.323-.078.491a7 7 0 0 1-.36.384l-.143.146-.419.416-.172.172-2.05 2.05-.259.264c-.144.139-.144.139-.331.264v.125h-.125v.125l-.188.063v.125l-.188.063v.125l-.121.051c-.15.067-.15.067-.191.262h-.125c-.104.083-.104.083-.188.188v.125l-.25.125v.125l-.25.125c-.029.262-.029.262.176.427l.234.194.115.097c.254.211.516.405.787.594.355-.296.683-.612 1.009-.94l.168-.168.453-.454.475-.475.897-.898 1.022-1.023 2.102-2.106a7 7 0 0 0-.578-.762l-.272-.323-.246-.285c-.336-.413-.336-.413-.352-.682q.021-.174.052-.347c.051-.416-.177-.78-.417-1.102l-.102-.148-.085-.101h-.125v-.125c-.134-.098-.134-.098-.301-.191l-.169-.1c-.385-.208-.8-.275-1.138.039m4.108 4.69-5.938 5.938c.202.202.381.374.602.547a45 45 0 0 1 .656.527q.423.347.848.691l.128.104.911.74.126.102q.449.365.896.732l.146.119.131.125c.643.445 1.807.41 2.548.298.746-.171 1.285-.742 1.805-1.27l.167-.164c.504-.506.957-.981.983-1.724a7 7 0 0 0-.056-.683 3 3 0 0 1 .001-.542c.024-.726-.113-1.145-.606-1.683l-.239-.245a6 6 0 0 1-.41-.479l-.133-.163-.128-.158-.131-.159-.717-.879-.309-.38-.459-.567-.237-.292-.112-.14-.105-.129-.092-.115c-.092-.105-.092-.105-.276-.151m4.091 8.087-.11.116a4 4 0 0 1-.395.363c-.18.147-.314.316-.461.496a8 8 0 0 1-.69.635c-.154.139-.154.139-.373.428l.75.563c.197-.098.292-.151.44-.296l.107-.104.113-.112.117-.115.243-.242q.186-.185.376-.369l.236-.235.115-.111c.116-.114.116-.114.253-.292-.028-.229-.136-.367-.277-.547l-.117-.151-.105-.114c-.131-.014-.131-.014-.222.087' />
        <path d='M25.27 3.285c.283.161.485.401.581.714.086.443.021.81-.226 1.188-.279.272-.537.365-.922.391-.341-.008-.635-.067-.878-.32-.299-.389-.376-.708-.325-1.195.101-.351.281-.557.582-.756.362-.196.816-.187 1.187-.022m-.988.723c-.111.213-.138.318-.094.555.156.211.243.301.504.344.21-.036.295-.055.434-.219.087-.26.092-.439-.027-.688-.192-.15-.302-.171-.541-.155-.137.025-.137.025-.275.163m4.294-.649c.286.199.432.417.518.75.061.392-.009.745-.239 1.071-.269.293-.551.385-.944.401-.38-.011-.663-.125-.93-.398-.244-.312-.32-.646-.273-1.037.095-.394.266-.617.606-.834.402-.233.871-.178 1.263.047m-1.037.621c-.115.164-.159.256-.164.457a.87.87 0 0 0 .375.438c.212-.011.375-.021.555-.141a.8.8 0 0 0 .133-.422c-.067-.238-.102-.297-.313-.438-.245-.027-.382-.04-.586.105m-5.398-.617c.232.162.375.381.483.638.058.43.042.793-.219 1.149-.214.232-.464.395-.782.426-.418.009-.711-.071-1.046-.337-.251-.314-.349-.593-.324-.996.054-.374.218-.607.496-.855.422-.308.947-.275 1.392-.025M21 4.063c-.055.216-.085.368-.016.582.126.17.239.226.445.258.205-.013.205-.013.375-.156.149-.177.149-.177.168-.406-.021-.214-.021-.214-.133-.367-.282-.183-.616-.177-.839.089' />
      </svg>
    </>
  );
}

export function VATIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='currentColor'
    >
      <path d='m5.739-.03.385-.001h1.051l1.136-.001 2.223-.001h7.495q2.241.001 4.482-.003l4.607-.003 2.585-.001h3.321q.514-.001 1.029.001l.37-.001c1.454-.009 2.748.394 3.857 1.369l.16.138c.89.821 1.51 2.054 1.574 3.268q.01.526.006 1.055l.001.41.001 1.123.001 1.211.001 2.373.001 1.927.003 5.465v.595q0 2.391.004 4.782.004 2.455.004 4.91 0 1.378.003 2.757.003 1.174.001 2.346l.001 1.198q.003.547 0 1.096l.001.396q.001.269-.001.539v.302a1.4 1.4 0 0 1-.564.995l-.244.14-.134.077-.429.24-.141.079q-.495.273-.996.536l-.294.158-.755.4-.173.091c-.428.198-.973.129-1.403-.022a14 14 0 0 1-.848-.46q-.349-.2-.699-.398l-.481-.278-.225-.13-.201-.117a1.5 1.5 0 0 0-.583-.171c-.198.071-.198.071-.39.193l-.224.13-.236.141-.488.281a53 53 0 0 0-.8.478c-.55.328-1.099.603-1.757.47-.698-.214-1.339-.625-1.965-.989l-.198-.115-.184-.107-.174-.1-.314-.186c-.241-.152-.241-.152-.516-.181-.259.094-.498.224-.74.354l-.164.088-.343.184-.522.279-.49.261a8 8 0 0 0-.617.36c-.394.21-.854.188-1.284.101-.455-.155-.869-.405-1.284-.645l-.333-.184-.609-.343-.138-.077a9 9 0 0 1-.283-.173c-.26-.169-.26-.169-.559-.217q-.344.166-.679.345l-.152.081-.481.259-.32.171c-.509.266-.509.266-1.004.555-.498.307-.934.314-1.502.226a6.6 6.6 0 0 1-1.094-.547l-.289-.164-.557-.32a20 20 0 0 0-.615-.34c-.557-.293-1.066-.578-1.275-1.205a16 16 0 0 1-.009-.663v-.208l.001-.691v-.494l.001-1.344.001-1.404.001-2.659.001-3.028.004-6.229-.291.003q-1.363.011-2.724.018l-1.4.009q-.676.006-1.353.007l-.515.004a46 46 0 0 1-.724.003l-.213.004c-.605-.005-1.101-.209-1.565-.6L.391 20l-.128-.151c-.25-.374-.286-.714-.285-1.154l-.001-.182-.001-.604-.001-.434-.003-1.177-.001-.736-.003-2.572q0-1.196-.004-2.391L-.037 8.54q0-.613-.003-1.228-.003-.578 0-1.156l-.001-.421c-.01-1.63.367-3.009 1.544-4.201C2.726.355 4.067-.037 5.739-.03M2.331 2.711C1.5 3.742 1.37 4.736 1.372 6.012l-.003.424-.001 1.145-.001.956q-.003 1.127-.001 2.255 0 1.164-.004 2.328l-.003 2q0 .596-.003 1.194v1.121l-.001.411q-.001.281.001.561l-.003.165c.005.281.034.395.229.603.209.12.309.161.545.16l.193.001.209-.004h.221q.362 0 .724-.005l.503-.001 1.323-.007q.675-.005 1.35-.006 1.324-.005 2.647-.015.009-2.77.013-5.54l.005-2.572.005-2.243.003-1.188q.003-.56.001-1.119l.001-.409c.009-1.441-.215-2.621-1.24-3.705-.877-.809-1.909-1.161-3.086-1.137-1.041.071-1.956.573-2.667 1.326m6.654-1.305.351.47.266.346c.897 1.194 1.046 2.501 1.045 3.947l.001.4.001 1.095.003 1.182.004 2.047.005 2.961.009 4.804.009 4.666v.291l.003 1.444q.013 5.985.021 11.97l.122.068.746.414q.486.269.966.55l.173.1q.168.098.334.199l.169.096.144.085c.299.094.554.007.83-.121l.2-.117.224-.13.235-.139.484-.278.236-.135a21 21 0 0 1 .841-.455l.239-.124c.463-.184.807-.201 1.268-.029.481.214.941.468 1.404.719l.319.171c.799.43.799.43 1.037.594.18.11.18.11.374.086.259-.09.496-.21.736-.341l.152-.081.479-.259.32-.171c.58-.311.58-.311 1.151-.639.341-.188.647-.269 1.029-.19.589.189 1.12.49 1.66.785l.293.159c.76.413.76.413 1.107.63.274.136.335.12.621.036q.25-.119.493-.25l.14-.076.441-.24.293-.159q.696-.375 1.381-.766c.375-.189.72-.168 1.116-.064.451.161.867.411 1.286.641l.29.158c.747.406.747.406 1.02.571l.184.11.154.096c.214.079.326.046.544-.021a10 10 0 0 0 .5-.253l.143-.076.296-.16q.224-.122.45-.242.403-.215.8-.44l.246-.131c.244-.161.244-.161.281-.428v-.296l.003-.166q.001-.278-.003-.554l.003-.4q.001-.55-.001-1.101-.001-.594.001-1.188.001-1.164-.001-2.328-.004-1.355-.001-2.71 0-2.417-.005-4.836-.005-2.346-.004-4.692a3195 3195 0 0 0-.001-5.652v-2.158q.001-1.151-.003-2.304l-.001-1.175q.001-.539-.003-1.076v-.389c.006-1.288-.299-2.326-1.199-3.285-.922-.864-2.01-1.119-3.245-1.106l-.329-.001q-.448-.001-.894.003l-.968.001-1.673.003-2.417.004q-1.963.001-3.924.006-1.905.005-3.81.006h-.237l-1.18.001q-4.888.005-9.776.016' />
      <path d='m13.973 13.935.288-.001q.395-.001.789.001.425.001.851-.001.833-.003 1.666.001l1.549.001h.391q1.731 0 3.462.003 1.68.004 3.36.001a1666 1666 0 0 1 4.242 0h1.353l1.649.003.841.001q.455-.001.911.003l.269-.003c.596.006.596.006.904.191.171.196.216.28.245.54-.03.306-.125.423-.338.64-.193.096-.32.088-.535.089l-.244.001h-.27l-.286.001-.787.001-.849.001-1.856.003-1.159.001-3.206.003h-1.041q-1.676 0-3.354.004-1.72.003-3.441.003l-1.933.003-1.646.001q-.42-.001-.84.001h-.91l-.269.003-.246-.001h-.213c-.241-.036-.39-.122-.587-.264a1.13 1.13 0 0 1-.079-.781c.344-.499.747-.445 1.316-.44m-.468 4.022.244-.001h.27l.286-.001.787-.001.849-.001 2.05-.003.965-.001 4.039-.004h.209l3.354-.005q1.72-.004 3.441-.004l1.933-.003q.823-.003 1.646-.001l.84-.001h.91l.269-.003c.595.005.595.005.904.19.189.217.216.355.236.635-.026.25-.151.378-.329.545-.193.096-.321.089-.536.089l-.245.001h-.271l-.286.001-.79.001-.851.003-2.058.004-.581.001-4.65.005-3.365.006q-1.726.005-3.453.005l-1.939.004q-.825.004-1.651.003l-.843.001q-.456.003-.912 0l-.27.004c-.665-.006-.665-.006-.907-.239-.217-.314-.194-.453-.14-.828.253-.329.446-.4.848-.401m.085 3.985.242-.001h.268l.284-.001.781-.001.843-.001 2.034-.003.958-.001 4.009-.004h.208l3.327-.005q1.708-.004 3.415-.004l1.917-.003q.816-.003 1.633-.001l.834-.001h.904l.266-.003c.476.004.77.027 1.129.354.096.206.099.399.079.625-.105.234-.161.354-.391.469a6 6 0 0 1-.381.011l-.246.001h-.273l-.288.001-.792.001-.854.003-2.064.004-.583.001-4.455.005h-.21l-3.376.006q-1.731.005-3.464.005l-1.946.004q-.829.004-1.656.003l-.845.001a75 75 0 0 1-.916 0l-.271.004c-.667-.006-.667-.006-.91-.239-.217-.314-.194-.453-.14-.828.259-.349.516-.4.934-.401M25.395 4.298c.746.555 1.153 1.119 1.329 2.031.031.406.031.811.029 1.218v.346l-.003.72-.001.921-.001.712v.34l-.003.474-.001.271c-.02.227-.049.355-.176.542-.247.165-.401.182-.693.2-.268-.07-.384-.225-.557-.434-.044-.253-.044-.253-.037-.534l.003-.276.011-.348.022-1.107h-2.579c.009.676.009.676.021 1.354l.001.256.004.261c-.039.344-.176.544-.418.785-.432.05-.432.05-.625 0-.254-.205-.378-.321-.44-.646v-.294l-.001-.163q-.001-.265.003-.531v-.371q0-.389.004-.779.004-.498.001-.993-.001-.384.001-.767V7.12c-.001-.656.007-1.231.357-1.807l.109-.189c.838-1.145 2.379-1.527 3.64-.828M22.9 5.946c-.147.26-.17.47-.169.762v.2l.003.254.005.805h2.579l.015-.707.006-.22c.005-.494-.053-.872-.39-1.256l-.139-.11-.139-.114c-.635-.43-1.308-.119-1.77.388m-7.276-1.963c.46.333.55.802.7 1.329l.083.276.254.871.258.874.159.544.073.247.064.219c.05.174.05.174.133.33l.048-.164q.224-.766.451-1.531l.232-.787.269-.905.083-.285.08-.265.069-.234c.121-.253.255-.364.488-.516.341-.055.488-.04.776.151.237.354.208.696.13 1.109a10 10 0 0 1-.145.503l-.056.19-.186.615-.13.43-.273.899-.349 1.15-.269.887-.129.424-.18.593-.053.176c-.095.307-.2.579-.388.843a1.13 1.13 0 0 1-.781.079c-.376-.307-.493-.6-.623-1.05l-.061-.199-.193-.647-.135-.451-.281-.946-.361-1.21-.279-.932-.134-.446-.185-.625-.056-.185c-.106-.372-.133-.656-.036-1.042.281-.323.519-.38.938-.313m-2.164 21.991.306-.003.336.003.354-.001h1.968q.845-.001 1.69.001.976.003 1.954-.001.839-.003 1.678-.001h1.001q.471-.001.941.001h.346q.237-.001.471.001h.266c.279.049.369.13.537.351.083.302.107.474-.01.766-.217.254-.434.319-.764.348h-.254l-.293.001-.319-.001-.338.001h-1.875l-1.61-.001h-4.413l-.897-.001h-.329l-.45-.001h-.254a1.4 1.4 0 0 1-.756-.281c-.122-.166-.129-.27-.129-.476l-.005-.18c.1-.456.424-.527.844-.529m15.93-22.046.305-.001q.32-.001.639.003.409.003.818-.001h.782l.296-.003c.751.01.751.01.994.242.209.315.188.455.134.828a1.2 1.2 0 0 1-.469.391 5 5 0 0 1-.34.007l-.201-.001-.21-.003-.213-.001-.521-.003.001.226.007 2.107.004 1.084.003 1.045.001.399.001.559.001.166c-.001.381-.043.677-.307.963-.26.134-.44.128-.727.092-.21-.12-.21-.12-.391-.313a3 3 0 0 1-.044-.616v-.188q.001-.306.006-.611l.001-.424q.003-.559.01-1.116l.007-1.139q.006-1.117.019-2.234l-.138.005-.62.015-.216.007c-.341.005-.534.006-.83-.175-.194-.213-.224-.29-.258-.58.029-.284.063-.406.27-.599.354-.19.792-.135 1.182-.133M35 26.016c.263.164.302.28.391.576 0 .6-.549 1.013-.946 1.414l-.193.196-.631.637-.219.22q-.512.517-1.027 1.034a278 278 0 0 0-1.18 1.192l-.916.924-.545.551a73 73 0 0 1-.61.613l-.179.185c-.338.331-.578.494-1.056.52-.154-.016-.154-.016-.389-.134-.204-.255-.235-.418-.235-.742.139-.27.304-.48.516-.695l.171-.175.186-.189.198-.201.647-.655.224-.226.932-.94a290 290 0 0 0 1.331-1.346q.468-.475.939-.948l.56-.566a68 68 0 0 1 .626-.629l.184-.191c.384-.376.675-.55 1.22-.428m-21.126 3.934.253-.003q.413-.001.825.001l.574-.001q.601-.001 1.202.003.77.004 1.541-.001h1.184l.569-.001q.398-.001.794.003l.237-.003c.364.005.535.013.834.234.194.276.2.425.146.756-.14.215-.239.354-.469.469q-.169.01-.338.01l-.215.001h-.236l-.247.001-.815.001-.565.001h-1.185l-1.52.003-1.166.001-.56.001h-.784l-.235.001-.216-.001h-.188a1 1 0 0 1-.483-.176c-.165-.247-.182-.401-.2-.693.168-.639.72-.614 1.261-.607m15.973-4.322c.469.338.722.771.86 1.329.095.698-.075 1.206-.459 1.782-.453.465-.92.645-1.558.669-.667-.013-1.191-.258-1.655-.732-.357-.585-.451-1.114-.391-1.797.185-.674.597-1.044 1.175-1.405.65-.336 1.417-.191 2.029.155m-1.641 1.25c-.184.275-.201.38-.156.704.194.263.306.375.63.435.285-.055.375-.121.542-.356.091-.226.091-.226.079-.469-.151-.274-.247-.37-.547-.464-.245-.005-.35.011-.547.151m7.119 4.18c.496.459.707.965.737 1.635-.02.571-.181 1.01-.564 1.438-.547.504-1.051.61-1.785.591-.559-.065-.971-.283-1.324-.72-.389-.587-.532-1.136-.401-1.834q.217-.797.909-1.255c.799-.42 1.679-.386 2.426.145m-1.805 1.21c-.18.219-.18.219-.146.464.08.28.141.388.381.551.274.059.274.059.547 0 .227-.199.3-.33.361-.625-.073-.348-.225-.43-.517-.625-.284 0-.394.075-.625.235' />
    </svg>
  );
}

export function DarkModeIcon({
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
        d='m15.844 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.781-1.428zm-5.432.814A8 8 0 1 0 18.93 16A9 9 0 0 1 10 7c0-.98.131-1.937.412-2.842M2 12C2 6.477 6.477 2 12 2h1.734l-.868 1.5C12.287 4.5 12 5.69 12 7a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626C20.162 19.137 16.417 22 12 22C6.477 22 2 17.523 2 12m18.5-5.584l.914 1.67l1.67.914l-1.67.914l-.914 1.67l-.914-1.67L17.916 9l1.67-.914z'
      />
    </svg>
  );
}

export function LightModeIcon({
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
        d='M10.999-.004h2.004V2h-2.004zM4.223 2.803L5.64 4.22L4.223 5.637L2.806 4.22zm15.556 0l1.417 1.417l-1.417 1.417l-1.417-1.417zM12 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0a8 8 0 0 1-16 0m-4.001-1.004h2.004V13H-.001zm22 0h2.004V13h-2.004zM4.223 18.36l1.417 1.417l-1.417 1.418l-1.417-1.418zm15.556 0l1.417 1.417l-1.417 1.417l-1.417-1.417zM11 21.997h2.004V24H11z'
      />
    </svg>
  );
}

export function SystemIcon({
  width = '1.5em',
  height = '1.5em',
}: IconSizeProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}