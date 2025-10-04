import mongoose from "mongoose";

const { Schema } = mongoose;

export const UserSchema = new Schema({
    fullName: String,
    email: String,
    whatsappNumber: String,
    role: String,
    profile: String
})

export const EventSchema = new Schema({
    title: String,
    socials: {
        label: String,
        link: String,
    },
    createdby: String,
    startDate: Date,
    endDate: Date,
    contacts: [
        Schema.ObjectId
    ],
    bannerUrl: String,
    registrationLink: String,
})

export const CommunitySchema = new Schema({
    name: String,
    admin: Schema.ObjectId,
    createdAt: Date,
    facultyInCharge: Schema.ObjectId,
    description: Text,
    logo: String,
})

export const EventAttendenceSchema = new Schema({
    eventid: Schema.ObjectId,
    userid: Schema.ObjectId,
    state: String,
    testimonial: String,
    rating: String,
})