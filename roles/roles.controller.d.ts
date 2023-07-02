import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
export declare class RolesController {
    private roleService;
    constructor(roleService: RolesService);
    create(dto: CreateRoleDto): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
    getByValue(value: string): Promise<Role>;
    putById(dto: CreateRoleDto, value: string): Promise<[affectedCount: number, affectedRows: Role[]]>;
    deleteById(id: number): Promise<Number>;
}
