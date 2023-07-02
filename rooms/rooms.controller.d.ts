import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    create(createRoomDto: CreateRoomDto): Promise<import("./entities/room.entity").Room>;
    findAll(): Promise<import("./entities/room.entity").Room[]>;
    findByValue(value: string): Promise<import("./entities/room.entity").Room>;
    findById(id: number): Promise<import("./entities/room.entity").Room>;
    update(value: string, updateRoomDto: UpdateRoomDto): Promise<[affectedCount: number, affectedRows: import("./entities/room.entity").Room[]]>;
    remove(id: string): Promise<number>;
}
