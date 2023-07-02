import { Model } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Room } from "src/rooms/entities/room.entity";
interface EntryCreationAttrs {
    title: string;
    description: string;
    from: Date;
    to: Date;
}
export declare class Entry extends Model<Entry, EntryCreationAttrs> {
    id: number;
    userId: number;
    roomId: number;
    title: string;
    description: string;
    from: Date;
    to: Date;
    type: string;
    color: string;
    responsible: User;
    userInfo: User;
    roomInfo: Room;
}
export {};
