export declare class CreateWmEntryDto {
    readonly status: "closed" | "passed" | "booked" | "empty";
    readonly userId: number | null;
    readonly wmValue: number | null;
    readonly time: string;
    readonly date: string;
}
