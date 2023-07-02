import { CreateWmEntryDto } from './dto/create-wm-entry.dto';
import { UpdateWmEntryDto } from './dto/update-wm-entry.dto';
import { WmEntry } from './entities/wm-entry.entity';
import { UsersService } from 'src/users/users.service';
import { WmsService } from 'src/wms/wms.service';
export declare class WmEntriesService {
    private wmEntryRepository;
    private usersService;
    private wmsService;
    constructor(wmEntryRepository: typeof WmEntry, usersService: UsersService, wmsService: WmsService);
    create(createWmEntryDto: CreateWmEntryDto): Promise<WmEntry>;
    findAll(): Promise<WmEntry[]>;
    findById(id: number): Promise<WmEntry>;
    update(id: number, updateWmEntryDto: UpdateWmEntryDto): Promise<WmEntry>;
    remove(id: number): Promise<number>;
}
