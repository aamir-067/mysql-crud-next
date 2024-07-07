"use client";
import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/navigation';

export default function Add({ params }: { params: { slug: string } }) {
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        department: "",
        title: ""
    });

    const router = useRouter();


    useEffect(() => {
        const getEmployeeDetails = async () => {
            try {
                const res = await fetch(`/api/employees/get/${params.slug}`);
                const data = await res.json();
                setEmployee(data.res);
                console.log(data);

            } catch (error) {
                console.log(error);
            }
        }
        getEmployeeDetails();
    }, [params.slug]);




    const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | null = null) => {
        event && event.preventDefault();
        try {
            const response = await fetch('/api/employees/edit', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(employee)
            });

            if (response.ok) {
                alert("Employee updated successfully");
                router.push("/");
            }
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <section className="w-full h-full bg-black px-10">
            <NavBar />
            <div className="flex items-center justify-center bg-black px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <h2 className="text-2xl font-bold leading-tight text-white">Add New Employee</h2>
                    <form onSubmit={handleSubmit} className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="text-base font-medium text-white">
                                    {' '}
                                    Full Name{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={employee?.name}
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        onChange={(e) => { setEmployee((prev) => { return { ...prev, name: e.target.value } }) }}
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
                                        value={employee?.email}
                                        onChange={(e) => { setEmployee((prev) => { return { ...prev, email: e.target.value } }) }}
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
                                        value={employee?.title}
                                        onChange={(e) => { setEmployee((prev) => { return { ...prev, title: e.target.value } }) }}
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
                                        value={employee?.department}
                                        onChange={(e) => { setEmployee((prev) => { return { ...prev, department: e.target.value } }) }}
                                        placeholder="department"
                                        id="department"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    onClick={() => handleSubmit(null)}
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
