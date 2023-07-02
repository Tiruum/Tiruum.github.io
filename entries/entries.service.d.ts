import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { Entry } from './entities/entry.entity';
import { UsersService } from 'src/users/users.service';
import { RoomsService } from 'src/rooms/rooms.service';
export declare class EntriesService {
    private entryRepository;
    private usersService;
    private roomsService;
    constructor(entryRepository: typeof Entry, usersService: UsersService, roomsService: RoomsService);
    create(createEntryDto: CreateEntryDto): Promise<Entry>;
    findAll(): Promise<Entry[]>;
    findOne(id: number): Promise<Entry>;
    update(id: number, updateEntryDto: UpdateEntryDto): Promise<void>;
    remove(id: number): Promise<void>;
}
