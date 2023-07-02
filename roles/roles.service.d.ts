import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: typeof Role);
    createRole(dto: CreateRoleDto): Promise<Role>;
    getAll(): Promise<Role[]>;
    getByValue(value: string): Promise<Role>;
    updateById(value: string, dto: CreateRoleDto): Promise<[affectedCount: number, affectedRows: Role[]]>;
    deleteById(id: number): Promise<Number>;
}
