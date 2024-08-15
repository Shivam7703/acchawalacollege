import AreYouConfused from '@/components/AreYouConfused'
import Faqs from '@/components/faqs/Faqs'
import HeroSection from '@/components/scholarshipPageSections/heroSection/HeroSection'
import ScholarshipDetail from '@/components/scholarshipPageSections/scholarshipDetail/ScholarshipDetail'
import { collegeDetailsPage } from '@/data/collegeDetail'
import React from 'react'

export default function ScholarshipPage() {
  return (
    <>
      <HeroSection data={collegeDetailsPage} />
      <ScholarshipDetail data={collegeDetailsPage?.scholarshipPage?.scholarshipDetails} />
      <Faqs data={collegeDetailsPage?.scholarshipPage?.faqs} />
      <AreYouConfused />
    </>
  )
}
