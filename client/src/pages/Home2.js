import BTCPrice from '../components/BTCPrice';
import InputField from '../components/inputField';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutMenu';
import Profile from '../components/Profile';
import PurchaseButton from '../components/PurchaseButton';
import { useAuth0 } from "@auth0/auth0-react";
import '../App.css';


import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

  export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    return (
      <body>
      {/*Backround Div*/}
        <div className="fixed bg-slate-600 h-screen w-screen top-0 left-0 -z-50">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      {/*Navbar header*/}
        <header className="inset-x-0 top-0 z-50">
            <nav className="flex p-6 lg:px-8" aria-label="Global">
            < div className="flex-0">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-300">
                  <LoginButton/>
                  <LogoutButton/>
                </a>
              </div>
              <div className="flex-1 flex flex-row lg:gap-x-12 justify-center">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-300">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex-0">
                  <LoginButton/>
                  <LogoutButton/>
              </div>
              </nav>
          </header>
        {/*main text div*/}
        <div className = "fixed w-screen">
          <div className="flex flex-1 pb-32 relative h-screen isolate px-6 pt-14 lg:px-8 justify-center items-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                The Web Testament
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                The complete, community made, history of the internet.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-gray-300 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-300">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
      
    
    )
  }