"use client"
import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,

    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from '@/components/ui/calendar'

const formSchema = z.object({
    leaderName: z.string().min(2, {
        message: "Leader name must be at least 5 characters.",
    }),
    leaderContact: z.string().min(10, {
        message: "Please enter a valid contact number.",
    }),
    tripName: z.string().min(2, {
        message: "Trip name must be at least 2 characters.",
    }),
    tripType: z.string({
        required_error: "Please select a trip type.",
    }),
    location: z.string().min(2, {
        message: "Location must be at least 2 characters.",
    }),
    duration: z.number().min(1).max(30, {
        message: "Duration must be between 1 and 30 days.",
    }),
    groupSize: z.number().min(2).max(50, {
        message: "Group size must be between 2 and 50 people.",
    }),
    tripStartDate: z.date({
        required_error: "Please select a trip start date.",
    }),
    lastApplicationDate: z.date({
        required_error: "Please select a last application date.",
    }),
    expense: z.number().min(0, {
        message: "Expense must be a positive number.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
})

type FormValues = z.infer<typeof formSchema>;

const PostTrips = () => {

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            leaderName: "",
            leaderContact: "",
            tripName: "",
            tripType: "",
            location: "",
            duration: 2,
            groupSize: 5,
            tripStartDate: new Date(),
            lastApplicationDate: new Date(),
            expense: 1,
            description: "",
        },
    })

    function onSubmit(values: FormValues) {
        console.log(values)
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-10 py-12 md:py-16 lg:py-20">
            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">Post a New Trip</h1>
                    <p className="text-muted-foreground text-lg">Fill out the form below to post a new trip.</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <FormField
                                control={form.control}
                                name="leaderName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Trip Leader Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Tushar Thakur" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="leaderContact"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Trip Leader Contact</FormLabel>
                                        <FormControl>
                                            <Input type="tel" placeholder="+91-949385032" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="tripName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Trip Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Hiking Adventure" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="tripType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Trip Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select trip type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="hiking">Hiking</SelectItem>
                                                <SelectItem value="camping">Camping</SelectItem>
                                                <SelectItem value="adventure">Adventure</SelectItem>
                                                <SelectItem value="cultural">Cultural</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Leh, Ladakh " {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="duration"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Duration (days)</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} onChange={e => field.onChange(+e.target.value)} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="groupSize"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Group Size</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} onChange={e => field.onChange(+e.target.value)} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="lastApplicationDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Last Application Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button variant="outline">
                                                        {field.value ? field.value.toDateString() : "Pick a date"}
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="space-y-6">
                            <FormField
                                control={form.control}
                                name="expense"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Estimated Expense (in ₹)</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} onChange={e => field.onChange(+e.target.value)} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Describe your trip..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="tripStartDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Trip Start Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button variant="outline">
                                                        {field.value ? field.value.toDateString() : "Pick a date"}
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="space-y-4">
                                <Label htmlFor="images">Trip Images</Label>
                                <Input id="images" type="file" multiple />
                            </div>
                        </div>
                        <div className="w-full mt-5 flex justify-end">
                            <Button type="submit" className="px-8 py-2 rounded-md text-lg font-medium">
                                Create Trip
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default PostTrips