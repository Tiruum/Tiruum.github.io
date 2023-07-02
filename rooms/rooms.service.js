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
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const room_entity_1 = require("./entities/room.entity");
const users_service_1 = require("../users/users.service");
let RoomsService = class RoomsService {
    constructor(roomRepository, userService) {
        this.roomRepository = roomRepository;
        this.userService = userService;
    }
    async create(createRoomDto) {
        const room = await this.roomRepository.create(createRoomDto);
        const user = await this.userService.getUserById(createRoomDto.responsibleId);
        await room.$set('responsible', user.id);
        room.responsible = user;
        return room;
    }
    async findAll() {
        const rooms = await this.roomRepository.findAll({ include: { all: true } });
        return rooms;
    }
    async findByValue(value) {
        const room = await this.roomRepository.findOne({ where: { value }, include: { all: true } });
        return room;
    }
    async findById(id) {
        const room = await this.roomRepository.findOne({ where: { id }, include: { all: true } });
        return room;
    }
    async update(value, updateRoomDto) {
        const room = await this.roomRepository.update(Object.assign({}, updateRoomDto), { where: { value }, returning: true });
        return room;
    }
    async remove(id) {
        const room = await this.roomRepository.destroy({ where: { id } });
        return room;
    }
};
RoomsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(room_entity_1.Room)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService])
], RoomsService);
exports.RoomsService = RoomsService;
//# sourceMappingURL=rooms.service.js.map