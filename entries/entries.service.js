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
exports.EntriesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const entry_entity_1 = require("./entities/entry.entity");
const users_service_1 = require("../users/users.service");
const rooms_service_1 = require("../rooms/rooms.service");
let EntriesService = class EntriesService {
    constructor(entryRepository, usersService, roomsService) {
        this.entryRepository = entryRepository;
        this.usersService = usersService;
        this.roomsService = roomsService;
    }
    async create(createEntryDto) {
        const entry = this.entryRepository.create(createEntryDto);
        const user = await this.usersService.getUserById(createEntryDto.userId);
        const room = await this.roomsService.findByValue(createEntryDto.roomValue);
        if (user && room) {
            (await entry).$set('userInfo', user.id);
            (await entry).userInfo = user;
            (await entry).$set('roomInfo', room.id);
            (await entry).roomInfo = room;
            return entry;
        }
        else {
            throw new common_1.HttpException("Такого пользователя или комнаты не найдено", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findAll() {
        const entries = await this.entryRepository.findAll({ include: { all: true } });
        return entries;
    }
    async findOne(id) {
        const entry = await this.entryRepository.findOne({ where: { id }, include: { all: true } });
        return entry;
    }
    async update(id, updateEntryDto) {
        const entry = await this.entryRepository.update(Object.assign({}, updateEntryDto), { where: { id }, returning: true });
    }
    async remove(id) {
        const entry = await this.entryRepository.destroy({ where: { id } });
    }
};
EntriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(entry_entity_1.Entry)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService,
        rooms_service_1.RoomsService])
], EntriesService);
exports.EntriesService = EntriesService;
//# sourceMappingURL=entries.service.js.map