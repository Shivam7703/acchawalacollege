import React from 'react'
import Wrapper from '../Wrapper'
import { Button } from '../dashboardSections/Button'

export default function AnyQueries() {
  return (
    <Wrapper className="text-center md:py-16 py-8 bg-zinc-300 !px-0 !mx-0 w-full max-w-none">
      <h2 className="text-center md:text-5xl text-2xl font-bold">Do you have any other queries for us?</h2>
      <p className="text-center md:my-5 my-3">Drop us an email with your question and our HR team will get back to you as soon as possible.</p>
      <Button variant="blue" className='min-w-max mx-auto mt-6'>Send an Email</Button>
    </Wrapper>
  )
}


