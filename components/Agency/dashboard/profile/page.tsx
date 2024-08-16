'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'


import enterprise from '@/public/Images/enterprise.png'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, FormEvent } from 'react'

import { GoUnverified } from "react-icons/go";
import { GoVerified } from "react-icons/go";
import {  FaLink } from "react-icons/fa";

import FileUpload from '@/components/uploadFile'
import Preview from '@/components/preview'
import { toast } from '@/components/ui/use-toast'

interface AgencyProfileProps {
    uid?: string
    imageUrl?: string
}

interface UserProps {
    agencyName: string
    agencyEmail: string
    agencyImgUrl: string
    agencyUrl: string
    agencyPhoneNumber: string
    agencyLocation: string
    agencyLicenseId: string
    agencyLicenseImage: string
    bio: string
    verified: boolean
    role: string
}

const AgencyProfile = ({ uid }: AgencyProfileProps) => {


    const [formData, setFormData] = useState({
        uid:'',
        agencyName: '',
        agencyEmail: '',
        agencyImgUrl: '',
        agencyUrl: '',
        agencyPhoneNumber: '',
        agencyLocation: '',

        agencyLicenseId: '',
        agencyLicenseFile: '',
        agencyLicenseFileName: '',

        bio: '',
        verified: false,
        role: ''
    })

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(`/api/agency/${uid}`)
            setFormData({
                uid: data.data.uid || '',
                agencyName: data.data.agencyName || '',
                agencyEmail: data.data.agencyEmail || '',
                agencyImgUrl: data.data.agencyImgUrl || '',
                agencyUrl: data.data.agencyUrl || '',
                agencyPhoneNumber: data.data.agencyPhoneNumber || '',
                agencyLocation: data.data.agencyLocation || '',

                agencyLicenseId: data.data.agencyLicenseId || '',
                agencyLicenseFile: data.data.agencyLicenseFile || '',
                agencyLicenseFileName: data.data.agencyLicenseFileName || '',

                bio: data.data.bio || '',
                verified: data.data.verified || false,
                role: data.data.role || ''
            })
        }
        getData()
    }, [uid])


    const handleFileUpload = (fileUrl: string, fileName: string) => {
        setFormData(prevData => ({
            ...prevData,
            agencyLicenseFile: fileUrl,
            agencyLicenseFileName: fileName
        }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }))
    }

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log('Form Values:', formData)
        
        try {
            const res = await axios.put(`/api/agency/${uid}`, formData)
            
            if(res.status === 200){
                toast({
                    title: "Successfully Done!",
                    description: "Your profile has been updated.",
                    className: "bg-green-500",
                });
            } else if (res.status === 204){
                toast({
                    title: "Missing field!",
                    description: "Mandatory field is missing",
                    className: "bg-amber-500",
                });
            }else{
                toast({
                    title: "Error Occured!",
                    description: "Unexpected error occured, Retry!",
                    className: "bg-red-500",
                });
            }

        } catch (error) {
            toast({
                title: "Missing field!",
                description: "Mandatory field is missing",
                className: "bg-amber-500",
            });
        }
    }

    


    return (
        <>
            <div className="rounded-xl container px-4 md:px-6 py-12 md:py-24 lg:py-32">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Manage Your Agency Profile
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Update your agency's details, logo, and contact information.
                                {
                                    formData.verified ? <GoVerified className='h-6 w-6 text-emerald-500' /> : <GoUnverified className='h-10 w-10 text-amber-400' />
                                }
                            </p>
                        </div>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid gap-2">
                                <Label htmlFor="agencyName" className='flex'>Agency Name <p className='mx-1 text-rose-600'>*</p></Label>
                                <Input
                                    id="agencyName"
                                    value={formData.agencyName}
                                    onChange={handleInputChange}
                                    className='text-black'
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="agencyEmail" className='flex'>Agency Email <p className='mx-1 text-rose-600'>*</p></Label>
                                <Input
                                    id="agencyEmail"
                                    type="email"
                                    value={formData.agencyEmail}
                                    onChange={handleInputChange}
                                    className='text-black'
                                />
                            </div>
                            
                            <div className="grid gap-2 ">
                                <Label htmlFor="agencyUrl" className='flex'>Agency Website <Link href={formData.agencyUrl}><FaLink className=' mx-2 h-4 w-4' /></Link></Label>
                                <Input
                                    id="agencyUrl"
                                    value={formData.agencyUrl}
                                    onChange={handleInputChange}
                                    className='text-black'
                                />
                                
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="agencyPhoneNumber">Agency Phone</Label>
                                <Input
                                    id="agencyPhoneNumber"
                                    type="tel"
                                    value={formData.agencyPhoneNumber}
                                    onChange={handleInputChange}
                                    className='text-black'
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="agencyLocation">Agency Location</Label>
                                <Input
                                    id="agencyLocation"
                                    value={formData.agencyLocation}
                                    onChange={handleInputChange}
                                    className='text-black'
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="agencyLicenseId">Agency License ID</Label>
                                <Input
                                    id="agencyLicenseId"
                                    value={formData.agencyLicenseId}
                                    onChange={handleInputChange}
                                    className='text-black'
                                />
                            </div>

                            <div className='flex items-end '>
                                <FileUpload
                                    onFileUpload={handleFileUpload}
                                    label="Agency License File"
                                    id="agencyLicenseFile"
                                    path={`images/${formData.role}/license`}
                                />
                                <div className='mx-2'>
                                    <Preview fileName={formData.agencyLicenseFile} />
                                </div>
                            </div>
                            
                            
                            <div className="grid gap-2">
                                <Label htmlFor="bio">Agency Description</Label>
                                <Textarea
                                    id="bio"
                                    rows={3}
                                    value={formData.bio}
                                    onChange={handleInputChange}
                                    className='text-black'
                                />
                            </div>

                            <Button type="submit">Save Changes</Button>
                        </form>
                    </div>

                    <Image
                        src={formData.agencyImgUrl ? formData.agencyImgUrl : enterprise}
                        priority
                        width="256"
                        height="128"
                        alt="Agency Profile"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last"
                    />
                </div>
            </div>
        </>
    )
}

export default AgencyProfile