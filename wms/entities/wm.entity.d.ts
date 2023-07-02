import { Model } from "sequelize-typescript";
import { WmEntry } from "src/wm-entries/entities/wm-entry.entity";
interface WmCreationAttrs {
    value: number;
    price: number;
    isActive: boolean;
}
export declare class Wm extends Model<Wm, WmCreationAttrs> {
    id: number;
    value: number;
    price: number;
    isActive: boolean;
    wmEntries: WmEntry[];
}
export {};
