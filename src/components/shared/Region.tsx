import React from 'react'
import { countryData } from '@/lib/countryData';
import { Tcountry } from '@/types/country';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
export default function Region() {
  
  return (
    <div className="">
      <p className="uppercase text-cyan-900 font-semibold mb-5">Select Region</p>
      <div className="flex items-center gap-2 justify-between overflow-x-auto">
        {countryData.map((country: Tcountry) => (
          <Button
            variant={'outline'}
              key={country.code}
            >
            <Image
              className='m-0'
                src={`https://flagcdn.com/w40/${country.flag}.png`}
                alt="Country flag"
                width={20}
                height={20}
              />
              <span className="font-semibold text-black/70">
                {country.country}
              </span>
            </Button>
        ))}
      </div>
    </div>
  );
}
