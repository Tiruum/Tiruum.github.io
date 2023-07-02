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
exports.WmEntriesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const wm_entry_entity_1 = require("./entities/wm-entry.entity");
const users_service_1 = require("../users/users.service");
const wms_service_1 = require("../wms/wms.service");
let WmEntriesService = class WmEntriesService {
    constructor(wmEntryRepository, usersService, wmsService) {
        this.wmEntryRepository = wmEntryRepository;
        this.usersService = usersService;
        this.wmsService = wmsService;
    }
    async create(createWmEntryDto) {
        const wmEntry = await this.wmEntryRepository.create(createWmEntryDto);
        console.log(createWmEntryDto);
        if (createWmEntryDto.userId != null) {
            const user = await this.usersService.getUserById(createWmEntryDto.userId);
            const wm = await this.wmsService.findByValue(createWmEntryDto.wmValue);
            if (user && wm) {
                wmEntry.$set('userInfo', user.id);
                wmEntry.userInfo = user;
                wmEntry.$set('wmInfo', wm.id);
                wmEntry.wmInfo = wm;
                return wmEntry;
            }
            else {
                throw new common_1.HttpException("Пользователя с таким ID не найдено", common_1.HttpStatus.NOT_FOUND);
            }
        }
    }
    async findAll() {
        const wmEntry = await this.wmEntryRepository.findAll({ include: { all: true } });
        return wmEntry;
    }
    async findById(id) {
        const wmEntry = await this.wmEntryRepository.findOne({ where: { id }, include: { all: true } });
        return wmEntry;
    }
    async update(id, updateWmEntryDto) {
        const wmEntry = await this.wmEntryRepository.update(Object.assign({}, updateWmEntryDto), { where: { id }, returning: true });
        return wmEntry[0][0];
    }
    async remove(id) {
        const wmEntry = await this.wmEntryRepository.destroy({ where: { id } });
        return wmEntry;
    }
};
WmEntriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(wm_entry_entity_1.WmEntry)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService,
        wms_service_1.WmsService])
], WmEntriesService);
exports.WmEntriesService = WmEntriesService;
//# sourceMappingURL=wm-entries.service.js.map