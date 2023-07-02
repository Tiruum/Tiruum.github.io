import { WmsService } from './wms.service';
import { CreateWmDto } from './dto/create-wm.dto';
import { UpdateWmDto } from './dto/update-wm.dto';
export declare class WmsController {
    private readonly wmsService;
    constructor(wmsService: WmsService);
    create(createWmDto: CreateWmDto): Promise<import("./entities/wm.entity").Wm>;
    findAll(): Promise<import("./entities/wm.entity").Wm[]>;
    findByValue(value: number): Promise<import("./entities/wm.entity").Wm>;
    update(value: string, updateWmDto: UpdateWmDto): Promise<import("./entities/wm.entity").Wm>;
    remove(value: string): Promise<number>;
}
