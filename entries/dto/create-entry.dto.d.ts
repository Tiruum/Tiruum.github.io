export declare class CreateEntryDto {
    readonly userId: number;
    readonly roomValue: string;
    readonly title: string;
    readonly description: string;
    readonly from: Date;
    readonly to: Date;
    readonly color: string;
    readonly type: "one-time" | "weekly" | "monthly";
}
