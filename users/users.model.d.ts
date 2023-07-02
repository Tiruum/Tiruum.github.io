import { Model } from "sequelize-typescript";
import { Entry } from "src/entries/entities/entry.entity";
import { Role } from "src/roles/roles.model";
import { Room } from "src/rooms/entities/room.entity";
import { WmEntry } from "src/wm-entries/entities/wm-entry.entity";
interface UserCreationAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    balance: number;
    banned: boolean;
    banReason: string;
    roles: Role[];
    rooms: Room[];
    entries: Entry[];
    wmEntries: WmEntry[];
}
export {};
