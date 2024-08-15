import React, { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { formbg, logo } from '@/asset'

import Wrapper from '../Wrapper'
import { Button } from '../dashboardSections/Button'

interface FormData {
  name: string;
  countryCode: string;
  mobile: string;
  email: string;
  role: string;
  resume: FileList | null;
  about: string;
}

export default function CareerForm() {
  const [submittedFileName, setSubmittedFileName] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormData>()

  const selectedFile = watch('resume');

  const onSubmit = (data: FormData) => {
    console.log(data);
    if (data.resume && data.resume.length > 0) {
      const file = data.resume[0];
      const currentDate = new Date().toLocaleString();
      const fileInfo = `File: ${file.name}, Date: ${currentDate}`;
      console.log(fileInfo);
      setSubmittedFileName(fileInfo);
    } else {
      console.log("No file submitted");
      setSubmittedFileName("No file submitted");
    }
  }

  return (
    <div className="relative">
      <Image src={formbg} alt={"Acchewala College"} className="absolute mb-8 w-full h-full object-cover top-0 left-0 z-10" />
      <Wrapper className='relative flex flex-wrap z-20 bg-black bg-opacity-50 lg:!m-0 w-full max-w-none justify-between lg:px-20'>
        <div className='md:mt-14 mt-6 flex justify-center w-full'>
          <Image src={logo} alt='logo' className='max-w-[310px] w-[80%]' />
        </div>
        <div className="md:w-[46%] bg-cover bg-center w-full">
          <div className="py-12 h-full flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-4">Start Your Career Journey with Acchewala College</h1>
            <p className="text-white mb-8">Become Part of Our Dedicated and Inspiring Academic Community</p>
            <p className="text-white text-sm">
              At Acchewala College, we are always looking for passionate and talented individuals to join our team. If you are committed to excellence in education and want to contribute to a vibrant academic environment, we invite you to apply for open positions. Our college offers a supportive atmosphere, opportunities for professional development, and the chance to make a meaningful impact on the lives of students.
            </p>
          </div>
        </div>
        <div className="md:w-[47%] md:py-12 flex items-center justify-end w-full max-md:mb-14">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-5 bg-white rounded-xl">
            <input
              type="text"
              placeholder="Name*"
              aria-label="Name"
              {...register('name', { required: 'Name is required' })}
              className="w-full p-2 mb-4 border rounded"
            />
            {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>}
            
            <div className="flex mb-4">
              <select
                {...register('countryCode')}
                className="w-[30%] min-w-16 p-2 border rounded-l bg-gray-100"
                aria-label="Country Code"
              >
                <option value="+91">+91</option>
                <option value="+92">+92</option>
                <option value="+11">+11</option>
              </select>
              <input
                type="tel"
                placeholder="Mobile*"
                aria-label="Mobile Number"
                {...register('mobile', { required: 'Mobile number is required' })}
                className="w-[69%]  p-2 border rounded-r"
              />
            </div>
            {errors.mobile && <p className="text-red-500 text-sm mb-2">{errors.mobile.message}</p>}
            
            <input
              type="email"
              placeholder="Email*"
              aria-label="Email"
              {...register('email', { required: 'Email is required' })}
              className="w-full p-2 mb-4 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}
            
            <select
              {...register('role', { required: 'Role is required' })}
              className="w-full p-2 mb-4 border rounded bg-white"
              aria-label="Role"
            >
              <option value="">What role are you looking for?*</option>
              <option value="web-developer">Web Developer</option>
              <option value="teacher">Teacher</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm mb-2">{errors.role.message}</p>}
            
            <div className="mb-4">
              <label className="flex items-center p-2 border rounded cursor-pointer">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://  www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                {selectedFile && selectedFile.length > 0 ? selectedFile[0]?.name : 'Upload Resume'}
                <input
                  type="file"
                  className="hidden"
                  {...register('resume')}
                  accept=".pdf"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      setValue('resume', files, { shouldValidate: true });
                      // console.log("File selected:", files[0].name);
                    } else {
                      setValue('resume', null, { shouldValidate: true });
                      console.log("No file selected");
                    }
                  }}
                />
              </label>
            </div>
            
            {submittedFileName && (
              <div className="mb-4 text-sm text-gray-600">
                Submitted: {submittedFileName}
              </div>
            )}
            
            <textarea
              placeholder="Tell us about yourself..."
              aria-label="About yourself"
              {...register('about')}
              className="w-full p-2 mb-4 border rounded"
            ></textarea>
            
            <Button type="submit" variant="blue">Submit</Button>
          </form>
        </div>
      </Wrapper>
    </div>
  )
}
