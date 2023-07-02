import { CreateWmDto } from './dto/create-wm.dto';
import { UpdateWmDto } from './dto/update-wm.dto';
import { Wm } from './entities/wm.entity';
export declare class WmsService {
    private wmRepository;
    constructor(wmRepository: typeof Wm);
    create(createWmDto: CreateWmDto): Promise<Wm>;
    findAll(): Promise<Wm[]>;
    findByValue(value: number): Promise<Wm>;
    update(value: number, updateWmDto: UpdateWmDto): Promise<Wm>;
    remove(value: number): Promise<number>;
}
