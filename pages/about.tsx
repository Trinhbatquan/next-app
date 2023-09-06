//tsdrpfc
import * as React from 'react';
import { useRouter } from 'next/router';

export interface IAboutPageProps {
}

export default function AboutPage(props: IAboutPageProps) {
  const router = useRouter();
  console.log(router)
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}
