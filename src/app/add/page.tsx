"use client";
import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'

export default function Add() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [department, setDepartment] = useState('')



    const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | null = null) => {
        event && event.preventDefault();
        try {
            const response = await fetch('/api/employees/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    title,
                    department
                })
            });

            response.ok && alert("Employee added successfully");

        } catch (error) {
            console.log(error);
            alert("Something went wrong while adding new employee");
        }
    }



    return (
        <section className="w-full h-full bg-black px-10">
            <NavBar />
            <div className="flex items-center justify-center bg-black px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <h2 className="text-2xl font-bold leading-tight text-white">Add New Employee</h2>
                    <form onSubmit={(e) => handleSubmit(e)} className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="text-base font-medium text-white">
                                    {' '}
                                    Full Name{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={name}
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        onChange={(e) => { setName(e.target.value) }}
                                        placeholder="Full Name"
                                        id="name"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="text-base font-medium text-white">
                                    {' '}
                                    Email address{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="title" className="text-base font-medium text-white">
                                        {' '}
                                        Title{' '}
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="title"
                                        value={title}
                                        onChange={(e) => { setTitle(e.target.value) }}
                                        placeholder="title"
                                        id="title"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="department" className="text-base font-medium text-white">
                                        {' '}
                                        Department{' '}
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="department"
                                        value={department}
                                        onChange={(e) => { setDepartment(e.target.value) }}
                                        placeholder="department"
                                        id="department"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    onClick={() => handleSubmit()}
                                    className="inline-flex w-full items-center justify-center rounded-md bg-white px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-white/80"
                                >
                                    Create Account <ArrowRight className="ml-2" size={16} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
