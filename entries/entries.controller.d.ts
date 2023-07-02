import { EntriesService } from './entries.service';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
export declare class EntriesController {
    private readonly entriesService;
    constructor(entriesService: EntriesService);
    create(createEntryDto: CreateEntryDto): Promise<import("./entities/entry.entity").Entry>;
    findAll(): Promise<import("./entities/entry.entity").Entry[]>;
    findOne(id: string): Promise<import("./entities/entry.entity").Entry>;
    update(id: string, updateEntryDto: UpdateEntryDto): Promise<void>;
    remove(id: string): Promise<void>;
}
