"use client";

import React, { useState } from 'react';
import Wrapper from '../Wrapper';
import Image from 'next/image';
import { user1 } from '@/asset';
import FeaturedCountry from '../cards/FeaturedCountryCard';

export default function CountryPreference() {
    const [selectedTag, setSelectedTag] = useState(1);

    const countrypreference = {
        title1: "Select your",
        title2: "Country",
        title3: "of Preference",
        text: "Choosing the ideal destination for immigration is a pivotal decision that can shape the trajectory of your",
        tags: [
            {
                id: 1,
                label: "Europe",
                countries: [
                    { id: 1, img: user1, name: "Canada" },
                    { id: 2, img: user1, name: "Belgium" }
                ]
            },
            {
                id: 2,
                label: "Asia",
                countries: [
                    { id: 1, img: user1, name: "Bharat" }
                ]
            },
            {
                id: 3,
                label: "Africa",
                countries: [
                    { id: 1, img: user1, name: "Greece" },
                    { id: 2, img: user1, name: "Luxembourg" },
                    { id: 3, img: user1, name: "Italy" }
                ]
            }
        ]
    };

    const handleTagClick = (tagId: any) => {
        setSelectedTag(tagId === selectedTag ? null : tagId);
    };

    return (
        <Wrapper className="!my-16 py-14">
            <h2 className='text-blue-950 text-3xl font-bold'>
                {countrypreference.title1} <span className='text-blue-500'>{countrypreference.title2}</span> {countrypreference.title3}
            </h2>
            <p className='text-lg font-medium text-zinc-600'>{countrypreference.text}</p>
            
            <div className='w-full'>
                <div className='my-10 bg-slate-200 p-2 flex gap-3 overflow-auto w-full'>
                    {countrypreference.tags.map((tag) => (
                        <p
                            key={tag.id}
                            className={`cursor-pointer px-3 py-1 rounded ${selectedTag === tag.id ? 'bg-white shadow' : ''}`}
                            onClick={() => handleTagClick(tag.id)}
                        >
                            {tag.label}
                        </p>
                    ))}
                </div>
                
                {selectedTag !== null && (
                    <div className="mt-2 flex flex-wrap gap-4">
                        {countrypreference.tags.find(tag => tag.id === selectedTag)?.countries.map((country) => (
                            <div key={country.id} className=" px-5 py-3 rounded  flex items-center gap-4 max-sm:w-max w-72 border-2">
<Image src={country.img} alt={'country Image'} className='w-9 h-9 rounded-full'/>                           
     <p className='text-xl '>{country.name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='flex gap-2 justify-between mt-14 flex-wrap'>
          <FeaturedCountry/>
          <FeaturedCountry/>
          <FeaturedCountry/>
            </div>
        </Wrapper>
    );
}