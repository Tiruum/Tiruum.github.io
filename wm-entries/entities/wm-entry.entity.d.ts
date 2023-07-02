import { Model } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Wm } from "src/wms/entities/wm.entity";
interface WmEntryCreationAttrs {
    title: string;
    userId: number;
    wmValue: number;
    description: string;
    from: Date;
    to: Date;
}
export declare class WmEntry extends Model<WmEntry, WmEntryCreationAttrs> {
    id: number;
    status: "closed" | "passed" | "booked" | "empty";
    userId: number | null;
    wmId: number;
    time: string;
    date: string;
    userInfo: User;
    wmInfo: Wm;
}
export {};
