"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_model_1 = require("./users.model");
const sequelize_1 = require("@nestjs/sequelize");
const roles_service_1 = require("../roles/roles.service");
let UsersService = class UsersService {
    constructor(userRepository, roleService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
    }
    async createUser(dto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getByValue("user");
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }
    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true } });
        return users;
    }
    async getUserById(id) {
        const user = await this.userRepository.findOne({ where: { id }, include: { all: true } });
        return user;
    }
    async getUserByEmail(email) {
        const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
        return user;
    }
    async deleteUserById(id) {
        const user = await this.userRepository.destroy({ where: { id } });
        return user;
    }
    async changeRole(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getByValue(dto.value);
        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new common_1.HttpException("Пользователь или роль не найдены.", common_1.HttpStatus.NOT_FOUND);
    }
    async ban(dto) {
        const user = this.userRepository.findByPk(dto.userId);
        if (user && !(await user).banned) {
            (await user).banned = true;
            (await user).banReason = dto.banReason;
            (await user).save();
            return user;
        }
        else {
            throw new common_1.HttpException("Пользователь с таким ID не найден или уже забанен.", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async unban(dto) {
        const user = this.userRepository.findByPk(dto.userId);
        if (user && (await user).banned) {
            (await user).banned = false;
            (await user).banReason = null;
            (await user).save();
            return user;
        }
        else {
            throw new common_1.HttpException("Забаненного пользователя с таким ID не найдено.", common_1.HttpStatus.NOT_FOUND);
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map