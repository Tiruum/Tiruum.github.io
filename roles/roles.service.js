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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const roles_model_1 = require("./roles.model");
const sequelize_1 = require("@nestjs/sequelize");
let RolesService = class RolesService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async createRole(dto) {
        const role = await this.roleRepository.create(dto);
        return role;
    }
    async getAll() {
        const roles = await this.roleRepository.findAll();
        return roles;
    }
    async getByValue(value) {
        const role = await this.roleRepository.findOne({ where: { value } });
        return role;
    }
    async updateById(value, dto) {
        const role = await this.roleRepository.update(Object.assign({}, dto), { where: { value }, returning: true });
        return role;
    }
    async deleteById(id) {
        const role = await this.roleRepository.destroy({ where: { id } });
        return role;
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(roles_model_1.Role)),
    __metadata("design:paramtypes", [Object])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map