import { Model } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Entry } from "src/entries/entities/entry.entity";
interface RoomCreationAttrs {
    title: string;
    description: string;
    responsibleId: number;
}
export declare class Room extends Model<Room, RoomCreationAttrs> {
    id: number;
    value: string;
    title: string;
    description: string;
    responsibleId: number;
    responsible: User;
    entries: Entry[];
}
export {};
