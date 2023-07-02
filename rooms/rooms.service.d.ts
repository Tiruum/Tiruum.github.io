import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';
import { UsersService } from 'src/users/users.service';
export declare class RoomsService {
    private roomRepository;
    private userService;
    constructor(roomRepository: typeof Room, userService: UsersService);
    create(createRoomDto: CreateRoomDto): Promise<Room>;
    findAll(): Promise<Room[]>;
    findByValue(value: string): Promise<Room>;
    findById(id: number): Promise<Room>;
    update(value: string, updateRoomDto: UpdateRoomDto): Promise<[affectedCount: number, affectedRows: Room[]]>;
    remove(id: number): Promise<number>;
}
