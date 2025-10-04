import mongoose from 'mongoose'
import {EventAttendenceSchema, EventSchema, UserSchema, CommunitySchema} from './schema.js'

export const UserModel = mongoose.model('User', UserSchema);
export const EventModel = mongoose.model('Event', EventSchema);
export const CommunityModel = mongoose.model('Community', CommunitySchema);
export const EventAttendenceModel = mongoose.model('EventAttedence', EventAttendenceSchema)