import Link from 'next/link'
import React from 'react'

const people = [
    {
        name: 'John Doe',
        department: 'Engineering',
        role: 'Developer',
        email: "john@doe.com"
    },
    {
        name: 'Jane Doe',
        department: 'Engineering',
        role: 'CTO',
        email: "jane@doe.com"
    },
]

export function TableOne() {
    return (
        <>
            <section className="mx-auto w-full text-white max-w-7xl px-4 py-4">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">Employees</h2>
                        <p className="mt-1 text-sm text-white">
                            This is a list of all employees. You can add new employees, edit or delete existing
                            ones.
                        </p>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Add new employee
                        </button>
                    </div>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-black">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-white"
                                            >
                                                <span>Employee</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-white"
                                            >
                                                <span>Email</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-sm font-normal text-white"
                                            >
                                                Title
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-white"
                                            >
                                                Role
                                            </th>
                                            <th scope="col" className="relative px-4 py-3.5">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-black">
                                        {people.map((person) => (
                                            <tr key={person.name}>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-white">{person.name}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-white">{person.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-12 py-4">
                                                    <div className="text-sm text-white">{person.department}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4 text-sm text-white">
                                                    {person.role}
                                                </td>
                                                <td className="whitespace-nowrap px-4 flex gap-4 py-4 text-right text-sm font-medium">
                                                    <Link href={`/edit/${person.email}`} className="text-blue-400">
                                                        Edit
                                                    </Link>
                                                    <a href="#" className="text-red-400">
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
