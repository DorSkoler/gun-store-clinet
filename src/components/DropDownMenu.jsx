/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { weaponsSideBarData } from "../weapons/weaponsNavBarData";
const styleButton = `flex items-center h-12 px-7 mt-5 md:rounded-full transition-all duration-300 hover:bg-gradient-to-r from-pink-600 to-purple-600 cursor-pointer`;

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function DropDownMenu({selectedWeaponType,handleChange}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {selectedWeaponType}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
            {weaponsSideBarData.map((item,index)=>(
                <a
                key={index}
                onClick={() => handleChange(item.title)}
                className={`${selectedWeaponType === item.title && "bg-gradient-to-r from-pink-600 to-purple-600"} ${styleButton}`}
                >
                <item.icon fontSize={28} />
                <span className="ml-2 text-md font-medium">{item.title}</span>
                </a>
                 ))}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropDownMenu;