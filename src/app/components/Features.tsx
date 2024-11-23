import { Heart } from 'lucide-react';
import React from 'react';
import IconPlaceholder from './IconPlaceholder';

type Feature = {
  title: string;
  description: string;
};

type Props = {
  feature: Feature;
};

export default function Features({ feature }: Props) {
  return (
    <div className="flex flex-grow flex-col items-start gap-5">
      <IconPlaceholder>
        <Heart className="h-6 w-6 text-indigo-500" />
      </IconPlaceholder>
      <span className="text-xl font-semibold text-neutral-900">
        {feature.title}
      </span>
      <span className="text-base text-neutral-500">{feature.description}</span>
    </div>
  );
}
