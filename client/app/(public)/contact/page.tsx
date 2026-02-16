import React from 'react'
import PageHero from '../components/PageHero'
import ContactForm from './ContactForm'

export default function page() {
  return (
    <div>
      <PageHero title="Contact Us" description="Get in touch with us for any inquiries or support." />
      <ContactForm />
      
    </div>
  )
}
