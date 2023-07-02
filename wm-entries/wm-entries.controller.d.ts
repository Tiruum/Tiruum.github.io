import { WmEntriesService } from './wm-entries.service';
import { CreateWmEntryDto } from './dto/create-wm-entry.dto';
import { UpdateWmEntryDto } from './dto/update-wm-entry.dto';
import { WmEntry } from './entities/wm-entry.entity';
export declare class WmEntriesController {
    private readonly wmEntriesService;
    constructor(wmEntriesService: WmEntriesService);
    create(createWmEntryDto: CreateWmEntryDto): Promise<WmEntry>;
    findAll(): Promise<WmEntry[]>;
    findById(id: number): Promise<WmEntry>;
    update(id: string, updateWmEntryDto: UpdateWmEntryDto): Promise<WmEntry>;
    remove(id: string): Promise<number>;
}
